import { Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const ReviewData = ({ review }) => {
  const { name, email, description, rating } = review;

  return (
    <Grid item xs={12} sm={12} md={4}>
      <Paper
        sx={{
          m: 1,
          py: 3,
          px: 2,
          borderRadius: "15px",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={3}
      >
        <Box>
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
            {description}
          </Typography>
          <Box>
            <Rating name="read-only" value={rating} readOnly />
          </Box>
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
            Name: {name}
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
            Email: {email}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ReviewData;
