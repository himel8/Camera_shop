import { Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Shared/Navbar/Navbar";

const Purchase = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography
          sx={{ fontFamily: "Poppins", mt: 3, fontWeight: 700 }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Coming Soon
        </Typography>
      </Container>
    </div>
  );
};

export default Purchase;
