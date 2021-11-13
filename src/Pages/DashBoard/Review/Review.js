import {
  TextField,
  Typography,
  TextareaAutosize,
  Button,
  Rating,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [review, setReview] = useState({});
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  const [rateValue, setRateValue] = useState(2);
  console.log(user);
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = {
      ...review,
      name: user?.displayName,
      email: user?.email,
    };
    newReview[field] = value;
    setReview(newReview);
  };
  console.log(review);
  const handleReview = (e) => {
    setIsLoding(true);
    fetch("https://lit-falls-18743.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setIsLoding(false);
          setReviewSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Typography
        sx={{ fontFamily: "Poppins", my: 3 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Review Page
      </Typography>
      {!isLoding && (
        <form onSubmit={handleReview}>
          <TextField
            sx={{ width: "60%", my: 2 }}
            disabled
            defaultValue={user.displayName}
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            sx={{ width: "60%", mb: 2 }}
            defaultValue={user.email}
            disabled
            id="outlined-basic"
            variant="outlined"
          />
          <Box>
            <Typography component="legend">Please rating us</Typography>
            <Rating
              onBlur={handleBlur}
              name="rating"
              value={rateValue}
              onChange={(event, newValue) => {
                setRateValue(newValue);
              }}
            />
          </Box>
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
            Add Review
          </Button>
        </form>
      )}
      {isLoding && <CircularProgress />}
      {reviewSuccess && (
        <Alert severity="success">Review added successfully</Alert>
      )}
    </div>
  );
};

export default Review;
