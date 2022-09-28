import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

const DiagnoseDetail = () => {
    let [info, setInfo] = useState({
        "id": 1,
        "user_name": "김싸피",
        "name": "초코",
        "img_url": "진단 내역 이미지 경로",
        "disease_name": "eye disease",
        "treat": "eye disease treat"
        })
    let { params } = useParams();
    useEffect(()=>{
        axios({
            url : `https://ssafy.io/api/diagnose/${params}`,
            method: 'get',
            headers : {
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
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={info.img_url} />
            <Card.Body>
                <Card.Title>{info.name}의 진단내역</Card.Title>
                <Card.Text>병명 : {info.disease_name}</Card.Text>
                <Card.Text>{info.treat}</Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default DiagnoseDetail;