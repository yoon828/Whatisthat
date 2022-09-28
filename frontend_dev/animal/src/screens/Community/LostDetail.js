import React from "react";
import "./LostDetail.css";
import { Link } from "react-router-dom";

function CommunityLostDetail({
  data: {
    id,
    title,
    gender,
    user_nickname,
    lost_date,
    age,
    weight,
    kind,
    place,
    phone,
    pay,
    etc,
    is_found,
    name,
    date,
    imgs,
  },
}) {
  return (
    <div id="communitylostdetail">
      <Link to={`/userfeed/${user_nickname}`}>
        <div className="lost">
          <div className="lost-imgwrapper">
            <img className="lost-img" src="DummyImg.svg" alt="dummy" />
          </div>
          <div className="lost-content">
            <p>{title}</p>
            <p>{gender}</p>
            <p>{age}</p>
            <p>{kind}</p>
            <p>{lost_date}</p>
            <p>{place}</p>
            <p>{etc}</p>
            <p>{phone}</p>
            <p>{pay}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CommunityLostDetail;
