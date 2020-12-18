import React, { useEffect, useState } from "react";
import Head from 'next/head'
import classNames from "classnames";
import Particles from "../components/Particles";

const LinkToSection = ({ title, href, children }) => (
  <a href={`#${href}`} className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group">
    <span className="group-hover:text-fuchsia-300 text-accent uppercase font-mono">{title}</span><br/>
    <p className="group-hover:text-blueGray-300 text-blueGray-400">{children}</p>
  </a>
);

const containerClasses = "py-8 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto";

const SectionTitle = ({ accentText, title }) => (
  <>
    <span className="text-xl xl:text-2xl text-accent font-mono">{accentText}</span>
    <div className="lg:h-4"/>
    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">{title}<span className="text-accent">.</span></h1>
    <div className="h-6 md:h-8 lg:h-12 xl:h-16" />
  </>
);

const LinkCard = ({ title, link, children }) => (
  <div className="max-w-sm w-full mr-6 mb-6 lg:mr-12 lg:mb-12">
    <a href={link} target="_blank" className="block border border-blueGray-800 hover:border-accent hover:bg-blueGray-800 group p-6">
      <h2 className="text-accent font-mono text-xl mb-4 group-hover:text-fuchsia-200">{title}</h2>
      <p className="text-blueGray-400 group-hover:text-blueGray-200">{children}</p>
    </a>
  </div>
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(undefined);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="bg-blueGray-900">
      <Head>
        <title>Nathan Wang (thecodingwizard)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col justify-center relative">
        {isMobile !== undefined ?
          <Particles
            canvasClassName="block bg-blueGray-900"
            className={classNames("absolute inset-0")}
            isMobile={isMobile} /> : null}
        <div className={classNames(containerClasses, "z-10")}>
          <SectionTitle accentText="Hi there! I'm" title="Nathan Wang" />
          <div className="text-blueGray-400 sm:text-lg lg:text-xl max-w-prose leading-relaxed space-y-4 sm:space-y-6 lg:space-y-8">
            <LinkToSection title="About Me" href="about">
              I love programming, especially competitive programming and web development.
              I also play a lot of board games and social deduction games like Secret Hitler!
            </LinkToSection>
            <LinkToSection title="Projects" href="projects">
              I run the USACO Guide and the Competitive Programming Initiative.
            </LinkToSection>
            <LinkToSection title="Achievements" href="achievements">
              I'm a 2x USACO Finalist and a 4x AIME Qualifier.
            </LinkToSection>
            <LinkToSection title="School" href="school">
              I'm currently a student at Monta Vista High School, where I'm part of Model United Nations and Future Business Leaders of America.
            </LinkToSection>
          </div>
          <div className="h-6 md:h-8 xl:h-16" />
          <div className="font-mono text-blueGray-400 sm:text-lg md:text-xl">
            <a className="text-blueGray-400 hover:text-accent border-b border-blueGray-400 hover:border-accent" href="mailto:nathan.r.wang@gmail.com" target="_blank">Email</a> · <a className="text-blueGray-400 hover:text-accent border-b border-blueGray-400 hover:border-accent" href="https://github.com/thecodingwizard" target="_blank">Github</a> · <a className="text-blueGray-400 hover:text-accent border-b border-blueGray-400 hover:border-accent" href="https://www.linkedin.com/in/nathan-r-wang/" target="_blank">Linkedin</a>
          </div>
        </div>
      </div>

      <div className={containerClasses} id="about">
        <SectionTitle accentText="01" title="About Me" />
        <div className="text-blueGray-400 sm:text-lg lg:text-xl max-w-prose leading-relaxed space-y-4 sm:space-y-6 lg:space-y-8">
          <p>
            I'm an avid competitive programmer and web developer. Programming is my superpower: With it, what I can create is limited only by my imagination!
          </p>
          <p>
            Outside of programming, I play a lot of board games, especially social deduction games (my personal favorite is Secret Hitler). I also enjoy discussing politics and government!
          </p>
          <p>
            I bring energy, technical knowledge, and a desire to learn into my environment.
          </p>
        </div>
      </div>

      <div className={containerClasses} id="projects">
        <SectionTitle accentText="02" title="Projects" />
        <div className="text-blueGray-400 sm:text-lg lg:text-xl max-w-prose leading-relaxed space-y-4 sm:space-y-6 lg:space-y-8">
          <p>
            I'm always working on something new. Below are a few of my favorite projects!
          </p>
        </div>
        <div className="h-8 lg:h-12"/>
        <div className="flex flex-wrap md:-mx-6">
          <LinkCard title="USACO Guide" link="https://github.com/cpinitiative/usaco-guide/">
            The USACO Guide is a free collection of curated, high-quality competitive programming resources aimed to bring contestants from Bronze to Platinum and beyond.
          </LinkCard>
          <LinkCard title="Competitive Programming Initiative" link="https://joincpi.org/">
            I'm the founder of the Competitive Programming Initiative, a student-run nonprofit organization dedicated to promoting competitive programming amongst students.
          </LinkCard>
          <LinkCard title="Competitive Programming Solutions" link="https://github.com/thecodingwizard/competitive-programming/">
            This Github repository contains solutions to some of the 900+ competitive programming problems I've solved!
          </LinkCard>
        </div>
      </div>

      <div className={containerClasses} id="achievements">
        <SectionTitle accentText="03" title="Achievements" />
        <div className="text-blueGray-400 sm:text-lg lg:text-xl max-w-prose leading-relaxed space-y-4 sm:space-y-6 lg:space-y-8">
          <p>
            I'm a 2x USACO Finalist and a 4x AIME Qualifier.
          </p>
        </div>
        <div className="h-8 lg:h-12"/>
        <div className="flex flex-wrap md:-mx-6">
          <LinkCard title="USACO Finalist 2019" link="http://www.usaco.org/index.php?page=finalists19">
            In 2019, I was selected as one of 27 individuals to the USA Computing Olympiad Training Camp.
          </LinkCard>
          <LinkCard title="USACO Finalist 2020" link="http://www.usaco.org/index.php?page=finalists20">
            In 2020, I was selected for the second year as one of 27 individuals to the USA Computing Olympiad Training Camp.
          </LinkCard>
        </div>
      </div>

      <div className={containerClasses} id="school">
        <SectionTitle accentText="04" title="School" />
        <div className="text-blueGray-400 sm:text-lg lg:text-xl max-w-prose leading-relaxed space-y-4 sm:space-y-6 lg:space-y-8">
          <p>
            I'm currently a student at Monta Vista High School, where I'm part of some amazing clubs!
          </p>
        </div>
        <div className="h-8 lg:h-12"/>
        <div className="flex flex-wrap md:-mx-6">
          <LinkCard title="Model UN" link="https://montavistamun.com/">
            In Model United Nations, members learn about teamwork, negotiation, and diplomacy as we simulate the real United Nations!
          </LinkCard>
          <LinkCard title="FBLA" link="https://mvfbla.com/">
            In Future Business Leaders of America, I learn more about how to run a business and become a successful entrepreneur!
          </LinkCard>
        </div>
      </div>

      <div className="h-24 md:h-48"/>
    </div>
  )
}
