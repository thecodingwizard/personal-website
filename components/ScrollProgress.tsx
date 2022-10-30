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
					'absolute inset-0 rotate-45 origin-center transition',
					active ? 'opacity-100' : 'opacity-0'
				)}
			>
				<div className="absolute inset-0 scroll-progress-active"></div>
				<div className="absolute inset-0 opacity-60 scroll-progress-active blur-[2px]"></div>
			</div>
			<div className="absolute inset-0 rotate-45 origin-center bg-blueGray-900 border bg-clip-padding border-transparent"></div>
			<div className="relative">{children}</div>
		</div>
	);
};

export default function ScrollProgress() {
	return (
		<div className="fixed bottom-0 right-0 p-8 space-y-6 z-20">
			<Square active>1</Square>
			<Square>2</Square>
			<Square>3</Square>
			<Square>4</Square>
			<Square>5</Square>
			<Square>6</Square>
		</div>
	);
}
