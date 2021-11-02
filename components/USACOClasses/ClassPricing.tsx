/* This example requires Tailwind CSS v2.0+ */
import {
	CheckIcon,
	CalendarIcon,
	ClockIcon,
	QuestionMarkCircleIcon
} from '@heroicons/react/outline';

const tiers = [
	{
		name: 'Bronze Part I',
		href: '#',
		priceMonthly: 150,
		description:
			'For beginner programmers looking to get started with USACO and pass USACO Bronze.',
		classTime: 'Sunday 4-5pm PST',
		ohTime: 'Sunday 5-6pm PST',
		dates: '11/14/21 to 12/5/21 (4 classes)',
		// description: 'Basic programming experience in C++, Java, or Python required.',
		// Students should know arrays, basic string manipulation, functions, loops, etc.
		includedFeatures: [
			'Time Complexity & Rectangle Geometry',
			'Data Structures & Simulation',
			'Basic Complete Search',
			'Complete Search with Recursion'
		]
	},
	{
		name: 'Bronze Part II',
		href: '#',
		priceMonthly: 150,
		description:
			'For beginner programmers looking to get started with USACO and pass USACO Bronze.',
		classTime: 'Sunday 4-5pm PST',
		ohTime: 'Sunday 5-6pm PST',
		dates: '12/12/21 to 1/2/21 (4 classes)',
		includedFeatures: [
			'Sorting, Sets, and Maps',
			'Ad Hoc Problems',
			'Greedy Algorithms',
			'Introduction to Graphs'
		]
	}
];

export default function ClassPricing({ className = '' }) {
	return (
		<div className={className}>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="sm:flex sm:flex-col sm:align-center">
					<h2 className="font-bold text-3xl md:text-4xl text-white sm:text-center">
						Course Registration
					</h2>
					<p className="mt-5 text-blueGray-300 sm:text-center leading-relaxed sm:text-lg sm:max-w-4xl sm:mx-auto">
						Each course consists of four classes and covers half of one division. Classes are taught
						in C++ and Java, but Python users will be able to follow along and receive office hours
						help as well.
					</p>
				</div>
				<div className="mt-12 space-y-8 sm:space-y-0 sm:grid md:grid-cols-2 sm:gap-6 sm:max-w-lg md:max-w-4xl sm:mx-auto">
					{tiers.map((tier) => (
						<div
							key={tier.name}
							className="-mx-6 sm:mx-0 sm:rounded-lg bg-blueGray-200 shadow-sm flex flex-col"
						>
							<div className="p-6 bg-blueGray-100 rounded-t-lg">
								<h2 className="text-xl font-semibold text-gray-900">{tier.name}</h2>
								<p className="mt-4 text-gray-600">{tier.description}</p>
								<ul className="mt-8 font-medium text-gray-600 space-y-4">
									<li className="flex">
										<CalendarIcon className="h-6 w-6 text-blueGray-400 mr-3" />
										<p className="leading-6">{tier.dates}</p>
									</li>
									<li className="flex">
										<ClockIcon className="h-6 w-6 text-blueGray-400 mr-3" />
										<p className="leading-6">
											{tier.classTime} (Class) <br />
											{tier.ohTime} (Office Hours)
										</p>
									</li>
								</ul>
								<a
									href={tier.href}
									className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-3 font-medium text-white text-center hover:bg-gray-900 transition"
								>
									Register Now ($150)
								</a>
							</div>
							<div className="pt-6 pb-6 px-6 flex-1">
								<h3 className="text-sm font-medium text-blueGray-900 tracking-wide uppercase">
									Topics Covered
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{tier.includedFeatures.map((feature) => (
										<li key={feature} className="flex space-x-3">
											<CheckIcon
												className="flex-shrink-0 h-6 w-6 text-green-600"
												aria-hidden="true"
											/>
											<span className="font-medium text-blueGray-600">{feature}</span>
										</li>
									))}
								</ul>
							</div>
							<button className="py-6 bg-blueGray-200 w-full inline-flex items-center text-left font-medium rounded-b-lg px-6 border-t-2 border-blueGray-300 text-blueGray-600 group hover:text-black">
								<QuestionMarkCircleIcon className="h-6 w-6 text-blueGray-400 group-hover:text-blueGray-500 mr-3" />
								View Prerequisites
							</button>
						</div>
					))}
				</div>
			</div>

			<div className="px-6 md:px-12 lg:px-24">
				<div
					className={`max-w-lg md:max-w-2xl lg:max-w-4xl w-full mx-auto pt-12 md:pt-20 text-blueGray-300 leading-relaxed`}
				>
					<h2 className="font-bold text-2xl md:text-3xl text-white">
						Looking for a different course level?
					</h2>

					<p className="mt-4 sm:text-lg">
						Sign up for the mailing list! If there's sufficient interest, I may open up courses for
						different USACO levels.
					</p>
					<div className="rounded-md shadow mt-6">
						<a
							href="mailto:nathan.r.wang@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blueGray-800 hover:bg-blueGray-700 md:py-4 md:text-lg md:px-8"
						>
							Join Mailing List
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
