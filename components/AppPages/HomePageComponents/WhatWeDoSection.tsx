import React from "react";
import { IAppGridItem } from "../../footer/AppFooter";
import { IsMobile, UseTheme } from "./HOOKQUERY";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Print from "@mui/icons-material/Print";
import Typography from "@mui/material/Typography";
import Camera from "@mui/icons-material/Camera";
import Videocam from "@mui/icons-material/Videocam";
import OnlinePrediction from "@mui/icons-material/OnlinePrediction";

const WhatWeDoSection = () => {
  const GridItem = ({ children }: IAppGridItem) => (
    <>
      <Grid item xs={12} sm={4} md={3} lg={2} sx={{ mx: IsMobile() ? 7 : "" }}>
        {children}
      </Grid>
    </>
  );
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      gap={UseTheme().spacing(2)}
    >
      <GridItem>
        <Card sx={{ maxWidth: 200, p: "1px" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={
              IsMobile() ? UseTheme().spacing(0.1) : UseTheme().spacing(1)
            }
          >
            <Print fontSize="medium" color="success"></Print>
            <Typography
              variant={IsMobile() ? "body2" : "h5"}
              textAlign="center"
              color="green"
            >
              Quality Printing
            </Typography>
          </Stack>
          <Typography variant="body2" component="p" textAlign="center">
            We give state of the art printing Solution. In the least possible
            time
          </Typography>
        </Card>
      </GridItem>
      <GridItem>
        <Card sx={{ maxWidth: 200, p: "1px" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={
              IsMobile() ? UseTheme().spacing(0.1) : UseTheme().spacing(1)
            }
          >
            <Camera color="error"></Camera>
            <Typography
              variant={IsMobile() ? "body2" : "h5"}
              textAlign="center"
              color="error"
            >
              Event Coverage
            </Typography>
          </Stack>
          <Typography variant="body2" component="p" textAlign="center">
            Our Proffesional Camera men will handle your event with ease and
            maximum professionaloity
          </Typography>
        </Card>
      </GridItem>
      <GridItem>
        <Card sx={{ maxWidth: 200, p: "1px" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={
              IsMobile() ? "useTheme().spacing(0.1)" : UseTheme().spacing(1)
            }
          >
            <Videocam color="primary"></Videocam>
            <Typography
              variant={IsMobile() ? "body2" : "h5"}
              textAlign="center"
              color="primary"
            >
              Digital Studio
            </Typography>
          </Stack>
          <Typography variant="body2" component="p" textAlign="center">
            Experience First Class Treatment in Our Studios
          </Typography>
        </Card>
      </GridItem>
      <GridItem>
        <Card sx={{ maxWidth: 200, p: "1px" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={
              IsMobile() ? "useTheme().spacing(0.1)" : UseTheme().spacing(1)
            }
          >
            <OnlinePrediction color="success"></OnlinePrediction>
            <Typography
              variant={IsMobile() ? "body2" : "h5"}
              textAlign="center"
              color="green"
            >
              Live Broadcast
            </Typography>
          </Stack>
          <Typography variant="body2" component="p" textAlign="center">
            We Broadcast Your EVents in all Social Media Platforms
          </Typography>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default WhatWeDoSection;
