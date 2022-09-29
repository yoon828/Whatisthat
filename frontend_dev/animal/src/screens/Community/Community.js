import React, { useState } from "react";
import "./Community.css";
import CardList from "../../components/CardList";
import LostDetailList from "./LostDetailList";
import { useNavigate } from "react-router-dom";

function Community() {
  const navigate = useNavigate();
  const [comType, setComType] = useState("showpet");
  const goEdit = () => {
    navigate("create");
  };
  const goEdit2 = () => {
    navigate("create2");
  };
  return (
    <div id="community">
      <div className="background__banner">
        <img
          className="banner-img"
          src="./CombannerImg.jpg"
          alt="combannerimg"
        />
      </div>
      <div className="item-content">
        <div className="banners">
          <button
            type="button"
            onClick={() => {
              setComType("showpet");
            }}
            className={`banner-showpet ${
              comType === "showpet" ? "active" : null
            }`}
          >
            자랑하기
          </button>
          <button
            onClick={() => {
              setComType("lost");
            }}
            className={`banner-lost ${comType === "lost" ? "active" : null}`}
            type="button"
          >
            실종동물찾기
          </button>
        </div>
        <div>
          <button className="notoReg" type="button" onClick={goEdit}>
            자랑하기 글 작성
          </button>
          <button className="notoReg" type="button" onClick={goEdit2}>
            실종동물 글 작성
          </button>
        </div>
        {comType === "showpet" ? <CardList /> : <LostDetailList />}
      </div>
    </div>
  );
}
export default Community;
