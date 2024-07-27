import React, { useState } from 'react';
import { Form, Container, Row, Col, Button, Alert } from 'react-bootstrap';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [govIdInfo, setGovIdInfo] = useState('');
  const [city, setCity] = useState('');
  const [wardNo, setWardNo] = useState('');
  const [zoneNo, setZoneNo] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [alternateNumber, setAlternateNumber] = useState('');
  const [tncAccepted, setTncAccepted] = useState(false);
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
<Container fluid className="bg-light">
  <Row className="justify-content-center">
    <Col md={6} offset={3} className="p-5 bg-white shadow">
      <h2 className="text-center mb-4">Register for Government Services</h2>
      <Form>
      <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Enter first name"
          />
          {errors.firstName && <Form.Text className="text-danger">{errors.firstName}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Enter last name"
          />
          {errors.lastName && <Form.Text className="text-danger">{errors.lastName}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
          {errors.dob && <Form.Text className="text-danger">{errors.dob}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Control>
          {errors.gender && <Form.Text className="text-danger">{errors.gender}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="nationality">
          <Form.Label>Nationality</Form.Label>
          <Form.Control
            type="text"
            value={nationality}
            onChange={(event) => setNationality(event.target.value)}
            placeholder="Enter nationality"
          />
          {errors.nationality && <Form.Text className="text-danger">{errors.nationality}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="emailAddress">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
            placeholder="Enter email address"
          />
          {errors.emailAddress && <Form.Text className="text-danger">{errors.emailAddress}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="mobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
            placeholder="Enter mobile number"
          />
          {errors.mobileNumber && <Form.Text className="text-danger">{errors.mobileNumber}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="emailVerified">
          <Form.Check
            type="checkbox"
            label="Email Verified"
            checked={emailVerified}
            onChange={(event) => setEmailVerified(event.target.checked)}
          />
          {errors.emailVerified && <Form.Text className="text-danger">{errors.emailVerified}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="mobileVerified">
          <Form.Check
            type="checkbox"
            label="Mobile Verified"
            checked={mobileVerified}
            onChange={(event) => setMobileVerified(event.target.checked)}
          />
          {errors.mobileVerified && <Form.Text className="text-danger">{errors.mobileVerified}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="govIdInfo">
          <Form.Label>Government ID Info</Form.Label>
          <Form.Control
            type="text"
            value={govIdInfo}
            onChange={(event) => setGovIdInfo(event.target.value)}
            placeholder="Enter government ID info"
          />
          {errors.govIdInfo && <Form.Text className="text-danger">{errors.govIdInfo}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter city"
          />
          {errors.city && <Form.Text className="text-danger">{errors.city}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="govIdInfo">
          <Form.Label>Government ID Info</Form.Label>
          <Form.Control
            type="text"
            value={govIdInfo}
            onChange={(event) => setGovIdInfo(event.target.value)}
            placeholder="Enter government ID info"
          />
          {errors.govIdInfo && <Form.Text className="text-danger">{errors.govIdInfo}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter city"
          />
          {errors.city && <Form.Text className="text-danger">{errors.city}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="wardNo">
          <Form.Label>Ward No.</Form.Label>
          <Form.Control
            type="text"
            value={wardNo}
            onChange={(event) => setWardNo(event.target.value)}
            placeholder="Enter ward no."
          />
          {errors.wardNo && <Form.Text className="text-danger">{errors.wardNo}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="zoneNo">
          <Form.Label>Zone No.</Form.Label>
          <Form.Control
            type="text"
            value={zoneNo}
            onChange={(event) => setZoneNo(event.target.value)}
            placeholder="Enter zone no."
          />
          {errors.zoneNo && <Form.Text className="text-danger">{errors.zoneNo}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="homeAddress">
          <Form.Label>Home Address</Form.Label>
          <Form.Control
            type="text"
            value={homeAddress}
            onChange={(event) => setHomeAddress(event.target.value)}
            placeholder="Enter home address"
          />
          {errors.homeAddress && <Form.Text className="text-danger">{errors.homeAddress}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="occupation">
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            type="text"
            value={occupation}
            onChange={(event) => setOccupation(event.target.value)}
            placeholder="Enter occupation"
          />
          {errors.occupation && <Form.Text className="text-danger">{errors.occupation}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="preferredLanguage">
          <Form.Label>Preferred Language</Form.Label>
          <Form.Control
            as="select"
            value={preferredLanguage}
            onChange={(event) => setPreferredLanguage(event.target.value)}
          >
            <option value="">Select preferred language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="other">Other</option>
          </Form.Control>
          {errors.preferredLanguage && <Form.Text className="text-danger">{errors.preferredLanguage}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="alternateNumber">
          <Form.Label>Alternate Number</Form.Label>
          <Form.Control
            type="tel"
            value={alternateNumber}
            onChange={(event) => setAlternateNumber(event.target.value)}
            placeholder="Enter alternate number"
          />
          {errors.alternateNumber && <Form.Text className="text-danger">{errors.alternateNumber}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="tncAccepted">
          <Form.Check
            type="checkbox"
            label="I accept the terms and conditions"
            checked={tncAccepted}
            onChange={(event) => setTncAccepted(event.target.checked)}
          />
          {errors.tncAccepted && <Form.Text className="text-danger">{errors.tncAccepted}</Form.Text>}
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

        <Button variant="primary" type="submit" className="mt-4">
          Register
        </Button>

        {errors.form && <Alert variant="danger" className="mt-4">{errors.form}</Alert>}
      </Form>
    </Col>
  </Row>
</Container>
  )}

  export default RegistrationForm;