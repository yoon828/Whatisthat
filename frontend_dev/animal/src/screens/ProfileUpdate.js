import './ProfileUpdate.css'
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from 'lottie-react'
import update from './../lotties/update.json'

const StyledBtn = styled.button`
    text-align: center;
    width: 200px;
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
    margin-top: 10px;
    margin-left: 80px;
    `;

    const StyledInput = styled.input`
border-radius: 4px;
font-size: 22px;
margin-left: 10px;
padding-top: 0.7rem;
padding-bottom: 0.7rem;
width: 70%;
height: 40px;
background-color: white;
display: flex;
outline: none;
`;

const Innerbox = styled.div`
    display: flex;
    font-weight: bold;
    width: 100%;
    height: 60px;
    background: #F8E2CF;
    border-radius: 5px;
    margin: 20px;
    align-items: center;
    justify-content: center;    
` ;

const ProfileUpdate = () => {
    const [profileImg, setProfileImg] = useState(null)
    const [nickname, setNickname] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState({email:'', id:'', name:'', nickname:'', profile_img:''})
    const [userInfo, setUserInfo] = useState({name: '멍멍', email: 'naver.com', nickname: '닉네임', date: '1993.03', profile_img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMTRfMjYy%2FMDAxNDg0MzcxOTkxNzA4._N73NTpWleCLp8M6gXR8vpdDAZoAQ2mTJLimKBYFtRwg.5LEqnsukFugxlrTdlYk5hkxEKoVdUbTVsjL6gqJ03vIg.PNG.koomarin%2F%253F%253F%253F%253F%257B%253F_%253F%253F%253F%253F%253F%253F%253F.png&type=sc960_832'})
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
        <div id='update-box'>
            <div id='update-lottie'>
                <Lottie animationData={update} style={{'width':'200px'}}></Lottie>
                <h1 style={{'fontFamily':'Kotra', 'fontSize':'60px'}}>프로필 수정</h1>
            </div>
            <Container>
                <Row id='update'>
                    <Col md={4}>
                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={userInfo.profile_img} />
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item id='mypage-text'>이름 : {userInfo.name}</ListGroup.Item>
                        <ListGroup.Item id='mypage-text'>이메일 : {userInfo.email}</ListGroup.Item>
                        <ListGroup.Item id='profileupdate-input'>닉네임 : <StyledInput 
                        onInput={(e)=>{
                            setNickname(e.target.value)
                        }}
                        placeholder='수정할 닉네임을 입력해주세요'></StyledInput></ListGroup.Item>
                        <ListGroup.Item id='mypage-text'>생년월일 : {userInfo.date}</ListGroup.Item>
                    </ListGroup>
                    </Card>
                    <div>
                        <label id="updateBtn" for="input-file">
                            프로필 이미지 업로드
                        </label>
                        <input type="file" accept="image/*" capture="camera" id="input-file" style={{'display':'none'}}
                        onChange={(e)=>{
                            setFile(e.target.files[0])
                            const fileName = "img_" +
                            new Date().getFullYear() +
                            (new Date().getMonth() + 1) +
                            new Date().getDate() +
                            new Date().getHours() +
                            new Date().getMinutes() +
                            new Date().getSeconds();
                            setProfileImg(fileName)
                        }}
                        ></input>
                        <StyledBtn style={{'fontSize':'23px'}} onClick={()=>{
                            let formData = new FormData();
                            formData.append("uploadFile", file, profileImg);
                            setInfo(info.name=userInfo.name)
                            setInfo(info.email=userInfo.email)
                            setInfo(info.id=userInfo.id)
                            setInfo(info.nickname=nickname)
                            setInfo(info.profile_img=profileImg)
                            axios.all([
                                axios({
                                    url:'http://image_server_url', // 이미지 서버에 이미지 저장
                                    method: 'post',
                                    headers: {
                                        processData: false,
                                        "Content-Type": "multipart/form-data",
                                    },
                                    data: formData
                                })
                                .then((res)=>{
                                    console.log(res.data)
                                })
                                .catch((err)=>{
                                    console.log(err)
                                }),
                                axios({
                                    url: 'http://ssafy.p.io', // DB에 수정된 정보 저장
                                    method: 'put',
                                    headers: {
                                        Token : 'asdfasdf'
                                    },
                                    data: info
                                })
                                .then((res)=>{
                                    console.log(res.data)
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            ])
                            .then((res)=>{
                                document.location.href='/mypage'
                            })
                        }}>수정완료</StyledBtn>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfileUpdate;