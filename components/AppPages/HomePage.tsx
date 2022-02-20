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
import TrendingNews, {
  RoundedHeading,
} from "./HomePageComponents/TrendingNews";
import { Blog } from "./HomePageComponents/Home.Service";
interface Iprop {
  blog: Blog[];
}
export default function HomePage({ blog }: Iprop) {
  return (
    <Box sx={{ p: UseTheme().spacing(3) }}>
      <BannerSection></BannerSection>
      <RoundedHeading>What Do We Offer ?</RoundedHeading>

      <WhatWeDoSection></WhatWeDoSection>
      <TrendingNews blogs={blog}></TrendingNews>
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
