import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import AppImage from "../../AppImage/AppImage";
import { IsMobile, UseTheme } from "./HOOKQUERY";
import SuggestionImage from "../../../public/assets/Images/5bbc22957f7ed-a3e785ac2f2995060351779dfa72e084 (1).webp";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Send from "@mui/icons-material/Send";
import { RoundedHeading } from "./TrendingNews";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

export default function SuggestionBox() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const mobile = IsMobile();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(e.currentTarget);
    setLoading(false);
  }
  return (
    <form
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "500px",
        borderRadius: "5px",
      }}
    >
      <Stack gap={2} width={"50ch"}>
        <Typography
          variant="subtitle1"
          fontWeight={"bolder"}
          textTransform="uppercase"
        >
          Contact us
        </Typography>
        <TextField type={"emai"} label={"Email"} required></TextField>
        <TextField
          multiline
          type={"text"}
          label="message"
          required
          rows={3}
        ></TextField>

        <Button
          type="submit"
          variant="contained"
          endIcon={
            loading ? <CircularProgress></CircularProgress> : <Send></Send>
          }
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
}
