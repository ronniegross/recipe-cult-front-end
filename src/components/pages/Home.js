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
        <Navbar />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/form">Form</Link>
                </li>
                <li>
                <Link to="/table">Table</Link>
              </li>
              </ul>
            </nav>
            <Route path="/form" component={FormPage} />
            <Route path="/table" component={TablePage} />
          </div>
        </Router>
      </div>

    );
  }
}
