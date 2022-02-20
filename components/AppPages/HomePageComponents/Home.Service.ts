import { ParsedUrlQuery } from "querystring";

export interface Blog {
  id: number | ParsedUrlQuery | undefined | string;
  title: string;
  body: string;
  datePosted: string;
  author: string;
}
export function getAllBlog(): Blog[] {
  return [
    {
      id: "1",
      title: "I will make Nigeria great again",
      author: "Umeh joseph",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, vel? ",
      datePosted: new Date().toDateString(),
    },
    {
      id: 2,
      title: "Igbka Igba gets initiated into the ozo title system of igbo land",
      author: "Umeh joseph",
      body: "Perspiciatis, vel? Earum obcaecati sapiente quos. uod aut sequi quibusdam tempore officiis asperiores, reprehenderit nihil dolor deleniti, accusantium quam perferendis.",
      datePosted: new Date().toDateString(),
    },
    {
      id: 3,
      title: "Iyom completes and inuagurates the road leading to awka",
      author: "Umeh joseph",
      body: "Lorem ipsum dolor sit obcaecati sapiente quos. Officia iusto, quod aut sequi quibusdam tempore officiis asperiores, reprehenderit nihil dolor deleniti, accusantium quam perferendis.",
      datePosted: new Date().toDateString(),
    },
    {
      id: 4,
      title:
        "Incoming governore soludo promises to revive the economy of anambar state",
      author: "Umeh joseph",
      body: "Lorem ipsum dolor sit ametcia iusto, quod aut sequi quibusdam tempore officiis asperiores, reprehenderit nihil dolor deleniti, accusantium quam perferendis.",
      datePosted: new Date().toDateString(),
    },
  ];
}

export interface IgetOneBlog {
  blog: Blog;
  otherBody: string;
}
export function getOneBlog(
  id: string | string[] | undefined
): IgetOneBlog | string {
  const blog = getAllBlog().find((c) => c.id == id);
  if (blog) {
    return {
      blog: blog,
      otherBody:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur nobis eum tempora officiis. Consequatur velit possimus perferendis saepe placeat, dicta temporibus laboriosam similique id quas omnis officia ea reiciendis facere, et enim incidunt corrupti accusamus sapiente? Dolorum quis nemo iure assumenda dignissimos. Voluptatum quibusdam exercitationem velit alias molestias? Aperiam sunt ab illum porro. Libero?",
    };
  }
  console.log(id);
  return id?.toString() as string;
}
