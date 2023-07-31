import React, { useState } from "react";
import avatar from "/src/assets/theme1/images/extras/avatar.png";
import camera from "/src/assets/theme1/icons/camera.png";
import Input from "../Input";
import Password from "./Password";
import Button from "../../Extras/Button";

const AccountInfo: React.FC = () => {
  const [show, setShow] = useState("info");
  const handleShow = (component: string) => {
    setShow(component);
  };
  return (
    <>
      {show === "info" ? (
        <div className="flex flex-col gap-8 ">
          <div className="relative w-fit cursor-pointer">
            <img
              src={avatar}
              alt="avatar"
              className="w-fit h-fit avatarShadow rounded-lg"
            />
            <img
              src={camera}
              alt="camera icon"
              className="absolute -bottom-2 -right-2"
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <Input title="First Name" type="text" placeholder="Hager" />
            <Input title="Last Name" type="text" placeholder="Tarek" />
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <Input title="Display Name" type="text" placeholder="" />
            <Input title="Gender" type="text" placeholder="Female" />
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <Input
              title="Email"
              type="email"
              placeholder="hagett10@gmail.com"
            />
            <Input title="Phone" type="tel" placeholder="12345678" />
          </div>
          <div className="flex md:flex-row flex-col items-center relative">
            <Input title="Password" type="password" placeholder="********" />
            <Button
              text="Change"
              className="absolute right-5 bottom-3 text-sm font-semibold cursor-pointer"
              onClick={() => handleShow("password")}
              variant={"text"}
            />
          </div>
          <div className="max-md:self-center ">
            <Button
              text="Save Changes"
              className="py-4"
              variant={"primary"}
              size="xl"
            />
          </div>
        </div>
      ) : show === "password" ? (
        <Password handleShow={handleShow} />
      ) : null}
    </>
  );
};

export default AccountInfo;
