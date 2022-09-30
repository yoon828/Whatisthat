import { useEffect, useState } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';
import './DiagnoseList.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from 'lottie-react'
import list from './../lotties/list.json'
import loadLottie from './../lotties/loading.json'
import write from './../lotties/write.json'


const DiagnosisList = () => {
    let [diagnosisList, setDiagnosisList] = useState()
    let [loading, setLoading] = useState(true)
    let accessToken = localStorage.getItem('accessToken')
    useEffect(()=>{
        let accessToken = localStorage.getItem('accessToken')
        axios({
            url:'http://j7c101.p.ssafy.io:8080/api/diagnose/list',
            method: 'get',
            headers: {
                authorization : `Bearer ${accessToken}`
            }
        })
        .then((res)=>{
            setDiagnosisList(res.data.data)
            setLoading(false)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [diagnosisList])
    return (
        <div className='container' style={{'marginTop':'50px', 'fontFamily':'Kotra', 'fontSize':'25px'}}>
            <div id='list-lottie'>
                <Lottie animationData={list} style={{'width':'150px'}}></Lottie>
                <h1>내 진단내역 보기</h1>
            </div>
            {
                loading ? <Loading /> :
                <div>
                    <div>
                {
                    diagnosisList.length === 0 ? <Empty /> :
                    <div>
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
                {diagnosisList.map((item)=>
                    (
                    <div>
                        <ListGroup.Item id='list-body'>
                        <Container>
                        <Row>
                            <Col className='text-center'>{item.name}</Col>
                            <Col className='text-center'>{item.disease_name}</Col>
                            <Col className='text-center'>{Date(item.date).substring(0, 15)}</Col>
                            <Col className='text-center'><button id='detailBtn' onClick={()=>{
                                document.location.href=`/diagnosedetail/${item.id}`
                            }}>상세정보</button>
                            <button id='detailBtn' style={{'marginLeft':'10px'}} onClick={()=>{
                                axios({
                                    url : `http://j7c101.p.ssafy.io:8080/api/diagnose/${item.id}`,
                                    method: 'delete',
                                    headers : {
                                        authorization : `Bearer ${accessToken}`
                                    }
                                })
                                .then(()=>{
                                    alert('해당 내역이 삭제되었습니다.')
                                })
                                .catch((err)=>{
                                    console.log(err)
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
                }
            </div>
                </div>
            }
        </div>
    )
}

const Loading = () => {
    return (
        <div style={{'display':'flex', 'justifyContent': 'center'}}>
            <Lottie animationData={loadLottie} style={{'width': '300px'}}></Lottie>
        </div>
    )
}

const Empty = () => {
    return (
        <div style={{'display':'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
            <Lottie animationData={write} style={{'width':'200px'}}></Lottie>
            <h1>아직 작성한 글이 없네요 글을 작성해보세요</h1>
        </div>
    )
}

export default DiagnosisList;