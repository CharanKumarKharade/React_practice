import { useState } from "react";
import { tabs } from "./Data/tabs";

const Tabbing = () => {
  let [tabindex, setTabIndex] = useState(0);
  let [tabcontent, setTabContent] = useState(tabs[0]);
  const Applychange = (index) => {
    setTabIndex(index);
    setTabContent(tabs[index]);
  };
  return (
    <div className="tabbing">
      <h2>OUR SERVICES</h2>
      <ul>
        {tabs.map((listInfo, index) => {
          return (
            <li>
              <button
                onClick={() => {
                  Applychange(index);
                }}
                className={index === tabindex ? "activeColor" : ""}
              >
                {listInfo.name}
              </button>
            </li>
          );
        })}
      </ul>
      <p>{tabcontent.description}</p>
    </div>
  );
};

export default Tabbing;
