import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppGridItem from "./AppGridItem";
import AppImage from "../../AppImage/AppImage";
import Banner from "../../../public/assets/Images/banner.webp";
import { RoundedHeading } from "./TrendingNews";
const BannerSection = () => {
  const theme = useTheme();
  return (
    <Grid container justifyContent="center" alignItems="center">
      <AppGridItem>
        <RoundedHeading>Revolution In Printing</RoundedHeading>

        <Typography fontWeight="bold" color="Background" variant="subtitle1">
          Powered by Studio 5
        </Typography>

        <Typography variant="subtitle2">
          Priniting Made Easy. You can now do your printing Jobs at the Comfort
          of your House
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ color: "white !important" }}
        >
          Book Now
        </Button>
      </AppGridItem>
      <AppGridItem>
        {!useMediaQuery(useTheme().breakpoints.down("md")) && (
          <AppImage Height="600" Url={Banner} Width="600"></AppImage>
        )}
      </AppGridItem>
    </Grid>
  );
};
export default BannerSection;
