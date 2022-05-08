import React from "react";
import { Link } from "react-router-dom";
import UseInventories from "../../Hooks/UseInventories";
import ManageInventory from "../ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [inventories, setInventories] = UseInventories();

  // Deleting Items from Inventories
  const handleDelete = (id) => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const rest = inventories.filter((p) => p._id !== id);
        setInventories(rest);
      });
  };
  return (
    <div className="my-10 min-h-screen">
      <h1 className="text-4xl text-center font-bold mb-4">
        All Items ({inventories.length})
      </h1>
      <div className=" px-3">
        {inventories.map((inventory) => (
          <ManageInventory
            key={inventory._id}
            inventory={inventory}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          className="no-underline inline-block bg-gray-800 text-white font-medium py-1 px-3 mt-6 rounded-md mx-auto w-2/5 text-center"
          to="/addItems"
        >
          Add New Items
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
