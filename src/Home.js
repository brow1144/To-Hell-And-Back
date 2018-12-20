import React, { Component } from 'react';
import './App.css';
import {db} from './base.js';

import { NavLink, Redirect} from 'react-router-dom'

import { FormInline, Button, MDBInput } from 'mdbreact';

class Home extends Component {

  constructor() {
    super();

    this.state = {
      code: 0
    }
  }

  handleJoin = (ev) => {
    ev.preventDefault()

    console.log(ev.target.gameCode.value)
    this.setState({code: ev.target.gameCode.value})
    // this.checkGame(ev.target.gameCode.value)
  }

  // checkGame = (code) => {
  //   var docRef = db.collection("games").doc(code);

  //   docRef.get().then(function(doc) {
  //       if (doc.exists) {
  //           console.log("Document data:", doc.data());
  //       } else {
  //           console.log("No such document!");
  //       }
  //   })
    
  // }


  render() {

    if (this.state.code !== null && this.state.code !== 0 && this.state.code !== undefined) {
      return <Redirect to={`/ToHell/Join/${this.state.code}`}/>
    }

    return (
      <div className="App">
        <header className="App-header">
          <p style={{fontSize: "2em"}}>
            To Hell and Back!
          </p>
      

          <FormInline onSubmit={this.handleJoin} className="md-form m-0">
        
            <MDBInput type="number" name='gameCode' style={{color: "whitesmoke"}} label="Game Code" />
            
              <Button
                outline
                color="white"
                size="sm"
                type="submit"
                className="mr-auto"
              >
                Search
              </Button>

          </FormInline>

          <NavLink style={{textDecoration: 'none'}} to={`/ToHell/CreateGame`}>
            <div style={{cursor: 'pointer'}} className='sideHover'>
              <h6 style={{paddingTop: "3em", fontSize: '0.7em'}}>Create Game</h6>
            </div>
          </NavLink>
        
        </header>
      </div>

    );
  }
}

export default Home;
