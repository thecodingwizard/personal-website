/* This example requires Tailwind CSS v2.0+ */
import {
	UserGroupIcon,
	DocumentTextIcon,
	ChatIcon,
	LightningBoltIcon
} from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
		description: 'I provide links to text-based review resources for every class.',
		icon: LightningBoltIcon
	}
	// {
	// 	name: 'Quality Curriculum',
	// 	description:
	// 		'The curriculum has been repeatedly improved to ensure the most efficient learning experience.',
	// 	icon: DocumentTextIcon
	// }
];

export default function WhyThisCourse({ className = '' }) {
	const { inView: headerInView, ref: headerRef } = useInView({
		rootMargin: '0px 0px -5% 0px'
	});

	const { inView: featuresInView, ref: featuresRef } = useInView({
		rootMargin: '0px 0px -5% 0px'
	});

	return (
		<div className={className}>
			<motion.div
				initial="hidden"
				transition={{ duration: 0.3 }}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: 20 }
				}}
				animate={headerInView ? 'visible' : 'hidden'}
				className="sm:flex sm:flex-col sm:align-center"
				ref={headerRef}
			>
				<h2 className="font-bold text-2xl sm:text-3xl text-white lg:text-center lg:text-4xl">
					Why Take This Course?
				</h2>

				<p className="mt-4 lg:text-lg lg:text-center lg:max-w-4xl lg:mx-auto lg:leading-relaxed">
					If you're looking to learn USACO faster and more effectively, this course can help. You'll
					get personalized feedback on your performance and coding style from an experienced USACO
					competitor.
				</p>
			</motion.div>

			<div className="h-8 lg:h-24"></div>

			<motion.div
				initial="hidden"
				transition={{ duration: 0.3 }}
				variants={{
					visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
					hidden: { opacity: 0, y: 20, transition: { staggerChildren: 0.05 } }
				}}
				animate={featuresInView ? 'visible' : 'hidden'}
				ref={featuresRef}
			>
				<dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
					{features.map((feature) => (
						<motion.div
							key={feature.name}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: 20 }
							}}
						>
							<dt>
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-fuchsia-800 text-white">
									<feature.icon className="h-6 w-6" aria-hidden="true" />
								</div>
								<p className="mt-5 text-lg leading-6 font-medium text-slate-100">{feature.name}</p>
							</dt>
							<dd className="mt-2 text-base text-slate-300 leading-relaxed">
								{feature.description}
							</dd>
						</motion.div>
					))}
				</dl>
			</motion.div>
		</div>
	);
}
