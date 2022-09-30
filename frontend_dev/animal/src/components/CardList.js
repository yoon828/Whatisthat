import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./CardList.css";
import Card from "./Card.js";
import axios from "axios";
import dummy from "./data.json";

function CardList() {
  const [cards, setCards] = useState([
    // {
    //   id: 1,
    //   title: "귀여운 방울이 자랑",
    //   user_nickname: "알고리즘마스터",
    //   date: 1663501915000,
    // },
    // {
    //   id: 2,
    //   title: "귀여운 방울이 자랑 2탄",
    //   user_nickname: "알고리즘마스터",
    //   date: 1663502850000,
    // },
    // {
    //   id: 3,
    //   title: "똘이입니다",
    //   user_nickname: "코딩왕",
    //   date: 1663502903000,
    // },
  ]);
  useEffect(() => {
    axios({
      url: "http://j7c101.p.ssafy.io:8080/api/show-pet/list",
      method: "get",
      headers: {
        // Token: "",
      },
    })
      .then((res) => {
        setCards(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div id="card-list">
      <div className="row">
        {cards.map((dm) => (
          <div className="col">
            <Card className="card" dm={dm} key={dm.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
