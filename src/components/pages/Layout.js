import React from "react";
import Banner from "../Layout/Banner";
import GetRequest from "../Layout/GetRequest";
import Header from "../Layout/Header";
import PostRequest from "../Layout/PostRequest";

const Layout = () => {
  return (
    <div className="container-xxl p-0 d-flex flex-column">
      <Header />
      <Banner />
      <GetRequest />
      <PostRequest />
    </div>
  );
};

export default Layout;
