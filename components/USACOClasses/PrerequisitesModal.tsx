/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { QuestionMarkCircleIcon, XIcon } from '@heroicons/react/outline';
import type { ClassInfo } from './ClassPricing';

export default function PrerequisitesModal({
	show,
	setShow,
	classInfo
}: {
	show: boolean;
	setShow: (b: boolean) => void;
	classInfo: ClassInfo;
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
						<div className="inline-block align-bottom bg-blueGray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
							<div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
								<button
									type="button"
									className="bg-blueGray-900 rounded-md text-blueGray-500 hover:text-blueGray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-700 focus:ring-offset-blueGray-900"
									onClick={() => setShow(false)}
								>
									<span className="sr-only">Close</span>
									<XIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="sm:flex sm:items-start">
								<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-fuchsia-700 bg-opacity-50 sm:mx-0 sm:h-10 sm:w-10">
									<QuestionMarkCircleIcon className="h-6 w-6 text-fuchsia-200" aria-hidden="true" />
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-4">
									<Dialog.Title
										as="h3"
										className="text-xl sm:leading-10 font-medium text-blueGray-100"
									>
										{classInfo.name}: Prerequisites
									</Dialog.Title>
									<div className="mt-4 text-blueGray-300">{classInfo.prerequisites}</div>
								</div>
							</div>
							<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
								<button
									type="button"
									className="mt-3 w-full inline-flex justify-center rounded-md border border-blueGray-700 shadow-sm px-4 py-2 bg-blueGray-800 text-base font-medium text-blueGray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blueGray-800 focus:ring-fuchsia-700 sm:mt-0 sm:w-auto sm:text-sm"
									onClick={() => setShow(false)}
								>
									Close
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
