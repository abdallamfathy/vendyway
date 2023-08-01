import React from "react";
import Button from "../Extras/Button";
import Input from "../Extras/Input";

const Subscribe: React.FC = () => {
  return (
    <div className="rounded-3xl bg-white p-2 flex items-center justify-between md:pl-8 pl-4 md:w-110 max-md:text-xs">
      <Input
        type="email"
        noPadding
        className="bg-none  outline-none border-none placeholder:text-mgray1 placeholder:text-sm rounded"
        placeholder="Your email address"
      />
      <Button
        text="Subscribe"
        className=" py-3"
        variant={"primary"}
        size="lg"
      />
    </div>
  );
};

export default Subscribe;
