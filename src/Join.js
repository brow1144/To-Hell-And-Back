import React, { Component } from 'react';

import { Redirect} from 'react-router-dom'
import {db} from './base.js';
import {Button, MDBInput} from 'mdbreact'

class Join extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      visible: false,
      visible1: false,
      transition: false,
      password: '',
    }
  }

  alreadyTaken = (players) => {
    let self = this
    let result =  ''
    for (let i in players) {
      let player = players[i]
      if (player.name === self.state.name && player.password === self.state.password) {
        // Log back in 
        result = 'Log In'
        return result
      } else if (player.name === self.state.name && player.password !== self.state.password) {
        // Player with same name
        result = 'Already Taken'
        return result
      } else {
        // New Player
        result = 'New Player'
      }
    }
    return result
  }

  goToLobby = () => {
    let self = this
    if (this.state.name === null || this.state.name === '' || this.state.name === undefined) {
      this.setState({visible: true})
      return
    }

    let players = []
    db.collection("games").doc(this.props.code.toString())
    .get().then(function(doc) {
        if (doc.exists) {
            players = doc.data().players

            let result = self.alreadyTaken(players)
            
            if (result === 'Log In') {
              // console.log('log back in')
              self.setState({transition: true})
              return

            } else if (result === 'Already Taken') {
              // console.log('alreday taken')

              // Error Message
              self.setState({visible1: true})

              return
            } else {
              // console.log('new player')

            }

            let tmp = {name: self.state.name, password: self.state.password}

            players.push(tmp);
  
              db.collection("games").doc(self.props.code.toString()).update({
                players: players
              })
              .then(function() {
                  self.setState({transition: true})
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

  updatePassword = (ev) => {
    this.setState({password: ev.target.value})
  }

  render() {

    if (this.state.transition) {
      return <Redirect to={`/ToHell/Lobby/${this.props.code}/${this.state.name}`}/>
    }

    return (

      <div className="App">
        <header className="App-header">
          
          <p style={{fontSize: "2em"}}>
                Game Code: {this.props.code}
          </p>

          { this.state.visible ? <p style={{fontSize: '0.8em'}}>Please enter your name for the game!</p> : null  }
          { this.state.visible1 ? <p style={{fontSize: '0.8em'}}>That name is already taken!</p> : null  }

            
          <MDBInput onChange={this.updateName} name='gameCode' style={{color: "whitesmoke"}} label="Name" />

          <MDBInput onChange={this.updatePassword} name='gameCode' style={{color: "whitesmoke"}} label="Short Password" />


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
