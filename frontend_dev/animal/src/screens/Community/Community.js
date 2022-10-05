import React, { useState, useEffect } from "react";
import "./Community.css";
import LostDetailList from "./LostDetailList";
import { Link, useLocation } from "react-router-dom";
import CommunityShowpet from "./CommunityShowpet";
import Lottie from 'lottie-react'
import comm from '../../lotties/comm.json'
import { getUserInfo } from "../../api/user";

function Community() {
  const [comType, setComType] = useState("showpet");

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/lost/list") {
      setComType("lost");
    }
  }, []);

  return (
    <div id="community">
      <div className="background__banner">
        <Lottie animationData={comm} style={{ 'width': '250px' }} />
        <h1 style={{ 'fontSize': '100px', 'marginLeft': '40px' }}>커뮤니티</h1>

      </div>
      <div className="item-content">
        <div className="banners">
          <Link to={`/show-pet/list`}>
            <button
              type="button"
              onClick={() => {
                setComType("showpet");
              }}
              className={`banner-item ${comType === "showpet" ? "active" : ""}`}
            >
              자랑하기
            </button>
          </Link>
          <Link to={`/lost/list`}>
            <button
              onClick={() => {
                setComType("lost");
              }}
              className={`banner-item ${comType === "lost" ? "active" : ""}`}
              type="button"
            >
              실종동물찾기
            </button>
          </Link>
        </div>
        {comType === "showpet" ? <CommunityShowpet /> : <LostDetailList />}
      </div>
    </div>
  );
}
export default Community;
