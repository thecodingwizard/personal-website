import React, { Component } from "react";
import injectSheet from "react-jss";
import ChevronDoubleDownIcon from "mdi-react/ChevronDoubleDownIcon";
import InfoBlock from "../../components/InfoBlock";
import InfoBlockContainer from "../../components/InfoBlockContainer";

const styles = theme => ({
  hero: {
    // color: "rgba(255, 255, 255, 0.95)",
    color: "#DCEEFB",
    padding: "0 1.25rem",
    minHeight: "100vh",
    paddingTop: theme.navHeight,
    paddingBottom: theme.navHeight,
    fontFamily: "'Open Sans', sans-serif",
    background: "#102A43",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroTitle: {
    fontWeight: 400,
    fontSize: "5rem",
    marginTop: 0,
    marginBottom: "1rem",
    fontFamily: "Roboto Slab",
  },
  heroBlurb: {
    fontSize: "1.5rem",
    lineHeight: 1.7,
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
  },
  highlightWhite: {
    color: "#FADB5F",
    transition: "color 0.2s, background-color 0.2s",
    "&:focus": {
      color: "#000",
      backgroundColor: "#FADB5F",
      outline: "none",
      textDecoration: "none",
    },
  },
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
            building <span className={classes.highlightWhite}>websites</span>, competitive programming, and math.
          </p>
          <InfoBlockContainer>
            <InfoBlock title="Employment">
              I am currently employed by <a href="https://www.randommath.com/" rel="noopener noreferrer"
                                            className={classes.highlightWhite}
                                            target="_blank">Random Math</a> as a full-stack developer.
            </InfoBlock>
            <InfoBlock title="Current Focus">
              Right now, I am focusing on improving my Competitive Programming skills.
            </InfoBlock>
            <InfoBlock title="Clubs">
              I participate in Model UN, AI Club, FBLA, and Speech!
            </InfoBlock>
          </InfoBlockContainer>
          <div className="row">
            <div className="col">

            </div>
          </div>
          <div className={classes.heroScrollIcon}>
            <ChevronDoubleDownIcon color="#fff" />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(AboutHero);