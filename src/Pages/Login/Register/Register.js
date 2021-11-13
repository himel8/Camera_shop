import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { user, registerWithEmail, error, isLoding } = useAuth();
  const [newUser, setNewUser] = useState({});
  const location = useLocation();
  const history = useHistory();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const userData = { ...newUser };
    userData[field] = value;
    setNewUser(userData);
  };
  const handleRegister = (e) => {
    if (newUser.password1 !== newUser.password2) {
      alert("Don't match your password");
    }
    registerWithEmail(
      newUser.email,
      newUser.name,
      newUser.password1,
      location,
      history
    );
    e.preventDefault();
  };
  return (
    <Box sx={{ width: "100%", mx: "auto", mt: "60px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={4}></Grid>
        <Grid item xs={12} sm={12} md={4}>
          {!isLoding && (
            <Container>
              <Typography
                sx={{ fontFamily: "Poppins", my: 3 }}
                variant="h4"
                gutterBottom
                component="div"
              >
                Please Register
              </Typography>
              <form onSubmit={handleRegister}>
                <TextField
                  sx={{ width: "100%", my: 2 }}
                  name="name"
                  onBlur={handleBlur}
                  type="text"
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%", mb: 2 }}
                  name="email"
                  onBlur={handleBlur}
                  type="email"
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%", mb: 2 }}
                  name="password1"
                  onBlur={handleBlur}
                  type="password"
                  id="outlined-basic"
                  label="Your Password"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%", mb: 2 }}
                  name="password2"
                  onBlur={handleBlur}
                  type="password"
                  id="outlined-basic"
                  label="Re-type Password"
                  variant="outlined"
                />

                <Button
                  sx={{ width: "100%", mt: 2, py: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
                <Link style={{ textDecoration: "none" }} to="/login">
                  <Button sx={{ width: "100%", mt: 2, py: 1 }}>
                    Already an account?
                  </Button>
                </Link>
              </form>
              <Typography
                sx={{ fontFamily: "Poppins", my: 3, color: "red" }}
                variant="subtitle"
                gutterBottom
                component="div"
              >
                {error}
              </Typography>
            </Container>
          )}
          {isLoding && <CircularProgress />}
        </Grid>
        <Grid item xs={12} sm={12} md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default Register;
