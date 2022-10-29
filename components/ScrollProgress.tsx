import classNames from 'classnames';

const Square = ({ children, active = false }) => {
	return (
		<div
			className={classNames(
				active ? 'text-white' : 'text-blueGray-500',
				'text-lg font-medium relative h-8 w-8 flex items-center justify-center'
			)}
		>
			<div
				className={classNames(
					'absolute inset-0 rotate-45 origin-center'
					// active && 'bg-fuchsia-500'
				)}
				style={{
					background:
						'conic-gradient(transparent 135deg, red 180deg,transparent 255deg),conic-gradient(transparent -45deg, red 0deg,transparent 75deg)'
					// transform: 'scaleX(8), scaleY(2)'
					// filter: "blur(8px)"
				}}
			>
				{/* {active && (
					<div className="h-full w-full relative bg-fuchsia-500"> */}
				{/* <div className="h-px w-full bg-gradient-to-r from-fuchsia-500/0 to-fuchsia-500/0 via-fuchsia-500 absolute inset-x-0 bottom-0"></div>
						<div className="h-px w-full bg-gradient-to-r from-fuchsia-500/0 to-fuchsia-500/0 via-fuchsia-500 absolute inset-x-0 top-0"></div> */}
				{/* <div className="h-px w-full bg-gradient-to-r from-fuchsia-800/30 to-fuchsia-500 absolute inset-x-0 bottom-0"></div>
						<div className="h-px w-full bg-gradient-to-l from-fuchsia-800/30 to-fuchsia-500 absolute inset-x-0 top-0"></div>
						<div className="h-[calc(100%-2px)] w-px bg-gradient-to-t from-fuchsia-800/30 to-fuchsia-500 absolute inset-y-0 left-0"></div>
						<div className="h-[calc(100%-2px)] w-px bg-gradient-to-b from-fuchsia-800/30 to-fuchsia-500 absolute bottom-0 right-0"></div> */}
				{/* </div>
				)} */}
			</div>
			<div className="absolute inset-0 rotate-45 origin-center bg-blueGray-900 border bg-clip-padding border-transparent"></div>
			<div className="relative">{children}</div>
		</div>
	);
};

export default function ScrollProgress() {
	return (
		<div className="fixed bottom-0 right-0 p-12 space-y-8 z-20">
			<Square active>1</Square>
			<Square>2</Square>
			<Square>3</Square>
			<Square>4</Square>
		</div>
	);
}
