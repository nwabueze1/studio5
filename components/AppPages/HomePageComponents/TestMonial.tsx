import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React, { ReactChild } from "react";
import TestimonialImage from "../../../public/assets/Images/black-girl-png-2.webp";
import AppImage from "../../AppImage/AppImage";
import { RoundedHeading } from "./TrendingNews";

export default function TestMonial() {
  return (
    <>
      <RoundedHeading> Testimonials</RoundedHeading>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Text>
            I am very happy to have worked with studio 5, their srevices are top
            notch. They wil make you feel like a king. They reduced some of my
            worries by their timely delivery and response. I recommend them for
            anyone doing any kind of event
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            facilis molestias cum ut mollitia! Voluptates sed ratione quasi
            corrupti consequatur, nihil soluta porro, dicta rerum, sequi iusto
            qui exercitationem minus totam. Voluptate incidunt nemo nam! Ipsum
            minima illum veniam corrupti!
          </Text>
          <Typography
            variant="subtitle1"
            fontWeight="bolder"
            color={"ThreeDFace"}
            width="50ch"
          ></Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppImage
            Url={TestimonialImage}
            Height="400"
            Width="400"
            Alt="image of a happy woman"
          ></AppImage>
        </Grid>
      </Grid>
    </>
  );
}
interface Iprop {
  children: ReactChild;
}
const Text = ({ children }: Iprop) => {
  return (
    <Typography
      variant="subtitle1"
      fontWeight="bolder"
      color={"ThreeDFace"}
      maxWidth="50ch"
    >
      {children}
    </Typography>
  );
};
