import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Portada from "./components/Portada";
import Proyectos from "./components/Proyectos"
import About from "./components/About"
import Contacto from "./components/contacto"
import Test from "./components/Test"
import Proyecto from "./components/Proyecto"
import "./assets/css/app.css";
import { queryAllByAltText } from "@testing-library/react";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__main">
          <div className="app__main_center">
            <Switch>
              <Route path="/proyectos">
                 <Proyectos />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contacto">
                <Contacto />
              </Route>
              <Route path="/home">
                <Portada />
              </Route>
              <Route  path="/proyecto" >
                <Proyecto  />
              </Route>
              <Route path="*">
               <Portada />
              </Route>
              <Route path="/">
                <Portada />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
