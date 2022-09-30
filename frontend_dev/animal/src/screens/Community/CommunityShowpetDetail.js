import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CommunityShowpetDetail.css";
import { useSelector } from "react-redux";
import Comments from "../../components/comments/Comments";
import CommentInput from "../../components/comments/CommentInput";

function CommunityShowpetDetail({ id }) {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios({
      url: `http://ssafy.io/api/show-pet/detail/${id}`,
      method: "get",
      headers: {
        Token: "",
      },
    })
      .then((res) => {
        // setDiagnosisList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div id="showpet-detail">
      <div className="article">
        <div className="title">
          <p>{article.title}</p>
          <p>date</p>
          <p>{article.name}</p>
        </div>
        <div>
          <button className="">수정</button>
          <button className="">삭제</button>
        </div>

        <div className="content">
          <div className="content-imgwrapper">
            <img src={article.imgs[0]} alt="img" className="content-img" />
          </div>
          <div className="content-description">{article.content}</div>
        </div>
      </div>
      <div className="comment flex column">
        <div className="comment-head">
          <p className="notoMid">
            댓글
            {/* <span className="">{article.comment}</span> */}
          </p>
        </div>
        <div className="comment-input flex">
          <div className="input-img-container flex"></div>
          <CommentInput />
        </div>
        {comments.length !== 0 ? <Comments comments={comments} /> : null}
      </div>
    </div>
  );
}

export default CommunityShowpetDetail;
