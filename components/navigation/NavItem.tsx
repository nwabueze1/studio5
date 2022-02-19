import Notifications from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import React from "react";
import { useTheme, useMediaQuery, Button } from "@mui/material";
import { NAVIGATIONLINKS } from "./NavigationLinks";
import AppDrawer from "./AppDrawer";

export default function NavItem() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack direction={"row"} spacing={isMobile ? "" : 2} color="black">
      {isMobile ? (
        <Stack direction="row">
          <Button color="error" href={NAVIGATIONLINKS.ACCOUNT}>
            Account
          </Button>
          <AppDrawer></AppDrawer>
        </Stack>
      ) : (
        <>
          <Link underline="none" href={NAVIGATIONLINKS.PRINT} color="inherit">
            Print
          </Link>
          <Link
            underline="none"
            href={NAVIGATIONLINKS.COVERAGE}
            color="inherit"
          >
            Coverage
          </Link>
          <Link
            underline="none"
            href={NAVIGATIONLINKS.VIDEOBOOKING}
            color="inherit"
          >
            VideoCoverage
          </Link>
          <Link underline="none" href={NAVIGATIONLINKS.BLOG} color="inherit">
            Blog
          </Link>
          <Link underline="none" href={NAVIGATIONLINKS.ACCOUNT} color="inherit">
            Account
          </Link>
          <Link
            underline="none"
            href={NAVIGATIONLINKS.NOTIFICATION}
            color="inherit"
          >
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
