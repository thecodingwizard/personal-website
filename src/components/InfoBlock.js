import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  container: {
    composes: "col",
    display: "flex",
    alignItems: "center",
  },
  iconContainer: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "inline-block",
    backgroundColor: "#003E6B",
    textAlign: "center",
    padding: "25px",
  },
  icon: {
    "& svg": {
      fill: "#F7C948",
      width: "30px",
      height: "30px",
    }
  },
  body: {
    marginLeft: "1rem",
    flex: 1,
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
  text: {
    lineHeight: 1.7,
  }
});

const InfoBlock = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <div className={classes.icon}>{props.icon}</div>
      </div>
      <div className={classes.body}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.text}>{props.children}</div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(InfoBlock);