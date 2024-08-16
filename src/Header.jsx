// function Header({ headerInfo, cname, children })

import Navbar from "./Navbar";
import "./index.css";
// import { useState } from "react";
function Header() {
  // const [name, setName] = useState("Charles");
  // const change = () => {
  //   setName("Devaraj");
  //   console.log("name changed");
  // };
  return (
    <>
      <Navbar />
      <div className="head">
        <h1>Welcome to Our Website!</h1>
        <p>
          Your one-stop solution for all your needs. We offer a range of
          services designed to help you achieve your goals. Explore our site to
          learn more about what we can do for you.
        </p>
      </div>
    </>
  );
}
export default Header;
