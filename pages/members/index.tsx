import React from "react";

function Members() {
  return (
    <>
      <div className="2xl:container p-4 min-h-screen">
        <div className="bg-[url('/assets/members.jpg')] bg-cover bg-center w-full h-60 mb-6"></div>

        {/*  */}
        <div className="mb-6">
          <h1 className="mb-2 text-xl font-medium first-letter:text-primary">
            Direct Contributors
          </h1>

          <ul className="text-gray-700 text-sm underline">
            <li className="mb-1">Employees with formal employment</li>
            <li className="mb-1">Kasambahays</li>
            <li className="mb-1">Overseas Filipino Workers</li>
            <li className="mb-1">Lifetime members</li>
            <li className="mb-1">
              All Filipinos aged 21 years and above with capacity to pays
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="mb-6">
          <h1 className="mb-2 text-xl font-medium first-letter:text-primary">
            Indirect Contributors
          </h1>

          <ul className="text-gray-700 text-sm underline">
            <li className="mb-1">Employees with formal employment</li>
            <li className="mb-1">Kasambahays</li>
            <li className="mb-1">Overseas Filipino Workers</li>
            <li className="mb-1">Lifetime members</li>
            <li className="mb-1">
              All Filipinos aged 21 years and above with capacity to pays
            </li>
          </ul>
        </div>
        {/*  */}
      </div>
    </>
  );
}

export default Members;
