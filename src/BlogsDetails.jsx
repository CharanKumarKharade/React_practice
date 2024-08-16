import { useLocation } from "react-router-dom";
import { blogs } from "./Data/blog";
import "./index.css";
import Navbar from "./Navbar";
function BlogsDetails() {
  let location = useLocation();
  let currentId = location.pathname.split("/")[2];
  // fetch blog data from API based on the provided id
  let showData = blogs.filter((v) => v.id == currentId)[0];
  return (
    <>
      <Navbar />
      <div className="head">
        <h1>{showData.name}</h1>
        <p>{showData.email}</p>
        <p>{showData.body}</p>
      </div>
    </>
  );
}
export default BlogsDetails;
