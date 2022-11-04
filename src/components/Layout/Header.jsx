import React from "react";
import { ReactComponent as AbzLogoSVG } from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="d-flex justify-content-between py-3 px-lg-5 px-xxl-0 px-3">
      <div>
        <AbzLogoSVG />
      </div>
      <div className="d-flex">
        <button type="button">Login</button>
        <button type="button">Sign-up</button>
      </div>
    </header>
  );
};

export default Header;
