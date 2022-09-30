import React, { useState, useEffect } from "react";
import "./Community.css";
import CardList from "../../components/CardList";
import LostDetailList from "./LostDetailList";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Community() {
  const navigate = useNavigate();
  const [comType, setComType] = useState("showpet");
  const goEdit = () => {
    navigate("/show-pet");
  };
  const goEdit2 = () => {
    navigate("/lost");
  };

  return (
    <div id="community">
      <div className="background__banner">
        <img
          className="banner-img"
          src=".././CombannerImg.jpg"
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
          <Link to={`/lost/list`}>
            <button
              onClick={() => {
                setComType("lost");
              }}
              className={`banner-lost ${comType === "lost" ? "active" : null}`}
              type="button"
            >
              실종동물찾기
            </button>
          </Link>
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
