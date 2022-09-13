import React, { useState } from "react";
import CardList from "../../components/CardList";
import "./Community.css";

function Community() {
  const [comType, setComType] = (useState < "showpet") | ("lost" > "showpet");
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
      <div className="item-list">
        <div className="sort-list">sort</div>
        <CardList />
      </div>
    </div>
  );
}
export default Community;
