import React from "react";
import { Spinner } from "react-bootstrap";

const Reload = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] w-full flex justify-center items-center">
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

export default Reload;
