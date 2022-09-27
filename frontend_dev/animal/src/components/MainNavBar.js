import React from "react";
import "./MainNavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from 'react'
import axios from 'axios';

function MainNavbar() {
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <Navbar bg="light" expand="lg">
      <Container className="container">
        <Navbar.Brand href="/">
          <img src="/MainDog.svg" alt="maindog"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="left-nav fw-bold">
            <Nav.Link href="/diagnose">진단하기</Nav.Link>
            <Nav.Link href="/community">커뮤니티</Nav.Link>
            <Nav.Link href="/firstaid">응급처치 방법</Nav.Link>
            <Nav.Link
              onClick={() =>
                window.open("https://map.kakao.com/link/search/반려동물")
              }
            >
              주변시설
            </Nav.Link>
          </Nav>
          {
            isLoggedIn ? <Nav className="right-nav">
            <Nav.Link href="/login">Logout</Nav.Link>
            <Nav.Link href="join">My page</Nav.Link>
          </Nav> :
          <Nav className="right-nav">
          <Nav.Link href="/login">LOGIN</Nav.Link>
          <Nav.Link href="join">SIGN UP</Nav.Link>
        </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
