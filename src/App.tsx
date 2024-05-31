import "./App.scss";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header/Header";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>Main Game</Col>
        <Col sm={4}>SideControls</Col>
      </Row>
      <Row>
        <Col sm={12}>Footer</Col>
      </Row>
    </Container>
  );
}

export default App;
