import React from "react";
import { Link } from "react-router-dom";

export interface ButtonProps {
  text: string;
  primary?: boolean;
  link: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Link to={props.link}>
      <button
        className={`w-full rounded-full text-center py-3 font-medium text-sm ${
          props.primary ? "bg-pink1 text-white" : "border-2 border-pink1 text-pink1"
        }`}>
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
