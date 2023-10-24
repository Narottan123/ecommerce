import React from "react";

const Homesectioncard = () => {
  return (
    <div className="cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden  w-[15rem] mx-3">
      <div className="">
        <img
          className=""
          src="https://innovist.com/cdn/shop/products/Aqua_1.jpg?v=1674479748&width=300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font--medium text-gray-900">NoFilter</h3>
        <p className="mt-2 text-sm text-grayy-500">
          Man Solid Pure cotton Straight Kurta
        </p>
      </div>
    </div>
  );
};

export default Homesectioncard;
