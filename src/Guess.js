import React, { Component } from 'react';

import {db} from './base.js';
import {Button} from 'mdbreact'
import { NavLink, Redirect } from 'react-router-dom'
import {Row, Col} from 'reactstrap'

class Guess extends Component {

  constructor() {
    super()

    this.state = {
      guess: 0,
      playerGuessing: 0,
      transition: false,
    }
  }

  componentWillMount() {
    let self = this
    db.collection("games").doc(this.props.code.toString())
    .onSnapshot(function(doc) {
        let tmp = doc.data().players[self.props.playerNumber].guess[self.props.roundNumber - 1]
        if (tmp === undefined || tmp === null) tmp = 0
        console.log(tmp)
        self.setState({
          guess: tmp,
        })
    });
  }

  increment = () => {
    let tmp = this.state.guess + 1

    if (tmp > 10) {
      this.setState({guess: 10})
      return
    }
    this.setState({guess: tmp}, () => {
      let tmpPlayers = this.props.players;
      tmpPlayers[this.props.playerNumber].guess[this.props.roundNumber - 1] = this.state.guess
  
      console.log(tmpPlayers)
  
      db.collection("games").doc(this.props.code.toString()).update({
        players: tmpPlayers
      })
      .then(function() {
          // self.setState({transition: true})
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    })
  
  }

  decrement = () => {
    let tmp = this.state.guess - 1
    this.setState({guess: tmp})
    
    if (this.state.guess - 1 < 0) {
      this.setState({guess: 0})
    }
  }

  nextPlayer = () => {
    let self = this
    // TODO Switch to next person in line 
    // Make sure that they arn't the last 

    db.collection("games").doc(this.props.code.toString())
    .get().then(function(doc) {
        let data = doc.data()
        let tmp = data.playerGuessing + 1

        // TODO, Time to switch out of guessing if tmp > players.length
        if (tmp <= data.players.length - 1) {

          self.setState({playerGuessing: tmp})

          db.collection("games").doc(self.props.code.toString()).update({
            playerGuessing: tmp
          })
          .then(function() {
              self.setState({transition: true})
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
        }

    });
  }

  render() {

    if (this.state.transition) {
      this.setState({transition: false})
      return <Redirect to={`/ToHell/Game/0/${this.props.code}/${this.props.name}/${this.props.state}/${this.props.round}/${this.state.playerGuessing}`}/>
    }


    return (

      <div className="App">
        <header className="App-header">
          

          {this.props.players.length > 0
            ?
              <p style={{fontSize: "2em"}}> {this.props.players[this.props.playerNumber].name}'s Round 1 Guess</p>
            :
              null
          }

          <p style={{height: '1.5em'}}> </p>

          <Button onClick={this.increment} outline color="success">
            +
          </Button>
          
          <p style={{fontSize: "5em"}}>
            {this.state.guess}
          </p>

          <Button onClick={this.decrement} outline color="success">
            -
          </Button>
           
          <p style={{height: '3em'}}> </p>

          {/* <NavLink style={{textDecoration: 'none'}} to={`/ToHell/Lobby/${this.state.code}`}> */}
            <Button
                outline
                color="primary"
                onClick={this.nextPlayer}
            >
                Next!
            </Button>
          {/* </NavLink> */}

        </header>
      </div>

    );
  }
}

export default Guess;
