import React from "react";
import { Link } from "react-router-dom";

const UpdateItem = () => {
  return (
    <div>
      <h2>Update Items</h2>
      <Link className="no-underline mx-auto" to="/manageInventory">
        <button
          className="bg-gray-800 text-white font-medium py-1 px-3 my-3 rounded-md mx-auto w-80 block"
          type="button"
        >
          Manage Inventory
        </button>
      </Link>
    </div>
  );
};

export default UpdateItem;
