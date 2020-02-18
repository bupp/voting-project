import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Voting } from "./Voting";
import { Results } from "./Results";
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/results" component={Results} />
        <Route path="/" component={Voting} />
        </Switch>
      </div>
    </Router>
  )
}