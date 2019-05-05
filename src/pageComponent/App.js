import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';
import { ProtectedRoute } from './ProtectedRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/app" component={Dashboard} />
          <Route path="*" component={() => "404 not found"} />
        </Switch>
      </div>
    );
  }
}

export default App;
