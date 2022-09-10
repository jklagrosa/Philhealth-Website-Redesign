import React from "react";

function Cards() {
  return (
    <>
      <div className="2xl:container p-4 grid ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-5">
          <div>
            <img
              src="/assets/hero.jpg"
              className="mb-2 w-full h-40 object-cover object-top"
            />
            <h1 className="mb-2 text-xl font-medium first-letter:text-primary">
              Benefits
            </h1>
            <p className=" text-gray-700 text-sm">
              Qui labore elit elit ea laborum cillum qui proident in sint.
              Voluptate fugiat quis mollit pariatur voluptate ex laboris commodo
              Lorem nostrud nisi laboris consectetur. Exercitation eu consequat
              tempor reprehenderit est. Ullamco pariatur in elit nulla elit et
              elit sint eu. Veniam eu ea aliqua elit tempor deserunt deserunt ex
              reprehenderit elit minim sit sint laboris. Voluptate dolore mollit
              ea ut tempor.
            </p>
          </div>
          {/*  */}
          <div>
            <img
              src="/assets/family.jpg"
              className="mb-2 w-full h-40 object-cover object-top"
            />
            <h1 className="mb-2 text-xl font-medium first-letter:text-primary">
              Members
            </h1>
            <p className=" text-gray-700 text-sm">
              Qui labore elit elit ea laborum cillum qui proident in sint.
              Voluptate fugiat quis mollit pariatur voluptate ex laboris commodo
              Lorem nostrud nisi laboris consectetur. Exercitation eu consequat
              tempor reprehenderit est. Ullamco pariatur in elit nulla elit et
              elit sint eu. Veniam eu ea aliqua elit tempor deserunt deserunt ex
              reprehenderit elit minim sit sint laboris. Voluptate dolore mollit
              ea ut tempor.
            </p>
          </div>
          {/*  */}
          <div>
            <img
              src="/assets/services.jpg"
              className="mb-2 w-full h-40 object-fill object-top"
            />
            <h1 className="mb-2 text-xl font-medium first-letter:text-primary">
              Online Services
            </h1>
            <p className=" text-gray-700 text-sm">
              Qui labore elit elit ea laborum cillum qui proident in sint.
              Voluptate fugiat quis mollit pariatur voluptate ex laboris commodo
              Lorem nostrud nisi laboris consectetur. Exercitation eu consequat
              tempor reprehenderit est. Ullamco pariatur in elit nulla elit et
              elit sint eu. Veniam eu ea aliqua elit tempor deserunt deserunt ex
              reprehenderit elit minim sit sint laboris. Voluptate dolore mollit
              ea ut tempor.
            </p>
          </div>
          {/*  */}
          <div>
            <img
              src="/assets/partners.jpg"
              className="mb-2 w-full h-40 object-cover object-top"
            />
            <h1 className="mb-2 text-xl font-medium first-letter:text-primary">
              Our Partners
            </h1>
            <p className=" text-gray-700 text-sm">
              Qui labore elit elit ea laborum cillum qui proident in sint.
              Voluptate fugiat quis mollit pariatur voluptate ex laboris commodo
              Lorem nostrud nisi laboris consectetur. Exercitation eu consequat
              tempor reprehenderit est. Ullamco pariatur in elit nulla elit et
              elit sint eu. Veniam eu ea aliqua elit tempor deserunt deserunt ex
              reprehenderit elit minim sit sint laboris. Voluptate dolore mollit
              ea ut tempor.
            </p>
          </div>
          {/*  */}
          <div>
            <img
              src="/assets/konsulta.png"
              className="w-full h-46 object-cover object-center"
            />
          </div>
          {/*  */}
          <div>
            <img
              src="/assets/health.jpg"
              className="w-full h-46 object-cover object-center"
            />
          </div>
          {/*  */}
          <div>
            <img
              src="/assets/breastfeed.png"
              className="w-full h-46 object-cover object-center"
            />
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Cards;
