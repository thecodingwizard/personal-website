'use server';
import { kv } from '@vercel/kv';

export async function createLink(formData: FormData) {
	'use server';

	const long_url = formData.get('long_url');
	const short_url = formData.get('short_url');
	const force = formData.get('force');

	if (force !== 'yes') {
		const current_value = await kv.hgetall(`link:${short_url}`);
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

	await kv.hset(`link:${short_url}`, {
		target: long_url,
		creationTime: new Date()
	});

	return {
		success: true,
		short_url
	};
}
