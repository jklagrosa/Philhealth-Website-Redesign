import React from "react";
import PartnerCards from "../../components/PartnerCards";

function Partners() {
  return (
    <>
      <div className="2xl:container p-4 min-h-screen">
        <div className="bg-[url('/assets/members.jpg')] bg-cover bg-center w-full h-60 mb-6"></div>

        <PartnerCards />
      </div>
    </>
  );
}

export default Partners;
