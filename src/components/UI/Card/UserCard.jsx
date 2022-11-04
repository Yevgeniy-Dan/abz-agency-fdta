import { Avatar } from "@mui/material";
import React from "react";
import { ReactComponent as ImageIncaseSVG } from "../../../assets/photo-cover.svg";

const UserCard = ({ user }) => {
  const { name, email, phone, position, photo } = user;

  return (
    <div className="card text-center p-3">
      <div className="card-body">
        <div className="d-flex justify-content-center m-0">
          {!photo ? (
            <ImageIncaseSVG />
          ) : (
            <Avatar src={photo} alt={name} style={{ margin: 0 }} />
          )}
        </div>
        <p>{name}</p>
        <p>
          {position}
          <br />
          {email}
          <br />
          {phone}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
