/* This example requires Tailwind CSS v2.0+ */
import {
	UserGroupIcon,
	DocumentTextIcon,
	ChatIcon,
	LightningBoltIcon
} from '@heroicons/react/outline';

const features = [
	{
		name: 'Small Class Sizes (3-6 students)',
		description:
			'Classes are limited to 3-6 students, giving time for personalized attention for every student.',
		icon: UserGroupIcon
	},
	{
		name: 'Office Hours for 1-on-1 help',
		description:
			'I host office hours for an hour after every class, where students can ask for individual help.',
		icon: ChatIcon
	},
	{
		name: 'Supplemental Resources',
		description:
			'I provide links to text-based supplemental resources for every class, so students can easily review the material.',
		icon: LightningBoltIcon
	},
	{
		name: 'Quality Curriculum',
		description:
			'The curriculum has been repeatedly improved to ensure the most efficient learning experience.',
		icon: DocumentTextIcon
	}
];

export default function ClassFeatures({ className = '' }) {
	return (
		<div className={`bg-blueGray-900 ${className}`}>
			<div className="px-6 md:px-12 lg:px-24">
				<dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
					{features.map((feature) => (
						<div key={feature.name}>
							<dt>
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-fuchsia-800 text-white">
									<feature.icon className="h-6 w-6" aria-hidden="true" />
								</div>
								<p className="mt-5 text-lg leading-6 font-medium text-blueGray-100">
									{feature.name}
								</p>
							</dt>
							<dd className="mt-2 text-base text-blueGray-300 leading-relaxed">
								{feature.description}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
