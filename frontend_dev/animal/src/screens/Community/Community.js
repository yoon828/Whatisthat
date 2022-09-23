import React, { useState } from "react";
import CardList from "../../components/CardList";
import "./Community.css";
import LostDetailList from "./LostDetailList";

function Community() {
  const [comType, setComType] = useState("showpet");
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
        <div className="sort-list flex">
          <select className="sort-list-select">
            <option value="최신순">최신순</option>
            <option value="조회순">조회순</option>
          </select>
        </div>
        {comType === "showpet" ? <CardList /> : <LostDetailList />}
      </div>
    </div>
  );
}
export default Community;
