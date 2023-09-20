import Button from "react-bootstrap/Button";
import "./App.css";
import Dashboard from "../Components/Dashboard";
import { Container, Row, Col } from "react-bootstrap";
import BlogPage from "../Components/BlogPage";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Our Blog</h1>
        </Col>
        <BlogPage/>
        {/* <Dashboard /> */}
      </Row>
    </Container>
  );
}

export default App;
