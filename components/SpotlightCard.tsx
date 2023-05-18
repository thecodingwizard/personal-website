import classNames from 'classnames';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

// Thanks Build UI Recipes!
export default function SpotlightCard({
	children,
	className = 'rounded-xl border border-white/10 bg-slate-900 shadow-2xl'
}) {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div
			// className="group relative max-w-md border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
			className={classNames('group relative', className)}
			onMouseMove={handleMouseMove}
		>
			<motion.div
				className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.075),
              transparent 80%
            )
          `
				}}
			/>
			{children}
		</div>
	);
}
