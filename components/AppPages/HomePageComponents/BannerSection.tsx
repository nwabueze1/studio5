import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NAVIGATIONLINKS } from "../../navigation/NavigationLinks";
import AppGridItem from "./AppGridItem";
import AppImage from "../../AppImage/AppImage";
import Banner from "../../../public/assets/Images/banner.webp";
const BannerSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container justifyContent="center" alignItems="center">
      <AppGridItem>
        <Typography
          variant={isMobile ? "h3" : "h1"}
          fontWeight="bold"
          color="navy"
        >
          Revolution In Printing
          <Typography fontWeight="bold" color="navy">
            Powered by Studio 5
          </Typography>
        </Typography>

        <Typography variant="caption" component="div">
          Priniting Made Easy. You can now do your printing Jobs at the Comfort
          of your House
        </Typography>
        <Stack direction="row" gap={theme.spacing(2)}>
          <Button variant="outlined" color="error" href={NAVIGATIONLINKS.PRINT}>
            Book Your Print Now
          </Button>
        </Stack>
      </AppGridItem>
      <AppGridItem>
        <AppImage Height="600" Url={Banner} Width="600"></AppImage>
      </AppGridItem>
    </Grid>
  );
};
export default BannerSection;
