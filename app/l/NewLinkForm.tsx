'use client';
import { FormEvent, useState, useTransition } from 'react';
import { createLink } from './actions';
import CheckCircleIcon from '@heroicons/react/solid/CheckCircleIcon';
import { XCircleIcon } from '@heroicons/react/solid';

export default function NewLinkForm() {
	const [pending, setPending] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	// todo: in the future, maybe look for useActionState or something instead of this sketchy code
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		createLinkWrapper(event.currentTarget);
	}

	const createLinkWrapper = async (form: HTMLFormElement, { force } = { force: false }) => {
		if (pending) return;

		const formData = new FormData(form);
		formData.set('force', force ? 'yes' : 'no');

		setPending(true);
		setData(null);
		setError(null);
		createLink(formData)
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => setPending(false));
	};

	function writeToClipboard(text) {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log('Text copied to clipboard');
			})
			.catch((error) => {
				console.error('Failed to copy text:', error);
			});
	}

	return (
		<form className="pt-8 sm:pt-16 text-left space-y-4 sm:space-y-8" onSubmit={handleSubmit}>
			<div className="flex flex-col">
				<label htmlFor="url" className="font-medium sm:text-lg text-slate-100 pb-2">
					Long URL
				</label>
				<input
					type="text"
					id="url"
					name="long_url"
					className="bg-slate-800 text-slate-100 rounded-md border-none focus:ring-0 focus:bg-slate-700 text-sm sm:py-2.5"
					autoFocus
				/>
			</div>
			<label className="block">
				<label htmlFor="url_short" className="block font-medium sm:text-lg text-slate-100 pb-2">
					Shortend URL
				</label>
				<div className="flex rounded-md shadow-sm bg-slate-800 focus-within:bg-slate-700">
					<span className="flex select-none items-center pl-3 text-slate-400 sm:text-sm">
						https://tcw.sh/
					</span>

					<input
						type="text"
						id="url_short"
						name="short_url"
						className="block w-full min-w-0 flex-1 rounded-none rounded-r-md py-1.5 pl-1 bg-transparent text-slate-100 border-none focus:ring-0 text-sm sm:py-2.5"
						autoFocus
					/>
				</div>
			</label>

			<button
				type="submit"
				disabled={pending}
				className="rounded-md text-slate-100 px-3.5 py-2 sm:px-6 sm:py-3 sm:text-lg font-medium bg-slate-800 hover:bg-slate-700"
			>
				{pending ? 'Loading...' : 'Shorten!'}
			</button>

			{data?.success && (
				<div className="rounded-md bg-green-400/10 p-4">
					<div className="flex">
						<div className="flex-shrink-0">
							<CheckCircleIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
						</div>
						<div className="ml-3">
							<h3 className="text-sm font-medium text-green-200">Link Created</h3>
							<div className="mt-2 text-sm text-green-300 [word-break:break-word]">
								<p>https://tcw.sh/{data.short_url}</p>
							</div>
							<div className="mt-4">
								<div className="-mx-2 -my-1.5 flex">
									<button
										type="button"
										onClick={() => writeToClipboard(`https://tcw.sh/${data.short_url}`)}
										className="rounded-md bg-transparent px-2 py-1.5 text-sm font-medium text-green-200 hover:bg-green-900/50 focus:outline-none"
									>
										Copy URL
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{(error || data?.success === false) && (
				<div className="rounded-md bg-red-400/10 p-4">
					<div className="flex">
						<div className="flex-shrink-0">
							<XCircleIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
						</div>
						<div className="ml-3">
							<h3 className="text-sm font-medium text-red-200">
								{error ? 'Unknown Error' : 'Error'}
							</h3>
							<div className="mt-2 text-sm text-red-300">
								<p className="[word-break:break-word]">{error?.message || data?.message}</p>
							</div>
							{data?.short_url_already_exists && (
								<div className="mt-4">
									<div className="-mx-2 -my-1.5 flex">
										<button
											type="button"
											onClick={(e) =>
												createLinkWrapper(e.currentTarget.closest('form'), { force: true })
											}
											className="rounded-md bg-transparent px-2 py-1.5 text-sm font-medium text-red-200 hover:bg-red-900/50 focus:outline-none"
										>
											Override Existing URL
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</form>
	);
}
