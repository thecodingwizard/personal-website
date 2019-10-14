import React, { Component } from "react";
import injectSheet from "react-jss";

import Card from "../../components/card/Card";
import CardContainer from "../../components/card/CardContainer";
import CardLink from "../../components/card/CardLink";

const styles = theme => ({
  container: {
    padding: "5rem 1rem",
  },
  sectionOneContainer: {
    extend: "container",
    backgroundColor: "hsl(210, 36%, 96%)",
  },
  sectionTwoContainer: {
    extend: "container",
    backgroundColor: "hsl(209, 61%, 16%)",
    // color: "hsl(190, 70%, 90%)",
    color: "hsl(212, 33%, 89%)",
    position: "relative",
    paddingBottom: "3rem",
    "&:before, &:after": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      right: 0,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      height: "3rem",
    },
    "&:before": {
      top: "-3rem",
      backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 100,100 0,100' style='fill:hsl(209, 61%, 16%);' /%3E%3C/svg%3E\")",
    },
    "&:after": {
      bottom: "-3rem",
      backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,0 100,0 100,100' style='fill:hsl(209, 61%, 16%);' /%3E%3C/svg%3E\")",
    },
  },
  sectionThreeContainer: {
    paddingTop: "7rem",
    extend: "container",
    backgroundColor: "hsl(212, 33%, 89%)",
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
  cardLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("lg")]: {
      justifyContent: "left",
      flexDirection: "column",
    }
  }
});

class AboutContent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.sectionOneContainer}>
          <div className="container">
            <h2 className={classes.title}>Front End Development</h2>
            <p className={classes.blurb}>I specialize in front-end web development, building complex Single-Page
              Applications.</p>
            <CardContainer>
              <Card title="Angular" imgSrc="/assets/angular.svg" imgAlt="Angular" bg="light">
                I worked with Angular extensively to build complex, scalable, and maintainable websites.
              </Card>
              <Card title="React" imgSrc="/assets/react.svg" imgAlt="React" bg="light">
                Using React, I developed many interactive, component-based, feature-filled websites.
              </Card>
              <Card title="Progressive Web Apps" imgSrc="/assets/pwa.svg" imgAlt="Progressive Web Apps" bg="light">
                I developed numerous progressive web apps, websites that have the functionality of native mobile apps.
              </Card>
              <Card title="Bootstrap" imgSrc="/assets/bootstrap.svg" imgAlt="Bootstrap" bg="light">
                I use the latest Bootstrap 4 to quickly get a website up-and-running.
              </Card>
              <Card title="HTML" imgSrc="/assets/html5.svg" imgAlt="HTML 5" bg="light">
                All of my code is written in HTML 5, utilizing the new features and semantic tags that it has to offer.
              </Card>
              <Card title="CSS" imgSrc="/assets/css3.svg" imgAlt="CSS 3" bg="light">
                I work extensively with the latest CSS features to create beautiful, unique web designs.
              </Card>
              {/* TODO: Typescript!! */}
            </CardContainer>
          </div>
        </div>
        <div className={classes.sectionTwoContainer}>
          <div className="container">
            <h2 className={classes.title}>Back End Development</h2>
            <p className={classes.blurb}>I build scalable, modular backends to complement the front-end website.</p>
            <CardContainer>
              <Card title="Node.js" imgSrc="/assets/nodejs.svg" imgAlt="Node JS" bg="dark">
                I primarily develop my backend code with Node, which enables real-time, performant applications.
              </Card>
              <Card title="Express" imgSrc="/assets/expressjs.svg" imgAlt="Express JS" bg="dark">
                I use Express as my web framework for Node, one of the most popular frameworks.
              </Card>
              <Card title="MySQL" imgSrc="/assets/mysql.svg" imgAlt="MySQL" bg="dark">
                I worked with MySQL to create traditional relational databases.
              </Card>
              <Card title="MongoDB" imgSrc="/assets/mongodb.svg" imgAlt="MongoDB" bg="dark">
                I experimented with NoSQL databases such as MongoDB as a faster alternative to MySQL.
              </Card>
              <Card title="REST" imgSrc="/assets/rest.svg" imgAlt="REST" bg="dark">
                I use the REST API standard to ensure that my API endpoints are scalable and consistent with industry standards.
              </Card>
              <Card title="GraphQL" imgSrc="/assets/graphql.svg" imgAlt="Graph QL" bg="dark">
                I have also used GraphQL, a new flexible query language developed by Facebook.
              </Card>
            </CardContainer>
          </div>
        </div>
        <div className={classes.sectionThreeContainer}>
          <div className="container">
            <h2 className={classes.title}>Competitive Programming</h2>
            <p className={classes.blurb}>
              I&apos;m also an avid competitive programmer! In 2019, I was invited to the USACO Training Camp,
              where I trained with other top pre-college competitive programmers from across the United States.
            </p>
            <div className={classes.cardLinks}>
              <CardLink
                title="2019 Finalist List"
                imgSrc="/assets/expressjs.svg"
                imgAlt="Node JS"
                bg="light"
                link="http://www.usaco.org/index.php?page=finalists19">
                I was a USACO Finalist in 2019.
              </CardLink>
              <CardLink
                title="Github"
                imgSrc="/assets/expressjs.svg"
                imgAlt="Express JS"
                bg="light"
                link="https://github.com/thecodingwizard/competitive-programming">
                My Github repo for Competitive Programming!
              </CardLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(AboutContent);