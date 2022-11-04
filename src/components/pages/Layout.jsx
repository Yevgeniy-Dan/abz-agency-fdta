import React from "react";

import Banner from "../Layout/Banner";
import Header from "../Layout/Header";
import SignUp from "../Layout/SignUp";
import Users from "../Layout/Users";

import { ThemeProvider } from "@mui/material";
import theme from "../../config/mui.config";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container-xxl p-0 d-flex flex-column">
        <Header />
        <Banner />
        <Users />
        <SignUp />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
