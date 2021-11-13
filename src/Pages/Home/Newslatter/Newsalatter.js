import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Newsalatter = () => {
  const [email, setEmail] = useState("");
  const [emailsuccess, setEmailSuccess] = useState(false);
  const [isLoding, setisLoding] = useState(false);
  const handleBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleNewslatter = (e) => {
    setEmailSuccess(true);
    setisLoding(true);
  };
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://template.hasthemes.com/garcia/garcia/assets/images/bg/subscribe-bg-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: "100px",
        my: 3,
      }}
    >
      <Container>
        {!isLoding && (
          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{ fontFamily: "Poppins", mt: 3, fontWeight: 700 }}
              variant="h4"
              gutterBottom
              component="div"
            >
              SUBSCRIBE OUR NEWSLETTER
            </Typography>
            <Typography
              sx={{ fontFamily: "Poppins", mb: 3, fontWeight: 700 }}
              variant="h5"
              gutterBottom
              component="div"
            >
              GET UPDATE FOR NEWS, OFFERS
            </Typography>
            <TextField
              sx={{ width: "50%", mb: 2 }}
              type="email"
              onBlur={handleBlur}
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
            />
            <Box>
              <Button
                onClick={handleNewslatter}
                sx={{ width: "10%", py: 1 }}
                type="submit"
                variant="contained"
              >
                send
              </Button>
            </Box>
          </Box>
        )}

        {emailsuccess && (
          <Alert severity="success">Email: {email} added successfully</Alert>
        )}
      </Container>
    </Box>
  );
};

export default Newsalatter;
