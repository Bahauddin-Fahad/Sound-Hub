import React, { useState } from "react";
import Inventory from "../Inventory/Inventory";
const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  return (
    <div className="my-10 mx-11">
      <h1 className="text-4xl text-center font-bold mb-4">Our Services</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory} />
        ))}
      </div>
    </div>
  );
};

export default Inventories;
