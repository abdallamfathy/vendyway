import React from "react";
import Input from "./Input";
import Header from "../Header";

const DeliveryInfo: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header title="Delivery Information" />
      <div className="bg-white px-14 py-6 checkoutShadow">
        <div className="flex flex-col gap-6">
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <Input type="text" title="Full Name" />
            <Input type="tel" title="Mobile Number" />
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <Input type="email" title="Email" />
            <Input type="text" title="City" />
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-4">
            <div className="md:w-1/2">
              <Input type="text" title="State" />
            </div>
            <div className="flex md:w-1/2 gap-4">
              <Input type="text" title="Zip" />
              <Input type="text" title="State" />
            </div>{" "}
          </div>
          <Input type="text" title="Address" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
