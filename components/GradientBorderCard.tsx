import { CSSProperties } from 'react';

// Thanks Build UI Recipes!
export default function GradientBorderCard({ children, className = 'p-8' }) {
	return (
		<div
			style={
				{
					'--slate-950': '2 6 23',
					'--accent': '232 121 249',
					'--blue': '29 78 216',

					'--bg-color': 'linear-gradient(rgb(var(--slate-950)), rgb(var(--slate-950)))',
					'--border-color': `linear-gradient(var(--angle),
            rgb(var(--accent) / 0.8) 0%,
            rgb(var(--accent) / 0.3) 33.33%,
            rgb(var(--accent) / 0.14) 66.67%,
            rgb(var(--blue) / 0.5) 100%)
          `
				} as CSSProperties
			}
			className={`w-full border ${className} [--angle:145deg]
        [border-image:var(--border-color)_1]`}
		>
			{children}
		</div>
	);
}
