import "./App.css";
import React from "react";
import Author from "./pages/Author";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  // let Component;
  // const link = window.location.pathname;
  // Component = null;
  // switch (window.location.pathname) {
  //   case "/":
  //   case "/dog-model/":
  //   case "/home":
  //     Component = <Home />;
  //     break;
  //   case "/author":
  //     Component = <Author />;
  //     break;
  //   default:
  //     console.log("couldnt find page for " + link);
  //     Component = <Home />;
  // }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </div>
  );
}

export default App;
