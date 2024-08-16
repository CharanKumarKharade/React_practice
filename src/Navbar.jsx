import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <h1>My First React App</h1>
        <ul>
          <li>
            <Link to={"/footer"}> Footer</Link>
          </li>
          <li>
            <Link to={"/"}> Header</Link>
          </li>
          <li>
            <Link to={"blogs"}> Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
