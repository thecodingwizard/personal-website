import Link from 'next/link';
import AES from 'crypto-js/aes.js';
import Utf8 from 'crypto-js/enc-utf8.js';

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
			<h2 className="text-blueGray-300 font-mono font-bold text-xl mb-4 group-hover:text-accent">
				{title}
			</h2>
			{children && (
				<p className="text-blueGray-400 group-hover:text-blueGray-200 flex-1">{children}</p>
			)}
			{tags && (
				<div className="mt-6 text-sm text-blueGray-500 group-hover:text-blueGray-400 font-mono">
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
				className="flex flex-col bg-blue-900 bg-opacity-[15%] hover:bg-opacity-25 group p-6 shadow-md text-left"
			>
				{content}
			</button>
		);
	} else if (link && !encrypted) {
		if (link[0] === '/') {
			// internal link
			return (
				<Link href={link}>
					<a className="flex flex-col bg-blue-900 bg-opacity-[15%] hover:bg-opacity-25 group p-6 shadow-md">
						{content}
					</a>
				</Link>
			);
		}
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
