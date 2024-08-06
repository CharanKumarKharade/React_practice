import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./App.css";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function App() {
  let headerInfo = {
    email: "charan@gmail.com",
    phone: "909209091",
  };
  return (
    <div className="App">
      <Header headerInfo={headerInfo} cname="Charles" />;
      <Container fluid>
        <Container>
          <Row>
            <Col className="col-12 text-center py-4 mx-4">
              <h1>Our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">BA</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <br></br>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Course2</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">BCA</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <br></br>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Course3</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">BBA</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <br></br>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Course4</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    BCOM
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />;
    </div>
  );
}
export default App;
