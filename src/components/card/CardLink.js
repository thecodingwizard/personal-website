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
    "&:hover": {
      boxShadow: "0 8px 8px rgba(10,16,20,.24), 0 0 8px rgba(10,16,20,.12)"
    },
    transition: "box-shadow 0.5s",
  },
  cardImg: {
    width: "100px",
    marginRight: "5px",
  },
  cardContent: {
    flex: 1,
    margin: "0.5rem 0 1rem 0",
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
    <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "inline-block" }}>
      <div className={classes.card}>
        <img className={classes.cardImg} src={props.imgSrc} alt={props.imgAlt} />
        <div className={classes.cardContent}>
          <h3 className={classes.cardContentTitle}>{props.title}</h3>
          <p className={classes.cardContentDesc}>{children}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;