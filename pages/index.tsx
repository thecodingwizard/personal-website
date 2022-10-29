import Head from 'next/head';
import Link from 'next/link';
import { SectionTitle } from 'components/SectionTitle';
import { LinkToSection } from 'components/Index/LinkToSection';
import { ProjectsList } from 'components/Index/ProjectsList';
import { Achievements } from 'components/Index/Achievements';
import { CardGrid } from 'components/CardGrid/CardGrid';
import { Card } from 'components/CardGrid/Card';
import {
	containerClasses,
	fancyLinkClasses,
	linkClasses,
	sectionBodyClasses
} from 'components/styles';
import { ChevronRightIcon } from '@heroicons/react/solid';
import ScrollProgress from 'components/ScrollProgress';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Nathan Wang (thecodingwizard)</title>
			</Head>

			<main className="bg-blueGray-900">
				<div className="min-h-screen flex flex-col justify-center relative">
					<div className={`${containerClasses} z-10`}>
						<SectionTitle big accentText="Hi there! I'm">
							Nathan Wang
						</SectionTitle>
						<div className="h-4 sm:h-0"></div>
						<div className={sectionBodyClasses}>
							<LinkToSection title="About Me" href="about">
								I love programming, especially competitive programming and web development. I also
								play a lot of board games and social deduction games like Secret Hitler!
							</LinkToSection>
							<LinkToSection title="Projects" href="projects">
								I run the USACO Guide and the Competitive Programming Initiative.
							</LinkToSection>
							<LinkToSection title="Achievements" href="achievements">
								I'm a 4x USACO Finalist and a 5x AIME Qualifier.
							</LinkToSection>
							<LinkToSection title="Work Experience" href="experience">
								I enjoy teaching competitive programming!
							</LinkToSection>
							<LinkToSection title="School" href="school">
								I'm a computer science major at MIT with a side interest in business.
							</LinkToSection>
						</div>
						<div className="h-6 md:h-8 xl:h-16"></div>
						<div className="font-mono uppercase text-blueGray-400 text-sm sm:text-base">
							<a className={fancyLinkClasses} href="mailto:nrwang@mit.edu" target="_blank">
								Email
							</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="https://github.com/thecodingwizard"
								target="_blank"
							>
								Github
							</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="https://www.linkedin.com/in/nathan-r-wang/"
								target="_blank"
							>
								Linkedin
							</a>
						</div>
					</div>
				</div>

				<div className={containerClasses} id="about">
					<SectionTitle big accentText="01">
						About Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							Ever since I embarked on my programming journey as a young child, I've been entranced
							by the power and flexibility of code.
						</p>
						<p>
							Today, I'm an avid competitive programmer and web developer. Programming is my
							superpower: With it, what I can create is limited only by my imagination!
						</p>
						<p>
							Outside of programming, I play a lot of board games, especially social deduction games
							(my personal favorite is Secret Hitler). I also enjoy discussing politics and
							government!
						</p>
						<p>
							I strive to bring energy, technical knowledge, and a strong desire to learn with me
							wherever I go.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="projects">
					<SectionTitle big accentText="02">
						Projects
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>I'm always working on something new. Below are a few of my favorite projects!</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<ProjectsList />
				</div>

				<div className={containerClasses} id="achievements">
					<SectionTitle big accentText="03">
						Achievements
					</SectionTitle>
					<Achievements />
				</div>

				<div className={containerClasses} id="experience">
					<SectionTitle big accentText="04">
						Work Experience
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							I've taught USACO Gold Advanced at Alphastar Academy in summer 2020 and 2021, and
							offered private USACO tutoring lessons for ~2 years. Though I am not currently taking
							new students, please feel free to{' '}
							<a href="https://classes.thecodingwizard.me/" className={fancyLinkClasses}>
								sign up for my classes newsletter
							</a>{' '}
							for future class openings.
						</p>
						<p>
							To view my software engineering work experience, please visit{' '}
							<a href="https://www.linkedin.com/in/nathan-r-wang/" className={fancyLinkClasses}>
								visit my Linkedin page
							</a>
							.
						</p>
						<a
							href="https://www.linkedin.com/in/nathan-r-wang/"
							className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blueGray-800 hover:bg-blueGray-700 md:py-4 md:text-lg md:px-8 transition"
						>
							View my Linkedin profile
							<ChevronRightIcon className="ml-3 -mr-1 md:-mr-3 h-5 w-5" aria-hidden="true" />
						</a>
					</div>
				</div>

				<div className={containerClasses} id="school">
					<SectionTitle big accentText="05">
						School
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							I'm currently a student at MIT studying computer science with a side interest in
							business. Relevant classes include{' '}
							<a href="https://6.5210.csail.mit.edu/" target="_blank" className={linkClasses}>
								6.5210 Advanced Algorithms
							</a>{' '}
							and 18.600 Probability and Random Variables.
						</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<div className={sectionBodyClasses}>
						<p>
							Before coming to MIT, I was a student at Monta Vista High School, where I participated
							in a variety of clubs.
						</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<CardGrid>
						<Card title="Model UN" link="https://montavistamun.com/">
							In Model United Nations, members learn about teamwork, negotiation, and diplomacy as
							we simulate the real United Nations!
						</Card>
						<Card title="FBLA" link="http://mvfbla.com/">
							In Future Business Leaders of America, I learn more about how to run a business and
							become a successful entrepreneur!
						</Card>
						<Card title="AI Club" link="https://mvaiclub.github.io/">
							Monta Vista AI Club teaches its members about artificial intelligence topics including
							machine learning, deep learning, and various applications of AI.
						</Card>
						<Card title="Competitive Programming Club" link="https://mvcpc.org/">
							Monta Vista Competitive Programming Club prepares members for competitive programming
							competitions like the USA Computing Olympiad.
						</Card>
					</CardGrid>
				</div>

				<div className={containerClasses} id="contact">
					<SectionTitle big accentText="06">
						Contact Me
					</SectionTitle>
					<div className="font-mono text-blueGray-400 sm:text-lg md:text-xl">
						<a className={linkClasses} href="mailto:nrwang@mit.edu" target="_blank">
							Email
						</a>{' '}
						·{' '}
						<a className={linkClasses} href="https://github.com/thecodingwizard" target="_blank">
							Github
						</a>{' '}
						·{' '}
						<a
							className={linkClasses}
							href="https://www.linkedin.com/in/nathan-r-wang/"
							target="_blank"
						>
							Linkedin
						</a>
					</div>
				</div>

				<div className="h-8 md:h-12 lg:h-16"></div>

				<div className={`${containerClasses} pb-6 md:pb-12 lg:pb-24`}>
					<div className="font-mono text-blueGray-400 text-xs md:text-sm lg:text-base">
						Copyright {new Date().getFullYear()} Nathan Wang.
						<br />
						This site is built with{' '}
						<a className={linkClasses} href="https://nextjs.org/" target="_blank">
							Next.js 12
						</a>{' '}
						and{' '}
						<a className={linkClasses} href="https://tailwindcss.com/" target="_blank">
							Tailwind CSS
						</a>
						. View the source code on{' '}
						<a
							className={linkClasses}
							href="https://github.com/thecodingwizard/personal-website"
							target="_blank"
						>
							Github
						</a>
						.
					</div>
				</div>
			</main>

			<ScrollProgress />
		</div>
	);
}
