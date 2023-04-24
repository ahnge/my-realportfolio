import React from "react";

type Props = {
  children: React.ReactNode;
  link: string;
};

const IconContainer = ({ children, link }: Props) => {
  return (
    <div className="w-10 transition cursor-pointer lg:w-16 hover:text-pinky  dark:text-white dark:hover:text-action-pur">
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
};

export default IconContainer;
