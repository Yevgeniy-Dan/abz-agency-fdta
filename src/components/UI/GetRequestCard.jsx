import React from "react";
import { ReactComponent as ImageIncaseSVG } from "../../assets/photo-cover.svg";

const GetRequestCard = () => {
  return (
    <div className="card text-center p-3">
      <div className="card-body">
        <div>
          <ImageIncaseSVG />
        </div>
        <p>Takamaru Ayako Jurrien</p>
        <p>
          Lead Independent Director
          <br />
          Takamuru@gmail.com
          <br />
          +38 (098) 278 90 24
        </p>
      </div>
    </div>
  );
};

export default GetRequestCard;
