import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { IsMobile } from "./HOOKQUERY";
import { IScoialMediaComponent } from "./SocialMediaComponent";

const GridItem = ({ Href, Icon, Text }: IScoialMediaComponent) => (
  <Grid item xs={2.4}>
    <IconButton href={Href} target="_blank">
      {Icon}
    </IconButton>
    {!IsMobile() && <Typography variant="body2">{Text}</Typography>}
  </Grid>
);
export default GridItem;
