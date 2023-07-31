import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Extras/Button";

interface MyOrderCardProps {
  icon: React.ReactNode;
  status: string;
}

const MyOrderCard: React.FC<MyOrderCardProps> = ({ icon, status }) => {
  return (
    <>
      <div className="md:flex hidden justify-between">
        <div className="flex  text-left items-center gap-12 text-mgray1 py-6 text-sm">
          <span className="w-14">#2306</span>
          <p className="w-16">21/2/2023</p>
          <div
            className={`w-20 flex gap-2 items-center font-medium ${
              status === "completed"
                ? "text-green-500"
                : status === "pending"
                ? "text-yellow-500"
                : status === "cancelled"
                ? "text-red-500"
                : null
            }`}>
            <span>{icon}</span>
            <p>{status}</p>
          </div>
          <span className="w-6 text-center">1</span>
          <span className="w-20 ">89,99 EGP</span>
        </div>

        <div className="flex items-center gap-2 ">
          <Button
            link="/order/1"
            text="Details"
            className="text-sm"
            variant={"secondary"}
            size="sm"
          />
          <Button
            link="/track-order/1"
            text="track order"
            className="text-sm px-2 p-1 xl:px-6 xl:py-2"
            variant={"primary"}
          />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex md:hidden flex-col text-sm rounded-xl cartShadow border border-lgray1 ">
        <div className="flex justify-between p-2 px-4 bg-gray1  rounded-t-xl">
          <p className="text-dark1">Order #2306</p>
          <Link to="/order/1" className="text-pink1">
            Details
          </Link>
        </div>
        <div className="p-4 flex flex-col gap-2 rounded-xl">
          <div className="flex flex-col gap-2 text-lgray1">
            <p>
              <strong>Date: </strong> 21/2/2023
            </p>
            <p>
              <strong>QTY: </strong> 2 Pieces
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2 text-lgray1">
              <p>
                <strong>Price: </strong> 89,99 EGP
              </p>
            </div>
            <div
              className={`md:w-20 max-md:text-sm flex gap-2 items-center font-medium ${
                status === "completed"
                  ? "text-green-500"
                  : status === "pending"
                  ? "text-yellow-500"
                  : status === "cancelled"
                  ? "text-red-500"
                  : null
              }`}>
              <span>{icon}</span>
              <p>{status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrderCard;
