import Container from "react-bootstrap/Container";
import "../css/booking.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";

const booking = () => {
  const BookAppointment = {
    display: "grid",
    justifyItems: "center",
  };
  return (
    <Container fluid>
      <Form className="containerForm">
        <Row className="my-3">
          <h3 style={BookAppointment}>Book Your Appoinment</h3>
          <hr />
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control type="text" placeholder="Enter your FirstName" />
          </Form.Group>
          <Form.Group as={Col}>
            <FormControl type="text" placeholder="Enter your LastName" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <FormControl type="text" placeholder="Enter your Email" />
          </Form.Group>
          <Form.Group as={Col}>
            <FormControl type="date" placeholder="Enter your Date" />
          </Form.Group>
        </Row>
        <Row className="mb-3 MaleFemaleRadio">
          <Col className="MaleFemaleRadioEnd">
            <Form.Check type="radio" label="Male" name="GenderMale" />
          </Col>
          <Col>
            <Form.Check type="radio" label="Female" name="GenderFemale" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <FormControl placeholder="Telephone Number" />
          </Form.Group>
          <Form.Group as={Col}>
            <FormControl placeholder="Phone Number" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <FormControl type="text" placeholder="Enter your Address 1" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control placeholder="City" />
          </Col>
          <Col>
            <Form.Control placeholder="State" />
          </Col>
          <Col>
            <Form.Control placeholder="Zip" />
          </Col>
        </Row>
        <Row className="my-4">
          <Col className="MaleFemaleRadioEnd">
            <Button variant="outline-dark">Book Now</Button>
          </Col>
          <Col>
            <Button variant="outline-dark">Cancel</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default booking;
