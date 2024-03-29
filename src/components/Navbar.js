import * as React from "react";
import { useState } from "react";

import {
  AppBar,
  Badge,
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

import logo from "../assets/wfs-logo.png";

const pages = [
  "About",
  "Live",
  "Press",
  "Lyrics",
  "Behind The Song",
  "Merch",
  "Blog",
  "Stay Tuned",
];

const ResponsiveAppBar = ({ cart, iconLoading }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleLinkClick = (page) => {
    setAnchorElNav(null);
    navigate(`/${page.replace(/\s/g, "").toLowerCase()}`);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  console.log(window)
  const mobile = window.outerWidth < 500

  return (
    <AppBar position={mobile ? "fixed" : "sticky"} style={{
      backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            style={{ fontFamily: "Grotesque" }}
            variant="h5"
            noWrap
            component="div"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "space-between" },
              cursor: "pointer",
            }}
          >
            <img
              src={logo}
              style={{ height: "3em", width: "auto" }}
              alt="waiting for smith logo"
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: { md: "space-between" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleLinkClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => navigate("/")}
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              src={logo}
              style={{ height: "3em", width: "auto" }}
              alt="waiting for smith logo"
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "space-evenly" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleLinkClick(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {iconLoading ? <CircularProgress color="success" /> :
            <IconButton onClick={() => {
              navigate("/shoppingcart");
            }} style={{ color: "white" }}>
              <Badge
                color="error"
                badgeContent={cart?.total_items}
              >
                <ShoppingCartIcon

                />
              </Badge>
            </IconButton>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
