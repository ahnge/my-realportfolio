import React from "react";

type Props = {
  children: React.ReactNode;
  link: string;
};

const IconContainer = ({ children, link }: Props) => {
  return (
    <div className="w-10 transition cursor-pointer lg:w-16 hover:text-black">
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
};

export default IconContainer;
