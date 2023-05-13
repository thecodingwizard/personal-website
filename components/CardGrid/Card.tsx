import Link from 'next/link';
import AES from 'crypto-js/aes.js';
import Utf8 from 'crypto-js/enc-utf8.js';

const cardClasses = 'flex flex-col bg-blue-900 bg-opacity-[15%] p-4 sm:p-6 shadow-md';

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
			<h2 className="text-slate-300 font-mono font-bold text-lg sm:text-xl mb-2 sm:mb-4 group-hover:text-accent">
				{title}
			</h2>
			{children && (
				<p className="text-slate-400 text-sm sm:text-base group-hover:text-slate-200 flex-1">
					{children}
				</p>
			)}
			{tags && (
				<div className="mt-3 sm:mt-6 text-sm text-slate-500 group-hover:text-slate-400 font-mono">
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
			<button
				onClick={handleClick}
				className={`${cardClasses} hover:bg-opacity-25 group  text-left`}
			>
				{content}
			</button>
		);
	} else if (link && !encrypted) {
		if (link[0] === '/') {
			// internal link
			return (
				<Link href={link} className={`${cardClasses} hover:bg-opacity-25 group`}>
					{content}
				</Link>
			);
		}
		return (
			<a href={link} target="_blank" className={`${cardClasses} hover:bg-opacity-25 group`}>
				{content}
			</a>
		);
	} else {
		return <div className={cardClasses}>{content}</div>;
	}
};
