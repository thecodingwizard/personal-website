const convertkitApiKey = process.env.CONVERTKIT_API_KEY;

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { name, email, division } = req.body;

		const divisionToTagID = {
			Bronze: 2733477,
			Gold: 2733479,
			Platinum: 2733480,
			Silver: 2733478
		};

		try {
			// make a fetch POST request to convertkit
			const resp = await fetch(`https://api.convertkit.com/v3/forms/2738987/subscribe`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					api_key: convertkitApiKey,
					email,
					name,
					tags: [divisionToTagID[division]]
				})
			});
			const data = await resp.json();
			if (!resp.ok) {
				throw data;
			}
			res.status(200).json(data);
		} catch (e) {
			console.error(e);
			res.status(500).json(e);
		}
	}
}
