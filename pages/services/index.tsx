import React from "react";

function Services() {
  return (
    <div className="2xl:container p-4 min-h-screen">
      <div className="grid grid-cols-1 gap-x-8 gap-y-5">
        <div>
          <h1 className="mb-3 text-xl font-medium first-letter:text-primary">
            Membership
          </h1>

          <div className="grid grid-cols-2">
            <div className="mx-auto">
              <div className=" w-20 h-20 text-sm flex items-center justify-center bg-orange-400 text-white rounded-lg outline-none mb-2">
                Inquiry
              </div>
              <p className="text-sm mb-2">Member Portal</p>
              <p className="text-xs text-primary underline">Register/Login</p>

              <p className="text-xs mt-3 w-26 text-gray-700">
                Eiusmod mollit tempor irure ad nisi sit ut commodo quis labore
                culpa.
              </p>
            </div>
            {/*  */}
            <div className="mx-auto">
              <div className=" w-20 h-20 text-sm flex items-center justify-center bg-primary text-white rounded-lg outline-none mb-2 text-center">
                <i>e</i>group
              </div>
              <p className="text-sm mb-2">Electronic Group Enrollment System</p>
              <p className="text-xs text-primary underline">Login</p>

              <p className="text-xs mt-3 w-26 text-gray-700">
                Eiusmod mollit tempor irure ad nisi sit ut commodo quis labore
                culpa.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <h1 className="mb-3 text-xl font-medium first-letter:text-primary">
            Benefits
          </h1>

          <div className="grid grid-cols-2">
            <div className="mx-auto">
              <div className=" w-20 h-20 text-sm flex items-center justify-center bg-blue-400 text-white rounded-lg outline-none mb-2">
                CRS
              </div>
              <p className="text-sm mb-2">Case Rates Search</p>
              <p className="text-xs text-primary underline">Begin Search</p>

              <p className="text-xs mt-3 w-26 text-gray-700">
                Eiusmod mollit tempor irure ad nisi sit ut commodo quis labore
                culpa.
              </p>
            </div>
            {/*  */}
            <div className="mx-auto">
              <div className=" w-20 h-20 text-sm flex items-center justify-center bg-primary text-white rounded-lg outline-none mb-2 text-center">
                CEC
              </div>
              <p className="text-sm mb-2">Claims Eligibility Checking</p>
              <p className="text-xs text-primary underline">Login</p>

              <p className="text-xs mt-3 w-26 text-gray-700">
                Eiusmod mollit tempor irure ad nisi sit ut commodo quis labore
                culpa.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <h1 className="mb-3 text-xl font-medium first-letter:text-primary">
            Contribution &amp; <span className="text-primary">C</span>ollection
          </h1>

          <div className="grid grid-cols-2">
            <div className="mx-auto">
              <div className=" w-20 h-20 text-sm flex items-center justify-center bg-blue-400 text-white rounded-lg outline-none mb-2">
                CRS
              </div>
              <p className="text-sm mb-2">Case Rates Search</p>
              <p className="text-xs text-primary underline">Begin Search</p>

              <p className="text-xs mt-3 w-26 text-gray-700">
                Eiusmod mollit tempor irure ad nisi sit ut commodo quis labore
                culpa.
              </p>
            </div>
            {/*  */}
            <div className="mx-auto">
              <div className=" w-20 h-20 text-sm flex items-center justify-center bg-primary text-white rounded-lg outline-none mb-2 text-center">
                CEC
              </div>
              <p className="text-sm mb-2">Claims Eligibility Checking</p>
              <p className="text-xs text-primary underline">Login</p>

              <p className="text-xs mt-3 w-26 text-gray-700">
                Eiusmod mollit tempor irure ad nisi sit ut commodo quis labore
                culpa.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
}

export default Services;
