import axios from "axios";
import React, { useEffect, useState } from "react";
import Collection from "./Collection/Collection";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    axios.get("Collections.json").then((data) => setCollections(data.data));
  }, []);
  return (
    <div className="mx-16 mt-16 mb-8">
      <h2 className=" text-center font-bold mb-4">Our Collections</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
        {collections.map((collection) => (
          <Collection key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
