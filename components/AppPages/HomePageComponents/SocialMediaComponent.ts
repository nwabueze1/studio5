import { SOCIALMEDIALINK } from "../SocialMediaLinks";

export interface IScoialMediaComponent {
  Href: SOCIALMEDIALINK;
  Icon: JSX.Element;
  Text: string;
}

export interface ICardProps {
  AvatarText: string;
  Title: string;
  subHeader: string;
  statement: string;
  ImageSrc: StaticImageData | string;
  Alt?: string;
  Height?: string | number;
}
