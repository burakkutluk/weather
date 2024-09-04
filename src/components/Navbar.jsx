import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-cyan-700">
      <div  className="flex justify-between items-center p-4 px-56">
        <div className="text-white text-2xl font-bold ">
          Enos Weather Forecaster
        </div>
        <div className="text-white text-3xl font-bold">
          <a className="cursor-pointer" href="/">℮</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
