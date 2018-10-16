import React from "react";

const buttonStyles = {
  background: "whitesmoke",
  cursor: "pointer",
  border: "none",
  borderRadius: 3,
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>
    {children}
  </button>
);

export default Button;