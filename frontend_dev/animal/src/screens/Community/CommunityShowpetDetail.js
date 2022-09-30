import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CommunityShowpetDetail.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Comments from "@components/comments/Comments";
// import CommentInput from "@components/comments/CommentInput";

function CommunityShowpetDetail({ id }) {
  const [article, setArticle] = useState({
    content: "세상 사람들 이리와서 우리 초코 좀 보세요",
    imgs: [
      "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    ],
    name: "초코",
    title: "우리 초코 자랑할게요",
  });
  const [comments, setComments] = useState([
    {
      id: 1,
      user_nickname: "코딩왕",
      content: "방울이 최고!",
      date: 1663502067000,
    },
    {
      id: 2,
      user_nickname: "알고리즘마스터",
      content: "감사합니다!!",
      date: 1663502123000,
    },
  ]);
  // useEffect(() => {
  //   axios({
  //     url: `http://ssafy.io/api/show-pet/detail/${id}`,
  //     method: "get",
  //     headers: {
  //       Token: "",
  //     },
  //   })
  //     .then((res) => {
  //       // setDiagnosisList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  return (
    <div id="showpet-detail">
      <div className="article">
        <div className="title">
          <p>{article.title}</p>
          <p>date</p>
          <p>{article.name}</p>
        </div>
        {isAuthor ? (
          <div>
            <button className="">수정</button>
            <button className="">삭제</button>
          </div>
        ) : (
          ""
        )}

        <div className="content">
          <div className="content-imgwrapper">
            <img src={article.imgs[0]} alt="img" className="content-img"/>
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
