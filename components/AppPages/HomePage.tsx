import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BannerSection from "./HomePageComponents/BannerSection";
import WhatWeDoSection from "./HomePageComponents/WhatWeDoSection";
import OurSocialMediaPlaforms from "./HomePageComponents/SocialMediaPlatforms";
import { IsMobile, UseTheme } from "./HomePageComponents/HOOKQUERY";
import CareerInModelling from "./HomePageComponents/CareerInModelling";
import TestMonial from "./HomePageComponents/TestMonial";
import SuggestionBox from "./HomePageComponents/SuggestionBox";
export default function HomePage() {
  return (
    <Box sx={{ p: UseTheme().spacing(3) }}>
      <BannerSection></BannerSection>
      <Typography
        variant={IsMobile() ? "h4" : "h2"}
        fontWeight={"800"}
        textAlign={IsMobile() ? "center" : "left"}
        color="navy"
        sx={{ mt: "3rem" }}
      >
        What Do We Offer ?
      </Typography>
      <WhatWeDoSection></WhatWeDoSection>
      <CareerInModelling></CareerInModelling>
      <TestMonial></TestMonial>

      <SuggestionBox></SuggestionBox>
      <Typography
        variant={IsMobile() ? "h4" : "h2"}
        fontWeight={"800"}
        color="navy"
        textAlign={IsMobile() ? "center" : "left"}
        sx={{ mt: UseTheme().spacing(5) }}
      >
        Our Social Media Platforms
      </Typography>
      <OurSocialMediaPlaforms></OurSocialMediaPlaforms>
    </Box>
  );
}
