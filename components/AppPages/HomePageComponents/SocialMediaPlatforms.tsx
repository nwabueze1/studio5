import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import WhatsappOutlined from "@mui/icons-material/WhatsappOutlined";
import YouTube from "@mui/icons-material/YouTube";
import Grid from "@mui/material/Grid";
import { SOCIALMEDIALINK } from "../SocialMediaLinks";
import GridItem from "./GridItem";

const OurSocialMediaPlaforms = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <GridItem
        Href={SOCIALMEDIALINK.YOUTUBE}
        Text="Youtube"
        Icon={<YouTube color="error" fontSize="large" />}
      />
      <GridItem
        Href={SOCIALMEDIALINK.FACEBOOK}
        Text="Facebook"
        Icon={<Facebook color="primary" fontSize="large" />}
      />
      <GridItem
        Href={SOCIALMEDIALINK.INSTAGRAM}
        Text="Instagram"
        Icon={<Instagram color="inherit" fontSize="large" />}
      />
      <GridItem
        Href={SOCIALMEDIALINK.WHATSAPP}
        Text="WhatsApp"
        Icon={<WhatsappOutlined color="success" fontSize="large" />}
      />
      <GridItem
        Href={SOCIALMEDIALINK.TWITTER}
        Text="Twitter"
        Icon={<Twitter color="primary" fontSize="large" />}
      />
    </Grid>
  );
};

export default OurSocialMediaPlaforms;
