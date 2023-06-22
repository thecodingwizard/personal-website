import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { kv } from '@vercel/kv';

export const config = {
	matcher: '/:path*'
};

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const isShortURL = request.nextUrl.hostname === 'tcw.sh';

	if ((!isShortURL && pathname === '/l') || (isShortURL && pathname === '/')) {
		const basicAuth = request.headers.get('authorization');
		const url = request.nextUrl;

		if (basicAuth) {
			const authValue = basicAuth.split(' ')[1];
			const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');

			if (user === 'root' && pwd === process.env.LINK_SHORTENER_PW) {
				return NextResponse.next();
			}
		}
		url.pathname = '/';

		return new NextResponse('401 Unauthorized', {
			headers: {
				'WWW-authenticate': 'Basic realm="Secure Area"'
			},
			status: 401
		});
	} else if ((isShortURL && pathname.match(/\/[a-zA-Z0-9-_]+\/?$/)) || pathname.startsWith('/l/')) {
		const short_url = isShortURL ? pathname.substring(1) : pathname.substring(3);
		const long_url = await kv.hget(`link:${short_url}`, 'target');
		if (long_url) {
			let url = null;
			try {
				url = new URL(long_url as string).toString();
			} catch (e) {
				return new NextResponse('Invalid Long URL: ' + long_url);
			}
			return new NextResponse('', {
				headers: {
					'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
					Pragma: 'no-cache',
					Expires: 'Mon, 01 Jan 1990 00:00:00 GMT',
					Location: url
				},
				status: 301
			});
		} else {
			return new NextResponse('404 Not Found', {
				status: 404
			});
		}
	}
}
