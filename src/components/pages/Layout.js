import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../config/mui.config";
import Banner from "../Layout/Banner";
import GetRequest from "../Layout/GetRequest";
import Header from "../Layout/Header";
import PostRequest from "../Layout/PostRequest";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container-xxl p-0 d-flex flex-column">
        <Header />
        <Banner />
        <GetRequest />
        <PostRequest />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
