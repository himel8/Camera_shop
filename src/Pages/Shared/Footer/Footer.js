import React from "react";
import { Box } from "@mui/system";
import { Button, Container, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faHome,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import payment from "../../../img/payment.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#151515",
        color: "#fff",
        py: 5,
        fontFamily: "Poppins",
      }}
    >
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* 1st column  */}
          <Grid sx={{ textAlign: "left" }} item xs={12} sm={12} md={3}>
            <Typography
              sx={{ fontFamily: "Poppins", my: 3 }}
              variant="h6"
              gutterBottom
              component="div"
            >
              About Us
            </Typography>
            <Typography
              sx={{ fontFamily: "Poppins" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              The new hero pieces bring instant fashion credibility. Bright
              florals clash with camouflage prints.
            </Typography>
            <Typography
              sx={{ fontFamily: "Poppins", my: 3 }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Follow Us
            </Typography>
            <Box className="footer-icon">
              <FontAwesomeIcon
                className="custom-facebook"
                sx={{ mr: 2 }}
                icon={faFacebookF}
              />

              <FontAwesomeIcon icon={faTwitter} />

              <FontAwesomeIcon icon={faLinkedinIn} />
            </Box>
          </Grid>
          {/* 2nd column  */}
          <Grid sx={{ textAlign: "left" }} item xs={12} sm={12} md={3}>
            <Typography
              sx={{ fontFamily: "Poppins", my: 3, ml: "10px" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Information
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Link
                style={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/"
              >
                <Button color="inherit">Home</Button>
              </Link>
              <Link
                style={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/shop"
              >
                <Button color="inherit">Explore</Button>
              </Link>
              <Link
                style={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/shop"
              >
                <Button color="inherit">Contact</Button>
              </Link>
              <Link
                style={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </Link>
            </Box>
          </Grid>
          {/* 3rd column  */}
          <Grid sx={{ textAlign: "left" }} item xs={12} sm={12} md={3}>
            <Typography
              sx={{ fontFamily: "Poppins", my: 3, ml: "10px" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              My Account
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Link
                style={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/"
              >
                <Button color="inherit">Dashbord</Button>
              </Link>
              <Link
                style={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/shop"
              >
                <Button color="inherit">Cart</Button>
              </Link>
              <Link
                style={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/shop"
              >
                <Button color="inherit">CheckOut</Button>
              </Link>
            </Box>
          </Grid>
          {/* 4th column  */}
          <Grid sx={{ textAlign: "left" }} item xs={12} sm={12} md={3}>
            <Typography
              sx={{ fontFamily: "Poppins", my: 3 }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Get In Touch
            </Typography>

            <Box>
              <Typography
                sx={{ fontFamily: "Poppins" }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                <span style={{ marginRight: "20px" }}>
                  <FontAwesomeIcon sx={{ fontSize: "10px" }} icon={faHome} />
                </span>
                14 Tottenham Road, London, England.
              </Typography>
              <Typography
                sx={{ fontFamily: "Poppins" }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                <span style={{ marginRight: "20px" }}>
                  <FontAwesomeIcon
                    sx={{ fontSize: "10px" }}
                    icon={faPhoneAlt}
                  />
                </span>
                +8801516097150
              </Typography>
              <Typography
                sx={{ fontFamily: "Poppins" }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                <span style={{ marginRight: "20px" }}>
                  <FontAwesomeIcon
                    sx={{ fontSize: "10px" }}
                    icon={faEnvelope}
                  />
                </span>
                himelkhan290@gmail.com
              </Typography>
              <Box sx={{ mt: 2 }}>
                <img style={{ width: "100%" }} src={payment} alt="" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
