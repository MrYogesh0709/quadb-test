import React from "react";

const Loading = () => {
  return (
    <div className="text-center mt-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2 fw-bold text-primary">Loading...</p>
    </div>
  );
};

export default Loading;
