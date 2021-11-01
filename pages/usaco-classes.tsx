import Head from 'next/head';
import { CheckIcon } from '@heroicons/react/solid';
import { CheckIcon as CheckIconOutline } from "@heroicons/react/outline";
import ClassFeatures from 'components/USACOClasses/ClassFeatures';
import ClassPricing from 'components/USACOClasses/ClassPricing';

const containerClasses = "py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-lg md:max-w-2xl lg:max-w-4xl w-full mx-auto";
const containerClassesNoYPadding = "px-6 md:px-12 lg:px-24 max-w-lg md:max-w-2xl lg:max-w-4xl w-full mx-auto";

const reasonsToTakeThisClass = [
	'3x USACO Finalist Instructor',
	'Small Class Sizes (3-6 students)',
	'1-on-1 help during office hours'
];

const RegisterNowButton = ({ className = '' }: { className?: string }) => (
	<div className={`rounded-md shadow ${className}`}>
		<a
			href="#"
			className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-700 hover:bg-fuchsia-600 md:py-4 md:text-lg md:px-10"
		>
			Register Now
		</a>
	</div>
);

const USACOClassesPage = () => {
	return (
		<div>
			<Head>
				<title>USACO Classes | Nathan Wang</title>
			</Head>
			<div className="bg-blueGray-900 min-h-screen">
				<div className="relative">
					<div className="bg-gradient-to-t absolute inset-x-0 bottom-0 top-1/2 from-blueGray-700 to-blueGray-900" />
					<div className="pt-12 lg:pt-16 xl:pt-24 2xl:pt-32 pb-32 lg:pb-60 px-6 md:px-12 lg:px-24 max-w-lg md:max-w-2xl lg:max-w-4xl w-full mx-auto relative">
						<h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
							Learn USACO and Kickstart Your Programming Career
						</h1>
						<ul className="mt-6 sm:mt-8 lg:mt-12 space-y-3 lg:space-y-5">
							{reasonsToTakeThisClass.map((text) => (
								<li key={text}>
                  <CheckIcon className="absolute h-6 w-5 lg:hidden text-green-400" aria-hidden="true" />
									<CheckIconOutline className="absolute h-6 w-6 hidden lg:block text-green-400" aria-hidden="true" />
									<p className="ml-7 lg:ml-9 leading-6 text-blueGray-300 lg:text-xl lg:leading-6">{text}</p>
								</li>
							))}
						</ul>
						<RegisterNowButton className="mt-6 sm:mt-8 lg:mt-12" />
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="absolute inset-x-0 bottom-0 text-blueGray-900 w-full h-24 lg:h-48"
						preserveAspectRatio="none"
					>
						<path
							fill="currentColor"
							fillOpacity="1"
							d="M0,32L48,53.3C96,75,192,117,288,149.3C384,181,480,203,576,197.3C672,192,768,160,864,149.3C960,139,1056,149,1152,154.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
				</div>
				<div className={`${containerClassesNoYPadding} pt-8 text-blueGray-300 leading-relaxed sm:text-lg sm:leading-relaxed`}>
					<p>
						If you or your child is interested in studying computer science, USACO is the{' '}
						<b className="text-white font-medium">best extracurricular activity</b> to pursue. Why?
					</p>

					<p className="mt-12 text-white font-medium">
						First, <span className="text-accent">college applications</span>. USACO provides a major
						boost in college admissions.
					</p>
					<ul className="mt-4 space-y-3">
						{[
							'Over 75% of USACO Finalists go to MIT, Stanford, or Harvard',
							'Platinum is the top ~300 in the nation',
							'Gold is the top ~750 in the nation'
						].map((text) => (
							<li key={text}>
								<CheckIcon className="absolute h-6 w-5 text-green-400" aria-hidden="true" />
								<p className="ml-7 leading-6 text-blueGray-300">{text}</p>
							</li>
						))}
					</ul>

					<p className="mt-4">
						Furthermore, <i>you only need to qualify once</i> for a certain division, and you'll
						never be demoted to a lower division. Once you make USACO Gold, for example, you're
						forever in USACO Gold, even if you stop competing in USACO. This is different from math
						olympiads, where you must constantly practice to make AIME every year.
					</p>

					<p className="mt-12 text-white font-medium">
						Second, <span className="text-accent">career growth</span>. USACO prepares you for
						challenging technical programming interviews you'll encounter later in life.
					</p>

					<p className="mt-4">
						The algorithms taught in USACO are the same ones that are tested in programming
						interviews. By doing USACO, you are preparing yourself to ace these interviews.
					</p>

					<p className="mt-4">
						Additionally, criticial thinking and code debugging skills from USACO are applicable in
						the programming workforce.
					</p>

					<p className="mt-12 text-white font-medium">
						In short, doing USACO will set you up to have a successful programming career!
					</p>

					<hr className="border-blueGray-700 my-12" />

					<h2 className="font-bold text-2xl sm:text-3xl text-white">About the Instructor</h2>

					<p className="mt-4">
						Hi there! I'm Nathan Wang, a{' '}
						<b className="text-white font-medium">
							3x USACO Finalist (top 13 in the nation), 5x AIME qualifier,
						</b>{' '}
						and the instructor for this class.
					</p>

					<p className="mt-4">
						I've been programming for well over half my life, and I've done competitive programming
						for the past five years.
					</p>

					<p className="mt-4">
						I've taught competitive programming at AlphaStar for two years, and have been doing
						private tutoring for over a year.
					</p>

					<p className="mt-4">
						I'm also the cofounder of the{' '}
						<a href="https://usaco.guide/" target="_blank" className="underline" rel="noreferrer">
							USACO Guide
						</a>{' '}
						and the{' '}
						<a href="https://joincpi.org/" target="_blank" className="underline" rel="noreferrer">
							Competitive Programming Initiative
						</a>
						; these competitive programming resources have been used by well over 20,000 students!
					</p>

					<p className="mt-4">
						Pursuing competitive programming has been immensely rewarding for me, and I want to help
						other students discover the wonderful world of competitive programming.
					</p>

					<hr className="border-blueGray-700 my-12" />

					<h2 className="font-bold text-2xl sm:text-3xl text-white">About the Course</h2>

					<p className="mt-4">
						Each course consists of four classes and covers half of one division. Classes are taught
						in C++ and Java, but Python users will be able to follow along and receive office hours
						help as well.
					</p>
				</div>

				<div className="h-8"></div>

				<ClassFeatures className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto" />

        <div className="md:px-12 lg:px-24 max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
				<hr className="border-blueGray-700 my-12 " />
        </div>

				<ClassPricing />

        <div className="h-16 sm:h-20"></div>

				<div
					className={`${containerClasses} text-blueGray-300 leading-relaxed`}
					style={{ paddingTop: '0' }}
				>
					<h2 className="font-bold text-2xl sm:text-3xl text-white">Still have questions?</h2>

					<p className="mt-4 sm:text-lg">
						Send me an email! I'm also happy to provide free consultations via Zoom to answer any
						questions you may have individually.
					</p>
					<div className="rounded-md shadow mt-6">
						<a
							href="mailto:nathan.r.wang@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-700 hover:bg-fuchsia-600 md:py-4 md:text-lg md:px-10"
						>
							Email Me
						</a>
					</div>
				</div>

        <div className="sm:h-12"></div>
			</div>
		</div>
	);
};

export default USACOClassesPage;
