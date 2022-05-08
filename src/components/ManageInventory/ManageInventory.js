import React from "react";

const ManageInventory = ({ inventory, handleDelete }) => {
  const {
    _id,
    inventoryImg,
    inventoryName,
    description,
    price,
    quantity,
    supplierName,
  } = inventory;

  return (
    <div className=" border-2 rounded-md p-3 mb-5 w-4/6 mx-auto shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-around">
      <div className="flex items-center">
        <img className="rounded-md w-4/6 mx-auto" src={inventoryImg} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="text-xl font-semibold mt-2">{inventoryName}</h2>
        <h3 className=" text-sm font-semibold">Price: {price}</h3>
        <h6 className="text-xs">{`${description}`}</h6>
        <h3 className=" text-sm font-semibold">Supplier: {supplierName}</h3>
        <h3 className=" text-sm font-semibold">Quantity: {quantity}</h3>
        <div>
          <button
            onClick={() => handleDelete(_id)}
            className=" bg-[red] w-full text-white font-medium py-1 px-3 rounded-lg"
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
