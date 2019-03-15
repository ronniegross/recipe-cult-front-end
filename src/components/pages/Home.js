import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../Navbar";
import FormPage from "./FormPage";
import TablePage from "./TablePage";

export default class Home extends Component {
  state = {};

  homePage = () => {
    return <h1>Hello from Homepage!</h1>
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={this.homePage} />
            <Route path="/form" component={FormPage} />
            <Route path="/table" component={TablePage} />
          </div>
        </Router>
      </div>

    );
  }
}
