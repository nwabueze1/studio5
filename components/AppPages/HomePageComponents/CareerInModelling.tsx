import React from "react";
import Grid from "@mui/material/Grid";
import AppImage from "../../AppImage/AppImage";
import ModelImage from "../../../public/assets/Images/25-259307_afro-girl-png-black-girl-png.webp";
import Typography from "@mui/material/Typography";
import { IsMobile } from "./HOOKQUERY";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { RoundedHeading } from "./TrendingNews";
export default function CareerInModelling() {
  const Mobile = IsMobile();
  const ImageSize = Mobile ? "300" : "600";

  return (
    <Grid container justifyContent={"center"} mt={4}>
      <Grid xs={12} item sm={6} md={6}>
        <AppImage
          Url={ModelImage}
          Alt="Image of an afro black model"
          Height={ImageSize}
          Width={ImageSize}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <RoundedHeading mt={1}>career in modelling</RoundedHeading>
        <Typography
          mt={Mobile ? 0 : 2}
          maxWidth={"50ch"}
          variant={Mobile ? "subtitle1" : "h6"}
          lineHeight={1.19}
          textTransform="capitalize"
          color={"ThreeDShadow"}
          fontWeight="bolder"
        >
          are you a model or you want to become one join our team of experts and
          advisers and make it big
        </Typography>
        <List>
          <ListItem divider sx={{ pl: 0 }}>
            <Typography
              variant="subtitle1"
              lineHeight={1.18}
              color={"ThreeDShadow"}
            >
              Come Let&apos;s train you to become a professional model with our
              team of Experts
            </Typography>
          </ListItem>
          <ListItem divider sx={{ pl: 0 }}>
            <Typography
              variant="subtitle1"
              lineHeight={1.18}
              color={"ThreeDShadow"}
            >
              Join Our team of models and explore the world together
            </Typography>
          </ListItem>
          <ListItem divider>
            <Button variant="contained" color="error" sx={{ ml: 0 }}>
              Apply Now
            </Button>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
