import React, { Component } from 'react';

import {db} from './base.js';
import {Button, MDBInput} from 'mdbreact'
import { NavLink } from 'react-router-dom'

class CreateGame extends Component {

  constructor() {
    super()

    this.state = {
      code: 0,
      name: '',
      visible: false,
      password: '',
    }
  }

  componentWillMount() {
    this.generateCode()    
  }

  generateCode = () => {
    // TODO Make sure code is not already being used
    let code = Math.floor(Math.random()*90000) + 10000

    this.setState({code: code})
  }

  goToLobby = () => {
    if (this.state.name === null || this.state.name === '' || this.state.name === undefined) {
      this.setState({visible: true})
      return
    }

    // db.ref(`games/${this.state.code.toString()}`).set({
    //   players: [this.state.name],
    // });

    let tmp = {name: this.state.name, password: this.state.password}

    db.collection("games").doc(this.state.code.toString()).set({
      players: [tmp]
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  updateName = (ev) => {
    this.setState({name: ev.target.value})
  }

  updatePassword = (ev) => {
    this.setState({password: ev.target.value})
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          
          <p style={{fontSize: "2em"}}>
                Game Code: {this.state.code}
          </p>

          { this.state.visible ? <p style={{fontSize: '0.8em'}}>Please enter your name for the game!</p> : null  }
            
          <MDBInput onChange={this.updateName} name='gameCode' style={{color: "whitesmoke"}} label="Name" />

          <MDBInput onChange={this.updatePassword} name='gameCode' style={{color: "whitesmoke"}} label="Short Password" />

          <NavLink style={{textDecoration: 'none'}} to={`/ToHell/Lobby/${this.state.code}`}>
            <Button
                outline
                color="primary"
                onClick={this.goToLobby}
            >
                Go to Lobby!
            </Button>
          </NavLink>

        </header>
      </div>

    );
  }
}

export default CreateGame;
