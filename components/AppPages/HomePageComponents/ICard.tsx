import MoreVert from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import AppImage from "../../AppImage/AppImage";
import { UseTheme } from "./HOOKQUERY";
import { ICardProps } from "./SocialMediaComponent";

const ICard = ({
  AvatarText,
  Title,
  statement,
  subHeader,
  ImageSrc,
  Alt,
  Height,
}: ICardProps) => (
  <Card sx={{ maxWidth: 345, boxShadow: UseTheme().shadows[15] }}>
    <CardHeader
      avatar={<Avatar sx={{ bgcolor: "red" }}>{AvatarText}</Avatar>}
      action={
        <IconButton>
          <MoreVert></MoreVert>
        </IconButton>
      }
      title={Title}
      subheader={subHeader}
    ></CardHeader>
    <AppImage Height={Height as string} Url={ImageSrc} Alt={Alt}></AppImage>
    <CardContent>
      <Typography variant="body2">{statement}</Typography>
    </CardContent>
    <CardActionArea>
      <Button size="small"> View More</Button>
    </CardActionArea>
  </Card>
);

export default ICard;
