import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateItem = () => {
  const restockQuantityRef = useRef("");
  const navigate = useNavigate();
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    axios.get(url).then((data) => setInventory(data.data));
  }, [inventoryId]);

  const handleQuantity = () => {};
  const handleClose = () => setShow(false);
  const handleOpen = () => {
    setShow(true);
  };
  const handleRestock = () => {};
  return (
    <div>
      <h2 className="text-center">Update {inventory.inventoryName}</h2>
      <div className="border-2 rounded-md shadow-md w-1/3 mx-auto">
        <div className="mx-auto text-center">
          <img
            className="rounded-md mt-2"
            src={inventory.inventoryImg}
            alt=""
          />
          <h2 className="text-2xl font-semibold mt-2">
            {inventory.inventoryName}
          </h2>
          <h3 className=" text-lg font-semibold">Price: {inventory.price}</h3>
          <h6 className="w-11/12 mx-auto text-justify">
            {inventory.description}
          </h6>
          <h3 className=" text-lg font-semibold">
            Supplier: {inventory.supplierName}
          </h3>
          <h3 className=" text-lg font-semibold">
            Quantity: {inventory.quantity}
          </h3>
          <div className="flex">
            <button
              onClick={() => handleQuantity()}
              className="w-1/3 bg-[red] rounded-md m-2 mx-auto text-white from-neutral-600 text-xl "
            >
              Delivered
            </button>
            <button
              onClick={() => handleOpen()}
              className="w-1/3 bg-[green] rounded-md m-2 mx-auto text-white from-neutral-600 text-xl "
            >
              Restock
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input
                  ref={restockQuantityRef}
                  className="w-full form-input"
                  type="number"
                  placeholder="Enter Quantity"
                />
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="w-1/3 bg-[red] rounded-md m-2 mx-auto text-white from-neutral-600 text-xl"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  className="w-1/3 bg-[green] rounded-md m-2 mx-auto text-white from-neutral-600 text-xl"
                  onClick={(handleClose, handleRestock)}
                >
                  Restock
                </button>
              </Modal.Footer>
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
