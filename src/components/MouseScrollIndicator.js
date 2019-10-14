import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  container: {
    display: "block",
    height: "40px",
    width: "26px",
    border: "2px solid #D9E2EC",
    borderRadius: "14px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  dot: {
    display: "block",
    height: "6px",
    width: "6px",
    backgroundColor: "#D9E2EC",
    borderRadius: "50%",
    animation: "$dot-animation 1.8s infinite ease-in-out",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes dot-animation": {
    "0%": {
      top: "calc(50% - 6px)",
      opacity: 1,
    },
    "40%": {
      top: "50%",
      opacity: 0,
    },
    "100%": {
      top: "calc(50% - 6px)",
      opacity: 0,
    },
  },
});

const MouseScrollIndicator = props => {
  const { classes } = props;
  
  return (
    <a className={classes.container}>
      <span className={classes.dot} />
    </a>
  );
};

export default injectSheet(styles)(MouseScrollIndicator);