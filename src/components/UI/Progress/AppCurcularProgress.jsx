import React from "react";
import { CircularProgress } from "@mui/material";

const AppCurcularProgress = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center mb-5">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default AppCurcularProgress;
