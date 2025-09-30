import React from "react";
import { H2 } from "../mini-components/h2/H2";
import "../pages/Contact.css";

const Avatar: React.FC = () => {
  return (
    <div className="avatar">
      <div className="avatar-circle"></div>
      <H2 className="avatar-name">Mónica Riggioni</H2>
    </div>
  );
};

export default Avatar;
