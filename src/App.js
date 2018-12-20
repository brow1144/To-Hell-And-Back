import React, { Component } from 'react';
import './App.css';
import {firestore} from './base.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Home from './Home'
import CreateGame from './CreateGame'

import {Route, Switch, Redirect} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Switch>

        <Route exact path='/ToHell/CreateGame' render={() => (
            <CreateGame />
        )}/>
        
        <Route exact path='/ToHell/Home' render={() => (
            <Home/>
        )}/>

        <Route render={() => {
          return (
            // eslint-disable-next-line
            <Redirect to={`/ToHell/Home`} />
          )
        }}/>

      </Switch>
    );
  }
}

export default App;
