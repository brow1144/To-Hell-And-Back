import React, { Component } from 'react';
import './App.css';
import {db} from './base.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Home from './Home'
import CreateGame from './CreateGame'
import Lobby from './Lobby'
import Join from './Join'
import Guess from './Guess'

import {Route, Switch, Redirect} from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      players: [],
      playerGuessing: 0,
      round: 1,
      state: "Guess",
      transition: false,
    }
  }

  componentWillMount = () => {
    let self = this

    db.collection("games").doc(this.props.code.toString()).get().then(function(doc) {
        if (doc.exists) {
          self.setState({players: doc.data().players})
        } else {
          // self.setState({visible: true})
        }
    })

    db.collection("games").doc(this.props.code.toString())
    .onSnapshot(function(doc) {
        self.setState({
          // players: doc.data().players,
          playerGuessing: doc.data().playerGuessing,
          round: doc.data().round,
          state: doc.data().state
        }, () => {
          // TODO LOOK AT THIS, makes shit look weird
          self.setState({transition: true})
        })
    });
  }

  render() {

    if (this.state.transition) {
      // console.log(`/ToHell/Game/0/${this.props.code}/${this.props.name}/${this.state.state}/${this.state.round}/${this.state.playerGuessing}`)
      this.setState({transition: false})
      return <Redirect to={`/ToHell/Game/0/${this.props.code}/${this.props.name}/${this.state.state}/${this.state.round}/${this.state.playerGuessing}`}/>
    }

    return (
      <Switch>

        <Route path='/ToHell/Game/0/:code/:name/Guess/:roundnumber/:playerNumber' render={(match) => (
            <Guess players={this.state.players} code={match.match.params.code} name={match.match.params.name} playerNumber={match.match.params.playerNumber} roundNumber={match.match.params.roundnumber} />
        )}/>

        {/* <Route exact path='/ToHell/:code/:name/Tricks/:roundnumber' render={(match) => (
            <Guess code={match.match.params.code} name={match.match.params.name} roundNumber={match.match.params.roundnumber}/>
        )}/>

        <Route exact path='/ToHell/:code/:name/Scoreboard/:roundnumber' render={(match) => (
            <Guess code={match.match.params.code} name={match.match.params.name} roundNumber={match.match.params.roundnumber}/>
        )}/> */}

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

export default Main;
