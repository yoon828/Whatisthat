import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CommunityShowpetDetail.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Comments from "@components/comments/Comments";
// import CommentInput from "@components/comments/CommentInput";

function CommunityShowpetDetail() {
  const { id } = useParams();
  const [newComment, setNewComment] = useState(false);
  const [article, setArticle] = useState();
  const [comment, setComment] = useState();
  const navigate = useNavigate();
  const UserInfo = useSelector((state) => state.auth.userInfo);

  const changed = () => {
    setNewComment((cur) => !cur);
  };

  const [isAuthor, setIsAuthor] = useState();
  // const isAuthor = UserInfo?.nickname === article.userNickname;

  useEffect(() => {
    axios({
      url: `http://ssafy.io/api/show-pet/detail/${id}`,
      method: "get",
      headers: {
        Token: "",
      },
    })
      .then((res) => {
        setArticle(res.data.data);
        // const comments = res.Comments.reverse();
        // setComment(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newComment, id]);
  return (
    <div id="showpet-detail">
      <div className="article">
        <div className="title">
          {/* <p>{data.title}</p>
          <p>{data.content}</p>
          <p>{data.name}</p> */}
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
            <img />
          </div>
          <div className="content-description">content</div>
        </div>
      </div>
      {/* <div className="comment flex column">
        <div className="comment-head">
          <p className="notoMid">
            댓글<span className="">{article.comment}</span>
          </p>
        </div>
        <div className="comment-input flex">
          <div className="input-img-container flex">
            <img
              src={
                UserInfo?.profileImg
                  ? `data:image/jpeg;base64,${UserInfo.profileImg}`
                  : UserDummyIcon
              }
              alt="dum"
              title="user-icon"
            />
          </div>
          <CommentInput />
        </div>
        {comment ? <Comments /> : null}
      </div> */}
    </div>
  );
}

export default CommunityShowpetDetail;
