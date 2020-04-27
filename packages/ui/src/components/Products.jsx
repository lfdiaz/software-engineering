import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import axios from "axios";
import ProductCard from "./ProductCard";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      position: "relative",
      backgroundColor: theme.palette.background.default,
      padding: theme.typography.pxToRem(16)
    },
    cardsContainer: {
      padding: theme.typography.pxToRem(12),
      width: "45%"
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    icon: {
      color: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(22)
    },
    cart: {
      position: "absolute",
      top: theme.typography.pxToRem(14),
      right: theme.typography.pxToRem(44),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: theme.typography.pxToRem(40),
      width: theme.typography.pxToRem(40),
      backgroundColor: "blue",
      borderRadius: "50%"
    },
    number: {
      fontSize: theme.typography.pxToRem(12),
      color: "white",
      position: "absolute",
      top: 0,
      right: theme.typography.pxToRem(4)
    }
  })
);

const Products = () => {
  const [products, setProducts] = useState([]);
  const [itemsOnCart, setItemsOnCart] = useState([]);

  const getCart = async () => {
    const userId = localStorage.getItem("userId");
    const itemsOnCartRes = await axios.get(`/api/cart?userId=${userId}`);
    setItemsOnCart(itemsOnCartRes.data);
  };

  const getProducts = async () => {
    const response = await axios.get("/api/products");

    if (response.statusText === "OK") {
      setProducts(response.data);
    }
  };

  useEffect(async () => {
    // Only make the call if there are no products already on state
    if (products.length < 1) {
      getProducts();
      getCart();
    }
  }, []);

  const addToCart = async id => {
    const userId = localStorage.getItem("userId");
    const res = await axios.post(`/api/cart?productId=${id}&userId=${userId}`, {
      quantity: 1
    });
    getCart();
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Typography variant="h4" color="textPrimary" align="center">
        Products
      </Typography>
      <div className={classes.cart}>
        {itemsOnCart.length > 0 && (
          <Typography variant="subtitle1" className={classes.number}>
            {itemsOnCart.length}
          </Typography>
        )}
        <AddShoppingCartIcon className={classes.icon} />
      </div>
      <div className={classes.container}>
        {products.map(product => (
          <div className={classes.cardsContainer} key={product._id}>
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              quantity={product.quantity || 0}
              id={product._id}
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
