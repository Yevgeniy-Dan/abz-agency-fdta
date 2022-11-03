import React from "react";

const Banner = () => {
  return (
    <div className="position-relative overflow-hidden text-center bg-image">
      <div className="p-3 p-md-5 mask">
        <div className="col-md-5 p-lg-5 mx-auto my-5 ">
          <h1 className="text-white">
            Test assignment for front-end developer
          </h1>
          <p className="text-white">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
