import Notifications from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { NAVIGATIONLINKS } from "./NavigationLinks";
import AppDrawer from "./AppDrawer";
import Link from "next/link";
import Home from "@mui/icons-material/Home";

export default function NavItem() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack direction={"row"} spacing={isMobile ? "" : 2} color="black">
      {isMobile ? (
        <Stack direction="row">
          <Home fontSize="medium" component="a" href="/"></Home>
          <AppDrawer></AppDrawer>
        </Stack>
      ) : (
        <>
          <Link href={NAVIGATIONLINKS.HOME} passHref>
            Home
          </Link>
          <Link href={NAVIGATIONLINKS.PRINT} passHref>
            Print
          </Link>
          <Link href={NAVIGATIONLINKS.COVERAGE} passHref>
            Coverage
          </Link>
          <Link href={NAVIGATIONLINKS.VIDEOBOOKING} passHref>
            VideoCoverage
          </Link>
          <Link href={NAVIGATIONLINKS.BLOG} passHref>
            Blog
          </Link>
          <Link href={NAVIGATIONLINKS.ACCOUNT} passHref>
            Account
          </Link>
          <Link href={NAVIGATIONLINKS.NOTIFICATION} passHref>
            <Badge badgeContent={4} color="error">
              <Notifications></Notifications>
            </Badge>
          </Link>
        </>
      )}
    </Stack>
  );
}

interface IAppBadge {
  BadgeContent?: number | string;
}
export const AppBadge = ({ BadgeContent }: IAppBadge) => (
  <Badge badgeContent={BadgeContent} color="error">
    <Notifications></Notifications>
  </Badge>
);
