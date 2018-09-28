import React from "react";
import injectSheet from "react-jss";

import Skill from "./Skill";

const styles = theme => ({
  root: {
    composes: "container",
    fontFamily: "'Open Sans', sans-serif",
    padding: "0 1.5rem",
  },
  left: {
    composes: ["col-12", "col-md-12", "col-lg-4"],
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
    [theme.breakpoints.up("lg")]: {
      marginBottom: "0",
    },
  },
  right: {
    composes: ["col-12", "col-md-12", "col-lg-8"],
  },
  description: {
    lineHeight: "1.6",
  },
  title: {
    fontWeight: 600,
    textAlign: "center",
  },
  skills: {
    margin: "0 -1.5rem",
  },
  skill: {
    display: "inline-block",
    padding: "0 1.5rem",
    boxSizing: "border-box",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
});

const aboutSection = (props) => {
  const { classes, children, theme, data, title, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <div className={classes.root}>
        <div className="row">
          <div className="col-12">
            <h2 className={classes.title}>{title}</h2>
          </div>
          <div className={classes.left}>
            <p className={classes.description}>{children}</p>
          </div>
          <div className={classes.right}>
            <div className={classes.skills}>
              {data.map(item => (
                <div className={classes.skill}>
                  <Skill label={item.label} percent={item.percent} key={item.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(aboutSection);