import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div id={`${props.id}`} className={`${props.className} jumbotron`}>
      {props.children}
    </div>
  );
}

export default Jumbotron;
