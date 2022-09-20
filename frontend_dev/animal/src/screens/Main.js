import React from "react";
import "./Main.css";

function Main() {
  return (
    <div id="main">
      <div className="main-background">
        <div className="main-card">
          <div className="yellow-box">
            <div className="main-description">
              <h1>메인소개글입니다.</h1>
              <br />
              <br />
              <br />
              <h3>서브소개글입니다. 무엇을 서비스 할 것입니까?</h3>
            </div>
          </div>
          <img
            className="background-cat"
            src="/background-cat.svg"
            alt="background-cat"
          />
        </div>
        <img
          className="background-dog"
          src="/background-dog.svg"
          alt="background-dog"
        />
      </div>
    </div>
  );
}

export default Main;
