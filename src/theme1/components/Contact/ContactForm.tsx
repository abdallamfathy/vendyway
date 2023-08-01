import React from "react";
import Button from "../Extras/Button";
import Input from "../Extras/Input";

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <h1 className="font-bold text-dark1 md:text-3xl text-xl">Contact us</h1>
      <div className="flex flex-col gap-7">
        <div className="flex md:flex-row flex-col justify-between gap-6">
          <Input
            fullWidth
            type="text"
            label="Name"
            placeholder="Enter your name..."
          />
          <Input
            fullWidth
            type="email"
            label="Email"
            placeholder="Your email address..."
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-6">
          <Input
            fullWidth
            type="text"
            label="Subject"
            placeholder="Enter your subject..."
          />
          <Input
            fullWidth
            type="text"
            label="Enquiry type"
            placeholder="Advertising"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="asd" className="text-dark1">
            Message
          </label>
          <textarea
            cols={100}
            rows={8}
            placeholder="Enter your message..."
            className="outline-none p-3 rounded-lg border border-lgray1 placeholder:text-lgray1"></textarea>
        </div>
      </div>
      <Button text="Submit" className=" py-3" variant={"primary"} size="lg" />
    </div>
  );
};

export default ContactForm;
