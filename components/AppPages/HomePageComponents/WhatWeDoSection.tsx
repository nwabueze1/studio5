import React from "react";
import { IAppGridItem } from "../../footer/AppFooter";
import { IsMobile, UseTheme } from "./HOOKQUERY";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Print from "@mui/icons-material/Print";
import Typography from "@mui/material/Typography";
import Camera from "@mui/icons-material/Camera";
import Videocam from "@mui/icons-material/Videocam";
import OnlinePrediction from "@mui/icons-material/OnlinePrediction";

const WhatWeDoSection = () => {
  const GridItem = ({ children }: IAppGridItem) => (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        lg={2}
        sx={{
          mb: 2,
          border: "1px solid lightgray",
          borderRadius: "10px",
          p: 2,
        }}
      >
        {children}
      </Grid>
    </>
  );
  return (
    <Grid container justifyContent="space-evenly" alignItems="center" gap={2}>
      <GridItem>
        <Stack
          direction="row"
          alignItems="center"
          spacing={IsMobile() ? UseTheme().spacing(0.1) : UseTheme().spacing(1)}
        >
          <Print fontSize="medium"></Print>
          <Typography variant={IsMobile() ? "body2" : "h5"} textAlign="center">
            Printing
          </Typography>
        </Stack>
        <Typography variant="body2" component="p">
          We give state of the art printing Solution. In the least possible time
        </Typography>
      </GridItem>
      <GridItem>
        <Stack
          direction="row"
          alignItems="center"
          spacing={IsMobile() ? UseTheme().spacing(0.1) : UseTheme().spacing(1)}
        >
          <Camera></Camera>
          <Typography variant={IsMobile() ? "body2" : "h5"}>
            Coverage
          </Typography>
        </Stack>
        <Typography variant="body2" component="p">
          Our Proffesional Camera men will handle your event with ease and
          maximum professionaloity
        </Typography>
      </GridItem>
      <GridItem>
        <>
          <Stack
            direction="row"
            alignItems="center"
            spacing={
              IsMobile() ? "useTheme().spacing(0.1)" : UseTheme().spacing(1)
            }
          >
            <Videocam></Videocam>
            <Typography variant={IsMobile() ? "body2" : "h5"}>
              Digital Studio
            </Typography>
          </Stack>
          <Typography variant="body2" component="p">
            Experience First Class Treatment in Our Studios
          </Typography>
        </>
      </GridItem>
      <GridItem>
        <Stack
          direction="row"
          alignItems="center"
          spacing={
            IsMobile() ? "useTheme().spacing(0.1)" : UseTheme().spacing(1)
          }
        >
          <OnlinePrediction></OnlinePrediction>
          <Typography variant={IsMobile() ? "body2" : "h5"} textAlign="center">
            Broadcast
          </Typography>
        </Stack>
        <Typography variant="body2" component="p">
          We Broadcast Your EVents in all Social Media Platforms
        </Typography>
      </GridItem>
    </Grid>
  );
};

export default WhatWeDoSection;
