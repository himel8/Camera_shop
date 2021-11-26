import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import Product from "./Product/Product";

const Products = () => {
  const { products, orderSuccess, setOrderSuccess } = useProducts();
  const displayProducts = products.filter((pd) => pd.name?.includes("Digital"));

  return (
    <Container>
      <Typography
        sx={{ fontFamily: "Poppins", my: 3 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Products Gallery
      </Typography>
      {orderSuccess && (
        <Alert severity="success">user successfully added!</Alert>
      )}
      <Grid
        container
        rowSpacing={1}
        sx={{ mb: 5 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {displayProducts.map((product) => (
          <Product
            setOrderSuccess={setOrderSuccess}
            product={product}
            key={product._id}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
