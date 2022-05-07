import React from "react";
import { Link } from "react-router-dom";
import UseInventories from "../../Hooks/UseInventories";
import ManageInventory from "../ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [inventories, setInventories] = UseInventories();
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
    <div className="my-10 mx-11">
      <h1 className="text-4xl text-center font-bold mb-4">Our All Items</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {inventories.map((inventory) => (
          <ManageInventory
            key={inventory._id}
            inventory={inventory}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <Link className="no-underline mx-auto" to="/addItems">
        <button
          className="bg-gray-800 text-white font-medium py-1 px-3 mt-6 rounded-md mx-auto w-80 block"
          type="button"
        >
          Add New Items
        </button>
      </Link>
    </div>
  );
};

export default ManageInventories;
