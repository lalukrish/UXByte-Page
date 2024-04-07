"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Image from "next/image";
import { BsSun } from "react-icons/bs";

const pages = ["About", "Why Us", "Work", "Services", "Lets talk"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({
  whyusLocation,
  servicesLocation,
  aboutUsLocation,
  workLocation,
  workLetstalk,
}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: "#0f0f0f" }}
      >
        <Container maxWidth="xl ">
          <Toolbar disableGutters>
            <Image
              src="https://res.cloudinary.com/dvjjzsilz/image/upload/v1711783336/e5c19dbcnmyg9h682icc.png"
              alt=" Logo"
              width={140}
              height={40}
            />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                justifyContent: "flex-end",
                textTransform: "none",
              }}
            >
              <Button
                onClick={aboutUsLocation}
                sx={{ mx: 2, color: "white", textTransform: "none" }}
              >
                About
              </Button>
              <Button
                onClick={whyusLocation}
                sx={{ mx: 2, color: "white", textTransform: "none" }}
              >
                Why Us
              </Button>
              <Button
                onClick={workLocation}
                sx={{ mx: 2, color: "white", textTransform: "none" }}
              >
                Work
              </Button>
              <Button
                onClick={servicesLocation}
                sx={{ mx: 2, color: "white", textTransform: "none" }}
              >
                Services
              </Button>
              <Button
                onClick={workLetstalk}
                sx={{ mx: 2, color: "white", textTransform: "none" }}
              >
                Lets talk
              </Button>
              <IconButton
                aria-label="theme change"
                color="inherit"
                onClick={handleOpenUserMenu}
              >
                <BsSun className="ml-4" />
              </IconButton>
              <Button
                color="inherit"
                className="text-black bg-white px-6 h-10 my-2  ml-16 "
                sx={{ borderRadius: "0.5rem", textTransform: "none" }}
              >
                Let's Connect
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                justifyContent: "flex-end",
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{ textTransform: "none" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navbar;
