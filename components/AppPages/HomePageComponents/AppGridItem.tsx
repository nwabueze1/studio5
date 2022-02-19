import React from "react";
import Grid from "@mui/material/Grid";
import { IAppGridItem } from "../../footer/AppFooter";

const AppGridItem = ({ children }: IAppGridItem) => (
  <Grid item xs={12} sm={12} md={6} lg={6} width="100vw">
    {children}
  </Grid>
);
export default AppGridItem;
