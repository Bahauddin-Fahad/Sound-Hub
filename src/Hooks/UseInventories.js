import axios from "axios";
import { useEffect, useState } from "react";

const UseInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    axios
      .get("https://sound-hub.herokuapp.com/inventories")
      .then((data) => setInventories(data.data));
  }, []);
  return [inventories, setInventories];
};

export default UseInventories;
