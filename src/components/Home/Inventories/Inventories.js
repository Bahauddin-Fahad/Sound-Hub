import React from "react";
import { Link } from "react-router-dom";
import UseInventories from "../../../Hooks/UseInventories";
import Inventory from "../Inventory/Inventory";
const Inventories = () => {
  const [inventories, setInventories] = UseInventories();
  return (
    <div className="my-10 mx-11">
      <h1 className="text-4xl text-center font-bold mb-4">
        Our Populer Orders
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {inventories.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory} />
        ))}
      </div>
      <Link className="no-underline mx-auto" to="/manageInventory">
        <button
          className="bg-gray-800 text-white font-medium py-1 px-3 mt-6 rounded-md mx-auto w-80 block"
          type="button"
        >
          Manage Inventory
        </button>
      </Link>
    </div>
  );
};

export default Inventories;
