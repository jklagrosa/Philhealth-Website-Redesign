import React from "react";
import Container from "../layouts/Container";

function CardActivity() {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        <div>
          <img
            src="/assets/konsulta.png"
            className="w-full block h-40 object-cover object-center mb-2 md:h-56 lg:h-40 xl:max-w-lg"
          />
        </div>

        <div>
          <img
            src="/assets/health.jpg"
            className="w-full block h-40 object-fill object-center mb-2 md:h-56 lg:h-40 xl:max-w-lg "
          />
        </div>

        <div>
          <img
            src="/assets/breastfeed.png"
            className="w-full block h-40 object-fill object-center mb-2  md:h-56 lg:h-40 xl:max-w-lg "
          />
        </div>

        <div>
          <img
            src="/assets/101.jpg"
            className="w-full block h-40 object-fill object-center mb-2  md:h-56 lg:h-40 xl:max-w-lg "
          />
        </div>
      </div>
    </>
  );
}

export default CardActivity;
