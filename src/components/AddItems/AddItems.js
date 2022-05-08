import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./AddItems.css";
import axios from "axios";
import { toast } from "react-toastify";
const AddItems = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.email = user?.email;
    const url = `https://sound-hub.herokuapp.com/inventory`;
    axios.post(url, data).then((res) => {
      console.log(res);
      toast.success("New Item Added");
    });
    navigate("/manageInventory");
  };
  return (
    <div className="w-4/12 mx-auto min-h-[calc(100vh-160px)]">
      <h2 className="text-center">Add Items</h2>
      <form className="flex flex-col form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-input"
          placeholder="Item Name"
          {...register("inventoryName", { required: true, maxLength: 20 })}
        />
        <input
          className="form-input"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <textarea
          className="form-input min-h-[80px]"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="form-input"
          placeholder="Supplier Name"
          type="text"
          {...register("supplierName")}
        />
        <input
          className="form-input"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="form-input"
          placeholder="Item Image URL"
          {...register("inventoryImg")}
        />
        <button
          className="submit-button text-white bg-[black] text-lg font-bold"
          type="submit"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItems;
