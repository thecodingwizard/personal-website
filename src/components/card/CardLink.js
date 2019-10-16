import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles(theme => ({
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: props => props.bg === "light" ? "hsl(210, 36%, 98%)" : "hsl(211, 39%, 23%)",
    boxShadow: "0 6px 6px rgba(10,16,20,.15), 0 0 52px rgba(10,16,20,.12)",
    margin: "1rem",
    borderRadius: "60px",
    paddingRight: "40px",
    paddingLeft: "40px",
    "&:hover": {
      boxShadow: "0 8px 8px rgba(10,16,20,.24), 0 0 8px rgba(10,16,20,.12)"
    },
    transition: "box-shadow 0.5s",
  },
  externalLink: {
    width: "1rem",
    fill: "#627D98",
    marginLeft: "0.625rem",
    marginBottom: "0.125rem",
  },
  cardContent: {
    flex: 1,
    margin: "1rem 0 1rem 0",
    textDecoration: "none",
  },
  cardContentTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    margin: 0,
    color: "#186FAF",
  },
  cardContentDesc: {
    marginTop: "0.25rem",
    marginBottom: 0,
    color: "black",
  },
}));

const Card = ({ children, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer"
       style={{ textDecoration: "none", display: "inline-block" }}>
      <div className={classes.card}>
        <div className={classes.cardContent}>
          <h3 className={classes.cardContentTitle}>
            {props.title}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={classes.externalLink}>
              <path
                d="M448 279.196V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h248a24 24 0 0 1 16.97 7.029l16 16C344.09 102.149 333.382 128 312 128H64v320h320V295.196c0-6.365 2.529-12.47 7.029-16.971l16-16C422.148 247.106 448 257.814 448 279.196zM576 37.333C576 16.715 559.285 0 538.667 0H380c-15.464 0-28 12.536-28 28v17.885c0 15.766 13.011 28.424 28.772 27.989l67.203-1.906L199.09 319.09c-9.429 9.363-9.457 24.605-.061 34.001l23.879 23.879c9.396 9.396 24.639 9.369 34.001-.06l247.122-248.885-1.906 67.203c-.434 15.76 12.224 28.772 27.99 28.772H548c15.464 0 28-12.536 28-28V37.333z" />
            </svg>
          </h3>
          <p className={classes.cardContentDesc}>{children}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;