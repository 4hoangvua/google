import React from "react";
import "./item.css";
const Item = ({ title, icon }) => {
  return (
    <div className="containerItem">
      {icon}
      <h4>{title}</h4>
    </div>
  );
};

export default Item;
