import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  root: {
    composes: "container",
  },
  left: {
    composes: ["col-md"],
  },
  right: {
    composes: ["col-md"],
  },
  description: {
    fontFamily: "'Open Sans', sans-serif",
    lineHeight: "1.5",
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
            Right side goes here
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(aboutSection);