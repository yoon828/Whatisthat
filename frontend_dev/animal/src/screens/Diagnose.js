import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
import { useState } from 'react'
import axios from 'axios'
import { MagnifyingGlass } from  'react-loader-spinner'
import './Diagnose.css'

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

const DiagnosePage = () => {
    let [showResult, setShowResult] = useState(false)

    return (
        <div className='container'>
            {
                showResult ? <Result /> : <Diagnose setShowResult={setShowResult}/>
            }
        </div>
    )
}

const Diagnose = (props) => {
    let [name, setName] = useState("")
    let [type, setType] = useState("")
    let [part, setPart] = useState("")
    let [img, setImg] = useState("")
    let [imgFile, setImgFile] = useState(null)
    let [loading, setLoading] = useState(false)
    let [file, setFile] = useState(null)
    let [info, setInfo] = useState({name:"", type:"", part:"", img:""})

    return (
        <div>
            {
                loading ? <Loading /> : 
                
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
                        setType('강아지')
                    }}
                    inline
                    label="강아지"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                />
                <Form.Check
                    
                    onClick={()=>{
                        setType('고양이')
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
                        setPart('피부')
                    }}
                    inline
                    label="피부"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                    
                />
                <Form.Check
                    
                    onClick={()=>{
                        setPart('안구')
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
                        new Date().getSeconds();
                        setImg(fileName)
                    }}
                    ></input>
                </Innerbox>

                <StyledBtn
                onClick={()=>{
                    setInfo(info.name=name)
                    setInfo(info.type=type)
                    setInfo(info.part=part)
                    setInfo(info.img=img)

                    let formData = new FormData();
                    formData.append("uploadFile", file, img);
                    setImgFile(formData)
                    console.log(info)
                    setLoading(true)

                    axios.all([
                        axios({
                            url: "https://j7c101.p.ssafy.io/image/upload", // 이미지 파일 저장하는 이미지 서버 요청 주소
                            method: "post",
                            headers: {
                              processData: false,
                              "Content-Type": "multipart/form-data",
                            },
                            data: imgFile,
                          })
                            .then((res) => {
                              console.log(res.data);
                            })
                            .catch((err) => {
                              console.log(err);
                            }),

                            axios({
                                url: "https://j7c101.p.ssafy.io/api/picture", // 이미지 주소 저장하는 api 주소
                                method: "post",
                                data: {
                                  imgUrl: `https://i7c101.p.ssafy.io/images/${img}`,
                                },
                              })
                                .then((res) => {
                                  console.log(res.data);
                                })
                                .catch((err) => {
                                  console.log(err);
                                }),

                                axios({
                                    url: "https://j7c101.p.ssafy.io/ai", // AI 서버 요청 주소
                                    method: "post",
                                    data: {
                                        // 사진 파일을 보낼지 이미지 접근 경로만 보낼지 결정해야함
                                    }
                                })
                    ])
                    .then(()=>{
                        setLoading(false)
                        props.setShowResult(true)
                        // redux를 활용해 AI 서버로부터 받은 결과와 이미지 접근경로(문자열)를 redux에 저장한뒤
                        // 진단결과 페이지로 이동
                        // 진단결과 페이지에서는 받은결과를 바탕으로 렌더링하여 사용자에게 결과를 보여줌
                        // document.location.href = '/diagnoseresult'
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

const Result = () => {
    return(
        <div>

        </div>
    )
}

export default DiagnosePage;