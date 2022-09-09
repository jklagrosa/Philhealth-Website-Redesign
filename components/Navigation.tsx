import React from "react";
import { BiMenu } from "react-icons/bi";

function Navigation() {
  return (
    <>
      <div className="2xl:container bg-white p-3 text-base border-b-2">
        <div className="flex items-center">
          <img src="/assets/ph.png" className="w-20 block mr-auto" />

          <BiMenu className="text-3xl" />
        </div>
      </div>
    </>
  );
}

export default Navigation;
