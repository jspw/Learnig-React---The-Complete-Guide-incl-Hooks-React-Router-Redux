import React from "react";
import cssClasses from "./Button.module.css";

const button = (props) => {
  return (
    <button
      className={[cssClasses.Button, cssClasses[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
