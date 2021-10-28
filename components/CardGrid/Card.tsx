export const Card = ({
	title,
	link,
	tags,
	children
}: {
	title: string;
	link?: string;
	tags?: string[];
	children: React.ReactNode;
}) => {
	const content = (
		<>
			<h2 className="text-blueGray-300 font-mono font-bold text-xl mb-4 group-hover:text-accent">
				{title}
			</h2>
			<p className="text-blueGray-400 group-hover:text-blueGray-200 flex-1">{children}</p>
			{tags && (
				<div className="mt-6 text-sm text-blueGray-500 group-hover:text-blueGray-400 font-mono">
					{tags.join(` · `)}
				</div>
			)}
		</>
	);
	if (link) {
		return (
			<a
				href={link}
				target="_blank"
				className="flex flex-col bg-blue-900 bg-opacity-[15%] hover:bg-opacity-25 group p-6 shadow-md"
			>
				{content}
			</a>
		);
	} else {
		return (
			<div className="flex flex-col bg-blue-900 bg-opacity-[15%] p-6 shadow-md">{content}</div>
		);
	}
};
