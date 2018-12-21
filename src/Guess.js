import React, { Component } from 'react';

import {db} from './base.js';
import {Button} from 'mdbreact'
import { NavLink } from 'react-router-dom'
import {Row, Col} from 'reactstrap'

class Guess extends Component {

  constructor() {
    super()

    this.state = {
      guess: 0,
    }
  }

  componentWillMount() {

  }

  increment = () => {
    let tmp = this.state.guess + 1
    this.setState({guess: tmp})

    if (this.state.guess + 1 > 10) {
      this.setState({guess: 10})
    }
  }

  decrement = () => {
    let tmp = this.state.guess - 1
    this.setState({guess: tmp})
    
    if (this.state.guess - 1 < 0) {
      this.setState({guess: 0})
    }
  }

  nextPlayer = () => {
    // TODO Switch to next person in line 
    // Make sure that they arn't the last 
  }

  render() {

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

          <NavLink style={{textDecoration: 'none'}} to={`/ToHell/Lobby/${this.state.code}`}>
            <Button
                outline
                color="primary"
                onClick={this.nextPlayer}
            >
                Next!
            </Button>
          </NavLink>

        </header>
      </div>

    );
  }
}

export default Guess;
