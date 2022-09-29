import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./CardList.css";
import Card from "./Card.js";
import axios from "axios";
import dummy from "./data.json";

function CardList() {
  const [cards, setCards] = useState([]);
  console.log(dummy);
  // useEffect(() => {
  //   axios({
  //     url: "http://j7c101.p.ssafy.io:8080/api/show-pet/list",
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       withCredentials: true,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div id="card-list">
      <div className="row">
        {dummy.data.map((dm) => (
          <div className="col">
            <Card className="card" dm={dm} key={dm.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
