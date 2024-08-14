import { Card } from 'components/CardGrid/Card';
import { CardGrid } from 'components/CardGrid/CardGrid';

export const ProjectsList = () => (
	<CardGrid>
		<Card
			title="USACO Guide"
			link="https://github.com/cpinitiative/usaco-guide/"
			tags={['Gatsby', 'React', 'Tailwind', 'Firebase']}
		>
			The USACO Guide is a free collection of curated, high-quality competitive programming
			resources aimed to bring contestants from Bronze to Platinum and beyond.
		</Card>
		<Card
			title="Competitive Programming Initiative"
			link="https://joincpi.org/"
			tags={['Volunteering']}
		>
			I'm the founder of the Competitive Programming Initiative, a student-run nonprofit
			organization dedicated to promoting competitive programming amongst students.
		</Card>
		<Card
			title="Competitive Programming Solutions"
			link="https://github.com/thecodingwizard/competitive-programming/"
			tags={['Competitive Programming']}
		>
			This Github repository contains solutions to some of the 900+ competitive programming problems
			I've solved!
		</Card>
		<Card
			title="Realtime IDE"
			link="https://github.com/cpinitiative/ide"
			tags={['React', 'Firebase', 'CRDT']}
		>
			A realtime collaborative IDE with code execution and input/output, designed for competitive
			programming and USACO.
		</Card>
		<Card
			title="Serverless Online Judge"
			link="https://github.com/cpinitiative/online-judge-rust"
			tags={['AWS Lambda', 'Rust']}
		>
			A serverless code execution system built with AWS Lambda and Rust that supports C++, Java, and
			Python.
		</Card>
		<Card
			title="Personal Website"
			link="https://github.com/thecodingwizard/personal-website"
			tags={['React', 'Next.js', 'Tailwind']}
		>
			This site! Built with React, Next.js, and Tailwind CSS.
		</Card>
		<Card title="AP Physics C Practice" link="https://apc-practice.vercel.app/" tags={['Svelte']}>
			AP Physics C Mechanics & E&M practice questions, scraped from CollegeBoard.
		</Card>
		<Card title="Party Games" link="/games" tags={['Miscellaneous']}>
			A collection of my favorite party games.
		</Card>
	</CardGrid>
);
