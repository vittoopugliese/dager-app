import React from "react";
import {socials} from "../../utils/constants";
import {SocialCard} from "./../Shared/SocialCard";

const Socials = () => {
  return (
    <div className="socials-container">
      {socials.map((social) => {
        return <SocialCard social={social} key={social.name} />;
      })}
    </div>
  );
};

export default Socials;
