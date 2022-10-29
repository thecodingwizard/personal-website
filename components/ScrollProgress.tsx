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
			>
				<div
					className="absolute inset-0"
					style={{
						// background:
						// 	'conic-gradient(transparent 135deg, red 180deg,transparent 255deg),conic-gradient(transparent -45deg, red 0deg, transparent 75deg)',
						backgroundImage: 'linear-gradient(165deg, red, purple)'
						// filter: 'blur(2px)'
					}}
				></div>
				<div
					className="absolute inset-0 opacity-50"
					style={{
						// background:
						// 	'conic-gradient(transparent 135deg, red 180deg,transparent 255deg),conic-gradient(transparent -45deg, red 0deg, transparent 75deg)',
						backgroundImage: 'linear-gradient(165deg, red, purple)',
						filter: 'blur(2px)'
					}}
				></div>
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
