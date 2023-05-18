'use client';

import Link from 'next/link';
import AES from 'crypto-js/aes.js';
import Utf8 from 'crypto-js/enc-utf8.js';
import SpotlightCard from 'components/SpotlightCard';
import GradientBorderCard from 'components/GradientBorderCard';

const cardContainerClasses = 'shadow-md shadow-2xl flex flex-col';
const cardClasses = 'flex flex-col p-4 sm:p-6 bg-slate-900 flex-1 border border-white/10';

export const Card = ({
	title,
	link,
	tags,
	encrypted = false,
	children
}: {
	title: string;
	link?: string;
	tags?: string[];
	children?: React.ReactNode;
	encrypted?: boolean;
}) => {
	const content = (
		<>
			<h2 className="text-slate-300 font-mono font-bold text-lg sm:text-xl mb-2 sm:mb-4 group-hover:text-accent transition duration-300">
				{title}
			</h2>
			{children && (
				<p className="text-slate-400 text-sm sm:text-base group-hover:text-slate-200 flex-1 transition duration-300">
					{children}
				</p>
			)}
			{tags && (
				<div className="mt-3 sm:mt-6 text-sm text-slate-500 group-hover:text-slate-400 font-mono transition duration-300">
					{tags.join(` · `)}
				</div>
			)}
		</>
	);
	if (link && encrypted) {
		const handleClick = () => {
			const password = prompt('Enter link password:');
			const decrypted = AES.decrypt(link, password).toString(Utf8);
			if (decrypted) {
				window.location.href = decrypted;
			} else {
				alert('Incorrect password');
			}
		};
		return (
			<button onClick={handleClick} className={`${cardContainerClasses} text-left`}>
				<SpotlightCard className={cardClasses}>{content}</SpotlightCard>
			</button>
		);
	} else if (link && !encrypted) {
		if (link[0] === '/') {
			// internal link
			return (
				<Link href={link} className={cardContainerClasses}>
					<SpotlightCard className={cardClasses}>{content}</SpotlightCard>
				</Link>
			);
		}
		return (
			<a href={link} target="_blank" className={cardContainerClasses}>
				<SpotlightCard className={cardClasses}>{content}</SpotlightCard>{' '}
			</a>
		);
	} else {
		return <GradientBorderCard className="p-4 sm:p-6 flex flex-col">{content}</GradientBorderCard>;
	}
};
