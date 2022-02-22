import React from "react";
import { RoundedHeading } from "./TrendingNews";
import ArchBiulding from "../../../public/assets/Images/wellawatte-visit-sri-lanka-gaur-yamuna-city-apartment-real-estate-building-9fa750db3715279d04e3c3ad24494455.webp";
import AppImage from "../../AppImage/AppImage";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const OurPatners = () => {
  const [details] = React.useState<string[]>([
    "Architecture",
    "Building",
    "Structural Engineering",
    "Surveying",
    "Project Management",
  ]);
  return (
    <>
      <RoundedHeading>Our patners</RoundedHeading>
      <Grid container>
        <Grid item xs={8} sm={6}>
          <Typography variant="subtitle1" mb={0} mt={2} fontWeight="bold">
            Heros Engineering Consult
          </Typography>
          {details.map((detail, index) => (
            <Typography
              variant="subtitle2"
              fontWeight="bolder"
              key={index}
              color="MenuText"
            >
              {index + 1}. {detail}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4} sm={6}>
          <AppImage
            Url={ArchBiulding}
            Height="250"
            Width="200"
            Alt="Image of a building"
          ></AppImage>
        </Grid>
      </Grid>
    </>
  );
};

export default OurPatners;
