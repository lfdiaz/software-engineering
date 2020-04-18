import React, { useState } from "react";
import { makeStyles, useTheme, useStyles } from "@material-ui/core/styles";

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
      backgroundColor: theme.palette.background.paper
    }
  })
);

const Login = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <div className={classes.modal}></div>
    </div>
  );
};

export default Login;
