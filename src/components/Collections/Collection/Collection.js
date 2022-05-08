import React from "react";

const Collection = ({ collection }) => {
  const { myCollection } = collection;
  return (
    <div>
      <div className="w-11/12 mx-auto shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 hover:scale-105 duration-500">
        <img src={myCollection} alt="" />
      </div>
    </div>
  );
};

export default Collection;
