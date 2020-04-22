import React, { useState } from "react";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import { Input, TextField, Button, Typography } from "@material-ui/core";
import axios from "axios";

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
    }
  })
);

const Login = () => {
  const theme = useTheme();

  const [items, setItems] = useState({});
  const [error, setError] = useState(null);

  const onLoginClick = () => {
    const { email, password } = items;
    const response = axios.post("/api/login", {
      email,
      password
    });
    setError(response.statusText !== "OK");
  };

  const onChange = e => {
    const { value, name } = e.target;
    let newItems = { ...items, [name]: value };
    setItems(newItems);
    setError(false);
  };

  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <div className={classes.modal}>
        {error && (
          <Typography variant="subtitle1" color="error">
            The password and/or email is incorrect
          </Typography>
        )}
        <TextField
          type="text"
          label="Email"
          name="email"
          onChange={onChange}
          fullWidth={true}
          error={error}
        />
        <TextField
          type="text"
          label="Password"
          name="password"
          onChange={onChange}
          fullWidth={true}
          error={error}
        />
        <Button onClick={onLoginClick}>
          <Typography variant="subtitle1">Login</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Login;
