import React from "react";
import logo from "../../public/logo.png"

const Logo = ({ width = "100px" }) => {
  return (
    <div>
      {/* <h3 className="text-4xl bg-primary-bg-color py-2 px-3 border border-secondary-color rounded-md font-ubuntu font-semibold text-secondary-color">
        <span className="bg-primary-color text-black px-2 py-0 rounded-md">Saver</span> Sync
      </h3> */}
      <img src={logo} alt="logo" width={width} />
    </div>
  );
};

export default Logo;
