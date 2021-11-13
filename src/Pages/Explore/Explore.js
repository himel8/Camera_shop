import { Alert, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useProducts from "../../Hooks/useProducts";
import Product from "../Home/Products/Product/Product";
import Navbar from "../Shared/Navbar/Navbar";

const Explore = () => {
  const { products, orderSuccess, setOrderSuccess } = useProducts();

  return (
    <Box>
      <Navbar />
      <Container>
        {orderSuccess && (
          <Alert severity="success">user successfully added!</Alert>
        )}
        <Grid
          container
          rowSpacing={1}
          sx={{ mb: 5 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {products.map((product) => (
            <Product
              product={product}
              setOrderSuccess={setOrderSuccess}
              key={product._id}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Explore;
