import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  TextareaAutosize,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({});
  const [productSuccess, setProductSuccess] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  const handleBlur = (e) => {
    const date = new Date();
    const field = e.target.name;
    const value = e.target.value;
    const products = { ...newProduct, date: date.toLocaleDateString() };
    products[field] = value;
    setNewProduct(products);
  };

  const handleAddProduct = (e) => {
    setIsLoding(true);
    // send products to server

    fetch("https://lit-falls-18743.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoding(false);
        if (data.insertedId) {
          setProductSuccess(true);
        }
      });

    // e.preventDefault();
  };
  return (
    <Container>
      <Typography
        sx={{ fontFamily: "Poppins", my: 3 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Add Products
      </Typography>
      {!isLoding && (
        <form onSubmit={handleAddProduct}>
          <TextField
            sx={{ width: "60%", my: 2 }}
            name="name"
            onBlur={handleBlur}
            type="text"
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
          />
          <TextField
            sx={{ width: "60%", mb: 2 }}
            name="image"
            onBlur={handleBlur}
            type="text"
            id="outlined-basic"
            label="Product Image link"
            variant="outlined"
          />
          <TextField
            sx={{ width: "60%", mb: 2 }}
            name="price"
            onBlur={handleBlur}
            type="number"
            id="outlined-basic"
            label="Product Price"
            variant="outlined"
          />

          <TextareaAutosize
            maxRows={8}
            name="description"
            onBlur={handleBlur}
            aria-label="maximum height"
            placeholder="Product Description"
            style={{
              width: "60%",
              height: "120px",
              fontFamily: "Arial",
              fontSize: "16px",
              padding: "10px",
            }}
          />
          <Button
            sx={{ width: "60%", mt: 2, py: 1 }}
            type="submit"
            variant="contained"
          >
            Add Product
          </Button>
        </form>
      )}
      {isLoding && <CircularProgress />}
      {productSuccess && (
        <Alert severity="success">Product added successfully</Alert>
      )}
    </Container>
  );
};

export default AddProduct;
