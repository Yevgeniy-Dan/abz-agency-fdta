import React from "react";

const AppErrorMessage = ({ error }) => {
  return (
    <>
      {error && (
        <div className="d-flex justify-content-center">
          <div className="py-0 my-0">
            {Array.isArray(error) ? (
              error.map((e, index) => (
                <p key={e + index} className="text-danger">
                  {e}
                </p>
              ))
            ) : (
              <p className="text-danger text-center">{error}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AppErrorMessage;
