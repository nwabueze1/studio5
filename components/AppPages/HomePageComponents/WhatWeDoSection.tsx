import React, { ReactChild } from "react";
import Typography from "@mui/material/Typography";
import { RoundedHeading } from "./TrendingNews";
import Grid from "@mui/material/Grid";

function WhatWeDoSection() {
  return (
    <div>
      <RoundedHeading>our services</RoundedHeading>
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <Text
            primary="printing services"
            secondary="Design/Print/Sketch/Laminate"
          />
        </Grid>
        <Grid item>
          <Text
            primary="Digital Studio"
            secondary="Birthday Pictures/ Pre Wedding Shots / Personal Pictures"
          />
        </Grid>
        <Grid item>
          <Text
            primary="Event Coverage"
            secondary="Wedding Coverage/ Burial Ceremony/ Live Event Streaming "
          />
        </Grid>
        <Grid item>
          <Text
            primary="BroadCasting"
            secondary="Live Youtube Broadcast/ Facebook Broadcast"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default WhatWeDoSection;

interface IProps {
  primary: string;
  secondary: string;
}
const Text = ({ primary, secondary }: IProps) => (
  <>
    <Typography
      variant={"subtitle1"}
      fontWeight="bold"
      textTransform={"capitalize"}
      maxWidth="50ch"
      mt={1}
    >
      {primary}
    </Typography>
    <Typography variant="subtitle2" maxWidth="50ch" color={"GrayText"}>
      {secondary}
    </Typography>
  </>
);
