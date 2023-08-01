import React from "react";
import Input from "../../Extras/Input";
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
            <Input fullWidth type="text" label="Full Name" />
            <Input fullWidth type="tel" label="Mobile Number" />
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <Input fullWidth type="email" label="Email" />
            <Input fullWidth type="text" label="City" />
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-4">
            <div className="md:w-1/2">
              <Input fullWidth type="text" label="State" />
            </div>
            <div className="flex md:w-1/2 gap-4">
              <Input fullWidth type="text" label="Zip" />
              <Input fullWidth type="text" label="State" />
            </div>{" "}
          </div>
          <Input fullWidth type="text" label="Address" />
          <button
            onClick={() => setShowMap(true)}
            className="rounded-md border border-pink1 text-pink1 w-2/3 md:hidden flex justify-center items-center gap-4 py-2">
            <MdLocationPin size={20} /> Use Google Maps
          </button>
        </div>
        {showMap && <Map />}
      </div>
    </div>
  );
};

export default DeliveryInfo;
