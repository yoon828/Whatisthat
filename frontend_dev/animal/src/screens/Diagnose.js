import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const DiagnosePage = () => {
    let [upload, setUpload] = useState(false)
    let [name, setName] = useState("")
    let [type, setType] = useState("")
    let [part, setPart] = useState("")
    let [img, setImg] = useState("")
    let [info, setInfo] = useState({name:"", type:"", part:"", img:""})


    return (
        <div className='container'>
            <Form onInput={(event)=>{
                setName(event.target.value)
            }}>
                <Form.Label htmlFor="inputPassword5">이름</Form.Label>
                <Form.Control
                />
                <Form.Text id="passwordHelpBlock" muted>
                    강아지나 고양이의 이름을 입력해주세요.
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
                    id={`inline-${type}-1`}
                />
                <Form.Check
                    onClick={()=>{
                        setPart('안구')
                    }}
                    inline
                    label="안구"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                </div>
            ))}
            </Form>

            <Button onClick={()=>{
                // 카메라 접근하는 코드 들어가야함
                
            }}>촬영하기</Button>
            <Button className='m-4' onClick={()=>{
                setUpload(true)
                
            }}>업로드 하기</Button>
            {
                upload ? <Upload setImg={setImg}/> : null
            }
            <div>
                <Button onClick={()=>{
                    // 이미지 서버에 이미지를 저장하는 axios 추가 해야됨
                    setInfo(info.name=name)
                    setInfo(info.type=type)
                    setInfo(info.part=part)
                    setInfo(info.img=img)
                    console.log(info)
                    // document.location.href = '/diagnoseresult'
                }}>진단하기</Button>
            </div>
        </div>
    )
}

const Upload = (props) => {
    return (
        <div>
            <Form.Group onChange={()=>{

                const fileName = "img_" +
                new Date().getFullYear() +
                (new Date().getMonth() + 1) +
                new Date().getDate() +
                new Date().getHours() +
                new Date().getMinutes() +
                new Date().getSeconds() +
                ".png";

                props.setImg(fileName)
            }} controlId="formFile" className="mb-3">
                <Form.Control type="file" />
            </Form.Group>
        </div>
    )
}

export default DiagnosePage;