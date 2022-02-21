import React, { ReactChild } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Print from "@mui/icons-material/Print";
import Typography from "@mui/material/Typography";
import { NAVIGATIONLINKS } from "./NavigationLinks";
import Camera from "@mui/icons-material/Camera";
import Videocam from "@mui/icons-material/Videocam";
import Newspaper from "@mui/icons-material/Newspaper";
import Person from "@mui/icons-material/Person";
import { AppBadge } from "./NavItem";
import Home from "@mui/icons-material/Home";
export default function AppDrawer() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClick = () => setIsOpen(false);

  return (
    <>
      <SwipableDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        anchor="right"
      >
        <List>
          <ListItem
            sx={{ backgroundColor: "rgba(0,0,0,0.4)", height: "150px" }}
          ></ListItem>

          <AppListItem
            Href={NAVIGATIONLINKS.PRINT}
            ListIcon={<Print></Print>}
            OnClick={handleClick}
          >
            Print
          </AppListItem>
          <AppListItem
            Href={NAVIGATIONLINKS.COVERAGE}
            ListIcon={<Camera></Camera>}
            OnClick={handleClick}
          >
            Coverage
          </AppListItem>
          <AppListItem
            Href={NAVIGATIONLINKS.VIDEOBOOKING}
            ListIcon={<Videocam></Videocam>}
            OnClick={handleClick}
          >
            Video Coverage
          </AppListItem>
          <AppListItem
            Href={NAVIGATIONLINKS.BLOG}
            ListIcon={<Newspaper></Newspaper>}
            OnClick={handleClick}
          >
            Blogs
          </AppListItem>
          <AppListItem
            Href={NAVIGATIONLINKS.ACCOUNT}
            ListIcon={<Person></Person>}
            OnClick={handleClick}
          >
            Account
          </AppListItem>
          <AppListItem
            Href={NAVIGATIONLINKS.NOTIFICATION}
            ListIcon={<AppBadge BadgeContent={8}></AppBadge>}
            OnClick={handleClick}
          >
            Notifications
          </AppListItem>
        </List>
      </SwipableDrawer>
      <IconButton color="inherit" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon color="inherit" fontSize="large"></MenuIcon>
      </IconButton>
    </>
  );
}

interface IListProp {
  children: ReactChild | string;
  ListIcon: JSX.Element;
  Href: NAVIGATIONLINKS;
  OnClick: () => void;
}
const AppListItem = ({ Href, ListIcon, children, OnClick }: IListProp) => (
  <ListItem button href={Href} onClick={OnClick}>
    <ListItemIcon>{ListIcon}</ListItemIcon>
    <Typography
      variant="body1"
      component="a"
      href={Href}
      sx={{ textDecoration: "none", color: "inherit" }}
    >
      {children}
    </Typography>
  </ListItem>
);
