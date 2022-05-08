import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    const getMyItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/myItems?email=${email}`;
      await axios.get(url).then((data) => setMyItems(data.data));
      console.log(myItems);
    };
    getMyItems();
  }, [user]);

  // Deleting Item from My Item
  const handleDelete = (id) => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const rest = myItems.filter((p) => p._id !== id);
        setMyItems(rest);
      });
  };
  return (
    <div className="min-h-screen">
      <h2 className="text-center mt-4 mb-2">My Items ({myItems.length})</h2>
      {myItems.map((myItem) => (
        <div
          key={myItem._id}
          className="border-2 rounded-md p-3 mb-5 w-4/6 mx-auto shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-around"
        >
          <div className="flex items-center">
            <img
              className="rounded-md w-4/6 mx-auto"
              src={myItem.inventoryImg}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-xl font-semibold mt-2">
              {myItem.inventoryName}
            </h2>
            <h3 className=" text-sm font-semibold">Price: {myItem.price}</h3>
            <h6 className="text-xs">{`${myItem.description}`}</h6>
            <h3 className=" text-sm font-semibold">
              Supplier: {myItem.supplierName}
            </h3>
            <h3 className=" text-sm font-semibold">
              Quantity: {myItem.quantity}
            </h3>
            <div>
              <button
                onClick={() => handleDelete(myItem._id)}
                className=" bg-[red] w-full text-white font-medium py-1 px-3 rounded-lg"
              >
                Delete Item
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
