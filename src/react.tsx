import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

declare global {
  interface Window {
    electron: any,
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
