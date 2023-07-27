import React from "react";
import Header from "../Header";
import Input from "./Input";

const Payment: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header title="Payment Method" />
      <div className="bg-white md:px-12 px-4 py-7 checkoutShadow">
          <div className="flex md:flex-row flex-col justify-between max-md:gap-4">
            <Input title="Online Payment"/>
            <Input title="Cash on Delivery"/>
            <Input title="POS on Delivery"/>
          </div>
      </div>
    </div>
  );
};

export default Payment;
