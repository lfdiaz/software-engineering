import React, { useState } from "react";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import { Typography, Card, CardHeader, CardContent } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: "100%",
      height: "100%"
    },
    iconContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    icon: {
      color: theme.palette.common.white
    }
  })
);

const ProductCard = props => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { name, description, id, price, quantity, addToCart } = props;
  const newPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);

  const onClick = () => addToCart(id);

  const icon = quantity > 0 && (
    <div className={classes.iconContainer} onClick={onClick}>
      <AddShoppingCartIcon className={classes.icon} />
    </div>
  );

  return (
    <Card raised={true} className={classes.root}>
      <CardHeader title={name} subheader={newPrice} action={icon}></CardHeader>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          Description: {description}
        </Typography>

        <Typography variant="subtitle1" color="textSecondary">
          Quantity: {quantity}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
