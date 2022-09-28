import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './ArticleList.css'
import styled from 'styled-components';
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const StyledBtn = styled.button`
    text-align: center;
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 18px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    color: black;
    background: #F5C6AA;
    margin: 20px;
    `;

const ArticleList = () => {
    const [type, setType] = useState("showpet");

    return (
        <div className="text-center">
            <StyledBtn className={type === 'showpet' ? 'act' : null} onClick={()=>{
                setType('showpet')
            }}>자랑하기</StyledBtn>
            <StyledBtn className={type === 'lost' ? 'act' : null} onClick={()=>{
                setType('lost')
            }}>실종동물 찾기</StyledBtn>
            {
                type === 'showpet' ? <ShowpetList /> : <LostList />
            }
        </div>
    )
}

const ShowpetList = () => {
    let [info, setInfo] = useState([
        {
        "id": 2,
        "title": "귀여운 방울이 자랑 2탄",
        "user_nickname": "알고리즘마스터",
        "date": 1663502850000
        },
        {
        "id": 1,
        "title": "귀여운 방울이 자랑",
        "user_nickname": "알고리즘마스터",
        "date": 1663501915000
        }
        ])
    useEffect(()=>{
        axios({
            url : 'http://ssafy.io/api/show-pet/articles',
            method: 'get',
            headers: {
                Token : 'adsf'
            }
        })
        .then((res)=>{
            setInfo(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    return (
        <div className='container' style={{'marginTop':'50px'}}>
            <ListGroup variant="flush">
                <ListGroup.Item id='header'>
                <Container>
                <Row>
                    <Col className='text-center'>제목</Col>
                    <Col className='text-center'>작성일</Col>
                    <Col className='text-center'>상세정보/삭제</Col>
                </Row>
                </Container>
                </ListGroup.Item>
                {info.map((item)=>(
                    <div>
                        <ListGroup.Item id='list-body'>
                        <Container>
                        <Row>
                            <Col className='text-center'>{item.title}</Col>
                            <Col className='text-center'>{item.date}</Col>
                            <Col className='text-center'><button id='detailBtn' onClick={()=>{
                                // showpet 상세정보로 이동하는 코드 삽입
                            }}>상세정보</button>
                            <button id='detailBtn' style={{'marginLeft':'10px'}} onClick={()=>{
                                axios({
                                    url : `http://ssafy.io/api/show-pet/${item.id}`,
                                    method: 'delete',
                                    headers : {
                                        Token : 'aldkfjaf' //토큰값
                                    }
                                })
                            }}>삭제</button>
                            </Col>
                        </Row>
                        </Container>
                        </ListGroup.Item>
                    </div>
                ))}
            </ListGroup>
        </div>
    )
}

const LostList = () =>{
    let [lost, setLost] = useState([
        {
        "id": 3,
        "title": "한 번 더 올립니다..",
        "user_nickname": "알고리즘마스터",
        "gender": 0,
        "lost_date": "2022년 9월 18일",
        "age": "3",
        "weight": "8kg",
        "kind": "푸들",
        "place": "장미공원",
        "phone": "01012345678",
        "pay": "10만원",
        "etc": "제발 찾으시면 연락주세요ㅜㅜ",
        "is_found": false,
        "name": "금지",
        "date": 1663499664000,
        "imgs": [
        {
        "id": 7,
        "lost_id": 3,
        "img_url": "실종 반려동물 이미지 경로1"
        },
        {
        "id": 8,
        "lost_id": 3,
        "img_url": "실종 반려동물 이미지 경로2"
        }
        ]
        },
        {
        "id": 2,
        "title": "금지를 찾아주세요",
        "user_nickname": "알고리즘마스터",
        "gender": 0,
        "lost_date": "2022년 9월 18일",
        "age": "3",
        "weight": "8kg",
        "kind": "푸들",
        "place": "장미공원",
        "phone": "01012345678",
        "pay": "10만원",
        "etc": "제발 찾으시면 연락주세요ㅜㅜ",
        "is_found": false,
        "name": "금지",
        "date": 1663499633000,
        "imgs": [
        {
        "id": 5,
        "lost_id": 2,
        "img_url": "실종 반려동물 이미지 경로1"
        },
        {
        "id": 6,
        "lost_id": 2,
        "img_url": "실종 반려동물 이미지 경로2"
        }
        ]
        }
        ])
    useEffect(()=>{
        axios({
            url : 'http://ssafy.io/api/lost/articles',
            method: 'get',
            headers: {
                Token : 'adsf'
            }
        })
        .then((res)=>{
            setLost(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    return (
        <div className='container' style={{'marginTop':'50px'}}>
            <ListGroup variant="flush">
                <ListGroup.Item id='header'>
                <Container>
                <Row>
                    <Col className='text-center'>제목</Col>
                    <Col className='text-center'>실종일</Col>
                    <Col className='text-center'>작성일</Col>
                    <Col className='text-center'>상세정보/삭제</Col>
                </Row>
                </Container>
                </ListGroup.Item>
                {lost.map((item)=>(
                    <div>
                        <ListGroup.Item id='list-body'>
                        <Container>
                        <Row>
                            <Col className='text-center'>{item.title}</Col>
                            <Col className='text-center'>{item.lost_date}</Col>
                            <Col className='text-center'>{item.date}</Col>
                            <Col className='text-center'><button id='detailBtn' onClick={()=>{
                                // lost 글 상세정보로 이동하는 코드 삽입
                            }}>상세정보</button>
                            <button id='detailBtn' style={{'marginLeft':'10px'}} onClick={()=>{
                                axios({
                                    url : `http://ssafy.io/api/lost/${item.id}`,
                                    method: 'delete',
                                    headers : {
                                        Token : 'aldkfjaf' //토큰값
                                    }
                                })
                            }}>삭제</button>
                            </Col>
                        </Row>
                        </Container>
                        </ListGroup.Item>
                    </div>
                ))}
            </ListGroup>
        </div>
    )
}


export default ArticleList;