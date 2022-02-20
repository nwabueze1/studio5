import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React from "react";
import AppImage from "../AppImage/AppImage";
import {
  BANNER_PRICE,
  BANNER_SIZE,
  POSTER_PRICE,
  POSTER_SIZE,
  PRINTING_TYPE,
} from "./PrintPageComponents/PrintingType";

export default function PrintPage() {
  const [categroy, setcategroy] = React.useState<PRINTING_TYPE>(
    PRINTING_TYPE.POSTER
  );
  const [printSize, SetPrintSIze] = React.useState<BANNER_SIZE | POSTER_SIZE>();
  const [price, setPrice] = React.useState<BANNER_PRICE | POSTER_PRICE>();

  return <></>;
}
