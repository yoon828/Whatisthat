import React, { useState } from "react";
import "./LostCreate.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function LostCreate() {
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div id="lost-create">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
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
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="암컷"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>나이</Form.Label>
            <Form.Control type="text" placeholder="나이" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>몸무게</Form.Label>
            <Form.Control type="text" placeholder="kg" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>품종</Form.Label>
            <Form.Control type="text" placeholder="품종" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>실종장소</Form.Label>
            <Form.Control type="text" placeholder="장소" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>연락처</Form.Label>
            <Form.Control type="text" placeholder="000-0000-0000" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>사례금</Form.Label>
            <Form.Control type="text" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <InputGroup className="text-field">
          <InputGroup.Text>설명</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
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
