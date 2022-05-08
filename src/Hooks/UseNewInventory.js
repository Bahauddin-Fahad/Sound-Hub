import axios from "axios";
import { useEffect, useState } from "react";

const UseNewInventory = (inventoryId) => {
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    const url = `https://sound-hub.herokuapp.com/inventory/${inventoryId}`;
    axios.get(url).then((data) => setInventory(data.data));
  }, [inventoryId]);

  return [inventory, setInventory];
};

export default UseNewInventory;
