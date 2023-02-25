import React from "react";
import { FacebookLogo, LinkedInLogo, Mail } from "../logos/logo";
import IconContainer from "./IconContainer";

const SocialIcons = () => {
  return (
    <div className="flex mt-5 gap-x-2 sm:justify-center xl:justify-start">
      <IconContainer link="https://www.linkedin.com/in/nayzaw-minnaing/">
        <LinkedInLogo />
      </IconContainer>
      <IconContainer link="https://www.facebook.com/nayzawminnaing1">
        <FacebookLogo />
      </IconContainer>
    </div>
  );
};

export default SocialIcons;
