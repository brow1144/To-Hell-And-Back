import React, { Component } from 'react';
import './App.css';
// import {firestore} from './base.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Home from './Home'
import CreateGame from './CreateGame'
import Lobby from './Lobby'
import Join from './Join'
import Guess from './Guess'
import Main from './Main'

import {Route, Switch, Redirect} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Switch>

        <Route exact path='/ToHell/CreateGame' render={() => (
            <CreateGame setGameCode={this.setGameCode}/>
        )}/>
        
        <Route exact path='/ToHell' render={() => (
            <Home />
        )}/>

        <Route exact path='/ToHell/Lobby/:code/:name' render={(match) => (
            <Lobby code={match.match.params.code} name={match.match.params.name}/>
        )}/>

        <Route exact path='/ToHell/Join/:code' render={(match) => (
            <Join code={match.match.params.code}/>
        )}/>

        {/* <Route exact path='/ToHell/:code/:name/Guess/:roundnumber/:playerNumber' render={(match) => ( */}
        <Route path='/ToHell/Game/0/:code/:name' render={(match) => (
            // <Guess code={match.match.params.code} name={match.match.params.name} roundNumber={match.match.params.roundnumber}/>
            <Main code={match.match.params.code} name={match.match.params.name} />
        )}/>

        <Route render={() => {
          return (
            // eslint-disable-next-line
            <Redirect to={`/ToHell`} />
          )
        }}/>

      </Switch>
    );
  }
}

export default App;
