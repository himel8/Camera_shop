import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Alert, Button } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, successUser, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      {successUser && (
        <Alert severity="success">user successfully added!</Alert>
      )}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/shop">
            <Button color="inherit">Explore</Button>
          </Link>
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/contact">
            <Button color="inherit">Contact</Button>
          </Link>

          {user.email ? (
            <Box>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/dashboard"
              >
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Button onClick={logOut} color="inherit">
                LogOut
              </Button>
            </Box>
          ) : (
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
