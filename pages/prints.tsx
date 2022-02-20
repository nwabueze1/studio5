import { Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import PrintPage from "../components/AppPages/PrintPage";

const Prints: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Print your document</title>
        <meta
          name="description"
          content=" Print Your Documents at the cheapest rate"
        />
        <meta name="keywords" content="Printing, Poster, Banner, Brochure " />
      </Head>
      <section
        style={{
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h5">
          Feature Coming soon Contact our Customer Care @ 08038219501
        </Typography>
      </section>
    </main>
  );
};

export default Prints;
