// import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./App.css";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
// import { blog } from "./Data/blog.jsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp, faAmazonPay } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar.jsx";
import btncss from "./Button.module.css";
import { useState } from "react";
function App() {
  const display = () => {
    setCount(1 + count);
  };

  let [pshow, setpshow] = useState(false);
  let template = "";
  if (pshow) {
    template = (
      <>
        <button
          onClick={() => {
            setpshow(false);
          }}
          style={{ backgroundColor: "red", margin: "20px", padding: "20px" }}
        >
          Hide
        </button>
        <h1>Hello World!</h1>
      </>
    );
  } else {
    template = (
      <button
        onClick={() => {
          setpshow(true);
        }}
        style={{ backgroundColor: "blue", margin: "20px", padding: "20px" }}
      >
        Show
      </button>
    );
  }
  let [count, setCount] = useState(100);
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setmenuStatus] = useState(false);
  return (
    <div className="App">
      <button className={btncss.en}>Enquire</button>
      <div className={btncss.modal}> </div>
      <div className={btncss.modalcss}>
        <h3>Enquiry Now</h3>
      </div>
      <button
        classname={btncss.micon}
        onClick={() => {
          setmenuStatus(!menuStatus);
        }}
      >
        &#9776;
      </button>
      <div className={`btncss.menu ${menuStatus ? "btncss.activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <input type={pstatus ? "text" : "password"} />
      <button
        onClick={() => {
          setPstatus(!pstatus);
        }}
      >
        {!pstatus ? "show" : "hide"}
      </button>
      {template}
      <Header />
      <button className={btncss.error}>Error</button>
      <Navbar />
      <button onClick={display}> Click Me {count}</button>
      <Footer />
      <button className={btncss.warning}>YOU AGAIn</button>
    </div>
  );
}
export default App;
