import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  container: {
    composes: "col-12 col-lg-6",
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    "&:hover": {
      "& $iconContainer": {
        backgroundColor: "#F0F4F8",
        boxShadow: "0px 10px 60px -3px hsl(209, 61%, 10%)",
      },
      "& $icon": {
        fill: "#186FAF !important",
      },
    },
  },
  iconContainer: {
    boxShadow: "0px 9px 30px -6px hsl(209, 61%, 8%)",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "inline-block",
    backgroundColor: "hsl(209, 34%, 26%)",
    textAlign: "center",
    padding: "20px",
    transition: "all 0.2s",
  },
  icon: {
    fill: "#84C5F4",
    width: "40px",
    height: "40px",
    transition: "fill 0.2s",
  },
  body: {
    marginLeft: "1.5rem",
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
  const { classes, icon: Icon } = props;
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <Icon className={classes.icon} />
      </div>
      <div className={classes.body}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.text}>{props.children}</div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(InfoBlock);