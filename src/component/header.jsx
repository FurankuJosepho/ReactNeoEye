import "../css/header.css";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    const BookUS = {
        margin: "5px 20px",
        padding: "20px",
        borderRadius: "7px",
        border: "2px solid #fff",
    }
  return (
    <Navbar expand="lg" variant={"dark"} className="navBarBG">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navBrand">Neo Eye</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navBarLinks navBarCollapse">
            <Nav.Link as={Link} to="/Products">Products</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            <Nav.Link as={Link} to="/Booking" className="BookUs" style={BookUS}>Book Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
