import React from "react";
import Navbar from "./Navbar";
import "./index.css";
function Footer() {
  return (
    <div>
      <Navbar />
      <div className="foot">
        <h1>Stay Connected with Us</h1>
        <p>
          Thank you for visiting our website. For the latest updates and news,
          follow us on our social media channels or subscribe to our newsletter.
          We value your feedback and look forward to hearing from you.
        </p>
      </div>
    </div>
  );
}

export default Footer;
