import Navbar from "./Navbar";
import "./index.css";
function Error() {
  return (
    <div>
      <Navbar />
      <div className="error">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
}
export default Error;
