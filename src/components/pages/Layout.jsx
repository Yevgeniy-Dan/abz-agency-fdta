import React from "react";

import Banner from "../Layout/Banner";
import Header from "../Layout/Header";
import Registration from "../Layout/Registration";
import Users from "../Layout/Users";

import { ThemeProvider } from "@mui/material";
import theme from "../config/mui.config";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container-xxl p-0 d-flex flex-column">
        <Header />
        <Banner />
        <Users />
        <Registration />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
