import Grid from "@mui/material/Grid";
import React from "react";
import AppImage from "../../AppImage/AppImage";
import ModelImage from "../../../public/assets/Images/25-259307_afro-girl-png-black-girl-png.webp";
import Typography from "@mui/material/Typography";
import { IsMobile, UseTheme } from "./HOOKQUERY";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
export default function CareerInModelling() {
  const ImageSize = IsMobile() ? "300" : "600";
  return (
    <>
      <Typography
        variant={IsMobile() ? "h6" : "h3"}
        color="navy"
        textTransform="capitalize"
        sx={{ mt: UseTheme().spacing(7), mb: UseTheme().spacing(2) }}
        textAlign="center"
      >
        Pursue a career in modelling
      </Typography>
      <Grid container justifyContent="center">
        <Grid item sm={12} md={6}>
          <AppImage
            Url={ModelImage}
            Alt="Image of an afro black model"
            Height={ImageSize}
            Width={ImageSize}
          />
        </Grid>
        <Grid item sm={12} md={6} alignSelf="flex-start" width={500}>
          <Typography
            variant="h6"
            component="q"
            color="GrayText"
            fontStyle="italic"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            maiores sed dignissimos id doloribus nam placeat. Saepe, quae
            consectetur iste assumenda reprehenderit tempore ex facere amet
            nostrum nemo unde quod est quis enim et incidunt? Veritatis
            voluptatibus quis magnam id tenetur nam ullam error, aperiam nihil
            ut, quae quod! Vero!
          </Typography>
          <List>
            <AppListItem
              ListTitle="  Modelling Training"
              ListBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                dicta autem doloribus voluptate sed? Accusantium iure et
                voluptatem reprehenderit earum."
              ListButtonTex="Register"
              EnableDivider
            />
            <AppListItem
              ListTitle=" Do You want to become our model?"
              ListBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                dicta autem doloribus voluptate sed? Accusantium iure et
                voluptatem reprehenderit"
              ListButtonTex="Apply"
              EnableDivider
            />
            <AppListItem
              ListTitle="High Quality Graphics"
              ListBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                dicta autem doloribus voluptate sed? Accusantium iure et
                voluptatem reprehenderit earum."
              ListButtonTex=""
            />
          </List>
        </Grid>
      </Grid>
    </>
  );
}

interface Iprop {
  ListTitle: string;
  ListBody: string;
  ListButtonTex: string;
  OnButtonClick?: () => void;
  EnableDivider?: boolean;
}
const AppListItem = ({
  ListBody,
  ListButtonTex,
  ListTitle,
  OnButtonClick,
  EnableDivider = false,
}: Iprop) => {
  return (
    <>
      <ListItem>
        <ListItemText>
          <Typography variant="h6" color="gray">
            {ListTitle}
          </Typography>
          <Typography variant="body1" color="gray">
            {ListBody}
          </Typography>
          <Button variant="outlined" color="primary" onClick={OnButtonClick}>
            {ListButtonTex}
          </Button>
        </ListItemText>
      </ListItem>
      {EnableDivider && <Divider></Divider>}
    </>
  );
};
