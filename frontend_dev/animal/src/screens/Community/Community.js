import React, { useState } from "react";
import CardList from "../../components/CardList";
import "./Community.css";

function Community() {
  const [comType, setComType] = useState("showpet");
  return (
    <div id="community">
      <div classname="banner">
        <button
          type="button"
          onClick={() => {
            setComType("showpet");
          }}
          className={`banner-showpet ${
            comType === "showpet" ? "active" : null
          }`}
        >
          showpet
        </button>
        <button
          onClick={() => {
            setComType("lost");
          }}
          className={`banner-lost ${comType === "lost" ? "active" : null}`}
          type="button"
        >
          lost
        </button>
      </div>
      <div className="sort-list flex">
        <select className="sort-list-select">
          <option value="최신순">최신순</option>
          <option value="조회순">조회순</option>
        </select>
      </div>
      <CardList />
    </div>
  );
}
export default Community;
