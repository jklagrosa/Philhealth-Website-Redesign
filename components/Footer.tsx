import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-primary p-3 w-full text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Philhealth Website Redesign
      </div>
    </>
  );
}

export default Footer;
