import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import FormPage from "./components/pages/FormPage";
import TablePage from "./components/pages/TablePage";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route path="/form" component={FormPage} />
          <Route path="/table" component={TablePage} />
        </div>
      </Router>
    </div>
  );
};
