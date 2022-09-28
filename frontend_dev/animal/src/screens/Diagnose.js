import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Diagnose.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Lottie from 'lottie-react';
import diagnose from './../lotties/diagnose.json'
import { isMobile } from 'react-device-detect';
import search from './../lotties/search.json'
import paper from './../lotties/paper.json'
import treat from './../lotties/treat.json'

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
    background: #F5C6AA;
    &:focus {
        box-shadow: 0px 0px 4px 3px #FFAE6D;
    }
    
    `;



const StyledInput = styled.input`
border-radius: 4px;
font-size: 22px;
margin-left: 10px;
padding-top: 0.7rem;
padding-bottom: 0.7rem;
width: 80%;
height: 40px;
border: none;
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


const Diagnose = () => {
    let [showResult, setShowResult] = useState(false)
    let [name, setName] = useState("")
    let [type, setType] = useState("")
    let [part, setPart] = useState("")
    // img는 img 파일명
    let [img, setImg] = useState("")
    let [file, setFile] = useState(null)
    let [info, setInfo] = useState({name:"", type:"", part:"", img:"", imgUrl: ""})

    useEffect(()=>{
        if (type === 'cat' && part === 'skin') {
            alert('고양이 피부데이터는 준비중입니다.')
            document.location.href='/diagnose'
        }
    }, [part])
    return (
        <div>
            {
                showResult ? <DiagnoseResult info={info} /> : 

            <div className='box'>
            <div>
                <div id='lottie-text'>
                <Lottie animationData={diagnose} style={{'width':'100px'}}></Lottie>
                <p style={{'fontSize':'50px', 'marginTop':'25px'}}>진단하기</p>
                </div>
                <Innerbox id='text'>
                    이름:
                    <StyledInput
                    placeholder='반려동물의 이름을 입력해주세요'
                    onInput={(e)=>{
                        setName(e.target.value)
                    }}
                    ></StyledInput>
                </Innerbox>
                    
                <Innerbox id='text'>
                    종:
                <Form className='m-4'>
                {['radio'].map((type) => (
                <div key={`inline-${type}`}>
                <Form.Check
                    
                    onClick={()=>{
                        setType('dog')
                    }}
                    inline
                    label="강아지"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                />
                <Form.Check
                    onClick={()=>{
                        setType('cat')
                    }}
                    inline
                    label="고양이"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                </div>
            ))}
            </Form>
                </Innerbox>

                <Innerbox id='text'> 
                    아픈부위:
                <Form className='m-4'>
            {['radio'].map((type) => (
                <div key={`inline-${type}`}>
                <Form.Check
                    
                    onClick={()=>{
                        setPart('skin')
                    }}
                    inline
                    label="피부"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                    
                />
                <Form.Check
                    
                    onClick={()=>{
                        setPart('eye')
                    }}
                    inline
                    label="안구"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                    
                />
                </div>
            ))}
            </Form>
                </Innerbox>
                {
                    isMobile ? 
                
                <Innerbox>
                    <label id="picture" for="input-file">
                        촬영하기
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
                        setImg(fileName)
                    }}
                    ></input>

                    <label id="picture" for="upload-file">
                        업로드 하기
                    </label>
                    <input type="file" accept="image/*" id="upload-file" style={{'display':'none'}}
                    onChange={(e)=>{
                        setFile(e.target.files[0])
                        const fileName = "img_" +
                        new Date().getFullYear() +
                        (new Date().getMonth() + 1) +
                        new Date().getDate() +
                        new Date().getHours() +
                        new Date().getMinutes() +
                        new Date().getSeconds() +
                        ".png"
                        setImg(fileName)
                    }}
                    ></input>
                </Innerbox> :
                <Innerbox>
                    <label id="picture" for="upload-file">
                    업로드 하기
                </label>
                <input type="file" accept="image/*" id="upload-file" style={{'display':'none'}}
                onChange={(e)=>{
                    setFile(e.target.files[0])
                    const fileName = "img_" +
                    new Date().getFullYear() +
                    (new Date().getMonth() + 1) +
                    new Date().getDate() +
                    new Date().getHours() +
                    new Date().getMinutes() +
                    new Date().getSeconds() +
                    ".png"
                    setImg(fileName)
                }}
                ></input>
            </Innerbox>
                }


                <StyledBtn
                id = 'diagnoseBtn'
                onClick={()=>{
                    let formData = new FormData();
                    formData.append("uploadFile", file, img);
                    setInfo(info.name=name)
                    setInfo(info.type=type)
                    setInfo(info.part=part)
                    setInfo(info.img=img)
                    setInfo(info.imgUrl=`http://j7c101.p.ssafy.io:3003/images/${img}`)
                    axios({
                        // url: "http://localhost:3003/upload",
                        url: "http://j7c101.p.ssafy.io:3003/upload",
                        method: 'post',
                        headers: {
                            processData: false,
                            "Content-Type": "multipart/form-data",
                        },
                        data: formData,
                    })
                    .then((res)=>{
                        setShowResult(true)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }}
                >진단하기</StyledBtn>
            </div>
            </div>
            }
        </div>
    )
}

