import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import AppImage from "../../AppImage/AppImage";
import { UseTheme } from "./HOOKQUERY";
import SuggestionImage from "../../../public/assets/Images/5bbc22957f7ed-a3e785ac2f2995060351779dfa72e084 (1).webp";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Send from "@mui/icons-material/Send";

export default function SuggestionBox() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: UseTheme().spacing(4),
      }}
    >
      <Card
        sx={{
          maxWidth: "900px",
          boxShadow: UseTheme().shadows[15],
          p: "2rem",
          pb: 0,
        }}
      >
        <Typography
          variant="h6"
          textAlign="center"
          color="inherit"
          textTransform="capitalize"
          sx={{ mb: "1rem" }}
        >
          How Can We Serve you better?
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <AppImage
              Url={SuggestionImage}
              Height="400"
              Width="400"
              Alt="image of a happy woman"
            ></AppImage>
          </Grid>
          <Grid item xs={12} sm={6} padding={3}>
            <Box component="form">
              <TextField
                placeholder="enter your email"
                required
                type="email"
                label="Your Email"
                margin="normal"
              ></TextField>
              <TextField
                multiline
                placeholder="send us message"
                required
                type="text"
                label="Message"
                rows={5}
                margin="normal"
              ></TextField>
              <br />
              <Button type="submit" endIcon={<Send></Send>} variant="outlined">
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
