import React from "react";
import Button from "../../Extras/Button";

const PromoCode: React.FC = () => {
  return (
    <div className="flex items-center gap-4 justify-between w-full">
      <div className="bg-white rounded-lg border border-lgray1 px-1 xl:px-3 py-2">
        <input
          type="text"
          className="border-none outline-none placeholder:text-xs text-mgray1 w-full"
          placeholder="Enter promotion code"
        />
      </div>
      <Button
        text="Apply"
        link="/products"
        variant="primary"
        size="sm"
        className="text-sm  font-medium"
      />
    </div>
  );
};

export default PromoCode;
