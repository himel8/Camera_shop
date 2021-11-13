import React from "react";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import firstImg from "../../../img/flashSale1.png";
import secondImg from "../../../img/flashSale2.png";
import { Link } from "react-router-dom";

const FlashSale = () => {
  return (
    <Container sx={{ my: 5, p: 3 }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontFamily: "Dancing Script",
          color: "#222",
          mb: 5,
        }}
        variant="h2"
        gutterBottom
        component="div"
      >
        Flash Sale Offer
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* 1st flash sale box */}
        <Grid item xs={12} sm={12} md={6}>
          <Paper sx={{ py: 3, px: 2, borderRadius: "15px" }} elevation={3}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {/* text box area  */}
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{ fontFamily: "Dancing Script", color: "red" }}
                    variant="h4"
                    gutterBottom
                    component="div"
                  >
                    Flash Deals Sale
                  </Typography>
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
                    DSLR Motion Camera
                  </Typography>
                  <Link style={{ textDecoration: "none" }}>
                    <Button
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
                  </Link>
                </Box>
              </Grid>
              {/* image box  */}
              <Grid item xs={6} sm={6} md={6}>
                <img style={{ width: "100%" }} src={firstImg} alt="" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* 2nd flash sale box */}
        <Grid item xs={12} sm={12} md={6}>
          <Paper sx={{ py: 3, px: 2, borderRadius: "15px" }} elevation={3}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {/* text box area  */}
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{ fontFamily: "Dancing Script", color: "red" }}
                    variant="h4"
                    gutterBottom
                    component="div"
                  >
                    Flash Deals Sale
                  </Typography>
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
                    Pixel Perfect Camera
                  </Typography>
                  <Link style={{ textDecoration: "none" }}>
                    <Button
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
                  </Link>
                </Box>
              </Grid>
              {/* image box  */}
              <Grid item xs={6} sm={6} md={6}>
                <img style={{ width: "100%" }} src={secondImg} alt="" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FlashSale;
