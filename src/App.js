import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Deck from "./components/Deck.js";

const App = () => (
  <BrowserRouter basename="/">
    {console.log(process.env.PUBLIC_URL)}
    <div className="Hilary Mallar's Website">
      <div>
        <Header />
        <Switch>
          <Route path="/" render={() => <div className="portfolio-deck"><Deck /></div>} />
          {/* <Route exact path='/' render={() => <About title={"About Me"} />} />
        <Route path='/about' render={() => <About title={"About Me"} />} />
        <Route path='/contact' render={() => <Contact title={"Contact"} />} />
        <Route
          path="/portfolio"
          render={() => <Portfolio title={"Portfolio"} />}
        /> */}
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
