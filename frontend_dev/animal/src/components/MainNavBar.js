import React from "react";
import "./MainNavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import LoginCallback from "../screens/LoginCallback";
import { NavLink } from "react-router-dom";

function MainNavbar() {
  let [accessToken, setAccesToken] = useState("");
  let [refreshToken, setRefreshToken] = useState("");
  let [isLoggedIn, setIsLoggedIn] = useState(
    accessToken && refreshToken ? true : false
  );
  useEffect(() => {
    setIsLoggedIn(accessToken && refreshToken ? true : false);
  }, [accessToken, refreshToken]);
  useEffect(() => {
    setAccesToken(localStorage.getItem("accessToken"));
    setRefreshToken(localStorage.getItem("refreshToken"));
  }, []);

  return (
    <Navbar bg="light" expand="lg" id="navfont">
      <Container className="container">
        <Navbar.Brand href="/">
          <img src="/MainDog.svg" alt="maindog"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="left-nav fw-bold">
            <Nav.Link
              onClick={() => {
                if (isLoggedIn) {
                  document.location.href = "/diagnose";
                } else {
                  alert("로그인이 필요합니다.");
                }
              }}
            >
              진단하기
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                if (isLoggedIn) {
                  document.location.href = "/show-pet/list";
                } else {
                  alert("로그인이 필요합니다.");
                }
              }}
            >
              커뮤니티
            </Nav.Link>
            <Nav.Link href="/firstaid">응급처치 방법</Nav.Link>
            <Nav.Link
              onClick={() =>
                window.open("https://map.kakao.com/link/search/반려동물")
              }
            >
              주변시설
            </Nav.Link>
          </Nav>
          {isLoggedIn ? (
            <Nav className="right-nav">
              <Nav.Link
                id="Btn3"
                onClick={() => {
                  // 로그아웃 api 요청

                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  setAccesToken("");
                  setRefreshToken("");
                  document.location.href = "/";
                }}
              >
                Logout
              </Nav.Link>
              <Nav.Link href="mypage" id="Btn3">
                My page
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="right-nav">
              <Nav.Link href="/login">LOGIN</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
