import React from "react";
import GetRequestCard from "../UI/GetRequestCard";

const GetRequest = () => {
  return (
    <div className="mt-6">
      <h1 className="text-center m-3 mb-5">Working with GET request</h1>
      <div className="p-4">
        <div className="row row-cols row-cols-md-2 row-cols-lg-3 g-3 g-lg-4 ">
          {Array.from([1, 2, 3, 4, 5, 4, 4, 4]).map((item) => {
            return (
              <div className="col">
                <GetRequestCard />
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="mt-3">Show More</button>
      </div>
    </div>
  );
};

export default GetRequest;
