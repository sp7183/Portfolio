import React, { useEffect, useRef } from "react";
import "./styles/fonts.css";
import "./styles/App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import { Cursor } from "./Component/Cursor";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Panels } from "./Component/Load";
import Error from "./Pages/Error";
import Resume from "./Pages/Resume";
function App() {
  return (
    <>
      <Panels />
      <div className="grain" />
      <div className="App">
        <Router>
          <Cursor />
          <Switch>
            <Route path="/" exact>
              <Nav border="var(--text)" />
              <Home />
            </Route>
            <Route path="/work/:id" exact>
              <Nav border="var(--bg)" />
              <Work />
            </Route>
            <Route path="/About" exact>
              <Nav border="var(--text)" />
              <About />
            </Route>
            <Route path="/Resume" exact>
              <Nav border="var(--text)" />
              <Resume />
            </Route>
            <Route path="*" exact>
              <Error />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
