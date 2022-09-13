import React from "react";
import "./MainNavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src="/MainDog.svg"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/diagnose">진단하기</Nav.Link>
            <Nav.Link href="/community">커뮤니티</Nav.Link>
            <Nav.Link href="/firstaid">응급처치 방법</Nav.Link>
            <Nav.Link href="/facilities">주변시설</Nav.Link>
            <Nav.Link href="">로그인</Nav.Link>
            <Nav.Link href="">회원가입</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    // <div className="nav-wrapper">
    //   <nav id="main-nav-bar" className="flex">
    //     <img className="logo" src="/MainDog.svg" alt="" />
    //     <Link className="title" to="/">
    //       멍냥멍냥
    //     </Link>
    //     <div className="nav-container">
    //       <nav className="nav-items">
    //         <NavLink to="/diagnose">진단하기 </NavLink>
    //         <NavLink to="/community">커뮤니티 </NavLink>
    //         <NavLink to="/firstaid">응급처치안내 </NavLink>
    //         <NavLink to="facilities">근처시설 </NavLink>
    //         <Link to="/login">로그인 </Link>
    //         <Link to="/join">회원가입 </Link>
    //       </nav>
    //     </div>
    //   </nav>
    // </div>
  );
}

export default MainNavbar;
