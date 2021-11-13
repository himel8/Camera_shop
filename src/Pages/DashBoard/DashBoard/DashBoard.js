import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowCircleLeft,
  faCartArrowDown,
  faCartPlus,
  faDirections,
  faMoneyBill,
  faStar,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import AddProduct from "../AddProduct/AddProduct";
import AllOrder from "../AllOrder/AllOrder";
import useAuth from "../../../Hooks/useAuth";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../AdminRoute/AdminRoute";

const drawerWidth = 240;

const DashBoard = (props) => {
  const { window } = props;
  const { admin, user, logOut } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>{user.displayName}</Toolbar>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          ml: "15px",
          mt: "15px",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/shop">
          <Button
            sx={{ color: "#222", fontWeight: 700, fontSize: "14px" }}
            variant="text"
          >
            <span style={{ marginRight: "20px" }}>
              <FontAwesomeIcon sx={{ fontSize: "10px" }} icon={faDirections} />
            </span>
            Explore
          </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`${url}`}>
          <Button
            sx={{ color: "#222", fontWeight: 700, fontSize: "14px" }}
            variant="text"
          >
            <span style={{ marginRight: "20px" }}>
              <FontAwesomeIcon
                sx={{ fontSize: "10px" }}
                icon={faCartArrowDown}
              />
            </span>
            My Orders
          </Button>
        </Link>
        {admin && (
          <Box>
            <Link style={{ textDecoration: "none" }} to={`${url}/manageOrder`}>
              <Button
                sx={{ color: "#222", fontWeight: 700, fontSize: "14px" }}
                variant="text"
              >
                <span style={{ marginRight: "20px" }}>
                  <FontAwesomeIcon
                    sx={{ fontSize: "10px" }}
                    icon={faCartArrowDown}
                  />
                </span>
                Manage Orders
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`${url}/addproduct`}>
              <Button
                sx={{ color: "#222", fontWeight: 700, fontSize: "14px" }}
                variant="text"
              >
                <span style={{ marginRight: "20px" }}>
                  <FontAwesomeIcon
                    sx={{ fontSize: "10px" }}
                    icon={faCartPlus}
                  />
                </span>
                Add Product
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`${url}/makeanadmin`}>
              <Button
                sx={{ color: "#222", fontWeight: 700, fontSize: "14px" }}
                variant="text"
              >
                <span style={{ marginRight: "20px" }}>
                  <FontAwesomeIcon sx={{ fontSize: "10px" }} icon={faUserAlt} />
                </span>
                Make an Admin
              </Button>
            </Link>
          </Box>
        )}
        <Link style={{ textDecoration: "none" }} to={`${url}/review`}>
          <Button
            sx={{ color: "#222", fontWeight: 700, fontSize: "14px" }}
            variant="text"
          >
            <span style={{ marginRight: "20px" }}>
              <FontAwesomeIcon sx={{ fontSize: "10px" }} icon={faStar} />
            </span>
            Review
          </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`${url}/pay`}>
          <Button
            sx={{ color: "#222", fontWeight: 700, fontSize: "14px" }}
            variant="text"
          >
            <span style={{ marginRight: "20px" }}>
              <FontAwesomeIcon sx={{ fontSize: "10px" }} icon={faMoneyBill} />
            </span>
            Payment
          </Button>
        </Link>
        <Button
          sx={{
            color: "#222",
            fontWeight: 700,
            fontSize: "14px",
            justifyContent: "flex-start",
          }}
          variant="text"
          onClick={logOut}
        >
          <span style={{ marginRight: "20px" }}>
            <FontAwesomeIcon
              sx={{ fontSize: "10px" }}
              icon={faArrowCircleLeft}
            />
          </span>
          LogOut
        </Button>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <MyOrder />
          </Route>
          <AdminRoute exact path={`${path}/addproduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageOrder`}>
            <AllOrder />
          </AdminRoute>
          <AdminRoute exact path={`${path}/makeanadmin`}>
            <MakeAdmin />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
