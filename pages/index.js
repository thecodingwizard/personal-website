import React, { useEffect, useState } from "react";
import Head from 'next/head'
import classNames from "classnames";
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import Particles from "../components/Particles";

const descriptionStrings = [
  `Programmer`,
  `2x USACO Finalist.`,
  `Board Game Enthusiast`,
  `Web App Developer`,
  `4x AIME Qualifier`,
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(undefined);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div>
      <Head>
        <title>Nathan Wang (thecodingwizard)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col justify-center relative">
        {isMobile !== undefined ?
          <Particles
            canvasClassName="block"
            className={classNames("absolute inset-0 -z-10 bg-gradient-to-br from-blue-800 to-blue-900")}
            isMobile={isMobile} /> : null}
        <div className="py-8 px-6 md:px-12 lg:px-24 max-w-6xl w-full mx-auto">
          <span className="text-xl sm:text-2xl xl:text-4xl font-semibold text-accent">Hi! I'm</span>
          <div className="lg:h-4"/>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-white font-semibold lg:-ml-1 xl:-ml-1">Nathan Wang<span className="text-accent">.</span></h1>
          <div className="h-4 sm:h-6 md:h-8 xl:h-16" />
          <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-blue-100 xl:-ml-0.5">
            I'm a{' '}
            <Typed
              strings={descriptionStrings.map(s => `${s}^1000`)}
              typeSpeed={40}
              backSpeed={20}
              loop />
          </p>
          <div className="h-12 sm:h-16 lg:h-24 xl:h-36" />
          <div className="font-mono text-blue-300 sm:text-lg md:text-xl font-semibold">
            <a className="text-accent hover:underline" href="mailto:nathan.r.wang@gmail.com" target="_blank">Email</a> · <a className="text-accent hover:underline" href="https://github.com/thecodingwizard" target="_blank">Github</a> · <a className="text-accent hover:underline" href="https://www.linkedin.com/in/nathan-r-wang/" target="_blank">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  )
}
