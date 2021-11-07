/* This example requires Tailwind CSS v2.0+ */
import { Dialog } from '@headlessui/react';
import { atom, useAtom } from 'jotai';
import Modal from './Modal';
import { RadioGroup } from '@headlessui/react';
import { FormEventHandler, useState } from 'react';
import classNames from 'classnames';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

export const showMailingListModalAtom = atom(false);

export default function MailingListModal() {
	const [show, setShow] = useAtom(showMailingListModalAtom);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [division, setDivision] = useState(null);
	const [state, setState] = useState<null | 'subscribing' | 'subscribed'>(null);

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		setState('subscribing');
		try {
			// make a fetch POST request
			const resp = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name,
					email,
					division
				})
			});
			const data = await resp.json();
			if (resp.ok) {
				setState('subscribed');
			} else {
				throw data;
			}
		} catch (e) {
			console.error(e);
			setState(null);
			alert(
				'Sorry, we ran into an unexpected error while trying to sign you up for the mailing list. Please email nathan.r.wang@gmail.com to be manually added to the mailing list!'
			);
		}
	};

	return (
		<Modal
			show={show}
			setShow={setShow}
			hideCloseButton
			maxWidth="sm:max-w-xl"
			fullPageOnSmallScreens
		>
			<div className="pt-3 sm:pt-6">
				<Dialog.Title
					as="h3"
					className="text-2xl sm:text-3xl font-bold text-blueGray-900 text-center"
				>
					Join the mailing list
				</Dialog.Title>
				<div className="mt-2 sm:mt-4 text-lg sm:text-xl text-blueGray-600 text-center">
					Subscribe to get notified for future classes.
				</div>
			</div>
			<div className="h-4 sm:h-8"></div>
			<AnimatePresence initial={false}>
				{state === 'subscribed' && (
					<motion.div
						className="rounded-md bg-green-100 border border-green-600"
						key="success"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 }
						}}
						// oops I don't know how to deal with the jumping content bug without this hacky height animation workaround
						transition={{ duration: 0.3, opacity: { delay: 0.3 } }}
					>
						<p className="font-medium text-green-800 text-center p-4">
							Success! Now check your email to confirm your subscription.
						</p>
					</motion.div>
				)}

				{state !== 'subscribed' && (
					<motion.form
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 }
						}}
						transition={{ duration: 0.3 }}
						onSubmit={handleSubmit}
						className="space-y-4"
					>
						<div>
							<div className="mt-1">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autoComplete="given-name"
									placeholder="First Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="py-3 px-4 block w-full shadow-sm focus:ring-fuchsia-500 focus:border-fuchsia-500 border-blueGray-300 rounded-md"
									required
								/>
							</div>
						</div>
						<div>
							<div className="mt-1">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="py-3 px-4 block w-full shadow-sm focus:ring-fuchsia-500 focus:border-fuchsia-500 border-blueGray-300 rounded-md"
									required
								/>
							</div>
						</div>
						<div className="py-2">
							<RadioGroup value={division} onChange={setDivision}>
								<RadioGroup.Label className="text-blueGray-800 font-medium text-lg">
									Current Division
								</RadioGroup.Label>
								<div className="space-y-2 mt-2">
									{[
										['Beginner / USACO Bronze', 'Bronze'],
										['USACO Silver', 'Silver'],
										['USACO Gold', 'Gold'],
										['USACO Platinum', 'Platinum']
									].map(([label, tag]) => (
										<RadioGroup.Option
											key={tag}
											value={tag}
											className="relative flex items-center focus:outline-none cursor-pointer text-lg"
										>
											{({ active, checked }) => (
												<>
													<span
														className={classNames(
															checked
																? 'bg-fuchsia-600 border-transparent'
																: 'bg-white border-blueGray-300',
															'h-5 w-5 rounded-full border flex items-center justify-center'
														)}
														aria-hidden="true"
													>
														<span className="rounded-full bg-white w-2 h-2" />
													</span>
													<RadioGroup.Label
														as="span"
														className={classNames(
															active ? 'font-medium' : 'text-blueGray-900',
															'ml-3'
														)}
													>
														{label}
													</RadioGroup.Label>
												</>
											)}
										</RadioGroup.Option>
									))}
								</div>
							</RadioGroup>
						</div>
						<div className="sm:pt-4">
							<button
								type="submit"
								className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white focus:outline-none ${
									state === 'subscribing'
										? 'bg-fuchsia-700'
										: 'bg-fuchsia-600 hover:bg-fuchsia-700 focus:bg-fuchsia-700'
								}`}
								disabled={state === 'subscribing'}
							>
								{state === 'subscribing' ? 'Subscribing...' : 'Subscribe'}
							</button>
						</div>
					</motion.form>
				)}
			</AnimatePresence>
		</Modal>
	);
}
