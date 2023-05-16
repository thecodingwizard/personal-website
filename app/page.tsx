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

export default function Home() {
	return (
		<div>
			<main className="bg-slate-950">
				<div className="min-h-screen flex flex-col justify-center relative">
					<div className={`${containerClasses} z-10`}>
						<div
							className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
							aria-hidden="true"
						>
							<div
								className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]"
								style={{
									clipPath:
										'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
								}}
							/>
						</div>

						<SectionTitle big accentText="Hi there! I'm">
							Nathan Wang
						</SectionTitle>
						<div className="h-4 sm:h-0"></div>
						<div className={sectionBodyClasses}>
							<LinkToSection title="About Me" href="about">
								I love programming, especially competitive programming and web development. I also
								play a lot of board games and social deduction games like Secret Hitler!
							</LinkToSection>
							<LinkToSection title="School" href="school">
								I study computer science and (some) math at MIT.
							</LinkToSection>
							<LinkToSection title="Work Experience" href="experience">
								I used to teach competitive programming.
							</LinkToSection>
							<LinkToSection title="Projects" href="projects">
								I run the USACO Guide and the Competitive Programming Initiative.
							</LinkToSection>
							<LinkToSection title="Achievements" href="achievements">
								I'm a 4x USACO Finalist and a 5x AIME Qualifier.
							</LinkToSection>
						</div>
						<div className="h-6 md:h-8 xl:h-16"></div>
						<div className="font-mono uppercase text-slate-400 text-sm sm:text-base">
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

				<div className={containerClasses} id="school">
					<SectionTitle big accentText="02">
						School
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							I'm currently a student at MIT. I plan to double-major in computer science and
							mathematics.
						</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Technical Grad Classes:</h2>
						<ul className="list-disc ml-8 marker:text-slate-500 lg:space-y-0.5">
							<li>6.521 Advanced Algorithms</li>
							<li>6.390 Computer Vision</li>
						</ul>
						<div className="h-4"></div>
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Technical Undergrad Classes:
						</h2>
						<ul className="list-disc ml-8 marker:text-slate-500 lg:space-y-0.5">
							<li>18.600 Probability and Random Variables</li>
							<li>18.650 Fundamentals of Statistics</li>
							<li>6.390 Introduction to Machine Learning</li>
							<li>6.190 Introduction to Low-level Programming in C and Assembly</li>
							<li>6.191 Computation Structures</li>
						</ul>
					</div>
					<div className="h-8 lg:h-12"></div>
					<div className={sectionBodyClasses}>
						<p>
							In Spring 2023, I was an LA for{' '}
							<a href="https://designftw.mit.edu/" target="_blank" className={linkClasses}>
								6.S063 Design for the Web
							</a>
							. Outside of classes, I enjoy participating in{' '}
							<a
								href="https://notes.ekzhang.com/events/hsrg"
								target="_blank"
								className={linkClasses}
							>
								Harvard Systems Reading Group
							</a>
							,{' '}
							<a href="https://bridgeclub.mit.edu/" target="_blank" className={linkClasses}>
								Bridge Club
							</a>
							, and Poker Club, and I help run the Next Board Games club.
						</p>
					</div>
					<div className="h-4 lg:h-6"></div>
					<div className={sectionBodyClasses}>
						<p>
							Before coming to MIT, I was a student at Monta Vista High School, where I participated
							in a variety of clubs, including{' '}
							<a href="https://montavistamun.com/" target="_blank" className={linkClasses}>
								Model UN
							</a>
							,{' '}
							<a href="http://mvfbla.com/" target="_blank" className={linkClasses}>
								FBLA
							</a>
							,{' '}
							<a href="https://mvaiclub.github.io/" target="_blank" className={linkClasses}>
								AI Club
							</a>
							, and{' '}
							<a href="https://mvcpc.org/" target="_blank" className={linkClasses}>
								Competitive Programming Club
							</a>
							.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="experience">
					<SectionTitle big accentText="03">
						Work Experience
					</SectionTitle>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Software Engineering:</h2>
						<p>
							To view my software engineering work experience, please visit{' '}
							<a href="https://www.linkedin.com/in/nathan-r-wang/" className={fancyLinkClasses}>
								visit my Linkedin page
							</a>
							.
						</p>

						<div className="h-8 lg:h-12"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">USACO Coaching:</h2>
						<p>
							I've taught USACO Gold Advanced at Alphastar Academy in summer 2020 and 2021, offered
							private USACO tutoring lessons for ~2 years, and coached at USACO Camp 2023. Though I
							am not currently taking new students, please feel free to{' '}
							<a href="https://classes.thecodingwizard.me/" className={fancyLinkClasses}>
								sign up for my classes newsletter
							</a>{' '}
							for future class openings.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="projects">
					<SectionTitle big accentText="04">
						Projects
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>I'm always working on something new. Below are a few of my favorite projects!</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<ProjectsList />
				</div>

				<div className={`${containerClasses} overflow-hidden`} id="achievements">
					<SectionTitle big accentText="05">
						Achievements
					</SectionTitle>
					<Achievements />

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={0.2}
						stroke="currentColor"
						className="w-96 h-96 text-accent blur-md absolute right-0 inset-y-0 my-auto"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={0.2}
						stroke="currentColor"
						className="w-96 h-96 text-white/10 absolute right-0 inset-y-0 my-auto"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
						/>
					</svg>
				</div>

				<div className={`${containerClasses} overflow-hidden`} id="contact">
					<SectionTitle big accentText="06">
						Contact Me
					</SectionTitle>
					<div className="font-mono text-slate-400 sm:text-lg md:text-xl">
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

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={0.2}
						stroke="currentColor"
						className="w-96 h-96 text-accent blur-md absolute right-0 inset-y-0 my-auto"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={0.2}
						stroke="currentColor"
						className="w-96 h-96 text-white/10 absolute right-0 inset-y-0 my-auto"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
						/>
					</svg>
				</div>

				<div className="h-8 md:h-12 lg:h-16"></div>

				<div className={`${containerClasses} pb-6 md:pb-12 lg:pb-24`}>
					<div className="font-mono text-slate-400 text-xs md:text-sm lg:text-base">
						Copyright {new Date().getFullYear()} Nathan Wang.
						<br />
						This site is built with{' '}
						<a className={linkClasses} href="https://nextjs.org/" target="_blank">
							Next.js
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
		</div>
	);
}
