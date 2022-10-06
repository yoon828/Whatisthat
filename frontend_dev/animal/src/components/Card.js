import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./CardList.css";

function BasicExample({ card }) {
  return (
    <ListGroup.Item>
      <div className="img-wrap">
        <Link
          to={`/show-pet/detail/${card.id}`}
          state={{ isAuthor: card.isAuthor }}
        >
          <img src={card.list_img} alt="대표이미지" className="card-img" />
        </Link>
      </div>
      <div className="content-wrap">
        <Link
          to={`/show-pet/detail/${card.id}`}
          state={{ isAuthor: card.isAuthor }}
        >
          {card.title}
        </Link>
        <p>작성자 : {card.user_nickname}</p>
      </div>
    </ListGroup.Item>
  );
}

export default BasicExample;
