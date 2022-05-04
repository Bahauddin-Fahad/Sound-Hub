import axios from "axios";
import { useEffect, useState } from "react";

const UseInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/inventories")
      .then((data) => setInventories(data.data));
  }, []);
  return [inventories, setInventories];
};

export default UseInventories;
