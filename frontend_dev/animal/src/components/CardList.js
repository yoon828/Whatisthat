import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./CardList.css";
import Card from "./Card.js";
import axios from "axios";

function CardList() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios({
      url: "http://j7c101.p.ssafy.io:8080/api/show-pet/list",
      method: "get",
    })
      .then((res) => {
        setCards(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="card-list">
      <div>
        {cards.map((card) => (
          <div className="col">
            <Card card={card} key={card.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
