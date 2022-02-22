import React from "react";
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import HomePage from "../components/AppPages/HomePage";
import {
  getAllBlog,
  Blog,
} from "../components/AppPages/HomePageComponents/Home.Service";

const Home: NextPage = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <HomePage blog={blogPosts as Blog[]}></HomePage>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = getAllBlog();
  return {
    props: {
      blogPosts,
    },
  };
};
