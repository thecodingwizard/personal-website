import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  lightBgContainer: {
    backgroundColor: "hsl(210, 36%, 96%)",
    padding: "5rem 1rem",
  },
  mediumBgContainer: {
    padding: "5rem 1rem",
    backgroundColor: "hsl(209, 61%, 16%)",
    // color: "hsl(190, 70%, 90%)",
    color: "hsl(212, 33%, 89%)",
    textAlign: "right",
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
        minWidth: "30px",
      },
    },
  },
  logoBreak: {
    width: "100%",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  techContainer: {
    composes: ["row"],
    marginLeft: "-2rem",
    marginRight: "-2rem",
    marginTop: "3rem",
  },
  tech: {
    display: "flex",
    alignItems: "center",
    borderRadius: "15px",
    margin: "0 1rem 3rem 1rem",
    padding: "1rem",
    paddingRight: "1.5rem",
    boxShadow: "0 2px 6px 0 hsla(0, 0%, 0%, 0.15), 0 4px 15px hsla(0, 0%, 0%, 0.1)",
    backgroundColor: "hsl(210, 36%, 97%)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
    "& .img": {
      width: "150px",
      [theme.breakpoints.down("xl")]: {
        width: "100px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "150px",
      },
      marginRight: "15px",
    },
    "& .content": {
      flex: 1,
      margin: "0.5rem 0 1rem 0",
      "&__title": {
        fontWeight: "normal",
        fontSize: "1.5rem",
        [theme.breakpoints.down("sm")]: {
          fontSize: "1.25rem",
          fontWeight: "600",
        },
        margin: 0,
      },
      "&__description": {
        marginTop: "0.5rem",
        marginBottom: 0,
      },
    },
  },
});

class WebTechnologies extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.lightBgContainer}>
          <div className="container">
            <h2 className={classes.title}>Front End Development</h2>
            <p className={classes.blurb}>I specialize in front-end web development, building complex Single-Page
              Applications.</p>
            <div className={classes.techContainer}>
              <div className="col-12 col-lg-6">
                <div className={classes.tech}>
                  <img className="img" src="/assets/angular.svg" alt="Angular" />
                  <div className="content">
                    <h3 className="content__title">Angular</h3>
                    <p className="content__description">Angular is a framework for building mobile and desktop apps,
                      developed by Google.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className={classes.tech}>
                  <img className="img" src="/assets/react.svg" alt="React" />
                  <div className="content">
                    <h3 className="content__title">React</h3>
                    <p className="content__description">React is a popular Javascript library used to build
                      component-based user interfaces, developed by Facebook.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className={classes.tech}>
                  <img className="img" src="/assets/pwa.svg" alt="Progressive Web Apps" />
                  <div className="content">
                    <h3 className="content__title">Progressive Web Apps</h3>
                    <p className="content__description">I developed numerous progressive web apps, websites that have
                      the functionality of native mobile apps.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className={classes.tech}>
                  <img className="img" src="/assets/bootstrap.svg" alt="Bootstrap" />
                  <div className="content">
                    <h3 className="content__title">Bootstrap</h3>
                    <p className="content__description">I use the latest Bootstrap 4 to quickly get a website
                      up-and-running.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className={classes.tech}>
                  <img className="img" src="/assets/html5.svg" alt="HTML 5" />
                  <div className="content">
                    <h3 className="content__title">HTML</h3>
                    <p className="content__description">All of my code is written in HTML 5, utilizing the new features
                      and semantic tags that it has to offer.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className={classes.tech}>
                  <img className="img" src="/assets/css3.svg" alt="CSS 3" />
                  <div className="content">
                    <h3 className="content__title">CSS</h3>
                    <p className="content__description">I work extensively with the latest CSS features to create
                      beautiful, unique web designs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.mediumBgContainer}>
          <div className="container">
            <h2 className={classes.title}>Back End Development</h2>
            <p className={classes.blurb}>I build scalable, modular backends to go along with the front-end website.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(WebTechnologies);