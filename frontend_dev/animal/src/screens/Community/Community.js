import React, { useState, useEffect } from "react";
import CardList from "../../components/CardList";
import "./Community.css";
import LostDetailList from "./LostDetailList";
import { useNavigate } from "react-router-dom";

// import { reqShowList } from "@apis/community";

function Community() {
  const navigate = useNavigate();
  const [comType, setComType] = useState("showpet");
  const [conditions, setConditions] = useState({
    category: "community",
    sort: "최신순",
  });

  const goEdit = () => {
    navigate("create");
  };
  const goEdit2 = () => {
    navigate("create2");
  };
  // useEffect(() => {
  //   (async () => {
  //     const res = await reqShowList();
  //   })();
  // }, []);

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
        <button className="notoReg" type="button" onClick={goEdit}>
          글쓰기
        </button>
        <button className="notoReg" type="button" onClick={goEdit2}>
          글쓰기2
        </button>
        {comType === "showpet" ? <CardList /> : <LostDetailList />}
      </div>
    </div>
  );
}
export default Community;
