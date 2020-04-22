import React, { useState } from "react";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import { Typography, Card, CardHeader, CardContent } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {}
  })
);

const ProductCard = props => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { name, description, id } = props;
  return (
    <Card>
      <CardHeader>
        <Typography variant="subtitle1" color="textPrimary">
          {name}
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
