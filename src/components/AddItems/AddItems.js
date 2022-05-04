import React from "react";
import { useForm } from "react-hook-form";
import "./AddItems.css";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="w-4/12 mx-auto">
      <h2 className="text-center">Add Items</h2>
      <form className="flex flex-col form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-input"
          placeholder="Item Name"
          {...register("inventoryName", { required: true, maxLength: 20 })}
        />
        <textarea
          className="form-input"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="form-input"
          placeholder="Price"
          type="number"
          {...register("price")}
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
