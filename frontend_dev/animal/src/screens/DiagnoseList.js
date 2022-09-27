import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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

export default DiagnosisList;