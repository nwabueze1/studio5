import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import React from "react";
import TestimonialImage from "../../../public/assets/Images/black-girl-png-2.webp";
import AppImage from "../../AppImage/AppImage";
import { UseTheme } from "./HOOKQUERY";

export default function TestMonial() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          maxWidth: "900px",
          boxShadow: UseTheme().shadows[15],
          p: "2rem",
          pb: 0,
        }}
      >
        <Typography
          variant="h6"
          textAlign="center"
          color="inherit"
          textTransform="capitalize"
          sx={{ mb: "1rem" }}
        >
          what is our customers saying
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body1"
              component="q"
              fontStyle="italic"
              color="GrayText"
              width={400}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              vel perspiciatis perferendis deleniti, nemo fugiat. Rem nisi nobis
              explicabo deserunt perferendis
            </Typography>
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
      </Card>
    </Box>
  );
}
