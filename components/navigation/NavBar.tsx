import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavItem from "./NavItem";
import Toolbar from "@mui/material/Toolbar";
import VideoCameraBack from "@mui/icons-material/Videocam";

export default function NavBar() {
  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        <VideoCameraBack fontSize="large"></VideoCameraBack>
        <Typography variant="h5" sx={{ flexGrow: "1" }} fontWeight="bolder">
          Studio 5
        </Typography>
        <NavItem></NavItem>
      </Toolbar>
    </AppBar>
  );
}
