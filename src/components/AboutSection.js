import React from "react";
import injectSheet from "react-jss";

import Skill from "./Skill";

const styles = theme => ({
  root: {
    composes: "container",
    fontFamily: "'Open Sans', sans-serif",
  },
  left: {
    composes: ["col-md", "col-lg-4"],
    display: "flex",
    alignItems: "center",
  },
  right: {
    composes: ["col-md", "col-lg-8"],
  },
  description: {
    lineHeight: "1.6",
  },
  title: {
    fontWeight: 600,
  },
});

const aboutSection = (props) => {
  const { classes, children, theme, data, title, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <div className={classes.root}>
        <div className="row">
          <div className={classes.left}>
            <p className={classes.description}>{children}</p>
          </div>
          <div className={classes.right}>
            <h2 className={classes.title}>{title}</h2>
            {data.map(item => (
              <Skill label={item.label} percent={item.percent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(aboutSection);