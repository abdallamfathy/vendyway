import React from "react";
import Input from "../../Extras/Input";
import CheckInput from "./CheckInput";
import Button from "../../Extras/Button";

interface AddressFormProps {}

const AddressForm: React.FC<AddressFormProps> = () => {
  return (
    <div className="flex flex-col gap-8 max-md:text-sm">
      <div className="flex md:flex-row flex-col items-center gap-6">
        <Input fullWidth label="Full Name" type="text" />
        <Input fullWidth label="Phone" type="tel" />
      </div>
      <div className="flex md:flex-row flex-col items-center gap-6">
        <Input fullWidth label="Email" type="email" />
        <Input fullWidth label="City" type="text" />
      </div>
      <div className="flex md:flex-row flex-col items-center gap-6">
        <div className="md:w-1/2 w-full">
          <Input fullWidth label="State" type="text" />
        </div>
        <div className="flex   items-center gap-4 md:w-1/2 w-full">
          <Input fullWidth label="ZIP" type="text" />
          <Input fullWidth label="State" type="text" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="address" className="text-">
          Address
        </label>
        <textarea
          name="address"
          id=""
          cols={20}
          rows={3}
          className="border border-lgray1 outline-none rounded-lg p-4"></textarea>
      </div>
      <div className="flex flex-col gap-4">
        <CheckInput text="Use as my default Billing address" />
        <CheckInput text="Use as my default Delivering address" />
      </div>
      <div className="max-md:self-center">
        <Button
          text="Save Changes"
          className="py-4"
          variant={"primary"}
          size="xl"
        />
      </div>
    </div>
  );
};

export default AddressForm;
