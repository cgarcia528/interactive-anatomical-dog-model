import "./App.css";
import React from "react";
import Author from "./pages/Author";
import Home from "./pages/Home";
import ButtonImagePage from "./buttonImagePage";

function App() {
  let Component;
  console.log("window.location.pathname is " + window.location.pathname);
  Component = <Home />;
  switch (window.location.pathname) {
    case "/":
      console.log("case /");
      Component = <Home />;
      break;
    case "/author":
      console.log("case /author");
      Component = <Author />;
      break;
    case "/home":
      console.log("case /home");
      Component = <Home />;
      break;
  }
  return <div className="App">{Component}</div>;
}

export default App;
