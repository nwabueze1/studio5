import React from "react";
import Typography from "@mui/material/Typography";
import { IAppGridItem } from "../../footer/AppFooter";
import { IsMobile, UseTheme } from "./HOOKQUERY";

const AppHeading = ({ children }: IAppGridItem) => (
  <Typography
    variant={IsMobile() ? "h4" : "h2"}
    fontWeight={"800"}
    color="navy"
    sx={{ mt: UseTheme().spacing(5) }}
    textAlign={IsMobile() ? "center" : "left"}
    textTransform="capitalize"
  >
    {children}
  </Typography>
);
export default AppHeading;
