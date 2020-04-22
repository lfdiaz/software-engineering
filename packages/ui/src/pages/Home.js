import React, { useState } from "react";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      position: "relative",
      backgroundColor: theme.palette.background.default
    },
    modal: {
      position: "absolute",
      top: "50%",
      right: "50%",
      transform: "translate(50%, -50%)",
      borderRadius: "6px",
      minWidth: "250px",
      minHeight: "250px",
      padding: "25px",
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly"
    },
    buttonsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "80%"
    }
  })
);

const Home = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <div className={classes.modal}>
        <Typography variant="h6" color="textPrimary" gutterBottom={true}>
          Welcome
        </Typography>
        <div className={classes.buttonsContainer}>
          <Link to="/products">
            <Button variant="outlined">
              <Typography variant="subtitle1" color="textSecondary">
                Guest
              </Typography>
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outlined">
              <Typography variant="subtitle1" color="textSecondary">
                Login
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
