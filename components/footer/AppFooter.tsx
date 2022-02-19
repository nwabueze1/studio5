import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React, { ReactChild, ReactChildren } from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Camera from "@mui/icons-material/Camera";
import LocationCity from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Call";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { IsMobile } from "../AppPages/HomePageComponents/HOOKQUERY";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
}));

enum TEXTCOLOR {
  WHITE = "white",
  YELLOW = "yellow",
}
export default function AppFooter() {
  return (
    <Paper sx={{ bgcolor: "black" }}>
      <Box sx={{ width: "100%", px: "2rem", pt: "0.5rem" }}>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          {!IsMobile() && (
            <AppGridItem>
              <Stack
                direction="row"
                textAlign="center"
                color={TEXTCOLOR.YELLOW}
              >
                <Camera fontSize="large"></Camera>
                <Typography variant="h6" component="span">
                  POWERED BY STUDIO 5
                </Typography>
              </Stack>
            </AppGridItem>
          )}
          <AppGridItem>
            <Typography variant="h5" component="div" color={TEXTCOLOR.YELLOW}>
              Our Branches <LocationCity></LocationCity>
            </Typography>
            <Stack direction="column" color={TEXTCOLOR.WHITE}>
              <Typography variant="body1">
                Asaba @ No 03 Benjamib Street Iselleuku
              </Typography>
              <Typography variant="body1">
                Onitsha @ No 13 New Market Road Opp. Church Road
              </Typography>
              <Typography variant="body1" component="div">
                Awka @ Rev Avenue, Governors Lodge
              </Typography>
              <Typography variant="body1" component="div">
                Agulu @ Nwagu, Opp. St Anthony School, Agulu
              </Typography>
            </Stack>
          </AppGridItem>
          <AppGridItem>
            <Typography variant="h6" component="div" color={TEXTCOLOR.YELLOW}>
              Contact US <Phone></Phone>
            </Typography>
            <Stack direction="column" color={TEXTCOLOR.WHITE}>
              <Typography variant="body1" component="div">
                +2349087546
              </Typography>
              <Typography variant="body2">+2349087546</Typography>
              <Typography variant="body2">Email: mediaHub@gmail.com</Typography>
              <Typography variant="body2">info@ymail.com</Typography>
              <Typography variant="body2">
                Office Hours: Mon-Sat : 07:00-20:00
              </Typography>
            </Stack>
          </AppGridItem>
          <AppGridItem>
            <Typography variant="h6" component="div" color={TEXTCOLOR.YELLOW}>
              About US
            </Typography>
            <Stack direction="column" color={TEXTCOLOR.WHITE}>
              <Typography
                variant="body2"
                component="a"
                href="mailto://heros@gmail.com"
              >
                Send Us Mail
              </Typography>
              <Typography variant="body2">Item 2</Typography>
              <Typography variant="body2">Item 2</Typography>
              <Typography variant="body2">Item 2</Typography>
              <Typography variant="body2">Item 2</Typography>
            </Stack>
          </AppGridItem>
        </Grid>
      </Box>
      <Typography
        variant="body1"
        component="div"
        color="gold"
        textAlign="center"
      >
        studio5.com &copy;2022
      </Typography>
    </Paper>
  );
}

export interface IAppGridItem {
  children:
    | ReactChild
    | ReactChildren
    | ReactChild[]
    | ReactChildren[]
    | string;
}
const AppGridItem = ({ children }: IAppGridItem) => (
  <Grid item xs={12} sm={6} md={3} lg={3}>
    <Item>{children}</Item>
  </Grid>
);
