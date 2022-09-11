import React from "react";

function Container({ children }: any) {
  return (
    <>
      <div className="2xl:container bg-white py-10 px-5 min-h-screen">
        {children}
      </div>
    </>
  );
}

export default Container;
