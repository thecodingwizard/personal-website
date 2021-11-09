import { useState } from 'react';
import Link from 'next/link';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { availableClasses } from 'components/USACOClasses/ClassPricing';
import { CalendarIcon, ClockIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import PrerequisitesModal from 'components/USACOClasses/PrerequisitesModal';

export default function ClassRegistrationPage() {
	const [showPrereqs, setShowPrereqs] = useState(false);
	const [classLevel, setClassLevel] = useState(availableClasses[0]);

	const [studentFirstName, setStudentFirstName] = useState('');
	const [studentLastName, setStudentLastName] = useState('');
	const [studentEmailAddress, setStudentEmailAddress] = useState('');
	const [school, setSchool] = useState('');
	const [grade, setGrade] = useState('');
	const [parentFirstName, setParentFirstName] = useState('');
	const [parentLastName, setParentLastName] = useState('');
	const [parentEmailAddress, setParentEmailAddress] = useState('');
	const [joinMailingList, setJoinMailingList] = useState(true);

	return (
		<div className="bg-blueGray-900">
			<main className="pb-24 px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto pt-4">
					<Link href="/usaco-classes">
						<a className="text-blueGray-400 font-medium hover:text-fuchsia-400">
							<span aria-hidden="true">&larr; </span>Back to Classes Page
						</a>
					</Link>

					<h1 className="font-bold text-3xl mt-12 text-blueGray-200">
						Class Registration{classLevel && `: ${classLevel.name}`}
					</h1>

					<form>
						<div>
							<div className="pt-10">
								<RadioGroup value={classLevel} onChange={setClassLevel}>
									<RadioGroup.Label className="text-lg font-medium text-blueGray-100">
										Class Level
									</RadioGroup.Label>

									<div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
										{availableClasses.map((classInfo) => (
											<RadioGroup.Option
												key={classInfo.name}
												value={classInfo}
												className={({ checked, active }) =>
													classNames(
														checked ? 'border-transparent' : 'border-blueGray-600',
														active ? 'ring-2 ring-fuchsia-600' : '',
														'relative bg-blueGray-800 border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
													)
												}
											>
												{({ checked, active }) => (
													<>
														<div className="flex-1 flex">
															<div className="flex flex-col">
																<RadioGroup.Label
																	as="span"
																	className="block text-sm font-medium text-blueGray-100"
																>
																	{classInfo.name}
																</RadioGroup.Label>
																<RadioGroup.Description
																	as="span"
																	className="mt-1 flex items-center text-sm text-blueGray-400"
																>
																	{classInfo.description}
																</RadioGroup.Description>
																<RadioGroup.Description
																	as="span"
																	className="mt-6 text-sm font-medium text-blueGray-100"
																>
																	${classInfo.cost}
																</RadioGroup.Description>
															</div>
														</div>
														{checked ? (
															<CheckCircleIcon
																className="h-5 w-5 text-fuchsia-500"
																aria-hidden="true"
															/>
														) : null}
														<div
															className={classNames(
																active ? 'border' : 'border-2',
																checked ? 'border-fuchsia-600' : 'border-transparent',
																'absolute -inset-px rounded-lg pointer-events-none'
															)}
															aria-hidden="true"
														/>
													</>
												)}
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div>
							{classLevel && (
								<ul className="mt-8 font-medium text-blueGray-300 space-y-4">
									<li className="flex">
										<CalendarIcon className="h-6 w-6 text-blueGray-500 mr-3" />
										<p className="leading-6">{classLevel.dates}</p>
									</li>
									<li className="flex">
										<ClockIcon className="h-6 w-6 text-blueGray-500 mr-3" />
										<p className="leading-6">
											{classLevel.classTime} (Class) <br />
											{classLevel.ohTime} (Office Hours)
										</p>
									</li>
									<li className="flex items-center">
										<QuestionMarkCircleIcon className="h-6 w-6 text-blueGray-500 mr-3" />
										<button
											className="px-3 py-2 bg-blueGray-800 rounded text-blueGray-300 inline-flex items-center font-medium text-sm"
											onClick={() => setShowPrereqs(true)}
											type="button"
										>
											View Prerequisites
										</button>
									</li>
								</ul>
							)}
							<div className="mt-10 border-t border-blueGray-700 pt-10">
								<h2 className="text-lg font-medium text-blueGray-100">Student Information</h2>

								<div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-4">
									<div className="sm:col-span-3">
										<label
											htmlFor="student-first-name"
											className="block text-sm font-medium text-blueGray-200"
										>
											First name
										</label>
										<div className="mt-1">
											<input
												type="text"
												id="student-first-name"
												name="student-first-name"
												value={studentFirstName}
												onChange={(e) => setStudentFirstName(e.target.value)}
												className="block w-full bg-blueGray-800 border-blueGray-700 text-white rounded-md shadow-sm focus:ring-fuchsia-600 focus:border-fuchsia-600 sm:text-sm"
											/>
										</div>
									</div>

									<div className="sm:col-span-3">
										<label
											htmlFor="student-last-name"
											className="block text-sm font-medium text-blueGray-200"
										>
											Last name
										</label>
										<div className="mt-1">
											<input
												type="text"
												id="student-last-name"
												name="student-last-name"
												value={studentLastName}
												onChange={(e) => setStudentLastName(e.target.value)}
												className="block w-full bg-blueGray-800 border-blueGray-700 text-white rounded-md shadow-sm focus:ring-fuchsia-600 focus:border-fuchsia-600 sm:text-sm"
											/>
										</div>
									</div>

									<div className="sm:col-span-6">
										<label
											htmlFor="student-email"
											className="block text-sm font-medium text-blueGray-200"
										>
											Email Address
										</label>
										<div className="mt-1">
											<input
												type="email"
												name="student-email"
												id="student-email"
												value={studentEmailAddress}
												onChange={(e) => setStudentEmailAddress(e.target.value)}
												className="block w-full bg-blueGray-800 border-blueGray-700 text-white rounded-md shadow-sm focus:ring-fuchsia-600 focus:border-fuchsia-600 sm:text-sm"
											/>
										</div>
									</div>

									<div className="sm:col-span-4">
										<label htmlFor="school" className="block text-sm font-medium text-blueGray-200">
											School
										</label>
										<div className="mt-1">
											<input
												type="text"
												name="school"
												id="school"
												value={school}
												onChange={(e) => setSchool(e.target.value)}
												className="block w-full bg-blueGray-800 border-blueGray-700 text-white rounded-md shadow-sm focus:ring-fuchsia-600 focus:border-fuchsia-600 sm:text-sm"
											/>
										</div>
									</div>

									<div className="sm:col-span-2">
										<label htmlFor="grade" className="block text-sm font-medium text-blueGray-200">
											Grade (2021-2022)
										</label>
										<div className="mt-1">
											<input
												type="number"
												name="grade"
												id="grade"
												value={grade}
												onChange={(e) => setGrade(e.target.value)}
												className="block w-full bg-blueGray-800 border-blueGray-700 text-white rounded-md shadow-sm focus:ring-fuchsia-600 focus:border-fuchsia-600 sm:text-sm"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-10 border-t border-blueGray-700 pt-10">
								<h2 className="text-lg font-medium text-blueGray-100">Parent Information</h2>

								<div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
									<div>
										<label
											htmlFor="parent-first-name"
											className="block text-sm font-medium text-blueGray-200"
										>
											First name
										</label>
										<div className="mt-1">
											<input
												type="text"
												id="parent-first-name"
												name="parent-first-name"
												value={parentFirstName}
												onChange={(e) => setParentFirstName(e.target.value)}
												className="block w-full bg-blueGray-800 border-blueGray-700 text-white rounded-md shadow-sm focus:ring-fuchsia-600 focus:border-fuchsia-600 sm:text-sm"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="parent-last-name"
											className="block text-sm font-medium text-blueGray-200"
										>
											Last name
										</label>
										<div className="mt-1">
											<input
												type="text"
												id="parent-last-name"
												name="parent-last-name"
												value={parentLastName}
												onChange={(e) => setParentLastName(e.target.value)}
												className="block w-full bg-blueGray-800 border-blueGray-700 text-white rounded-md shadow-sm focus:ring-fuchsia-600 focus:border-fuchsia-600 sm:text-sm"
											/>
										</div>
									</div>

									<div className="sm:col-span-2">
										<label
											htmlFor="parent-email"
											className="block text-sm font-medium text-blueGray-200"
										>
											Email
										</label>
										<div className="mt-1">
											<input
												type="email"
												name="parent-email"
												id="parent-email"
												value={parentEmailAddress}
												onChange={(e) => setParentEmailAddress(e.target.value)}
												className="block w-full bg-blueGray-800 border-blueGray-700 text-white rounded-md shadow-sm focus:ring-fuchsia-600 focus:border-fuchsia-600 sm:text-sm"
											/>
										</div>
									</div>
									<div className="sm:col-span-2">
										<div className="flex items-start">
											<div className="h-5 flex items-center">
												<input
													id="join-mailing-list"
													name="join-mailing-list"
													type="checkbox"
													checked={joinMailingList}
													onChange={(e) => setJoinMailingList(e.target.checked)}
													className="focus:ring-fuchsia-600 focus:ring-offset-blueGray-900 bg-blueGray-800 h-4 w-4 text-fuchsia-600 border-blueGray-700 rounded"
												/>
											</div>
											<div className="ml-3 text-sm">
												<label
													htmlFor="join-mailing-list"
													className="font-medium text-blueGray-200"
												>
													Join mailing list
												</label>
												<p className="text-blueGray-400">Get notified about future classes.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-10 border-t border-blueGray-700 pt-10">
							<button
								type="submit"
								className="w-full bg-fuchsia-700 rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blueGray-900 focus:ring-fuchsia-600"
							>
								Continue to Payment
							</button>
						</div>
					</form>
				</div>
			</main>

			<footer
				aria-labelledby="footer-heading"
				className="bg-blueGray-900 border-t border-blueGray-700"
			>
				<h2 id="footer-heading" className="sr-only">
					Footer
				</h2>

				<div className="py-10 text-center">
					<p className="text-sm text-blueGray-400">&copy; 2021 Nathan Wang. All rights reserved.</p>
				</div>
			</footer>

			<PrerequisitesModal show={showPrereqs} setShow={setShowPrereqs} classInfo={classLevel} />
		</div>
	);
}
