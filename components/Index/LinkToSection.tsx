export const LinkToSection = ({ title, href, children }) => (
	<a href={`#${href}`} className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group">
		<span className="group-hover:text-fuchsia-300 text-accent uppercase font-mono">{title}</span>
		<br />
		<p className="group-hover:text-blueGray-300 text-blueGray-400">
			{children}
		</p>
	</a>
);
