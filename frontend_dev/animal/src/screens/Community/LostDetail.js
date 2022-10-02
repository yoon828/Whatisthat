import React, { useState } from "react";
import "./LostDetail.css";
import { deleteLost } from "../../api/community";
import { useNavigate, useParams } from "react-router-dom";

function CommunityLostDetail({
  lost: {
    age,
    etc,
    gender,
    imgs,
    is_found,
    kind,
    lost_date,
    name,
    pay,
    phone,
    place,
    title,
    weight,
  },
}) {
  const navigate = useNavigate();
  const [article, setArticle] = useState({});

  const deleteArticle = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        const { data } = await deleteLost(article.id);
        if (data.success) {
          alert("삭제되었습니다.");
          navigate("/lost/list");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const editArticle = () => {
  //   navigate("/lost", {
  //     state: article,
  //   });
  // };

  return (
    <div id="communitylostdetail">
      <div className="lost">
        <div className="lost-imgwrapper">
          <img className="lost-img" src="DummyImg.svg" alt="dummy" />
        </div>
        <div className="lost-content">
          <p>{title}444</p>
          <p>{name}</p> <p>{gender}</p>
          <p>{age}</p>
          <p>{kind}</p>
          <p>{lost_date}</p>
          <p>{place}</p>
          <p>{etc}</p>
          <p>{phone}</p>
          <p>{pay}</p>
          <div>
            <button className="lost-edit">수정</button>
            <button className="lost-delete" onClick={() => deleteArticle()}>
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityLostDetail;
