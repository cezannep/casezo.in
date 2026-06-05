import React from "react";
interface Props {
  children:React.ReactNode;
  type: "submit" | "reset" | "button";
  className?: string;
  onclick?: () => void;

}

const Button = ({ className, type, onclick, children }: Props) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={
        " w-full h-12 border border-white rounded-lg  text-white  text-sm font-medium  hover:bg-white hover:text-black transition-all cursor-pointer " +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
