import React from "react";

interface InputProps {
  placeholder?: string;
  type: string;
  name?: string;
  id?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  htmlFor?: string;
  label?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

const Input: React.FC<InputProps> = ({
  className,
  fullWidth,
  htmlFor,
  id,
  label,
  name,
  onChange,
  onClick,
  placeholder,
  type,
  value,
  noPadding,
}) => {
  return (
    <div className={`${fullWidth && "w-full"} flex flex-col gap-2 text-dark1`}>
      {label && <label htmlFor={htmlFor} className="text-sm">{label}</label>}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        className={`${
          fullWidth && "w-full"
        } ${className} bg-transparent outline-none border border-lgray1 rounded-lg placeholder:text-lgray1 ${
          noPadding ? "" : "pl-4 py-3"
        }`}
      />
    </div>
  );
};

export default Input;
