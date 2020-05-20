import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import FormPage from "./components/pages/FormPage";
import TablePage from "./components/pages/TablePage";
import UserSignUpFormPage from "./components/pages/UserSignUpFormPage";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route path="/form" component={FormPage} />
          <Route path="/table" component={TablePage} />
          <Route path="/sign-up" component={UserSignUpFormPage} />
        </div>
      </Router>
    </div>
  );
};
