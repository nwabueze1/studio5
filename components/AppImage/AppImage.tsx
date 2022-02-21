import Image from "next/image";
import React from "react";
import Styles from "./styles.module.css";
interface IProps {
  Url: StaticImageData | string;
  Height: string;
  Width?: string;
  Alt?: string;
}
export default function AppImage({ Height, Url, Width, Alt }: IProps) {
  return (
    <Image
      src={Url}
      height={Height}
      width={Width}
      className={Styles.Image}
      alt={Alt}
    ></Image>
  );
}
