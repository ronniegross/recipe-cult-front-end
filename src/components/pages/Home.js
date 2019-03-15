import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "../Navbar";
import FormPage from "./FormPage";
import TablePage from "./TablePage";

export default class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <div>
          <Navbar />
            <Route path="/form" component={FormPage} />
            <Route path="/table" component={TablePage} />
          </div>
        </Router>
      </div>

    );
  }
}
