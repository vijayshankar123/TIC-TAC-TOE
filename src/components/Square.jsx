import React from "react";

const Square = ({ clickHandler, item }) => {
  const onClickHandler = () => {
    clickHandler(item.id);
  };
  //RETURNING ALL BOXES
  return (
    <div className="squares" onClick={() => onClickHandler()}>
      <div style={{ textAlign: "center" }}>{item.value}</div>
    </div>
  );
};

export default Square;
