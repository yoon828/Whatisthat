import { useEffect, useState } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';
import './DiagnoseList.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from 'lottie-react'
import list from './../lotties/list.json'


const DiagnosisList = () => {
    let [diagnosisList, setDiagnosisList] = useState([
        {
        "id": 3,
        "date": 1663499025000,
        "name": "나비",
        "disease_name": "eye disease"
        },
        {
        "id": 2,
        "date": 1663499014000,
        "name": "초코",
        "disease_name": "eye disease"
        }
        ])
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
        <div className='container' style={{'marginTop':'50px', 'fontFamily':'Kotra', 'fontSize':'25px'}}>
            <div id='list-lottie'>
                <Lottie animationData={list} style={{'width':'150px'}}></Lottie>
                <h1>내가 작성한 글 보기</h1>
            </div>
            <ListGroup variant="flush">
                <ListGroup.Item id='header'>
                <Container>
                <Row>
                    <Col className='text-center'>반려동물 이름</Col>
                    <Col className='text-center'>병명</Col>
                    <Col className='text-center'>진단일시</Col>
                    <Col className='text-center'>상세정보/삭제</Col>
                </Row>
                </Container>
                </ListGroup.Item>
                {diagnosisList.map((item)=>(
                    <div>
                        <ListGroup.Item id='list-body'>
                        <Container>
                        <Row>
                            <Col className='text-center'>{item.name}</Col>
                            <Col className='text-center'>{item.disease_name}</Col>
                            <Col className='text-center'>{item.date}</Col>
                            <Col className='text-center'><button id='detailBtn' onClick={()=>{
                                document.location.href=`/diagnosedetail/${item.id}`
                            }}>상세정보</button>
                            <button id='detailBtn' style={{'marginLeft':'10px'}} onClick={()=>{
                                axios({
                                    url : `http://ssafy.io/api/diagnose/${item.id}`,
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

export default DiagnosisList;