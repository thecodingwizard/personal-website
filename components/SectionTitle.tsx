export const SectionTitle = ({ accentText, title }) => (
	<>
		<span className="text-xl xl:text-2xl text-accent font-mono">{accentText}</span>
		<div className="lg:h-4"></div>
		<h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">
			{title}
			<span className="text-accent">.</span>
		</h1>
		<div className="h-6 md:h-8 lg:h-12 xl:h-16"></div>
	</>
);
