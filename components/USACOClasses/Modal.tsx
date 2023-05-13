/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

export default function Modal({
	show,
	setShow,
	children,
	hideCloseButton = false,
	maxWidth = 'sm:max-w-2xl',
	fullPageOnSmallScreens = false
}: {
	show: boolean;
	setShow: (b: boolean) => void;
	children: React.ReactNode;
	hideCloseButton?: boolean;
	maxWidth?: string;
	fullPageOnSmallScreens?: boolean;
}) {
	return (
		<Transition.Root show={show} as={Fragment}>
			<Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setShow}>
				<div
					className={classNames(
						'flex items-end justify-center min-h-screen text-center sm:block',
						!fullPageOnSmallScreens && 'pt-4 px-4 pb-20 sm:p-0'
					)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div
							className={classNames(
								'inline-block align-bottom bg-slate-200 px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6',
								maxWidth,
								fullPageOnSmallScreens && 'w-full',
								fullPageOnSmallScreens ? 'sm:rounded-lg' : 'rounded-lg'
							)}
						>
							<div
								className={classNames(
									!hideCloseButton && 'sm:block',
									!fullPageOnSmallScreens && 'hidden',
									fullPageOnSmallScreens && hideCloseButton && 'sm:hidden',
									'absolute top-0 right-0 pt-4 pr-4 sm:pt-6 sm:pr-6'
								)}
							>
								<button
									type="button"
									className="bg-slate-200 rounded-md text-slate-500 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-600 focus:ring-offset-slate-200"
									onClick={() => setShow(false)}
								>
									<span className="sr-only">Close</span>
									<XIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							{children}
							{fullPageOnSmallScreens && <div className="h-12 sm:hidden" />}
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
