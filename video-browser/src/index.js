import dotenv from "dotenv";
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

// FIXME
dotenv.config();
// require("dotenv").config({
//   path:
//     "/Users/tchuang/Code/Courses/modernReactRedux-StephenGrider/video-browser/.env"
// });
// console.log(require("dotenv").config({ debug: true }));

ReactDom.render(<App />, document.querySelector("#root"));
