import React, { Component } from "react";
import injectSheet from "react-jss";
import ChevronDoubleDownIcon from "mdi-react/ChevronDoubleDownIcon";
import InfoBlock from "../../components/InfoBlock";
import WebIcon from "mdi-react/WebIcon";
import AccountGroupIcon from "mdi-react/AccountGroupIcon";

const styles = theme => ({
  hero: {
    // color: "rgba(255, 255, 255, 0.95)",
    color: "#D9E2EC",
    padding: "0 1.25rem",
    paddingTop: theme.navHeight,
    paddingBottom: "13rem",
    fontFamily: "'Open Sans', sans-serif",
    background: "#102A43",
    position: "relative",
  },
  heroTitle: {
    fontWeight: 400,
    fontSize: "5rem",
    marginTop: "7rem",
    [theme.breakpoints.down("lg")]: {
      marginTop: "6rem",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "5rem",
      fontSize: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
      fontSize: "3rem",
    },
    marginBottom: "1rem",
    fontFamily: "Roboto Slab",
  },
  heroBlurb: {
    fontSize: "1.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem",
    },
    lineHeight: 1.7,
    marginBottom: "3.5rem",
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
    marginTop: "2rem",
    transform: "translateY(-0.5rem)",
    opacity: 0,
    animation: "hero-scroll-icon 2.5s ease 2s infinite",
    position: "absolute",
    bottom: "4rem",
    left: 0,
    right: 0,
  },
  highlightWhite: {
    color: "#B6E0FE",
    transition: "color 0.2s, background-color 0.2s",
    "&:focus": {
      color: "#000",
      backgroundColor: "#B6E0FE",
      outline: "none",
      textDecoration: "none",
    },
  }
});

class AboutHero extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hero}>
        <div className="container">
          <h1 className={classes.heroTitle}>About Me</h1>
          <p className={classes.heroBlurb}>
            I&apos;m a self-taught <span className={classes.highlightWhite}>programmer</span> that loves
            web development, competitive programming, and math.
          </p>
          <div className="row">
            <InfoBlock title="Employment" icon={WebIcon}>
              I am currently employed by <a href="https://www.randommath.com/" rel="noopener noreferrer"
                                            className={classes.highlightWhite}
                                            target="_blank">Random Math</a> as a full-stack developer.
            </InfoBlock>
            <InfoBlock title="Clubs" icon={AccountGroupIcon}>
              I participate in a variety of school clubs, including Model UN, AI Club, FBLA, and Speech!
            </InfoBlock>
          </div>
        </div>
        <div className={classes.heroScrollIcon}>
          <ChevronDoubleDownIcon color="#fff" />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(AboutHero);