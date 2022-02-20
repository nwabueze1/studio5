import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import React from "react";
import {
  getOneBlog,
  IgetOneBlog,
} from "../../components/AppPages/HomePageComponents/Home.Service";

const HomePage: NextPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{(post as IgetOneBlog).otherBody}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getOneBlog(params.id);
  console.log(post);
  return {
    props: { post },
    revalidate: 1,
  };
};

export default HomePage;
