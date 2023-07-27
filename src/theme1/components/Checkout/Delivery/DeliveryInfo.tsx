import React from "react";
import Input from "./Input";
import Header from "../Header";
import { MdLocationPin } from "react-icons/md";
import Map from "./Map";

const DeliveryInfo: React.FC = () => {
  const [showMap, setShowMap] = React.useState(false);
  return (
    <div className="flex flex-col">
      <Header title="Delivery Information" />
      <div className="bg-white md:px-14 px-4 py-6 checkoutShadow">
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
          <button onClick={() => setShowMap(true)} className="rounded-md border border-pink1 text-pink1 w-2/3 md:hidden flex justify-center items-center gap-4 py-2"><MdLocationPin size={20}/> Use Google Maps</button>
        </div>
        {
          showMap && <Map/>
        }
      </div>
    </div>
  );
};

export default DeliveryInfo;
