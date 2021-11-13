import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import bannerImg from "../../../img/BG.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box
      sx={{
        background: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "top right",
      }}
    >
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Grid container rowSpacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "60px",
                lineHeight: 1.2,
                fontWeight: 700,
                marginBottom: "20px",
                color: "#fff",
              }}
              variant="h2"
              gutterBottom
              component="div"
            >
              Capture your
              <br />
              Beautiful moments
            </Typography>
            <Box sx={{ textAlign: "left" }}>
              <Link style={{ textDecoration: "none" }}>
                <Button
                  className="custom-btn"
                  sx={{
                    color: "#222",
                    backgroundColor: "#fff",
                    padding: "10px 40px 6px",
                    textDecoration: "none",
                    fontSize: "16px",
                    borderRadius: "15px",
                  }}
                  variant="contained"
                >
                  Buy now
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
