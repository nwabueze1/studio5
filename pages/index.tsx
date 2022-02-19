import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import AppFooter from "../components/footer/AppFooter";
import HomePage from "../components/AppPages/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MEDIA HUB</title>
        <meta
          name="description"
          content="A print website for your printing jobs around eastern nigeria"
        />
        <meta
          name="keywords"
          content="Print, Video Coverage, Camera Coverage, Blog, Channel"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage></HomePage>
    </>
  );
};

export default Home;
