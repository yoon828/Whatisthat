import React from "react";
import "./Main.css";
import MainBackground from "@images/MainBackground.svg";

function Main() {
  return (
    <div id="main">
      <div className="main-background flex">
        <img
          className="main-background__img"
          src={MainBackground}
          alt="background"
        />
      </div>
      <div className="main-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
        placeat tenetur iusto aliquam dignissimos temporibus ipsum iure
        quibusdam harum facere exercitationem explicabo est voluptate ad
        pariatur unde architecto, tempora minima!
      </div>
    </div>
  );
}

export default Main;
