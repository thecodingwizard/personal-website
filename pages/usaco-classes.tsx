import Head from 'next/head';
import { CheckIcon } from '@heroicons/react/solid';
import { CheckIcon as CheckIconOutline } from '@heroicons/react/outline';
import ClassFeatures from 'components/USACOClasses/ClassFeatures';
import ClassPricing from 'components/USACOClasses/ClassPricing';
import WhyUSACO from 'components/USACOClasses/WhyUSACO';

const containerClasses =
	'py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-lg md:max-w-2xl lg:max-w-4xl w-full mx-auto';
const containerClassesNoYPadding =
	'px-6 md:px-12 lg:px-24 max-w-lg md:max-w-2xl lg:max-w-4xl w-full mx-auto';

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
					<div className="pt-12 lg:pt-16 xl:pt-24 2xl:pt-32 pb-32 lg:pb-52 px-6 md:px-12 lg:px-24 max-w-lg md:max-w-2xl lg:max-w-4xl w-full mx-auto relative">
						<h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
							Learn USACO and Kickstart Your Programming Career
						</h1>
						<ul className="mt-6 sm:mt-8 lg:mt-12 space-y-3 lg:space-y-5">
							{reasonsToTakeThisClass.map((text) => (
								<li key={text}>
									<CheckIcon
										className="absolute h-6 w-5 lg:hidden text-green-400"
										aria-hidden="true"
									/>
									<CheckIconOutline
										className="absolute h-6 w-6 hidden lg:block text-green-400"
										aria-hidden="true"
									/>
									<p className="ml-7 lg:ml-9 leading-6 text-blueGray-300 lg:text-xl lg:leading-6">
										{text}
									</p>
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
							d="M0,160L40,149.3C80,139,160,117,240,122.7C320,128,400,160,480,197.3C560,235,640,277,720,266.7C800,256,880,192,960,144C1040,96,1120,64,1200,64C1280,64,1360,96,1400,112L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
						></path>
					</svg>
				</div>
				<div className="relative pt-8 lg:pt-20 pb-32 md:pb-48 lg:pb-64">
					<div className="absolute inset-x-0 bottom-0 h-32 md:h-40 lg:h-64 bg-gradient-to-t from-blueGray-700 to-blueGray-900"></div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="absolute inset-x-0 bottom-0 text-blueGray-900 w-full h-24 lg:h-48"
						preserveAspectRatio="none"
					>
						<path
							fill="currentColor"
							fillOpacity="1"
							d="M0,224L30,218.7C60,213,120,203,180,181.3C240,160,300,128,360,133.3C420,139,480,181,540,197.3C600,213,660,203,720,181.3C780,160,840,128,900,144C960,160,1020,224,1080,213.3C1140,203,1200,117,1260,101.3C1320,85,1380,139,1410,165.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
						></path>
					</svg>
					<div
						className={`${containerClassesNoYPadding} text-blueGray-300 leading-relaxed sm:text-lg sm:leading-relaxed relative`}
					>
						<WhyUSACO />

						{/* <hr className="border-blueGray-700 my-12" /> */}
						<div className="h-16 sm:h-20"></div>

						<h2 className="font-bold text-2xl sm:text-3xl text-white">About the Instructor</h2>

						<p className="mt-4">
							Hi there! I'm Nathan Wang, a{' '}
							<b className="text-white font-medium">
								3x USACO Finalist (top 13 in the nation), 5x AIME qualifier,
							</b>{' '}
							and the instructor for this class.
						</p>

						<p className="mt-4">
							I've been programming for well over half my life, and I've done competitive
							programming for the past five years.
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
							Pursuing competitive programming has been immensely rewarding for me, and I want to
							help other students discover the wonderful world of competitive programming.
						</p>
					</div>
				</div>

				<div
					className={`px-6 lg:px-12 max-w-lg md:max-w-2xl lg:max-w-screen-xl w-full mx-auto py-12 md:py-16 lg:py-24 text-blueGray-300 leading-relaxed sm:text-lg sm:leading-relaxed`}
				>
					<h2 className="font-bold text-2xl sm:text-3xl text-white lg:text-center lg:text-4xl">
						Why Take This Course?
					</h2>

					<p className="mt-4 lg:text-lg lg:text-center lg:max-w-4xl lg:mx-auto lg:leading-relaxed">
						If you're looking to learn USACO faster and more effectively, this course can help.
						You'll get personalized feedback on your performance and coding style from an
						experienced USACO competitor.
					</p>

					<div className="h-8 lg:h-24"></div>

					<ClassFeatures />
				</div>

				<div className="relative pt-36 md:pt-48 lg:pt-72 pb-28 md:pb-48 lg:pb-72">
					<div className="absolute inset-x-0 top-0 h-48 lg:h-64 bg-gradient-to-b from-blueGray-700 to-blueGray-900"></div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="absolute inset-x-0 top-0 text-blueGray-900 w-full h-20 lg:h-48"
						preserveAspectRatio="none"
					>
						<path
							fill="currentColor"
							fillOpacity="1"
							d="M0,224L30,218.7C60,213,120,203,180,208C240,213,300,235,360,250.7C420,267,480,277,540,245.3C600,213,660,139,720,117.3C780,96,840,128,900,160C960,192,1020,224,1080,234.7C1140,245,1200,235,1260,213.3C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
						></path>
					</svg>

					<div className="absolute inset-x-0 bottom-0 h-28 lg:h-52 bg-gradient-to-t from-blueGray-700 to-blueGray-900"></div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="absolute inset-x-0 bottom-0 text-blueGray-900 w-full h-20 lg:h-48"
						preserveAspectRatio="none"
					>
						<path
							fill="currentColor"
							fillOpacity="1"
							d="M0,192L34.3,213.3C68.6,235,137,277,206,261.3C274.3,245,343,171,411,165.3C480,160,549,224,617,224C685.7,224,754,160,823,154.7C891.4,149,960,203,1029,197.3C1097.1,192,1166,128,1234,128C1302.9,128,1371,192,1406,224L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
						></path>
					</svg>

					<ClassPricing className="relative" />
				</div>

				<div
					className={`pt-12 pb-20 md:pt-24 md:pb-32 px-6 md:px-12 lg:px-24 max-w-lg md:max-w-2xl lg:max-w-3xl w-full mx-auto text-blueGray-300 leading-relaxed relative sm:text-center`}
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
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-700 hover:bg-fuchsia-600 md:py-4 md:text-lg md:px-10 transition"
						>
							Email Me
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default USACOClassesPage;
