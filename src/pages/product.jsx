import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Items, { Bottom } from "../items";
import "../css/product.css";

const product = () => {
  return (
    <Container fluid>
      <div className="leftRight">
        <div className="left">
          {/* Accodion For Price */}
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>PRICE RANGE</h5>
              </Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type="checkbox"
                  label="₱ 0.00 - ₱ 500.00"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="₱ 501.00 - ₱ 1,000.00"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="₱ 1,001.00 - ₱ 2,000.00"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="₱ 2,000.00 and Above"
                ></Form.Check>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* Accodion For Lens */}
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5>LENS MATERIALS</h5>
              </Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Anti-Radiation"></Form.Check>
                <Form.Check type="checkbox" label="Multicoated"></Form.Check>
                <Form.Check type="checkbox" label="Tinted"></Form.Check>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* Accodion For Frames */}
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h5>FRAMES MATERIALS</h5>
              </Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Acetate"></Form.Check>
                <Form.Check type="checkbox" label="Metal"></Form.Check>
                <Form.Check type="checkbox" label="Plastic"></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Stainless Steel"
                ></Form.Check>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="right cardContainer">
          {Items.map((item) => (
            <Card style={{ width: "14rem" }} key={item.id}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body className="Card">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>₱ {item.price}</Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="bottom">
          {Bottom.map((bottom) => (
            <div className="bottomdetails">
              <div className="images">
                <img src={bottom.img} alt="" />
              </div>
              <div className="description">
                <div className="titles">
                  <h6>{bottom.title}</h6>
                  <p>{bottom.descrip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default product;
