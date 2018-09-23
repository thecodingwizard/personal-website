import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import MenuIcon from "mdi-react/MenuIcon";

const navColor = {
  color: "rgba(255, 255, 255, 0.8)",
  "&:hover, &:focus": {
    color: "#fff",
  },
};

const font = {
  ...navColor,
  textDecoration: "none",
  fontFamily: "Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: "1.1rem",
};

const desktopLink = {
  padding: "1rem 1.5rem",
  transition: "color 0.2s, background-color 0.2s",
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
  desktopLink,
  desktopNav: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  navItem: {
    listStyle: "none"
  },
  brand: {
    ...desktopLink,
    fontSize: "1.5rem",
    padding: "0.8rem 1.2rem",
    marginRight: "auto"
  },
  menuButton: {
    display: "none",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    width: "3rem",
    height: "3rem",
    margin: "auto 0",
    transition: "background-color 0.2s",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    "&:focus": {
      outline: "none",
      backgroundColor: "rgba(255, 255, 255, 0.2)"
    },
    borderRadius: "100%",
    padding: 0,
    lineHeight: "50%",
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  },
  menuIcon: {
    transition: "color 0.2s",
    ...navColor,
  }
});

const Navbar = props => {
  const { classes } = props;

  let links = [
    { label: "About", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" }
  ];

  return (
    <div className={classes.container}>
      <div className="container d-flex">
        <Link to="/" className={classes.brand}>Nathan Wang</Link>
        <ul className={classes.desktopNav}>
          {links.map(link => (
            <li className={classes.navItem} key={link.to}>
              <Link to={link.to} className={classes.desktopLink}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button className={classes.menuButton}>
          <MenuIcon className={classes.menuIcon} />
        </button>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Navbar);