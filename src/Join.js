import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'
import {db} from './base.js';
import {Button, FormInline, MDBInput} from 'mdbreact'

class Join extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      visible: false,
    }
  }

  goToLobby = () => {
    let self = this
    if (this.state.name === null || this.state.name === '' || this.state.name === undefined) {
      this.setState({visible: true})
      return
    }

    // TODO Set stuff

    let players = []
    db.collection("games").doc(this.props.code.toString())
    .get().then(function(doc) {
        if (doc.exists) {
            players = doc.data().players

            players.unshift(self.state.name);
  
              db.collection("games").doc(self.props.code.toString()).set({
                players: players
              })
              .then(function() {
                  console.log("Document successfully written!");
              })
              .catch(function(error) {
                  console.error("Error writing document: ", error);
              });


        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });


  }

  updateName = (ev) => {
    this.setState({name: ev.target.value})
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          
          <p style={{fontSize: "2em"}}>
                Game Code: {this.props.code}
          </p>

          { this.state.visible ? <p style={{fontSize: '0.8em'}}>Please enter your name for the game!</p> : null  }
            
          <MDBInput onChange={this.updateName} name='gameCode' style={{color: "whitesmoke"}} label="Name" />

            <Button
                outline
                color="primary"
                onClick={this.goToLobby}
            >
                Go to Lobby!
            </Button>

        </header>
      </div>

    );
  }
}

export default Join;
