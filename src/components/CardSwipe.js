import React from "react";

const cardStyles = {
  // background: "whitesmoke",
  borderRadius: 3,
  width: "300px",
  height: "100px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0
};

const CardSwipe = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default CardSwipe;
