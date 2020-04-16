import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="Hilary Mallar's Website">
      <Router>
        <Switch>
          <Route exact path="/">
            <About title="About Me" />
          </Route>
          <Route path="/about">
            <About title="About Me" />
          </Route>
          <Route path="/contact">
            <Contact title="Contact" />
          </Route>
          <Route path="/portfolio">
            <Portfolio title="Portfolio" />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
