import "./Login.css";
import React from "react";

function Login() {
  return (
    <div id="login">
      <div className="wrapper">
        <div className="header">
          <div className="header__intro">
            <img className="header__img" src="./MainDog.svg" alt="icon" />
            <p className="header__name">이게멍냥</p>
          </div>
          <p className="header__title">
            반가워요!
            <br />
            이게멍냥입니다.
          </p>
        </div>
        <div className="content">
          <div className="line"></div>
          <p className="header__mention">SNS로 간편하게 시작하기</p>
          <section className="social-login">
            <button type="button" className="social-login__btn-kakao">
              <img
                className="btn__img-kakao"
                src="./Kakao.svg"
                alt="kakaoimg"
              />
              <p className="btn__word-kakao">카카오 로그인</p>
            </button>
            <button type="button" className="social-login__btn-naver">
              <img
                className="btn__img-naver"
                src="./Naver.svg"
                alt="naverimg"
              />
              <p className="btn__word-naver">네이버 로그인</p>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
