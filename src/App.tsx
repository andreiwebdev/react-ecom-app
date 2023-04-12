import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductsList from "./components/ProductsList";

const App = () => {
  return (
    <Container className="mt-5">
      <Row>
        {/* <Col lg={6}>Filter</Col> */}
        <Col>
          <ProductsList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
