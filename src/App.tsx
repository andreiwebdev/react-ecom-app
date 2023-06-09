import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductsList from "./components/ProductsList";
import Filters from "./components/Filters";
import { Provider } from "./store/context";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Provider>
      <Container className="mt-5">
        <Cart />
        <Row>
          <Col lg={3}>
            <Filters />
          </Col>
          <Col lg={9}>
            <ProductsList />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
};

export default App;
