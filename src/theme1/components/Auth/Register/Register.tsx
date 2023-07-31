import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Header from "../Header";
import Input from "../Input";
import Social from "../Social";
import Button from "../../Extras/Button";

const Register = () => {
  return (
    <div className=" container mx-auto  flex justify-center items-center py-14">
      <div className="bg-white rounded-lg modalShadow py-8 px-6 flex flex-col justify-center items-center gap-8 w-98">
        <Header name={"Hager"} message="Please enter your sign up details" />
        <div className="flex flex-col gap-3 w-full">
          <Input type="email" placeholder="" primary="Full Name" />
          <Input type="text" placeholder="Email" />
          <Input type="tel" placeholder="Phone" />
          <Input type="password" placeholder="Password" />
        </div>
        <div className="flex flex-col gap-6 w-full">
          <Button
            text="Sign Up"
            className="py-3"
            variant={"primary"}
            fullWidth
          />
          <Button
            link="/login"
            text="Login"
            className="py-3"
            variant={"outline"}
            fullWidth
          />
        </div>
        <div className="flex flex-col gap-5 items-center">
          <span className="text-mgray1 text-xs">Or Continue With</span>
          <div className="flex items-center justify-around gap-5">
            <Social icon={FcGoogle} text="Google" />
            <Social icon={FaFacebook} text="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
