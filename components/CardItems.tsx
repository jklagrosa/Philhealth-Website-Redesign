import React from "react";

function CardItems() {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div>
          <img
            src="/assets/family.jpg"
            className="w-full block h-40 object-cover object-center mb-2"
          />
          <h1 className="text-xl mb-2 first-letter:text-primary font-medium xl:text-2xl 2xl:text-3xl">
            Benefits
          </h1>
          <p className="text-sm text-gray-500 xl:text-base 2xl:text-lg">
            Ea exercitation exercitation eu mollit velit ea est amet sint ex
            minim anim nulla qui. Excepteur consequat eiusmod et sint ipsum quis
            nulla consectetur ullamco. Fugiat eu fugiat non Lorem nisi eu ex
            officia...
          </p>
        </div>
        {/*  */}
        <div>
          <img
            src="/assets/members.jpg"
            className="w-full block h-40 object-cover object-center mb-2 "
          />
          <h1 className="text-xl mb-2 first-letter:text-primary font-medium xl:text-2xl 2xl:text-3xl">
            Members
          </h1>
          <p className="text-sm text-gray-500  xl:text-base 2xl:text-lg">
            Ea exercitation exercitation eu mollit velit ea est amet sint ex
            minim anim nulla qui. Excepteur consequat eiusmod et sint ipsum quis
            nulla consectetur ullamco. Fugiat eu fugiat non Lorem nisi eu ex
            officia...
          </p>
        </div>
        {/*  */}
        <div>
          <img
            src="/assets/services.jpg"
            className="w-full block h-40 object-fill object-center mb-2 "
          />
          <h1 className="text-xl mb-2 first-letter:text-primary font-medium xl:text-2xl 2xl:text-3xl">
            Online Services
          </h1>
          <p className="text-sm text-gray-500  xl:text-base 2xl:text-lg">
            Ea exercitation exercitation eu mollit velit ea est amet sint ex
            minim anim nulla qui. Excepteur consequat eiusmod et sint ipsum quis
            nulla consectetur ullamco. Fugiat eu fugiat non Lorem nisi eu ex
            officia...
          </p>
        </div>
        {/*  */}
        <div>
          <img
            src="/assets/partners.jpg"
            className="w-full block h-40 object-fill object-center mb-2 "
          />
          <h1 className="text-xl mb-2 first-letter:text-primary font-medium xl:text-2xl 2xl:text-3xl">
            Our Partners
          </h1>
          <p className="text-sm text-gray-500  xl:text-base 2xl:text-lg">
            Ea exercitation exercitation eu mollit velit ea est amet sint ex
            minim anim nulla qui. Excepteur consequat eiusmod et sint ipsum quis
            nulla consectetur ullamco. Fugiat eu fugiat non Lorem nisi eu ex
            officia...
          </p>
        </div>
        {/*  */}

        {/* <div>
          <img
            src="/assets/konsulta.png"
            className="w-full block h-40 object-fill object-center mb-2 "
          />
        </div>
      
        <div>
          <img
            src="/assets/health.jpg"
            className="w-full block h-40 object-fill object-center mb-2 "
          />
        </div>
  
        <div>
          <img
            src="/assets/breastfeed.png"
            className="w-full block h-40 object-fill object-center mb-2 "
          />
        </div> */}
      </div>
    </>
  );
}

export default CardItems;
