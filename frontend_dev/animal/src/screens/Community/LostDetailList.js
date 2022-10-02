import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getLostList } from "../../api/community";
import LostDetail from "./LostDetail";

const StyledBtn = styled.button`
  text-align: center;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  color: black;
  background: #f5c6aa;
  &:focus {
    box-shadow: 0px 0px 4px 3px #ffae6d;
  }
`;

function LostDetailList() {
  const [lostList, setLostList] = useState([]);
  const navigate = useNavigate();

  const goEdit2 = () => {
    navigate("/lost");
  };
  useEffect(() => {
    setLostList([
      {
        id: 4,
        title: "불독을 찾습니다",
        user_nickname: "코딩왕",
        gender: 1,
        lost_date: "2022년 9월 18일",
        age: "7",
        weight: "9kg",
        kind: "불독",
        place: "낙산공원",
        phone: "01012345678",
        pay: "20만원",
        etc: "연락바랍니다",
        is_found: false,
        name: "파이어",
        date: 1663499840000,
        imgs: [
          {
            id: 9,
            lost_id: 4,
            img_url: "실종 반려동물 이미지 경로1",
          },
          {
            id: 10,
            lost_id: 4,
            img_url: "실종 반려동물 이미지 경로2",
          },
        ],
      },
      {
        id: 3,
        title: "한 번 더 올립니다..",
        user_nickname: "알고리즘마스터",
        gender: 0,
        lost_date: "2022년 9월 18일",
        age: "3",
        weight: "8kg",
        kind: "푸들",
        place: "장미공원",
        phone: "01012345678",
        pay: "10만원",
        etc: "제발 찾으시면 연락주세요ㅜㅜ",
        is_found: false,
        name: "금지",
        date: 1663499664000,
        imgs: [
          {
            id: 7,
            lost_id: 3,
            img_url: "실종 반려동물 이미지 경로1",
          },
          {
            id: 8,
            lost_id: 3,
            img_url: "실종 반려동물 이미지 경로2",
          },
        ],
      },
      {
        id: 2,
        title: "금지를 찾아주세요",
        user_nickname: "알고리즘마스터",
        gender: 0,
        lost_date: "2022년 9월 18일",
        age: "3",
        weight: "8kg",
        kind: "푸들",
        place: "장미공원",
        phone: "01012345678",
        pay: "10만원",
        etc: "제발 찾으시면 연락주세요ㅜㅜ",
        is_found: false,
        name: "금지",
        date: 1663499633000,
        imgs: [
          {
            id: 5,
            lost_id: 2,
            img_url: "실종 반려동물 이미지 경로1",
          },
          {
            id: 6,
            lost_id: 2,
            img_url: "실종 반려동물 이미지 경로2",
          },
        ],
      },
    ]);
    // getLostListApi();
  }, []);

  const getLostListApi = async () => {
    try {
      const { data } = await getLostList();
      setLostList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="lost-list">
      <StyledBtn className="notoReg" type="button" onClick={goEdit2}>
        실종동물 글 작성
      </StyledBtn>
      {lostList.map((lost) => (
        <LostDetail lost={lost} key={lost.id} />
      ))}
    </div>
  );
}

export default LostDetailList;
