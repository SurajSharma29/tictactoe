import React from "react";
const style = {
  background: "lightblue",
  border: "3px solid blue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};
const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} style={style}>
      {value}
    </button>
  );
};
export default Square;
