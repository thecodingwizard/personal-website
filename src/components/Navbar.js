import React from "react";
import injectSheet from "react-jss";

const font = {
  textDecoration: "none",
  color: "rgba(255, 255, 255, 0.8)",
  fontFamily: "Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: "1.1rem",
};

const link = {
  padding: "1rem 1.5rem",
  transition: "color 0.2s, background-color 0.2s",
  "&:hover, &:focus": {
    color: "#fff",
  },
  "&:focus": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    outline: "none"
  },
  ...font
};

const styles = theme => ({
  container: {
    backgroundColor: "transparent",
    padding: "1rem 0",
  },
  link,
  brand: {
    ...link,
    fontSize: "1.5rem",
    paddingTop: "0.8rem",
    paddingBottom: "0.8rem",
    marginRight: "auto"
  }
});

const Navbar = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <div className="container d-flex">
        <a href="/" className={classes.brand}>Nathan Wang</a>
        <a href="/about" className={classes.link}>About</a>
        <a href="/portfolio" className={classes.link}>Portfolio</a>
        <a href="/contact" className={classes.link}>Contact</a>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Navbar);