import React, { Component } from "react";
import injectSheet from "react-jss";
import ChevronDoubleDownIcon from "mdi-react/ChevronDoubleDownIcon";

import AboutSection from "../components/AboutSection";

const styles = theme => ({
  root: {},
  hero: {
    padding: "0 1.25rem",
    color: "rgba(255, 255, 255, 0.95)",
    paddingTop: theme.navHeight,
    fontFamily: "'Open Sans', sans-serif",
    paddingBottom: "5rem",
    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 5rem), 50% 100%, 0 calc(100% - 5rem))",
    background: "linear-gradient(45deg, rgba(80,150,240,1) 0%, rgba(124,126,240,1) 50%, rgba(204,94,240,1) 100%)",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "10rem",
      clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10rem), 50% 100%, 0 calc(100% - 10rem))",
      background: "linear-gradient(45deg, rgba(1,219,240,1) 0%, rgba(124,126,240,1) 50%, rgba(204,94,240,1) 100%)",
    },
    marginBottom: "2rem",
  },
  heroTitle: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  heroProfile: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
    },
    maxWidth: "60rem",
    margin: "0 auto",
  },
  heroProfileTitle: {
    fontWeight: 600,
    marginTop: 0,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "inherit",
    },
  },
  heroProfileDetails: {
    flex: 1,
    marginTop: "1.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
  avatarContainer: {
    textAlign: "center",
    marginRight: 0,
    [theme.breakpoints.up("md")]: {
      marginRight: "2.5rem",
    },
  },
  avatar: {
    width: "12rem",
    height: "12rem",
    borderRadius: "100%",
    border: "5px solid rgba(250, 250, 250, 0.8)"
  },
  heroBlurb: {
    lineHeight: "1.5",
  },
  heroBlurbPrimary: {
    composes: "$heroBlurb",
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "2.5rem",
  },
  "@keyframes hero-scroll-icon": {
    "0%": {
      opacity: 0,
      transform: "translateY(-0.5rem)",
    },
    "25%": {
      opacity: 0.8,
    },
    "50%": {
      opacity: 0,
      transform: "translateY(1rem)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(-1rem)",
    }
  },
  heroScrollIcon: {
    textAlign: "center",
    position: "relative",
    top: "2.25rem",
    transform: "translateY(-0.5rem)",
    opacity: 0,
    animation: "hero-scroll-icon 2.5s ease 2s infinite",
    [theme.breakpoints.up("md")]: {
      top: "5rem",
    },
  },
  highlightWhite: {
    color: "#fbff57",
    transition: "color 0.2s, background-color 0.2s",
    "&:focus": {
      color: "#000",
      backgroundColor: "#fbff57",
      outline: "none",
      textDecoration: "none",
    },
  },
});

const specializations = [
  { label: "React", percent: 90 },
  { label: "Angular", percent: 90 },
  { label: "Redux", percent: 80 },
  { label: "Angular Material", percent: 75 },
  { label: "Material UI", percent: 75 },
  { label: "Bootstrap 4", percent: 80 },
  { label: "Material Design", percent: 75 },
  { label: "Progressive Web Apps", percent: 80 },
];

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.hero}>
          <div className="container">
            <h1 className={classes.heroTitle}>About Me</h1>
            <p className={classes.heroBlurbPrimary}>
              I&apos;m a self-taught <span className={classes.highlightWhite}>programmer</span> that loves building <span className={classes.highlightWhite}>websites</span>, competitive programming, and math.
            </p>
            <div className={classes.heroProfile}>
              <div className={classes.avatarContainer}>
                <img src="/assets/avatar.jpg" className={classes.avatar} alt="Avatar" />
              </div>
              <div className={classes.heroProfileDetails}>
                <h2 className={classes.heroProfileTitle}>Nathan Wang (thecodingwizard)</h2>
                <p className={classes.heroBlurb}>
                  I&apos;ve been coding in various languages for six years. Recently, I have worked extensively with React and Angular, building complex <span className={classes.highlightWhite}>Single Page Applications</span>. I am currently contracted by <a href="https://www.randommath.com/" rel="noopener noreferrer" className={classes.highlightWhite} target="_blank">Random Math</a> as a full-stack developer.
                </p>
                <p className={classes.heroBlurb}>
                  Outside of programming and math, I also participate in a variety of <span className={classes.highlightWhite}>clubs</span>, including Model UN, FBLA, Speech, and Debate.
                </p>
              </div>
            </div>
            <div className={classes.heroScrollIcon}>
              <ChevronDoubleDownIcon color="#fff" />
            </div>
          </div>
        </div>

        <AboutSection title="Specializations" data={specializations}>
          I've been coding for over six years, and I've come to specialize in front-end single page application development with React and Angular.
        </AboutSection>
      </div>
    );
  }
}

export default injectSheet(styles)(About);