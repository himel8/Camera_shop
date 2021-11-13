import {
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

const Login = () => {
  const [user, setUser] = useState({});
  const { loginWithEmail, isLoding, error, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleGoogle = () => {
    signInWithGoogle(location, history);
  };

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(user);
  };
  const handleLogin = (e) => {
    loginWithEmail(user.email, user.password, location, history);
    e.preventDefault();
  };
  return (
    <Box sx={{ width: "100%", mx: "auto", mt: "150px" }}>
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
                Please Login
              </Typography>
              <form onSubmit={handleLogin}>
                <TextField
                  sx={{ width: "100%", my: 2 }}
                  name="email"
                  onBlur={handleBlur}
                  type="email"
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%", mb: 2 }}
                  name="password"
                  onBlur={handleBlur}
                  type="password"
                  id="outlined-basic"
                  label="Your Password"
                  variant="outlined"
                />

                <Button
                  sx={{ width: "100%", mt: 2, py: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </form>
              <Link style={{ textDecoration: "none" }} to="/register">
                <Button sx={{ width: "100%", mt: 2, py: 1 }}>
                  Create a new Account?
                </Button>
              </Link>
              <Button
                sx={{ width: "100%", mt: 2, py: 1 }}
                onClick={handleGoogle}
                type="submit"
                variant="contained"
              >
                Google Signin
              </Button>
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

export default Login;
