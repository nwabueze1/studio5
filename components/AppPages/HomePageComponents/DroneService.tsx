import { Typography } from "@mui/material";
import React from "react";
import { RoundedHeading } from "./TrendingNews";

const DroneService = () => {
  return (
    <div>
      <RoundedHeading>Drone service </RoundedHeading>
      <Typography variant="subtitle1" fontWeight={"bold"} lineHeight={1.17}>
        Are you a camera specialist, Hire Our state of the art drones to make
        your event stand out
      </Typography>
      <Subtitle text=" 1st Generation Drones @ N50,000"></Subtitle>
      <Subtitle text=" 2nd Generation Drones @ N40,000"></Subtitle>
      <Subtitle text="3rd Generation Drones @ N35,000"></Subtitle>
    </div>
  );
};

export default DroneService;

interface ISubtitle {
  text: string;
}
const Subtitle = ({ text }: ISubtitle) => (
  <Typography variant={"subtitle2"} color="gray">
    {text}
  </Typography>
);
