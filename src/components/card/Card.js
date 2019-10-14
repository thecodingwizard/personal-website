import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles(theme => ({
  card: {
    display: "flex",
    alignItems: "center",
    borderRadius: "15px",
    margin: "0 1rem 3rem 1rem",
    padding: "1rem",
    paddingRight: "1.5rem",
    boxShadow: "0 2px 6px 0 hsla(0, 0%, 0%, 0.15), 0 4px 15px hsla(0, 0%, 0%, 0.1)",
    backgroundColor: props => props.bg === "light" ? "hsl(210, 36%, 98%)" : "hsl(211, 39%, 23%)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
    "& .img": {
      width: "150px",
      [theme.breakpoints.down("xl")]: {
        width: "100px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "150px",
      },
      marginRight: "15px",
    },
    "& .content": {
      flex: 1,
      margin: "0.5rem 0 1rem 0",
      "&__title": {
        fontWeight: "normal",
        fontSize: "1.5rem",
        [theme.breakpoints.down("sm")]: {
          fontSize: "1.25rem",
          fontWeight: "600",
        },
        margin: 0,
      },
      "&__description": {
        marginTop: "0.5rem",
        marginBottom: 0,
      },
    },
  },
}));

const Card = ({ children, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });

  return (
    <div className="col-12 col-lg-6">
      <div className={classes.card}>
        <img className="img" src={props.imgSrc} alt={props.imgAlt} />
        <div className="content">
          <h3 className="content__title">{props.title}</h3>
          <p className="content__description">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;