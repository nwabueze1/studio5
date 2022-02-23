import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { ReactChild, ReactChildren } from "react";
import { Interface } from "readline";

export default function AppFooter() {
  const [officedays] = React.useState<string[]>([
    "Monday: 7am-6pm,Tuesday: 7am-6pm,Wednesday: 7am-6pm,Thursday: 7am-6pm,Friday: 7am-6pm, Saturday: 9am - 5pm",
  ]);
  return (
    <footer style={{ backgroundColor: "black" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        <Stack maxWidth={"30ch"} color={"white"}>
          <Typography variant="subtitle1" fontWeight={"bolder"} color="gold">
            Office Days and Time
          </Typography>
          <Typography variant="body2">Monday: 7am - 6pm</Typography>
          <Typography variant="body2">Monday: 7am - 6pm </Typography>
          <Typography variant="body2">Tuesday: 7am - 6pm </Typography>
          <Typography variant="body2">Wedne: 7am - 6pm </Typography>
          <Typography variant="body2">Monday: 7am - 6pm </Typography>
        </Stack>
        <Stack color={"white"} width={"30ch"}>
          <Typography variant="subtitle1" fontWeight={"bolder"} color="gold">
            Our Branches
          </Typography>
          <Typography variant="body2">
            Awka: @ Opposite Governosr lodge
          </Typography>
          <Typography variant="body2" lineHeight={1}>
            Agulu @ Opposite St. Anthony Catholic Comprehensive Institute Agulu.
          </Typography>
          <Typography variant="body2">
            Asaba @Ogwashi Ukwu Isele Azagba
          </Typography>
          <Typography variant="body2">
            Onitsha @ No 30 Benjamin Street Onitsha
          </Typography>
        </Stack>
        <Stack color={"white"} maxWidth={"30ch"}>
          <Typography variant="subtitle1" fontWeight={"bolder"} color="gold">
            Contact Info
          </Typography>
          <Typography variant="body2">Manager - 08038219501</Typography>
          <Typography variant="body2">Email: Studio5@mail.com </Typography>
          <Typography variant="body2">Customer Care - 08038219501 </Typography>
        </Stack>
        <Stack color={"white"} width={"30ch"}>
          <Typography variant="subtitle1" fontWeight={"bolder"} color="gold">
            About
          </Typography>
          <Typography variant="body2">FAQ</Typography>
          <Typography variant="body2">About Us</Typography>
          <Typography variant="body2">Who are We </Typography>
        </Stack>
      </div>

      <div>
        <Typography color="gold" textAlign={"center"}>
          Powered by Studio 5 &copy; 2022
        </Typography>
      </div>
    </footer>
  );
}

export interface IAppGridItem {
  children:
    | ReactChild
    | ReactChildren
    | ReactChild[]
    | ReactChildren[]
    | false
    | Element;
}
