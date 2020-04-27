import React, { useState } from "react";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
      minWidth: "350px",
      minHeight: "350px",
      padding: "25px",
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly"
    }
  })
);

const Signup = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();

  const [items, setItems] = useState({});
  const [error, setError] = useState(null);

  const onChange = e => {
    const { value, name } = e.target;
    let newItems = { ...items, [name]: value };
    setItems(newItems);
    setError(false);
  };

  const onSignupClick = async () => {
    const { password, password1 } = items;
    if (password !== password1) {
      setError("Passwords do not match");
      return;
    }
    const response = await axios.post("/api/signup", {
      ...items
    });

    if (response.statusText === "OK") {
      localStorage.setItem("userId", response.data._id);
      history.push("/products");
    }
    setError(response.statusText);
  };

  return (
    <div className={classes.root}>
      <div className={classes.modal}>
        <Typography variant="subtitle1" color="textPrimary">
          Hi please signup
        </Typography>
        {error && (
          <Typography variant="subtitle1" color="error">
            {error}
          </Typography>
        )}
        <TextField
          type="text"
          label="Name"
          name="name"
          onChange={onChange}
          fullWidth={true}
          // error={error}
        />
        <TextField
          type="text"
          label="Email"
          name="email"
          onChange={onChange}
          fullWidth={true}
          // error={error}
        />
        <TextField
          type="text"
          label="Password"
          name="password"
          onChange={onChange}
          fullWidth={true}
          error={error && error.includes("Password")}
        />
        <TextField
          type="text"
          label="Please type your password again"
          name="password1"
          onChange={onChange}
          fullWidth={true}
          error={error && error.includes("Password")}
        />
        <Button onClick={onSignupClick}>
          <Typography variant="subtitle1">Signup</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Signup;
