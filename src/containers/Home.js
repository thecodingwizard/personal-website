import React, { Component } from "react";
import injectSheet from "react-jss";
import GithubCircleIcon from "mdi-react/GithubCircleIcon";
import EmailIcon from "mdi-react/EmailIcon";
import WebIcon from "mdi-react/WebIcon";

import Typed from "../components/Typed";
import Particles from "../components/Particles";

const styles = theme => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    textAlign: "center",
    fontFamily: "'Open Sans', sans-serif",
    color: "#fff",
    marginTop: theme.navHeight,
    marginBottom: theme.navHeight,
    padding: "1rem",
    paddingTop: 0,
  },
  greeting: {
    fontWeight: 600,
    fontSize: "4rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    color: "rgba(255, 255, 255, 0.96)",
    marginTop: 0,
    marginBottom: "0.75rem",
  },
  description: {
    fontWeight: "normal",
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.25rem",
    },
    [theme.breakpoints.down("30rem")]: {
      fontSize: "1.5rem",
      minHeight: "4.3rem",
    },
    color: "rgba(255, 255, 255, 0.93)",
    marginTop: 0,
  },
  socialMediaLink: {
    display: "inline-block",
    border: "none",
    cursor: "pointer",
    width: "3rem",
    height: "3rem",
    margin: "0 0.5rem",
    backgroundColor: "#225da5",
    transition: "background-color 0.2s, color 0.2s",
    color: "#fff",
    "&:focus": {
      outline: "none",
    },
    "&:hover, &:focus": {
      color: "#0F609B",
      backgroundColor: "#fff"
    },
    borderRadius: "100%",
    padding: 0,
    lineHeight: "3.75rem",
    textDecoration: "none",
  },
  particles: {
    backgroundImage: "linear-gradient(-45deg, #0F609B 0%, #2680C2 100%)",
    position: "absolute",
    zIndex: "-10",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  particlesCanvas: {
    display: "block",
    verticalAlign: "bottom",
  }
});

class Home extends Component {
  description = [
    "I'm a Programmer",
    "I'm a Web App Developer",
    "I'm a USACO Platinum Contestant",
    "I'm a Full-Stack Engineer",
    "I'm a React Developer",
    "I'm an Angular Developer",
    "I'm a Math Geek",
  ];
  
  constructor(props) {
    super(props);
    this.isMobile = window.innerWidth <= 768;
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ position: "relative" }}>
        <Particles
          canvasClassName={classes.particlesCanvas}
          className={classes.particles}
          isMobile={this.isMobile} />
        <div className={classes.root}>
          <div className={classes.content}>
            <h1 className={classes.greeting}>Hi! I&apos;m Nathan Wang</h1>
            <h2 className={classes.description}><Typed strings={this.description} /></h2>
            <div>
              <a href="https://thecodingwizard.me/" className={classes.socialMediaLink}>
                <WebIcon size={24} />
              </a>
              <a href="mailto:nathan.r.wang@gmail.com" className={classes.socialMediaLink}>
                <EmailIcon size={24} />
              </a>
              <a href="https://www.github.com/thecodingwizard/" className={classes.socialMediaLink}>
                <GithubCircleIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Home);