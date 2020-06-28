import React from "react";
import cssClasses from "./BuildControl.module.css";

const buildControl = (props) => {
  return (
    <div className={cssClasses.BuildControl}>
      <div className={cssClasses.Label}>{props.label}</div>
      <button
        className={cssClasses.Less}
        onClick={props.remove}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={cssClasses.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
