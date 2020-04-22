import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import axios from "axios";
import ProductCard from "./ProductCard";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      position: "relative",
      backgroundColor: theme.palette.background.default,
      padding: theme.typography.pxToRem(16)
    }
  })
);

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Only make the call if there are no products already on state
    if (products.length < 1) {
      const response = axios.get("/api/products");
      if (response.statusText === "OK") {
        setProducts(response.data);
      }
    }
  }, []);

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Typography variant="h4" color="textPrimary" align="center">
        Products
      </Typography>
      {products.map(product => (
        <ProductCard
          name={product.name}
          description={product.description}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
