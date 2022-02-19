import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOn from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";

export default function BookingSteps() {
  return (
    <Grid container justifyContent="space-evenly" alignItems="center">
      <Grid item alignContent="center" justifyItems="center">
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70px",
            height: "70px",
          }}
        >
          <LocationOn color="error" fontSize="large"></LocationOn>
        </Paper>
        <Typography
          variant="body2"
          fontWeight="bold"
          textTransform="capitalize"
        >
          choose location
        </Typography>
      </Grid>
      <Grid item>Welcome</Grid>
      <Grid item>Welcome</Grid>
    </Grid>
  );
}
