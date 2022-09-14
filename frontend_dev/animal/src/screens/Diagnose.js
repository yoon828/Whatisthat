import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'
import { MagnifyingGlass } from  'react-loader-spinner'

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
                
            <div>
            <Form style={{'width':'250px'}} onInput={(event)=>{
                setName(event.target.value)
            }}>
                <Form.Label htmlFor="inputPassword5">이름</Form.Label>
                <Form.Control
                />
                <Form.Text id="passwordHelpBlock" muted>
                    반려동물 이름을 입력해주세요.
                </Form.Text>
            </Form>

            <Form>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
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

            <Form>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
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

            <p>사진 업로드 하기</p>
            <input
            className='mb-3'
            type="file"
            accept="image/*"
            onChange={(e)=>{
                setFile(e.target.files)
                const fileName = "img_" +
                new Date().getFullYear() +
                (new Date().getMonth() + 1) +
                new Date().getDate() +
                new Date().getHours() +
                new Date().getMinutes() +
                new Date().getSeconds();
                setImg(fileName)
            }}
            >
            </input>
            <div>
                <Button
                onClick={()=>{
                    setLoading(true)
                }}>로딩테스트</Button>
                <Button onClick={()=>{
                    // 이미지 서버에 이미지를 저장하는 axios 추가 해야됨
                    setInfo(info.name=name)
                    setInfo(info.type=type)
                    setInfo(info.part=part)
                    setInfo(info.img=img)
        
                    let formData = new FormData();
                    formData.append("uploadFile", file[0], img);
                    setImgFile(formData)
                    console.log(info)
                    // setLoading(true)
                    axios.all([
                        axios({
                          url: "https://i7c101.p.ssafy.io/image/upload", // 이미지 파일 저장하는 이미지 서버 요청 주소
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
                          url: "https://i7c203.p.ssafy.io/api/picture", // 이미지 주소 저장하는 api 주소
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
                      ])
                      .then(()=>{
                        setLoading(false)
                        props.setShowResult(true)
                      });
                    
                    // document.location.href = '/diagnoseresult'
                }}>진단하기</Button>
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