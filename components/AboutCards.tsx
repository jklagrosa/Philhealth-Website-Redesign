import React from "react";

function AboutCards() {
  return (
    <div className="2xl:container p-4 grid ">
      <div className="grid grid-cols-1  gap-x-8 gap-y-5">
        <div>
          <h1 className="mb-2 text-xl font-medium  first-letter:text-primary">
            Profile
          </h1>
          {/* <img
            src="/assets/hero.jpg"
            className="mb-2 w-full h-40 object-cover object-top"
          /> */}
          <p className=" text-gray-700 text-sm">
            Reprehenderit ex nostrud anim incididunt eu enim officia ullamco.
            Fugiat duis ex cillum consectetur dolore anim. Do officia deserunt
            nostrud anim aliqua quis. Lorem voluptate aute sit officia ut
            nostrud est.
          </p>
        </div>
        {/*  */}

        <div>
          <h1 className="mb-2 text-xl font-medium bg-primary text-white p-1">
            Philhealth Studies
          </h1>
          <img
            src="/assets/hero.jpg"
            className="mb-2 w-full h-40 object-cover object-top"
          />
        </div>
        {/*  */}
        <div>
          <h1 className="mb-2 text-xl font-medium bg-primary text-white p-1">
            Annual Reports
          </h1>

          <img
            src="/assets/family.jpg"
            className="mb-2 w-full h-40 object-cover object-top"
          />
        </div>
        {/*  */}
        <div>
          <h1 className="mb-2 text-xl font-medium bg-primary text-white p-1">
            Medical Literature
          </h1>

          <img
            src="/assets/family.jpg"
            className="mb-2 w-full h-40 object-cover object-top"
          />
        </div>
        {/*  */}
        <div>
          <h1 className="mb-2 text-xl font-medium bg-primary text-white p-1">
            Philhealth Strategic Plan for 2021-2023
          </h1>

          <img
            src="/assets/family.jpg"
            className="mb-2 w-full h-40 object-cover object-top"
          />
        </div>
        {/*  */}

        <div>
          <h1 className="mb-2 text-xl font-medium bg-primary text-white p-1">
            Enabling Laws
          </h1>

          {/* <img
            src="/assets/family.jpg"
            className="mb-2 w-full h-40 object-cover object-top"
          /> */}

          <ul className="text-sm text-gray-700">
            <li>R.A 7875 And IRR</li>
            <li>R.A 9241 And IRR</li>
            <li>R.A 10606</li>
            <li>Revised IRR Of The National Health Insurance Act Of 2013</li>
            <li>R.A 11223</li>
            <li>UHC-IRR</li>
            <li>IRR Of R.A 11228</li>
          </ul>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default AboutCards;
