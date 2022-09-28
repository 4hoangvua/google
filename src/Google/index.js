import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./google.css";
import Item from "./Item";
const icon = [
  { title: "Facebook", icon: <AiFillGoogleCircle /> },
  { title: "Facebook", icon: <AiFillGoogleCircle /> },
  { title: "Facebook", icon: <AiFillGoogleCircle /> },
  { title: "Facebook", icon: <AiFillGoogleCircle /> },
  { title: "Facebook", icon: <AiFillGoogleCircle /> },
  { title: "Facebook", icon: <AiFillGoogleCircle /> },
  { title: "Facebook", icon: <AiFillGoogleCircle /> },
  { title: "Facebook", icon: <AiFillGoogleCircle /> },
  { title: "Facebook", icon: <AiFillGoogleCircle /> },
  { title: "Facebook", icon: <AiFillGoogleCircle /> },
];
const Google = () => {
  return (
    <>
      <div className="container">
        <h1>Google</h1>
        <input type="text" />
        <div className="group-item">
          {icon.map((item, index) => {
            return <Item key={index} title={item.title} icon={item.icon} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Google;
