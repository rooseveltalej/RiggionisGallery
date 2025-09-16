import React from "react";
import Button from "./Button";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";

const ButtonExample: React.FC = () => {
  const handleClick = () => {
    alert("¡Botón clickeado!");
  };

  return (
    <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Button
        text="WhatsApp"
        icon={<FaWhatsapp size={20} />}
        color="#25D366"
        onClick={handleClick}
      />

      <Button
        text="Comprar"
        icon={<FaShoppingCart size={20} />}
        color="#5c0a0a"
        onClick={handleClick}
      />

      <Button
        text="Sin Icono"
        color="#007BFF"
        onClick={() => console.log("Click en botón sin icono")}
      />
    </div>
  );
};

export default ButtonExample;
