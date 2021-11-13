import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReviewData from "../ReviewData/ReviewData";

const ReviewsData = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://lit-falls-18743.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <Typography
        sx={{ fontFamily: "Poppins", my: 3 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        All Reviews
      </Typography>
      <Grid
        container
        rowSpacing={1}
        sx={{ mb: 5 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {reviews.map((review) => (
          <ReviewData review={review} key={review._id} />
        ))}
      </Grid>
    </Container>
  );
};

export default ReviewsData;
