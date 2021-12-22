import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/gallery" component={Gallery}></Route>
      </Switch>
    </>
  );
};

export default App;
