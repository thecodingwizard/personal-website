import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import MenuIcon from "mdi-react/MenuIcon";
import CloseIcon from "mdi-react/CloseIcon";

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

const iconButton = {
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
    ...iconButton,
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  },
  menuIcon: {
    transition: "color 0.2s",
    ...navColor,
  },

  mobileNavModal: {
    position: "absolute",
    left: "1rem",
    right: "1rem",
    margin: "0 auto",
    maxWidth: "25rem",
    transition: "transform 0.2s ease",
    transform: "translateY(0.5rem)",
    backgroundColor: "#5b56d8",
    borderRadius: "5px",
    outline: "none",
    fontFamily: font.fontFamily,
  },
  mobileNavAfterOpen: {
    transform: "translateY(0)"
  },
  mobileNavBeforeClose: {
    transform: "translateY(0.5rem)"
  },
  mobileNavOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(46,49,65,.8)",
    transition: "opacity 0.2s ease",
    opacity: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mobileNavOverlayAfterOpen: {
    opacity: 1,
  },
  mobileNavOverlayBeforeClose: {
    opacity: 0,
  },

  mobileNavContent: {
    padding: "1rem 2.5rem",
    paddingTop: 0,
    clear: "both",
  },
  mobileNavTitle: {
    color: "white",
    fontWeight: 600,
    textAlign: "center",
    borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
    paddingBottom: "1rem",
  },
  closeMobileNavButton: {
    ...iconButton,
    float: "right",
    margin: "1rem",
    marginBottom: 0,
  },
  mobileNav: {
    padding: 0,
  },
  mobileLink: {
    display: "block",
    ...navColor,
    ...font,
    textAlign: "center",
    padding: "1.125rem",
    transition: "background-color 0.2s, color 0.2s",
    "&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      outline: "none",  
    },
    "&:hover, &:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "#fff"
    },
  }
});

const Navbar = props => {
  const { classes, showMobileNav } = props;

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
        <button className={classes.menuButton} onClick={props.onShowMobileNav}>
          <MenuIcon className={classes.menuIcon} />
        </button>
      </div>

      <ReactModal 
        isOpen={showMobileNav}
        contentLabel="Navigation Menu"
        onRequestClose={props.onHideMobileNav}
        className={{
          base: classes.mobileNavModal,
          afterOpen: classes.mobileNavAfterOpen,
          beforeClose: classes.mobileNavBeforeClose
        }}
        overlayClassName={{
          base: classes.mobileNavOverlay,
          afterOpen: classes.mobileNavOverlayAfterOpen,
          beforeClose: classes.mobileNavOverlayBeforeClose
        }}
        closeTimeoutMS={200}
      >
        <button onClick={props.onHideMobileNav} className={classes.closeMobileNavButton}>
          <CloseIcon color="#fff" />
        </button>
        <div className={classes.mobileNavContent}>
          <h1 className={classes.mobileNavTitle}>Menu</h1>
          <ul className={classes.mobileNav}>
            {links.map(link => (
              <li className={classes.navItem} key={link.to} onClick={props.onHideMobileNav}>
                <Link to={link.to} className={classes.mobileLink}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </ReactModal>
    </div>
  );
};

export default injectSheet(styles)(Navbar);