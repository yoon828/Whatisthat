import React, { useState, useEffect } from "react";
import CardList from "../../components/CardList";
import "./Community.css";
import LostDetailList from "./LostDetailList";
import { reqShowList } from "@apis/community";

function Community() {
  const [comType, setComType] = useState("showpet");
  const [conditions, setConditions] = useState({
    category: "community",
    sort: "최신순",
  });
  const handleConditions = () => {
    if (type === "keyword" && value === "") {
      setConditions({ ...conditions, [type]: null });
    } else {
      setConditions({ ...conditions, [type]: value });
    }
  };
  useEffect(() => {
    (async () => {
      const res = await reqShowList();
    })();
  }, []);

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
          <select
            className="sort-list-select"
            onChange={(e) => handleConditions("sort", e.target.value)}
          >
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
