import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Mypage.css'
import styled from 'styled-components';

const StyledBtn = styled.button`
    text-align: center;
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 10px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    color: black;
    background: #F5C6AA;
    &:focus {
        box-shadow: 0px 0px 4px 3px #FFAE6D;
    }
    margin: 10px;
    `;


const MyPage = () => {
    let [userInfo, setUserInfo] = useState({name: '멍멍', email: 'naver.com', nickname: '닉네임', date: '1993.03', profile_img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTRfMjYy%2FMDAxNDg0MzcxOTkxNzA4._N73NTpWleCLp8M6gXR8vpdDAZoAQ2mTJLimKBYFtRwg.5LEqnsukFugxlrTdlYk5hkxEKoVdUbTVsjL6gqJ03vIg.PNG.koomarin%2F%253F%253F%253F%253F%257B%253F_%253F%253F%253F%253F%253F%253F%253F.png&type=sc960_832'})
    useEffect(()=>{
        axios({
            url: 'http://ssaffy.io/api/user', // 회원정보 조회 api 주소
            method: 'get',
            headers: {
                Token: 'asdfsf' // 사용자의 토큰값
            }
        })
        .then((res)=> {
            setUserInfo(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    return (
        <div>
            <Container>
                <Row id='mypage'>
                    <Col md={4}>
                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={userInfo.profile_img} />
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item id='mypage-text'>이름 : {userInfo.name}</ListGroup.Item>
                        <ListGroup.Item id='mypage-text'>이메일 : {userInfo.email}</ListGroup.Item>
                        <ListGroup.Item id='mypage-text'>닉네임 : {userInfo.nickname}</ListGroup.Item>
                        <ListGroup.Item id='mypage-text'>생년월일 : {userInfo.date}</ListGroup.Item>
                    </ListGroup>
                    </Card>
                    <div id='btn1'>
                        <StyledBtn style={{'fontSize':'18px'}} onClick={()=>{
                            document.location.href='/articlelist'
                        }}>작성한 글 보기</StyledBtn>
                        <StyledBtn style={{'fontSize':'18px'}} onClick={()=>{
                            document.location.href='/diagnoselist'
                        }}>진단내역 보기</StyledBtn>
                        <StyledBtn style={{'fontSize':'18px'}} onClick={()=>{
                            document.location.href='/profileupdate'
                        }}>프로필 수정</StyledBtn>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyPage;