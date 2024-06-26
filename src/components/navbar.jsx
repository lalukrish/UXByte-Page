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
import { useEffect, useState } from "react";
import Image from "next/image";
import { BsSun, BsMoon } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const pages = ["About", "Why Us", "Work", "Services", "Lets talk"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({
  whyusLocation,
  servicesLocation,
  aboutUsLocation,
  workLocation,
  workLetstalk,
  toggleTheme,
  theme,
}) => {
  const router = useRouter();
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

  const textColor = theme === "light" ? "text-black" : "text-white";
  const buttonColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const backgroundColor = theme === "light" ? "bg-white" : "bg-[#0f0f0f]"; // Adjust background color based on theme
  const LogoChange =
    theme === "light" ? "/assets/black.svg" : "/assets/white.svg";

  const colorsChangeButton =
    theme === "light" ? "bg-black text-white" : "bg-white text-black";

  const handleConnect = () => {
    router.push("/contact-us");
  };

  return (
    <div className={`${textColor} ${backgroundColor}`}>
      <div className="">
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: theme === "light" ? "white" : "#0f0f0f" }} // Directly apply the conditional logic
        >
          <Container maxWidth="xl ">
            <Toolbar disableGutters>
              <Image src={LogoChange} alt=" Logo" width={100} height={40} />
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
                  sx={{
                    mx: 2,
                    color: theme === "light" ? "black" : "white",
                    textTransform: "none",
                    boxShadow: "none !important", // Remove box shadow
                    "&:hover": {
                      color: "rgb(220, 20, 60)", // Text color change on hover
                    },
                    "&.MuiButton-root:hover": {
                      backgroundColor: "transparent", // Remove hover background color
                    },
                    "&.MuiButton-root:focus": {
                      outline: "none", // Remove focus outline
                    },
                  }}
                >
                  About
                </Button>
                <Button
                  onClick={whyusLocation}
                  sx={{
                    mx: 2,
                    color: theme === "light" ? "black" : "white",
                    textTransform: "none",
                    boxShadow: "none !important", // Remove box shadow
                    "&:hover": {
                      color: "rgb(220, 20, 60)", // Text color change on hover
                    },
                    "&.MuiButton-root:hover": {
                      backgroundColor: "transparent", // Remove hover background color
                    },
                    "&.MuiButton-root:focus": {
                      outline: "none", // Remove focus outline
                    },
                  }}
                >
                  Why Us
                </Button>

                <Button
                  onClick={workLocation}
                  sx={{
                    mx: 2,
                    color: theme === "light" ? "black" : "white",
                    textTransform: "none",
                    boxShadow: "none !important", // Remove box shadow
                    "&:hover": {
                      color: "rgb(220, 20, 60)", // Text color change on hover
                    },
                    "&.MuiButton-root:hover": {
                      backgroundColor: "transparent", // Remove hover background color
                    },
                    "&.MuiButton-root:focus": {
                      outline: "none", // Remove focus outline
                    },
                  }}
                >
                  Work
                </Button>
                <Button
                  onClick={servicesLocation}
                  sx={{
                    mx: 2,
                    color: theme === "light" ? "black" : "white",
                    textTransform: "none",
                    boxShadow: "none !important", // Remove box shadow
                    "&:hover": {
                      color: "rgb(220, 20, 60)", // Text color change on hover
                    },
                    "&.MuiButton-root:hover": {
                      backgroundColor: "transparent", // Remove hover background color
                    },
                    "&.MuiButton-root:focus": {
                      outline: "none", // Remove focus outline
                    },
                  }}
                >
                  Services
                </Button>
                <Button
                  onClick={workLetstalk}
                  sx={{
                    mx: 2,
                    color: theme === "light" ? "black" : "white",
                    textTransform: "none",
                    boxShadow: "none !important", // Remove box shadow
                    "&:hover": {
                      color: "rgb(220, 20, 60)", // Text color change on hover
                    },
                    "&.MuiButton-root:hover": {
                      backgroundColor: "transparent", // Remove hover background color
                    },
                    "&.MuiButton-root:focus": {
                      outline: "none", // Remove focus outline
                    },
                  }}
                >
                  Lets talk
                </Button>

                <motion.div
                  whileTap={{
                    rotate: [0, -30, 30, -30, 30, -30, 30, 0], // Rotate back and forth like a cracker
                    transition: { duration: 0.5 }, // Control the duration of the animation
                  }}
                >
                  <IconButton
                    aria-label="theme change"
                    color="inherit"
                    onClick={toggleTheme}
                    sx={{
                      py: 2,
                      px: 1,
                      position: "relative", // Ensure relative positioning for the container
                      "&:hover .icon-container": {
                        // Apply styles to the icon container on hover
                        justifyContent: "center",
                      },
                    }}
                    disableRipple // Disable ripple effect on click
                  >
                    <div className="icon-container">
                      {" "}
                      {/* Container for the icon */}
                      {theme === "light" ? (
                        <BsMoon className="ml-4 text-black" />
                      ) : (
                        <BsSun className="ml-4" />
                      )}
                    </div>
                  </IconButton>
                </motion.div>

                <Button
                  color="inherit"
                  className={`${colorsChangeButton} px-6 h-10 my-2 ml-16`}
                  sx={{
                    borderRadius: "0.5rem",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#424258 !important",
                    },
                    "&:active": {
                      backgroundColor: "white !important",
                    },
                  }}
                  onClick={handleConnect}
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
                  aria-label="theme change"
                  color="inherit"
                  onClick={toggleTheme}
                  sx={{
                    py: 2,
                    px: 1,

                    "&:hover": {
                      boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
                      justifyContent: "center",
                    },
                  }}
                >
                  {theme === "light" ? (
                    <BsSun className="ml-4   text-black " />
                  ) : (
                    <BsMoon className="ml-4" />
                  )}
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color={theme === "light" ? "black" : "inherit"}
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
                  {/* {pages.map((page) => ( */}
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{
                      flexDirection: "column",
                      display: "flex",
                      width: "400px",
                      backgroundColor: "transparent",
                    }}
                  >
                    {/* <Typography textAlign="center" sx={{ textTransform: "none" }}> */}
                    {/* {page} */}

                    {/* </Typography> */}
                    <Button
                      onClick={aboutUsLocation}
                      sx={{ mx: 2, color: "black", textTransform: "none" }}
                    >
                      About
                    </Button>
                    <Button
                      onClick={whyusLocation}
                      sx={{ mx: 2, color: "black", textTransform: "none" }}
                    >
                      Why Us
                    </Button>
                    <Button
                      onClick={workLocation}
                      sx={{ mx: 2, color: "black", textTransform: "none" }}
                    >
                      Work
                    </Button>
                    <Button
                      onClick={servicesLocation}
                      sx={{ mx: 2, color: "black", textTransform: "none" }}
                    >
                      Services
                    </Button>
                    <Button
                      onClick={workLetstalk}
                      sx={{ mx: 2, color: "black", textTransform: "none" }}
                    >
                      Lets talk
                    </Button>
                  </MenuItem>
                  {/* ))} */}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
  );
};
export default Navbar;
