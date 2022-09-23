import React from "react";
import "./LostDetail.css";

function CommunityLostDetail() {
  return (
    <div id="communitylostdetail">
      <div className="lost">
        <div className="lost-imgwrapper">
          <img className="lost-img" src="DummyImg.svg" alt="dummy" />
        </div>
        <div className="lost-content">
          <p>title</p>
          <p>sex</p>
          <p>age</p>
          <p>kind</p>
          <p>date</p>
          <p>location</p>
          <p>description</p>
          <p>phonenumber</p>
          <p>pay</p>
        </div>
      </div>
    </div>
  );
}

export default CommunityLostDetail;
