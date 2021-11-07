/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

export default function Modal({
	show,
	setShow,
	children
}: {
	show: boolean;
	setShow: (b: boolean) => void;
	children: React.ReactNode;
}) {
	return (
		<Transition.Root show={show} as={Fragment}>
			<Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setShow}>
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
						<div className="inline-block align-bottom bg-blueGray-300 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
							<div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4 sm:pt-6 sm:pr-6">
								<button
									type="button"
									className="bg-blueGray-300 rounded-md text-blueGray-500 hover:text-blueGray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-600 focus:ring-offset-blueGray-300"
									onClick={() => setShow(false)}
								>
									<span className="sr-only">Close</span>
									<XIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							{children}
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
