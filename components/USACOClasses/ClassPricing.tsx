/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid';

const tiers = [
	{
		name: 'Bronze Part I',
		href: '#',
		priceMonthly: 150,
		description:
			'Basic programming experience in C++, Java, or Python required.',
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
		description: 'Assumes familiarity of topics covered in Bronze Part I.',
		includedFeatures: [
			'Sorting, Sets, and Maps',
			'Ad Hoc Problems',
			'Greedy Algorithms',
			'Introduction to Graphs'
		]
	}
];

export default function ClassPricing() {
	return (
		<div className="bg-blueGray-900">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="sm:flex sm:flex-col sm:align-center">
					<h2 className="font-bold text-2xl lg:text-3xl text-white sm:text-center">Course Levels</h2>
					<p className="mt-5 text-blueGray-300 sm:text-center leading-relaxed sm:text-lg">
						Looking for a different course level? Join the waiting list!
					</p>
				</div>
				<div className="mt-12 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:max-w-3xl sm:mx-auto">
					{tiers.map((tier) => (
						<div key={tier.name} className="bg-blueGray-200 rounded-lg shadow-sm">
							<div className="p-6 bg-blueGray-100 rounded-t-lg">
								<h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
								<p className="mt-4 text-sm text-gray-500">{tier.description}</p>
								<p className="mt-8">
									<span className="text-4xl font-extrabold text-gray-900">
										${tier.priceMonthly}
									</span>{' '}
								</p>
								<a
									href={tier.href}
									className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
								>
									Register For {tier.name}
								</a>
							</div>
							<div className="pt-6 pb-8 px-6">
								<h3 className="text-xs font-medium text-blueGray-900 tracking-wide uppercase">
									Topics Covered
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{tier.includedFeatures.map((feature) => (
										<li key={feature} className="flex space-x-3">
											<CheckIcon
												className="flex-shrink-0 h-5 w-5 text-green-600"
												aria-hidden="true"
											/>
											<span className="text-sm font-medium text-blueGray-600">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
