import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ArticleList.css";
import styled from "styled-components";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lottie from "lottie-react";
import article from "./../lotties/article.json";
import write from "./../lotties/write.json";
import loadLottie from "./../lotties/loading.json";

const StyledBtn = styled.button`
  text-align: center;
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 15px;
  font-size: 23px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  color: black;
  background: #f5c6aa;
  margin: 20px;
  font-family: "Kotra";
  font-weight: 70px;
`;

const ArticleList = () => {
  const [type, setType] = useState("showpet");

  return (
    <div>
      <div id="article-lottie">
        <Lottie animationData={article} style={{ width: "150px" }}></Lottie>
        <h1>내가 작성한 글 보기</h1>
      </div>
      <div className="text-center">
        <StyledBtn
          className={type === "showpet" ? "act" : null}
          onClick={() => {
            setType("showpet");
          }}
        >
          자랑하기
        </StyledBtn>
        <StyledBtn
          className={type === "lost" ? "act" : null}
          onClick={() => {
            setType("lost");
          }}
        >
          실종동물 찾기
        </StyledBtn>
        {type === "showpet" ? <ShowpetList /> : <LostList />}
      </div>
    </div>
  );
};

const ShowpetList = () => {
  let accessToken = localStorage.getItem("accessToken");
  let [info, setInfo] = useState(null);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios({
      url: "http://j7c101.p.ssafy.io:8080/api/show-pet/articles",
      method: "get",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        console.log(res.data.data);
        setInfo(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [info]);
  return (
    <div
      className="container"
      style={{ marginTop: "50px", fontFamily: "Kotra", fontSize: "25px" }}
    >
      {loading ? (
        <Loading />
      ) : (
        <div>
          {info.length === 0 ? (
            <Empty />
          ) : (
            <div>
              <ListGroup variant="flush">
                <ListGroup.Item id="header">
                  <Container>
                    <Row>
                      <Col className="text-center">제목</Col>
                      <Col className="text-center">작성일</Col>
                      <Col className="text-center">상세정보/삭제</Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
                {info.map((item) => (
                  <div>
                    <ListGroup.Item id="list-body">
                      <Container>
                        <Row>
                          <Col className="text-center">{item.title}</Col>
                          <Col className="text-center">
                            {Date(item.date).substring(0, 15)}
                          </Col>
                          <Col className="text-center">
                            <button
                              id="detailBtn"
                              onClick={() => {
                                // showpet 상세정보로 이동하는 코드 삽입
                              }}
                            >
                              상세정보
                            </button>
                            <button
                              id="detailBtn"
                              style={{ marginLeft: "10px" }}
                              onClick={() => {
                                axios({
                                  url: `http://j7c101.p.ssafy.io/api/show-pet/${item.id}`,
                                  method: "delete",
                                  headers: {
                                    authorization: `Bearer ${accessToken}`,
                                  },
                                })
                                  .then(() => {
                                    alert("해당 글이 삭제되었습니다.");
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              }}
                            >
                              삭제
                            </button>
                          </Col>
                        </Row>
                      </Container>
                    </ListGroup.Item>
                  </div>
                ))}
              </ListGroup>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Empty = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie animationData={write} style={{ width: "200px" }}></Lottie>
      <h1>아직 작성한 글이 없네요 글을 작성해보세요</h1>
    </div>
  );
};

const Loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Lottie animationData={loadLottie} style={{ width: "300px" }}></Lottie>
    </div>
  );
};

const LostList = () => {
  let accessToken = localStorage.getItem("accessToken");
  let [loading, setLoading] = useState(true);
  let [lost, setLost] = useState();
  useEffect(() => {
    axios({
      url: "http://j7c101.p.ssafy.io:8080/api/lost/articles",
      method: "get",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        setLost(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lost]);
  return (
    <div
      className="container"
      style={{ marginTop: "50px", fontFamily: "Kotra", fontSize: "25px" }}
    >
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            {lost.length === 0 ? (
              <Empty />
            ) : (
              <div>
                <ListGroup variant="flush">
                  <ListGroup.Item id="header">
                    <Container>
                      <Row>
                        <Col className="text-center">제목</Col>
                        <Col className="text-center">실종일</Col>
                        <Col className="text-center">작성일</Col>
                        <Col className="text-center">상세정보/삭제</Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                  {lost.map((item) => (
                    <div>
                      <ListGroup.Item id="list-body">
                        <Container>
                          <Row>
                            <Col className="text-center">{item.title}</Col>
                            <Col className="text-center">{item.lost_date}</Col>
                            <Col className="text-center">
                              {Date(item.date).substring(0, 15)}
                            </Col>
                            <Col className="text-center">
                              <button
                                id="detailBtn"
                                onClick={() => {
                                  // lost 글 상세정보로 이동하는 코드 삽입
                                }}
                              >
                                상세정보
                              </button>
                              <button
                                id="detailBtn"
                                style={{ marginLeft: "10px" }}
                                onClick={() => {
                                  axios({
                                    url: `http://ssafy.io/api/lost/${item.id}`,
                                    method: "delete",
                                    headers: {
                                      authorization: `Bearer ${accessToken}`,
                                    },
                                  })
                                    .then(() => {
                                      alert("해당 글이 삭제되었습니다.");
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                              >
                                삭제
                              </button>
                            </Col>
                          </Row>
                        </Container>
                      </ListGroup.Item>
                    </div>
                  ))}
                </ListGroup>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
