import React, { Component } from "react";
import injectSheet from "react-jss";
import AboutHero from "./AboutHero";
import WebTechnologies from "./WebTechnologies";

const styles = theme => ({
  root: {},
});

class AboutPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AboutHero />
        <WebTechnologies />
      </div>
    );
  }
}

export default injectSheet(styles)(AboutPage);