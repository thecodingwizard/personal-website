import { sectionTitleBigClasses, sectionTitleClasses } from './styles';

export const SectionTitle = ({
	accentText,
	children,
	big = false
}: {
	accentText?: string;
	children: React.ReactNode;
	big?: boolean;
}) => (
	<>
		{accentText && <span className="text-xl xl:text-2xl text-accent font-mono">{accentText}</span>}
		<div className="lg:h-4"></div>
		<h1 className={big ? sectionTitleBigClasses : sectionTitleClasses}>
			{children}
			{big && <span className="text-accent">.</span>}
		</h1>
		<div className="h-6 md:h-8 lg:h-12 xl:h-16"></div>
	</>
);
