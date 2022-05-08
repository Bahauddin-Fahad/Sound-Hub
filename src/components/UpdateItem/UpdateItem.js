import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UseNewInventory from "../../Hooks/UseNewInventory";

const UpdateItem = () => {
  const restockQuantityRef = useRef("");
  const navigate = useNavigate();
  const { inventoryId } = useParams();
  const [inventory] = UseNewInventory(inventoryId);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  // Delivering the Items
  const handleQuantity = () => {
    const quantity = inventory.quantity - 1;
    const newInventoryQuantity = { quantity };
    const url = `https://sound-hub.herokuapp.com/inventory/${inventoryId}`;
    axios.put(url, newInventoryQuantity).then((res) => {
      console.log(res);
      toast.success("Quantity Updated");
    });
    window.location.reload();
  };

  // Restocking the Items
  const handleRestock = () => {
    handleClose();
    const restockQuantity = restockQuantityRef.current.value;
    const quantity = parseInt(inventory.quantity) + parseInt(restockQuantity);

    const newInventoryQuantity = { quantity };
    const url = `https://sound-hub.herokuapp.com/inventory/${inventoryId}`;
    axios.put(url, newInventoryQuantity).then((res) => {
      console.log(res);
      toast.success("Quantity Updated");
    });
    window.location.reload();
  };

  const stockAvailable = inventory.quantity > 0;

  return (
    <div>
      <h2 className="text-center my-4">Update {inventory.inventoryName}</h2>
      <div className="flex flex-col sm:flex-col md:flex-row border-2 rounded-md shadow-md w-2/3 mx-auto">
        <div className="p-3 my-auto">
          <img className="rounded-md " src={inventory.inventoryImg} alt="" />
        </div>
        <div className="p-3">
          <h2 className="text-2xl font-semibold mt-2">
            {inventory.inventoryName}
          </h2>
          <h3 className=" text-lg font-semibold">
            Stock :
            {stockAvailable ? (
              <span className="text-[green]"> Available </span>
            ) : (
              <span className="text-[red]"> SOLD OUT </span>
            )}
          </h3>
          <h3 className=" text-lg font-semibold">Price : {inventory.price}</h3>
          <h6 className=" text-justify">{inventory.description}</h6>
          <h3 className=" text-lg font-semibold">
            Supplier : {inventory.supplierName}
          </h3>
          <h3 className=" text-lg font-semibold">
            Product Left : {stockAvailable ? inventory.quantity : 0}
          </h3>
          <div className="flex">
            <button
              onClick={() => handleQuantity()}
              className="w-2/5 bg-[red] rounded-md h-9 mx-auto text-white from-neutral-600 text-xl "
              disabled={!stockAvailable}
            >
              Delivered
            </button>
            <button
              onClick={() => handleOpen()}
              className="w-2/5 bg-[green] rounded-md h-9 mx-auto text-white from-neutral-600 text-xl "
            >
              Restock
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Restock Quantity</Modal.Title>
              </Modal.Header>
              <form onSubmit={handleRestock}>
                <Modal.Body>
                  <input
                    ref={restockQuantityRef}
                    className="w-full form-input"
                    type="number"
                    placeholder="Enter Quantity"
                    required="required"
                  />
                </Modal.Body>

                <Modal.Footer>
                  <button
                    className="w-2/5 bg-[red] rounded-md h-9 mx-auto text-white from-neutral-600 text-xl"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <input
                    type="submit"
                    className="w-2/5 bg-[green] rounded-md h-9 mx-auto text-white from-neutral-600 text-xl"
                    value="Confirm Restock"
                  />
                </Modal.Footer>
              </form>
            </Modal>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/manageInventory")}
        className="bg-gray-800 text-white font-medium py-1 px-3 my-6 rounded-md mx-auto w-80 block"
        type="button"
      >
        Manage Inventory
      </button>
    </div>
  );
};

export default UpdateItem;
