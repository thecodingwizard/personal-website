import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactMe() {
	const { inView, ref } = useInView({
		rootMargin: '0px 0px -5% 0px'
	});
	return (
		<motion.div
			initial="hidden"
			transition={{ duration: 0.3 }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 20 }
			}}
			animate={inView ? 'visible' : 'hidden'}
			className="sm:flex sm:flex-col sm:align-center"
			ref={ref}
		>
			<h2 className="font-bold text-2xl sm:text-3xl text-white">Still have questions?</h2>

			<p className="mt-4 sm:text-lg">
				Send me an email! I'm also happy to provide free consultations via Zoom to answer any
				questions you may have individually.
			</p>
			<div className="rounded-md shadow mt-6">
				<a
					href="mailto:nathan.r.wang@gmail.com"
					target="_blank"
					rel="noreferrer"
					className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-700 hover:bg-fuchsia-600 md:py-4 md:text-lg md:px-10 transition"
				>
					Email Me
				</a>
			</div>
		</motion.div>
	);
}
