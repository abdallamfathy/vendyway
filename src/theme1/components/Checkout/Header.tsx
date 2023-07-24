import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="bg-[#E8E8E880] w-full px-6 py-3 rounded-t-lg">
      <h1 className="text-mdark1 font-bold">{props.title}</h1>
    </div>
  );
};

export default Header;
