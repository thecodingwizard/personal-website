export const runtime = 'edge';

import { Metadata } from 'next';
import NewLinkForm from './NewLinkForm';

export const metadata: Metadata = {
	title: 'Link Shortener | Nathan Wang',
	robots: 'noindex'
};

export default function LinkShortenerPage() {
	return (
		<div className="px-6 py-24 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Link Shortener</h2>

				<NewLinkForm />
			</div>
		</div>
	);
}
