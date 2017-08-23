import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Abacus from './Abacus.js';
import Dashboard from './Dashboard.js';

class Main extends Component {

  render() {
    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          <Route exact path="/" component={Dashboard}/>
          <Route path="/abacus" component={Abacus}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </main>
    );
  }
}

export default Main;