import React, { ReactChild, ReactChildren } from "react";
import AppFooter from "./footer/AppFooter";
import NavBar from "./navigation/NavBar";

interface ILayoutProps {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}
export default function Layout({ children }: ILayoutProps) {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      {children}
      <AppFooter></AppFooter>
    </React.Fragment>
  );
}
