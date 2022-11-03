import React from "react";
import { ReactComponent as AbzSVG } from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="d-flex justify-content-between py-3 px-xxl-0 px-3">
      <div>
        <AbzSVG />
      </div>
      <div className="d-flex">
        <button type="button">Login</button>
        <button type="button">Sign-up</button>
      </div>
    </header>
  );
};

export default Header;
