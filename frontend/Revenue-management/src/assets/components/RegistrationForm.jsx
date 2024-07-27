import React, { useState } from 'react';
import { Form, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});


  const handleSubmit = async (event) => {
    const navigate=useNavigate()
    event.preventDefault();
    // TO DO: Implement form submission logic here
    // For now, just log the form data to the console
    console.log({
      username,
      aadharNo,
      mobile,
      password,
    });
  };


  // Data posting function -----------

  const postData = () => {
    console.log({
      username,
      aadharNo,
      mobile,
      password,
    })
    fetch("http://localhost:8080/signup",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username:username,
          aadharNo:aadharNo,
          mobile:mobile,
          password:password
        })
      }
    ).then((res) => res.json())
      .then((data) => {
        if (data.message) {
          notifyA(data.message)
          navigate("/signin")
        }
        if (data.error) {
          notifyB(data.error)
        }
      })

    // Toast Function ----------- ---------- --------- -------
    const notifyA = (msg) => toast.success(msg)
    const notifyB = (msg) => toast.error(msg)
  }


  return (
    <Container fluid className="bg-light">
      <Row className="justify-content-center">
        <Col md={6} offset={3} className="p-5 bg-white shadow">
          <h2 className="text-center mb-4">Register for Government Services</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter username"
              />
              {errors.username && <Form.Text className="text-danger">{errors.username}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="aadharNo">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                type="text"
                value={aadharNo}
                onChange={(event) => setAadharNo(event.target.value)}
                placeholder="Enter aadhar number"
              />
              {errors.aadharNo && <Form.Text className="text-danger">{errors.aadharNo}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="mobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                placeholder="Enter mobile number"
              />
              {errors.mobile && <Form.Text className="text-danger">{errors.mobile}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
              />
              {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
            </Form.Group>

            
            <input type="button" value="Sign-up" onClick={postData} className="signup-btn mt-4" />
            {errors.form && <Alert variant="danger" className="mt-4">{errors.form}</Alert>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;