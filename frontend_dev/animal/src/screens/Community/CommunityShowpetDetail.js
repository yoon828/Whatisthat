import React, { useState, useEffect } from "react";
import "./CommunityShowpetDetail.css";
import { useSelector } from "react-redux";
import Comments from "../../components/comments/Comments";
import CommentInput from "../../components/comments/CommentInput";
import { deleteShowpet, getShowListDetail } from "../../api/community";
import { useNavigate, useParams } from "react-router-dom";
import { transform } from "../../function/functions";
import Carousel from "react-bootstrap/Carousel";

const CommunityShowpetDetail = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    getShowpetDetail();
  }, []);

  const getShowpetDetail = async () => {
    try {
      const { data } = await getShowListDetail(params.id);
      setArticle(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteArticle = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        console.log(article);
        const { data } = await deleteShowpet(article.id);
        console.log(data);
        if (data.success) {
          alert("삭제되었습니다.");
          navigator("/show-pet/list");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const editArticle = () => {
    navigator("/show-pet", {
      state: article,
    });
  };
  return (
    <div id="showpet-detail">
      <div className="article">
        <h2>{article.title}</h2>
        <Carousel>
          {article.imgs &&
            article.imgs.map((img, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img src={img} alt="mypet" />
                </Carousel.Item>
              );
            })}
        </Carousel>

        <div className="title">
          <p>{transform(article.date, "chat")}</p>
          <p>{article.name}</p>
        </div>
        <div>
          <button className="showpet-edit" onClick={() => editArticle()}>
            수정
          </button>
          <button className="showpet-delete" onClick={() => deleteArticle()}>
            삭제
          </button>
        </div>

        <div className="content">
          <div className="content-imgwrapper">
            {/* <img src={article.imgs[0]} alt="img" className="content-img" /> */}
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
};

export default CommunityShowpetDetail;
