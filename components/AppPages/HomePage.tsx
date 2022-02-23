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
import UpcomingEvents from "./HomePageComponents/UpcomingEvents";
import OurPatners from "./HomePageComponents/OurPatners";
import DroneService from "./HomePageComponents/DroneService";
import BeOurCameraMan from "./HomePageComponents/BeOurCameraMan";
import CarouselSection from "./HomePageComponents/CarouselSection";
interface Iprop {
  blog: Blog[];
}
export default function HomePage({ blog }: Iprop) {
  const [blogs] = React.useState<Blog[]>(blog);
  return (
    <Box sx={{ p: UseTheme().spacing(3) }}>
      <CarouselSection></CarouselSection>
      <BannerSection></BannerSection>
      <WhatWeDoSection></WhatWeDoSection>
      <DroneService></DroneService>
      <BeOurCameraMan></BeOurCameraMan>
      <CareerInModelling></CareerInModelling>
      <TrendingNews blogs={blogs}></TrendingNews>
      <UpcomingEvents></UpcomingEvents>
      <TestMonial></TestMonial>
      <OurPatners></OurPatners>
      <OurSocialMediaPlaforms></OurSocialMediaPlaforms>
      <SuggestionBox></SuggestionBox>
    </Box>
  );
}
