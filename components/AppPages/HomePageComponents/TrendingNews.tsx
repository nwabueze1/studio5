import React, { ReactChild } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Blog } from "./Home.Service";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { IsMobile, UseTheme } from "./HOOKQUERY";
import Link from "next/link";
import Stack from "@mui/material/Stack";

interface Iprop {
  blogs: Blog[];
}
export default function TrendingNews({ blogs }: Iprop) {
  return (
    <React.Fragment>
      <RoundedHeading>latest news</RoundedHeading>

      <List sx={{ mt: 0 }}>
        {blogs.map((blog, index) => (
          <RenderTrendingNews
            title={blog.title}
            id={blog.id}
            key={index}
            author={blog.author}
            body={blog.body}
            datePosted={blog.datePosted}
          />
        ))}
      </List>
    </React.Fragment>
  );
}

const RenderTrendingNews = (prop: Blog) => {
  return (
    <Link href={`/blogs/${prop.id}`} >
      <Stack direction={"column"} sx={{":hover":{cursor:"pointer"}}}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          pt={1}
          lineHeight={1.19}
        >
          {prop.title}
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight="200"
          color="ButtonShadow"
          lineHeight={1.19}
          maxWidth={"50ch"}
          textOverflow="ellipsis"
          noWrap
          sx={{ lineClamp: 2 }}
        >
          {prop.body}
        </Typography>
        <Stack gap={5} direction="row">
          <Typography variant="subtitle2" color="gray">
            {prop.datePosted}
          </Typography>
          <Typography variant="subtitle2" color="gray">
            by - {prop.author}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};
interface IRoundedHeading {
  children: ReactChild;
  mt?: number;
}
export const RoundedHeading = ({ children, mt }: IRoundedHeading) => {
  return (
    <Typography
      variant={IsMobile() ? "h6" : "h2"}
      mt={mt ? mt : 4}
      color="ButtonText"
      fontWeight={"bolder"}
      textTransform={"uppercase"}
    >
      {children}
    </Typography>
  );
};
