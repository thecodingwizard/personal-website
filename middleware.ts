import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
	matcher: '/:path*'
};

interface LinkData {
	target: string;
	creationTime: string;
}

async function kvGet(key: string): Promise<LinkData | null> {
	const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
	const CF_KV_NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID;
	const CF_API_TOKEN = process.env.CF_API_TOKEN;

	if (!CF_ACCOUNT_ID || !CF_KV_NAMESPACE_ID || !CF_API_TOKEN) {
		console.error('Cloudflare KV environment variables not configured');
		return null;
	}

	const response = await fetch(
		`https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${encodeURIComponent(key)}`,
		{
			headers: {
				Authorization: `Bearer ${CF_API_TOKEN}`
			}
		}
	);

	if (response.status === 404) {
		return null;
	}

	if (!response.ok) {
		console.error(`kvGet: ${response.status} ${response.statusText}`);
		return null;
	}

	const text = await response.text();
	try {
		return JSON.parse(text) as LinkData;
	} catch {
		return null;
	}
}

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
		const linkData = await kvGet(`link:${short_url}`);
		if (linkData?.target) {
			let url = null;
			try {
				url = new URL(linkData.target).toString();
			} catch (e) {
				return new NextResponse('Invalid Long URL: ' + linkData.target);
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
