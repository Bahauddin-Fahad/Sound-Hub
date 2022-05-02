import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center h-24 text-white bg-[#212529] flex justify-center items-center">
      <h5 className="mb-0">
        All Right Reserved to
        <span className="text-[#F70000]"> Sound Hub </span> @{year}
      </h5>
    </div>
  );
};

export default Footer;
