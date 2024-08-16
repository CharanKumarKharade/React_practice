import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Error from "./Error";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Blogs from "./Blogs";
import BlogsDetails from "./BlogsDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
let routes = createBrowserRouter([
  {
    path: "footer",
    element: <Footer />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/blogs/:id",
    element: <BlogsDetails />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
