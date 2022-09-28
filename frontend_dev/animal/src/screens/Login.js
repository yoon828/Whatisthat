import "./Login.css";
import React from "react";
import axios from 'axios';
import Lottie from 'lottie-react';
import dog from './../lotties/dog.json'



function Login() {
  return (
    <div id="login">
      <div className="text-center" id='wrapper'>
        <div className="header">
          <div id="header__intro">
            <Lottie animationData={dog} style={{'width':'100px'}}></Lottie>
            <p id="header__name">이게멍냥</p>
          </div>
          <p id="header__title">
            반가워요!
            <br />
            이게멍냥입니다.
          </p>
        </div>
        <div className="content">
          <div className="line"></div>
          <p id="header__mention">SNS로 간편하게 시작하기</p>
          <img src='/kakao_login.png' id='loginBtn' onClick={()=>{
            // 카카오 로그인 연결
          }}></img><br></br>
          <img src='/naver_login.png' id='loginBtn' onClick={()=>{
            // 네이버 로그인 연결
          }}></img>

          {/* <section className="social-login">
            <button type="button" className="social-login__btn-kakao">
              <img
                className="btn__img-kakao"
                src="./kakao_login.png"
                alt="kakaoimg"
              />
            </button>
            <button type="button" className="social-login__btn-naver">
              <img
                className="btn__img-naver"
                src="./naver_login.png"
                alt="naverimg"
              />
            </button>
          </section> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
