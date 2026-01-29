'use server';
import { kvGet, kvSet } from '@/lib/cloudflare-kv';

export async function createLink(formData: FormData) {
	'use server';

	const long_url = formData.get('long_url') as string;
	const short_url = formData.get('short_url') as string;
	const force = formData.get('force');

	if (force !== 'yes') {
		const current_value = await kvGet(`link:${short_url}`);
		if (current_value) {
			return {
				success: false,
				message:
					'The short URL you\'re trying to create already exists, and currently points to "' +
					current_value.target +
					'".',
				short_url_already_exists: true
			};
		}
	}

	await kvSet(`link:${short_url}`, {
		target: long_url,
		creationTime: new Date().toISOString()
	});

	return {
		success: true,
		short_url
	};
}
