import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import {
  getOneBlog,
  IgetOneBlog,
  Blog,
} from "../../components/AppPages/HomePageComponents/Home.Service";

const HomePage: NextPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti atque
      quisquam suscipit quis tenetur nemo, numquam animi quod commodi
      consequuntur!
    </h2>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params !== undefined) {
    const post = getOneBlog(params.id);
    return {
      props: { post },
      revalidate: 1,
    };
  } else {
    const post = new OneBlog();
    return {
      props: { post },
      revalidate: 1,
    };
  }
};

export default HomePage;

export class BlogPost implements Blog {
  id: string | number | ParsedUrlQuery | undefined;
  author: string = "";
  body: string = "";
  datePosted: string = "";
  title: string = "";
}

export class OneBlog implements IgetOneBlog {
  blog: Blog = new BlogPost();
  otherBody: string = "";
}
