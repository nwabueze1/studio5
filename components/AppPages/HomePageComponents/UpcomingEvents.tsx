import { List, ListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { IsMobile } from "./HOOKQUERY";
import { RoundedHeading } from "./TrendingNews";

export default function UpcomingEvents() {
  const [offers, setOffers] = React.useState<string[]>([
    "  Video Coverage / Drone Service @ N150,000",
    "Premium Event Coverage @200,000",
    "Normal Coverage @50,000",
    "OutDoor Camera Shoot @8,000",
    "Studio Shot @500",
  ]);
  return (
    <>
      <RoundedHeading>video coverage</RoundedHeading>

      <video
        src="https://youtube.com/incinoman"
        height="auto"
        controls
        loop={false}
        width="100%"
      >
        Sorry this feature is not supported by your browser
      </video>
      <Typography variant="h5" mb={0} mt={2} fontWeight="bold">
        Cheapest Offers
      </Typography>
      {offers.map((offer, index) => (
        <Typography variant="subtitle1" key={index}>
          {index + 1}. {offer}
        </Typography>
      ))}
    </>
  );
}
