import React from "react";
import UseInventories from "../../Hooks/UseInventories";
import ManageInventory from "../ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [inventories, setInventories] = UseInventories();
  return (
    <div className="my-10 mx-11">
      <h1 className="text-4xl text-center font-bold mb-4">Our All Items</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {inventories.map((inventory) => (
          <ManageInventory key={inventory._id} inventory={inventory} />
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
