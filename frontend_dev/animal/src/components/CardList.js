import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./CardList.css";
import Card from "./Card.js";
import axios from "axios";

function CardList(condition) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios({
      url: "http://j7c101.p.ssafy.io:8080/api/show-pet/list",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        withCredentials: true,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="card-list">
      <div className="row row-cols-1 row-cols-md-3 g-4 ]">
        {cards.map((data) => (
          <div className="col">
            <Card className="card" data={data} key={data.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