const Loading = () => {
    return(
        <div id='loading-style'>
            <Lottie animationData={search} id='search-lottie'></Lottie>
            <p id='search-text'>진단중입니다...</p>
        </div>
    )
}

const DiagnoseResult = (props) => {
    let [loading, setLoading] = useState(true)
    // let info = props.info
    let info = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MTdfNDAg%2FMDAxNjU1NDU2MzQwMjk3.gn6EnHuunkvpKqOgCK0ZQY2CbF_xZTYF6kPu0E7iM8Ag.GjGEVnVIs5mDr7hubyRJBrr29VeIpDqHtfjTQvU-0fwg.JPEG.i-comfort%2F1018_5491_KakaoTalk_20220418_172537949.jpg&type=sc960_832'
    let [result, setResult] = useState([
        [
        "농포,여드름",
        0.2312759906053543
        ],
        [
        "미란,궤양",
        0.19840167462825775
        ],
        [
        "결절,종괴",
        0.1548846960067749
        ]
        ])
    

    setTimeout(()=>{
        setLoading(false)
        console.log(`ifo는 ${info} 입니다.`)
    }, 3000)

    // useEffect(()=>{
    //     axios({
    //         url: `http://70.12.130.121:5550/ai/${info.part}/${info.type}`, // AI 서버 요청 주소
    //         method: "post",
    //         data: {
    //             "imagePath" : info
    //         }
    //     })
    //     .then((res)=>{
    //         setResult(res.data)
    //         setLoading(false)
    //     })
    // }, [])
    return (
        <div id='result-box'>
            {
                loading ? <Loading/> :
                <div id='diagnose-result'>
                    <div id='result-header'>
                    <Lottie id='result-paper' animationData={paper}></Lottie>
                    <h2 style={{'fontSize':'60px'}}>진단결과</h2>
                    </div>
                    <img src={info} style={{'width':'350px', 'marginBottom':'30px'}}></img>
                    <div>
                        <div id='result-item'>
                            {result[0][0]}일 확률 <ProgressBar style={{'height':'30px'}} striped animated variant="danger" now={Math.round(result[0][1]*100)} label={`${Math.round(result[0][1]*100)}%`}/>
                        </div>
                        <div id='result-item'>
                            {result[1][0]}일 확률 <ProgressBar style={{'height':'30px'}} striped animated variant="warning" now={Math.round(result[1][1]*100)} label={`${Math.round(result[1][1]*100)}%`}/>
                        </div>
                        <div id='result-item'>
                            {result[2][0]}일 확률 <ProgressBar style={{'height':'30px'}} striped animated variant="info" now={Math.round(result[2][1]*100)} label={`${Math.round(result[2][1]*100)}%`}/>
                        </div>
                    </div>
                    <div id='treat-header'>
                    <Lottie id='treat' animationData={treat}></Lottie>
                    <h2 style={{'fontSize':'60px'}}>대처법</h2>
                    </div>
                    <div style={{'width': '550px', 'marginBottom':'30px'}}>
                    농피증은 피부가 포도상구균 등과 같은 세균에 감염돼 나타난다. ▲영양부족 ▲미흡한 털관리 ▲과도한 목욕 ▲잘못된 샴푸사용 등이 원인이다. 피부가 약하고 면역력이 떨어지는 노령견이나 어린강아지에게 더욱 생기기 쉽다.

농피증은 얼굴주위, 겨드랑이, 등에 많이 발생하며 감염정도나 농의 깊이에 따라 증상이 다르다. 일반적으로 ▲발진 ▲구진 ▲농포 ▲각질 ▲딱지 ▲피부발적 ▲탈모 등이 나타나고 ▲심한 가려움이 동반되는 경우가 많다. 가려움이 심하면 강아지가 해당부위를 자꾸 긁거나 핥아 질환이 더 악화되고 이차감염으로 진행될 수 있어 빨리 치료하는 것이 좋다.
                    </div>
                    <StyledBtn id='btn10' onClick={()=>{
                        axios({
                            url: "http://j7c101.p.ssafy.io:3003/api/picture", // 이미지 주소 DB에 저장하는 api 주소
                            method: "post",
                            data: {
                              imgUrl: info,
                            },
                          })
                            .then((res) => {
                                console.log(res.data);
                            })
                            .catch((err) => {
                              console.log(err);
                            })
                    }}
                    >진단내역 저장하기</StyledBtn>
                    
                </div>
            }
        </div>
    )
}

export default Diagnose;
