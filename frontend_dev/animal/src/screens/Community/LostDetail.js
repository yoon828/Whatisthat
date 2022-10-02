import React, { useState, useEffect } from "react";
import "./LostDetail.css";
import { putIsFound, deleteLost } from "../../api/community";
import { useNavigate, useParams } from "react-router-dom";

function CommunityLostDetail({ lost }) {
  const imgServerUrl = process.env.REACT_APP_IMAGE_SERVER_URL;

  const [isFound, setIsFound] = useState(lost.is_found);
  const [article, setArticle] = useState({});
  const navigate = useNavigate();

  const toggleFound = async () => {
    console.log(isFound);
    setIsFound(!isFound);
    console.log(isFound);
    try {
      const { data } = await putIsFound({
        id: lost.id,
        is_found: !isFound,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArticle = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        const { data } = await deleteLost(lost.id);
        console.log(data);
        if (data.success) {
          alert("삭제되었습니다.");
          navigate("/lost/list");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    console.log(isFound);
  }, [isFound]);

  return (
    <div>
      <div className="lost">
        <div className="lost-imgwrapper">
          <img
            className="lost-img"
            src={`${imgServerUrl}/${lost.imgs[0].img_url}`}
            alt="dummy"
          />
        </div>
        <div className="lost-content">
          <p>{lost.title}</p> <p>{lost.name}</p>
          <p>{lost.weight}</p> <p>{lost.gender}</p>
          <p>{lost.age}</p>
          <p>{lost.kind}</p>
          <p>{lost.lost_date}</p>
          <p>{lost.place}</p>
          <p>{lost.etc}</p>
          <p>{lost.phone}</p>
          <p>{lost.pay}</p>
          <div>
            <input
              className="lost-isfound"
              type="checkbox"
              onChange={toggleFound}
            />
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
