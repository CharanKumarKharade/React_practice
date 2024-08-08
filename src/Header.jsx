// function Header({ headerInfo, cname, children })
import { useState } from "react";
function Header() {
  const [name, setName] = useState("Charles");
  const change = () => {
    setName("Devaraj");
    console.log("name changed");
  };
  return (
    <>
      <h2>WElcome to Heading!!!!</h2>;
      <div>
        <h3 onClick={change}>hey,{name} from India</h3>
        <p>I'm a ReactJS Developer</p>
        <p>I'm from India</p>
        <p>I have {0.1 + 0} years of experience</p>
      </div>
    </>
  );
}
export default Header;
