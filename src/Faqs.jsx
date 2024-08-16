import React, { useState } from "react";
import "./index.css";
import { question } from "./Data/faq.jsx";
import Navbar from "./Navbar.jsx";
function Faqs() {
  let [currentId, setCurrentId] = useState(0);

  let items = question.map((itemsData, i) => {
    let itemDetails = {
      currentId,
      setCurrentId,
      itemsData,
    };
    return <FaqItems itemDetails={itemDetails} key={i} />;
  });
  return (
    <div className="faq">
      <Navbar />
      <h2>Frequently ASked questions</h2>
      <div className="faqitems">{items}</div>
    </div>
  );
}
export default Faqs;

function FaqItems({ itemDetails }) {
  let { currentId, setCurrentId, itemsData } = itemDetails;
  return (
    <div className="faqItems">
      <h2
        onClick={() => {
          setCurrentId(itemsData.id);
        }}
      >
        {itemsData.question}
      </h2>
      <p className={currentId === itemsData.id ? "activeAns" : ""}>
        {itemDetails.itemsData.answers}
      </p>
    </div>
  );
}
