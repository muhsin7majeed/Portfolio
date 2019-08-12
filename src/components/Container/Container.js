import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Work from "../Works/Work";
import Home from "../Home/Home";

export default class Container extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/works" exact component={Work} />
        </Switch>
      </div>
    );
  }
}
