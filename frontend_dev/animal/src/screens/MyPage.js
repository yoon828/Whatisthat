import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Container>
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
                        <LostList />
                        <ShowpetList />
                        <DiagnosisList />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const LostList = () => {
    let [lostList, setLostList] = useState(null)
    useEffect(()=>{
        axios({
            url:'http://ssafy.io/api/lost/articles', // 본인이 쓴 실종 글 목록 조회 api 주소
            method: 'get',
            headers: {
                Token: 'asdfsf' // 사용자의 토큰값
            }
        })
        .then((res)=>{
            setLostList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    return (
        <div>
            <ListGroup as="ol" numbered>
                {
                    lostList.length >= 5 ?
                    <div>
                        <ListGroup.Item as="li" action variant='light'>{lostList[0].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{lostList[1].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{lostList[2].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{lostList[3].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{lostList[4].title}</ListGroup.Item>
                    </div> :
                    <div>
                        {
                            lostList.map(function(article) {
                                return(
                                    <div>
                                        <ListGroup.Item as="li" action variant='light'>{article.title}</ListGroup.Item>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                }
            </ListGroup>
        </div>
    )
}


const ShowpetList = () => {
    let [showpetList, setShowpetList] = useState(null)
    useEffect(()=>{
        axios({
            url:'http://ssafy.io/api/show-pet/articles', // 본인이 쓴 자랑하기 글 목록 조회 api 주소
            method: 'get',
            headers: {
                Token: 'asdfsf' // 사용자의 토큰값
            }
        })
        .then((res)=>{
            setShowpetList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    return(
        <div>
            <ListGroup as="ol" numbered>
                {
                    showpetList.length >= 5 ?
                    <div>
                        <ListGroup.Item as="li" action variant='light'>{showpetList[0].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{showpetList[1].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{showpetList[2].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{showpetList[3].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{showpetList[4].title}</ListGroup.Item>
                    </div> :
                    <div>
                        {
                            showpetList.map(function(article) {
                                return(
                                    <div>
                                        <ListGroup.Item as="li" action variant='light'>{article.title}</ListGroup.Item>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                }
            </ListGroup>
        </div>
    )
}


const DiagnosisList = () => {
    let [diagnosisList, setDiagnosisList] = useState(null)
    useEffect(()=>{
        axios({
            url:'http://ssafy.io/api/diagnose/articles', // 본인이 쓴 진단내역 목록 조회 api 주소
            method: 'get',
            headers: {
                Token: 'asdfsf' // 사용자의 토큰값
            }
        })
        .then((res)=>{
            setDiagnosisList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    return (
        <div>
            <ListGroup as="ol" numbered>
                {
                    diagnosisList.length >= 5 ?
                    <div>
                        <ListGroup.Item as="li" action variant='light'>{diagnosisList[0].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{diagnosisList[1].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{diagnosisList[2].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{diagnosisList[3].title}</ListGroup.Item>
                        <ListGroup.Item as="li" action variant='light'>{diagnosisList[4].title}</ListGroup.Item>
                    </div> :
                    <div>
                        {
                            diagnosisList.map(function(article) {
                                return(
                                    <div>
                                        <ListGroup.Item as="li" action variant='light'>{article.title}</ListGroup.Item>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                }
            </ListGroup>
        </div>
    )
}

export default MyPage;