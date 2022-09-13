import React, { useState } from "react";
import CardList from "../../components/CardList";
import "./Community.css";

function Community() {
  const [comType, setComType] = (useState < "showpet") | ("lost" > "showpet");
  const [conditions, setConditions] = useState({
    category: "showpet",
    sort: "최신순",
    keyword: null,
  });
  const handleConditions = () => {
    if (type === "keyword" && value === "") {
      setConditions({ ...conditions, [type]: null });
    } else {
      setConditions({ ...conditions, [type]: value });
    }
  };
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
        <select
          className="sort-list-select"
          onChange={(e) => handleConditions("sort", e.target.value)}
        >
          <option value="최신순">최신순</option>
          <option value="조회순">조회순</option>
        </select>
      </div>
      <CardList />
    </div>
  );
}
export default Community;
