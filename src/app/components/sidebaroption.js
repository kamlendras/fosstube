import React from "react";
import styles from "../styles/Ask.module.css";

function Sidebaroption({ active, text, Icon }) {
  return (
   
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>  
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default Sidebaroption;
