import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const Product = ({ product, setOrderSuccess }) => {
  const { name, image, price } = product;
  console.log();
  const { user } = useAuth();
  const history = useHistory();
  const [newOrder, setNewOrder] = useState({});

  const data = {
    ...newOrder,
    productName: name,
    email: user?.email,
    price: price,
    date: new Date().toLocaleDateString(),
  };
  const handleOrder = () => {
    if (user.email) {
      console.log("cl");
      const orderData = { ...data };

      console.log(orderData);
      fetch("https://lit-falls-18743.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setOrderSuccess(true);
          }
        });
    } else {
      history.replace("/login");
    }
  };
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Paper
        sx={{
          m: 1,
          py: 3,
          px: 2,
          borderRadius: "15px",
          minHeight: "420px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={3}
      >
        <Box>
          <img style={{ width: "100%", height: "250px" }} src={image} alt="" />
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Poppins",
              fontSize: "20px",
              mb: "15px",
            }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Poppins",
              fontSize: "20px",
              mb: "15px",
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            ${price}
          </Typography>
          <Button
            onClick={handleOrder}
            className="custom-btn"
            sx={{
              color: "#fff",
              backgroundColor: "red",
              padding: "10px 40px 6px",
              textDecoration: "none",
              fontSize: "16px",
              borderRadius: "15px",
            }}
            variant="contained"
          >
            Buy now
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Product;
