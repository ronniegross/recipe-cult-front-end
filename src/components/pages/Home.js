import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../Navbar";
import FormPage from "./FormPage";
import TablePage from "./TablePage";

export default function Home() {
  const homePage = () => {
    return <h1>Hello from Homepage!</h1>
  }
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={homePage} />
          <Route path="/form" component={FormPage} />
          <Route path="/table" component={TablePage} />
        </div>
      </Router>
    </div>
  );
}
