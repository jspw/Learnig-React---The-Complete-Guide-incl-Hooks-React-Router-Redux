import React from "react";
import cssClasses from "./Toolbar.module.css";

const toolbar = (props) => {
  return (
    <header className={cssClasses.Toolbar}>
      <div>Menu</div>
      <div>LOGO</div>
      <nav>....</nav>
    </header>
  );
};

export default toolbar;
