import "./App.css";
import React from "react";
import Author from './pages/Author'
import Home from './pages/Home'
import ButtonImagePage from "./buttonImagePage";

function App() {
  let Component;
  switch(window.location.pathname){
    case "/":
      Component = <Home/>;
      break;
      case "/author":
        Component = <Author/>;
      break;
      case "/home":
        Component = <Home/>;
      break;
  }
  return (
    <div className="App">
      {Component}
    </div>
  );
}

export default App;
