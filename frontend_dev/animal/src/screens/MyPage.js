import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Mypage.css'

const MyPage = () => {
    let [userInfo, setUserInfo] = useState(null)
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
            <Container id='box'>
                <Row>
                    <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={userInfo.profile_img} />
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>이름 : {userInfo.name}</ListGroup.Item>
                        <ListGroup.Item>이메일 : {userInfo.email}</ListGroup.Item>
                        <ListGroup.Item>닉네임 : {userInfo.nickname}</ListGroup.Item>
                        <ListGroup.Item>생년월일 : {userInfo.date}</ListGroup.Item>
                    </ListGroup>
                    </Card>
                    </Col>

                    <Col md={8}>
                        <div>내가 작성한 자랑하기 글 보러가기 <button>클릭</button></div>
                        <div>내가 작성한 실종 글 보러가기 <button>클릭</button></div>
                        <div>내 진단내역 보러가기 <button>클릭</button></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyPage;