import React, { Component } from "react";
import injectSheet from "react-jss";
import angularLogo from "./angular.svg";
import reactLogo from "./react.svg";
import bootstrapLogo from "./bootstrap.svg";
import pwaLogo from "./pwa.svg";
import html5Logo from "./html5.svg";

const styles = theme => ({
  lightBgContainer: {
    backgroundColor: "#F0F4F8",
    padding: "5rem 1rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "300",
    fontFamily: "Roboto",
    marginTop: 0,
    marginBottom: "1rem",
  },
  blurb: {
    fontSize: "1.25rem",
  },
  logoRow: {
    textAlign: "center",
  },
  logo: {
    width: "200px",
    height: "200px",
    margin: "10px",
  },
  logoBig: {
    width: "170px",
    height: "170px",
    margin: "25px",
  },
});

class WebTechnologies extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.lightBgContainer}>
          <div className="container">
            <h2 className={classes.title}>Front End Web Development</h2>
            <p className={classes.blurb}>I specialize in front-end web development, building complex Single-Page
              Applications.</p>
            <div className={classes.logoRow}>
              <img src={angularLogo} className={classes.logo} alt="Angular" />
              <img src={pwaLogo} className={classes.logoBig} alt="Progressive Web Apps" />
              <img src={reactLogo} className={classes.logo} alt="React" />
              <img src={bootstrapLogo} className={classes.logo} alt="Bootstrap" />
              <img src={html5Logo} className={classes.logoBig} alt="HTML 5" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(WebTechnologies);