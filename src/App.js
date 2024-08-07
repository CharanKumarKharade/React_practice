import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./App.css";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { blog } from "./Data/blog.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faAmazonPay } from "@fortawesome/free-brands-svg-icons";
function App() {
  let headerInfo = {
    email: "charan@gmail.com",
    phone: "909209091",
  };
  let display = () => {
    alert("WORKING TO REACTJS");
  };
  let addData = (a, b) => {
    alert(a + b);
  };
  return (
    <div className="App">
      <Header headerInfo={headerInfo} cname="Charles">
        <h3>Im from APP JS</h3>
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-green"
        ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faAmazonPay}></FontAwesomeIcon>
      </Header>
      <button
        onClick={() => {
          addData(10, 20);
        }}
      >
        Add Data
      </button>
      <br></br>
      <button onClick={display}> Click me</button>
      <p>IM INSIDE APP</p>
      {/* <Container fluid>
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
      </Container> */}
      <Container>
        <Row>
          {blog.map((v, i) => {
            return <ProductItems pitems={v} key={i} />;
          })}
        </Row>
      </Container>
      <Footer />;
    </div>
  );
}
export default App;

function ProductItems({ pitems }) {
  return (
    <div className=" col-lg-3 mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">BCOM</Card.Subtitle>
          <Card.Text>{pitems.body}</Card.Text>
          <Card.Link href="#">{pitems.id}</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
