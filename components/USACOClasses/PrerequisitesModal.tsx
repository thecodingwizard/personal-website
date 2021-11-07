/* This example requires Tailwind CSS v2.0+ */
import { Dialog } from '@headlessui/react';
import type { ClassInfo } from './ClassPricing';
import Modal from './Modal';

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
		<Modal show={show} setShow={setShow}>
			<div>
				<Dialog.Title as="h3" className="text-xl font-semibold text-blueGray-900">
					{classInfo?.name}: Prerequisites
				</Dialog.Title>
				<div className="mt-4 text-blueGray-900">{classInfo?.prerequisites}</div>
			</div>
			<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
				<button
					type="button"
					className="mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-blueGray-800 text-base font-medium text-blueGray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blueGray-300 focus:ring-fuchsia-600 sm:mt-0 sm:w-auto sm:text-sm"
					onClick={() => setShow(false)}
				>
					Close
				</button>
			</div>
		</Modal>
	);
}
