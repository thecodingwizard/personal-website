import React, { Component } from "react";
import injectSheet from "react-jss";

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
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "& div": {
      flex: 1,
      "& img": {
        width: "100%",
        minWidth: "100px",
      },
    },
  },
  logoBreak: {
    width: "100%",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }
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
              <div><img src="/assets/angular.svg" className={classes.logo} alt="Angular" /></div>
              <div><img src="/assets/pwa.svg" className={classes.logoBig} alt="Progressive Web Apps" /></div>
              <div><img src="/assets/react.svg" className={classes.logo} alt="React" /></div>
              <span className={classes.logoBreak}></span>
              <div><img src="/assets/bootstrap.svg" className={classes.logo} alt="Bootstrap" /></div>
              <div><img src="/assets/html5.svg" className={classes.logoBig} alt="HTML 5" /></div>
              <div><img src="/assets/css3.svg" className={classes.logoBig} alt="CSS 3" /></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(WebTechnologies);