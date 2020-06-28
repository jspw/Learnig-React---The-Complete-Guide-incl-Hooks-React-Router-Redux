import React from "react";
import cssClasses from "./Backdrop.module.css";

const backdrop = (props) => {
  return props.show ? <div className={cssClasses.Backdrop} 
    onClick={props.clicked}
  >
      {console.log("Aaah!")}
  </div> : null;
};

export default backdrop;
