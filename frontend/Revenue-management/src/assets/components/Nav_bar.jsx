import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mncLogo from "../img/mncLogo.png"
import "./Nav_bar.css"

function Nav_bar() {
  return (
  <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img id='mnc-logo' src={mncLogo} alt="" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link href="#action1" className='nav-links'>Home</Nav.Link>
            <Nav.Link href="#action2"className='nav-links'>Taxes</Nav.Link>
            <Nav.Link href="#action2"className='nav-links'>Online Payments</Nav.Link>
            <Nav.Link href="#action2"className='nav-links'>DashBoardr</Nav.Link>
            <Nav.Link href="#action2"className='nav-links'>Indore</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown"className='nav-links'>
              <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Departments
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                News & Updates
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

              </>
  );
}

export default Nav_bar;