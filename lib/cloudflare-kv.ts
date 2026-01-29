const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const CF_KV_NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID;
const CF_API_TOKEN = process.env.CF_API_TOKEN;

const KV_BASE_URL = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}`;

interface LinkData {
	target: string;
	creationTime: string;
}

export async function kvGet(key: string): Promise<LinkData | null> {
	if (!CF_ACCOUNT_ID || !CF_KV_NAMESPACE_ID || !CF_API_TOKEN) {
		throw new Error('Cloudflare KV environment variables not configured');
	}

	const response = await fetch(`${KV_BASE_URL}/values/${encodeURIComponent(key)}`, {
		headers: {
			Authorization: `Bearer ${CF_API_TOKEN}`
		}
	});

	if (response.status === 404) {
		return null;
	}

	if (!response.ok) {
		throw new Error(`kvGet: ${response.status} ${response.statusText}`);
	}

	const text = await response.text();
	try {
		return JSON.parse(text) as LinkData;
	} catch {
		return null;
	}
}

export async function kvSet(key: string, value: LinkData): Promise<void> {
	if (!CF_ACCOUNT_ID || !CF_KV_NAMESPACE_ID || !CF_API_TOKEN) {
		throw new Error('Cloudflare KV environment variables not configured');
	}

	const response = await fetch(`${KV_BASE_URL}/values/${encodeURIComponent(key)}`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${CF_API_TOKEN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(value)
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`kvSet: ${response.status} ${response.statusText} - ${errorText}`);
	}
}
