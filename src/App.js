import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Me from "./components/top/Me.component";
import Picture from "./components/top/Picture.component";
import Body from "./components/content/Body.component";
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Me />
          </Col>
          <Col xs={6} md={4}>
            <Picture />
          </Col>
        </Row>
        <Row>
          <Body />
        </Row>
      </Container>
    </div>
  );
}

export default App;
