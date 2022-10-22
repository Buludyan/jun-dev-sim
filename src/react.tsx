import React from "react";
import ReactDOM from "react-dom";
import { writeFile } from "./back";

const Index = () => {
  return (
    <div>
      <p>Hello React!</p>
      <button onClick={(e) => writeFile()}>asdasd</button>;
    </div>
  );
};
//
ReactDOM.render(<Index />, document.getElementById("app"));
