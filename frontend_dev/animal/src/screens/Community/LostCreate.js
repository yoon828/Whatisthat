import React, { useState, useEffect, useRef } from "react";
import "./LostCreate.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom";
import { postLost, putLost } from "../../api/community";
import axios from "axios";

function LostCreate() {
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const genderRef = useRef(null);
  const ageRef = useRef(null);
  const weightRef = useRef(null);
  const kindRef = useRef(null);
  const placeRef = useRef(null);
  const phoneRef = useRef(null);
  const payRef = useRef(null);
  const etcRef = useRef(null);
  const lost_dateRef = useRef(null);

  const [isEdit, setIsEdit] = useState(false);
  const [files, setFiles] = useState([]);
  const [filenames, setFilenames] = useState([]);
  const location = useLocation();

  const imgServerUrl = process.env.REACT_APP_IMAGE_SERVER_URL;
  let serverName = [];

  const [validated, setValidated] = useState(false);
  // const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setIsEdit(true);
      setting();
    }
  }, []);

  const setting = () => {
    const article = location.state;
    titleRef.current.value = article.title;
    nameRef.current.value = article.name;
    contentRef.current.value = article.content;
    genderRef.current.value = article.gender;
    ageRef.current.value = article.age;
    weightRef.current.value = article.weight;
    kindRef.current.value = article.kind;
    placeRef.current.value = article.place;
    phoneRef.current.value = article.phone;
    etcRef.current.value = article.etc;
    lost_dateRef.current.value = article.lost_date;
    payRef.current.value = article.pay;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.stopPropagation();
    //   // navigate(`/lost/list`);
    // }
    sendImage();
    // sendLost();
    setValidated(true);
  };

  const sendImage = async () => {
    try {
      let formData = new FormData();
      console.log(files);
      console.log(filenames);
      for (let i = 0; i < files.length; i++) {
        formData.append("photos", files[i], filenames[i]);
      }
      console.log(imgServerUrl);
      const { data } = await axios({
        url: `${imgServerUrl}/upload-multi`,
        method: "post",
        headers: {
          processData: false,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      console.log(data);
      if (data.status) {
        serverName = [];
        data.data.map((img, idx) => {
          return serverName.push(`${imgServerUrl}/${img.name}`);
        });
        sendLost();
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const sendLost = async () => {
    try {
      if (isEdit) {
        const { data } = await putLost({
          title: titleRef.current.value,
          content: contentRef.current.value,
          id: location.state.id,
        });
        let id = data.data.id;
        alert("수정 되었습니다!");
      } else {
        const { data } = await postLost({
          is_found: false,
          title: titleRef.current.value,
          name: nameRef.current.value,
          content: contentRef.current.value,
          gender: genderRef.current.value,
          age: ageRef.current.value,
          weight: weightRef.current.value,
          kind: kindRef.current.value,
          place: placeRef.current.value,
          phone: phoneRef.current.value,
          etc: etcRef.current.value,
          lost_date: lost_dateRef.current.value,
          pay: payRef.current.value,
        });
        let id = data.data.id;
        alert("등록 되었습니다!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeFiles = (e) => {
    e.preventDefault();
    setFiles(e.target.files);
    let today = new Date();
    const fileName = `img_${today.getFullYear()}${
      today.getMonth() + 1
    }${today.getDate()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
    let length = e.target.files.length;
    let filenames = [];
    for (let i = 0; i < length; i++) {
      filenames.push(`${fileName}_${i}.png`);
    }
    setFilenames(filenames);
  };

  return (
    <div id="lost-create">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <label>이미지</label>
        <input
          type="file"
          accept="image/*"
          id="lost-img"
          multiple={true}
          onChange={(e) => {
            changeFiles(e);
          }}
        ></input>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              ref={titleRef}
              placeholder="제목을 입력해 주세요"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>이름</Form.Label>
            <Form.Control
              type="text"
              ref={nameRef}
              placeholder="이름을 입력해 주세요"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="수컷"
                    name="group1"
                    value={0}
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="암컷"
                    name="group1"
                    value={1}
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>실종날짜</Form.Label>
            <Form.Control
              ref={lost_dateRef}
              type="text"
              placeholder="실종날짜"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>나이</Form.Label>
            <Form.Control
              ref={ageRef}
              type="text"
              placeholder="나이"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>몸무게</Form.Label>
            <Form.Control
              ref={weightRef}
              type="text"
              placeholder="kg"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>품종</Form.Label>
            <Form.Control
              ref={kindRef}
              type="text"
              placeholder="품종"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>실종장소</Form.Label>
            <Form.Control
              ref={placeRef}
              type="text"
              placeholder="장소"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>연락처</Form.Label>
            <Form.Control
              ref={phoneRef}
              type="text"
              placeholder="000-0000-0000"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>사례금</Form.Label>
            <Form.Control ref={payRef} type="text" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <InputGroup className="text-field">
          <InputGroup.Text>설명</InputGroup.Text>
          <Form.Control
            ref={contentRef}
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button className="sub-btn" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
}
export default LostCreate;
