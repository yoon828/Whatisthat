import React from "react";
import "./Card.css";

function Card() {
  return (
    <div id="card">
      <div className="img-container">
        <img className="card-thumnail" src="./DummyImg.svg" alt="dummyimg" />
      </div>
      <div className="card-description">
        <p>안녕하세요 고양이입니다.</p>
      </div>
    </div>
  );
}

export default Card;
