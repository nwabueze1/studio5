import React, { ReactChild } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Blog } from "./Home.Service";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { IsMobile } from "./HOOKQUERY";
import Link from "next/link";

interface Iprop {
  blogs: Blog[];
}
export default function TrendingNews({ blogs }: Iprop) {
  return (
    <React.Fragment>
      <RoundedHeading>Trending News</RoundedHeading>
      <List sx={{ mt: 0 }}>
        {blogs.map((blog, index) => (
          <ListItem key={index}>
            <Link href={`/blogs/${blog.id}`}>
              <ListItemText
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                  },
                  transition: " textDecoration 2s",
                  width: 900,
                }}
                key={index}
                primary={blog.title}
                secondary={blog.body}
              ></ListItemText>
            </Link>
            <Divider></Divider>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

interface IRoundedHeading {
  children: ReactChild;
}
export const RoundedHeading = ({ children }: IRoundedHeading) => {
  return (
    <Typography
      variant={IsMobile() ? "h4" : "h2"}
      component="h6"
      textAlign={IsMobile() ? "center" : "left"}
      mt={4}
      mb={2}
      color="white"
      p={IsMobile() ? 1 : 5}
      bgcolor="navy"
      borderRadius={IsMobile() ? 20 : 15}
      maxWidth={IsMobile() ? 480 : 600}
    >
      {children}
    </Typography>
  );
};
