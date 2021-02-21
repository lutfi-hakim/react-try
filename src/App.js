import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import LandingPages from "./pages/LandingPage";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPages}></Route>
      <Route path="/about" component={About}></Route>
    </Router>
  );
}

export default App;
