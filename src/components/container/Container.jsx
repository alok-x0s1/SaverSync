import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-full mx-auto px-4 bg-primary-bg-color">
      {children}
    </div>
  );
};

export default Container;
