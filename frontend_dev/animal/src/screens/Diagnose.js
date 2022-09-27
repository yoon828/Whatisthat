import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { MagnifyingGlass } from  'react-loader-spinner'
import './Diagnose.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

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
    margin: 20px;
    `;



const StyledInput = styled.input`
border-radius: 4px;
font-size: 1rem;
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
        }
    }, [part])
    return (
        <div>
            {
                showResult ? <DiagnoseResult info={info} /> : 

            <div className='box'>
            <div>
                <Innerbox>
                    이름:
                    <StyledInput 
                    placeholder='반려동물의 이름을 입력해주세요'
                    onInput={(e)=>{
                        setName(e.target.value)
                    }}
                    ></StyledInput>
                </Innerbox>
                    
                <Innerbox>
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

                <Innerbox>
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
                </Innerbox>

                <StyledBtn
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
                        url: "http://j7c101.p.ssafy.io:3003/image/upload",
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
                    console.log(info)
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
        <div>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor = '#c0efff'
                color = '#e15b64'
                />
            <p>진단중입니다...</p>
        </div>
    )
}

const DiagnoseResult = (props) => {
    let [loading, setLoading] = useState(true)
    let [result, setResult] = useState(null)
    let info = props.info
    useEffect(()=>{
        axios({
            url: `http://70.12.130.121:5550/ai/${info.part}/${info.type}`, // AI 서버 요청 주소
            method: "post",
            data: {
                "imagePath" : info.imgUrl
            }
        })
        .then((res)=>{
            setResult(res.data)
            setLoading(false)
        })
    }, [])
    return (
        <div>
            {
                loading ? <Loading/> :
                <div>
                    <h2>진단결과</h2>
                    <img src={info.imgUrl}></img>
                    <div>
                        <div>
                            {result[0][0]}일 확률 : <ProgressBar striped animated variant="danger" now={Math.round(result[0][1]*100)} label={`${Math.round(result[0][1]*100)}%`}/>
                        </div>
                        <div>
                            {result[1][0]}일 확률 : <ProgressBar striped animated variant="warning" now={Math.round(result[1][1]*100)} label={`${Math.round(result[1][1]*100)}%`}/>
                        </div>
                        <div>
                            {result[2][0]}일 확률 : <ProgressBar striped animated variant="info" now={Math.round(result[2][1]*100)} label={`${Math.round(result[2][1]*100)}%`}/>
                        </div>
                    </div>
                    <h2>대처법</h2>
                    <div>
                        대처법 써주기
                    </div>
                    <StyledBtn onClick={()=>{
                        axios({
                            url: "http://j7c101.p.ssafy.io:3003/api/picture", // 이미지 주소 DB에 저장하는 api 주소
                            method: "post",
                            data: {
                              imgUrl: info.imgUrl,
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
