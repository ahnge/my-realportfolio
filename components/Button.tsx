import React from "react";

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="flex px-5 py-2 text-base transition border-2 rounded-lg sm:items-center w-fit border-action-pur hover:scale-105 gap-x-3">
      {children}
    </button>
  );
};

export default Button;