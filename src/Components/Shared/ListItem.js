import React from "react";
import "./ListItem.css";

const ListItem = ({ text }) => {
  return (
    <a
      href="#"
      className="font-display max-w-sm leading-tight hover:text-darkGrayishBlue"
    >
      <span className="hover:text-link link-underline link-underline-black text-black">
        {text}
      </span>
    </a>
  );
};

export default ListItem;
