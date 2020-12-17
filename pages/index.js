import React, { useEffect, useState } from "react";
import Head from 'next/head'
import classNames from "classnames";
import Particles from "../components/Particles";

const Section = ({ title, children }) => (
  <div className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed">
    <span className="text-accent uppercase font-mono">{title}</span><br/>
    <p className="text-blueGray-400">{children}</p>
  </div>
  // <a href="#" className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group">
  //   <span className="group-hover:text-emerald-300 text-accent uppercase font-mono">{title}</span><br/>
  //   <p className="group-hover:text-blueGray-300 text-blueGray-400">{children}</p>
  // </a>
);

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
            className={classNames("absolute inset-0 -z-10 bg-blueGray-900")}
            isMobile={isMobile} /> : null}
        <div className="py-8 px-6 md:px-12 lg:px-24 max-w-7xl w-full mx-auto">
          <span className="text-xl sm:text-2xl font-semibold text-accent font-mono">Hi there! I'm</span>
          <div className="lg:h-4"/>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">Nathan Wang<span className="text-accent">.</span></h1>
          <div className="h-4 sm:h-6 md:h-8 xl:h-16" />
          <div className="text-blueGray-400 sm:text-lg lg:text-xl max-w-prose leading-relaxed space-y-4 sm:space-y-6 lg:space-y-8">
            <Section title="About Me">
              I love programming, especially competitive programming and web development.
              I also play a lot of board games and social deduction games like Secret Hitler!
            </Section>
            <Section title="Projects">
              I run the USACO Guide and the Competitive Programming Initiative.
            </Section>
            <Section title="Achievements">
              I'm a 2x USACO Finalist and a 4x AIME Qualifier.
            </Section>
            <Section title="School">
              I'm currently a student at Monta Vista High School, where I'm part of Model United Nations and Future Business Leaders of America.
            </Section>
          </div>
          <div className="h-4 sm:h-6 md:h-8 xl:h-16" />
          <div className="font-mono text-gray-400 sm:text-lg md:text-xl font-semibold">
            <a className="text-accent hover:underline" href="mailto:nathan.r.wang@gmail.com" target="_blank">Email</a> · <a className="text-accent hover:underline" href="https://github.com/thecodingwizard" target="_blank">Github</a> · <a className="text-accent hover:underline" href="https://www.linkedin.com/in/nathan-r-wang/" target="_blank">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  )
}
