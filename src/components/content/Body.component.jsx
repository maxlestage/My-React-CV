import { Col, Container, Row } from "react-bootstrap";
import Left from "./Left.component";
import Right from "./Right.component";

function Body() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Left />
          </Col>
          <Col xs={12} md={8}>
            <Right />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Body;
