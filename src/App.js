import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

const App = () => (
  <HashRouter basename="/">
    <div className="Hilary Mallar's Website">
      <Switch>
        <Route exact path="/" render={() => <About title={"About Me"} />} />
        <Route path="/about" render={() => <About title={"About Me"} />} />
        <Route path="/contact" render={() => <Contact title={"Contact"} />} />
        <Route
          path="/portfolio"
          render={() => <Portfolio title={"Portfolio"} />}
        />
      </Switch>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
