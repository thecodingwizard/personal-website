export const LinkToSection = ({ title, href, children }) => (
	<a
		href={`#${href}`}
		className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group relative"
	>
		<span className="group-hover:text-fuchsia-300 text-accent uppercase font-mono transition">
			{title}
		</span>
		<br />
		<p className="group-hover:text-slate-300 text-slate-400 transition">{children}</p>

		<span className="absolute w-px -inset-y-3 left-[-1rem] bg-gradient-to-b from-fuchsia-300/0 via-fuchsia-300/60 to-fuchsia-300/0 opacity-0 group-hover:opacity-100 transition"></span>
	</a>
);
