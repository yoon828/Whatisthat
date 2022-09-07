import React from "react";
import "./MainNavBar.css";
import { Link, NavLink } from "react-router-dom";

function MainNavbar() {
  return (
    <div className="nav-wrapper">
      <nav id="main-nav-bar" className="flex">
        <img className="logo" src="/MainDog.svg" alt="" />
        <Link className="title" to="/">
          멍냥멍냥
        </Link>
        <div className="nav-container">
          <nav className="nav-items">
            <NavLink to="/diagnose">진단하기 </NavLink>
            <NavLink to="/community">커뮤니티 </NavLink>
            <NavLink to="/firstaid">응급처치안내 </NavLink>
            <NavLink to="facilities">근처시설 </NavLink>
            <Link to="/login">로그인 </Link>
            <Link to="/join">회원가입 </Link>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
