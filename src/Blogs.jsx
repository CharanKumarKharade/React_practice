import { Link } from "react-router-dom";
import { blogs } from "./Data/blog";
import "./index.css";
import Navbar from "./Navbar";
const Blogs = () => {
  let details = blogs.map((v, i) => {
    return (
      <div className="containerInfo" key={i}>
        <h3>Name:{v.name}</h3>
        <p>E-mail:{v.email}</p>
        <p>Body:{v.body}</p>
        <button>
          <Link to={`/Blogs/${v.id}/`}>Read More</Link>
        </button>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <div className="container">{details}</div>
    </div>
  );
};

export default Blogs;
