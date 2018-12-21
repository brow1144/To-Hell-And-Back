import React, { Component } from 'react';
import './App.css';
import {db} from './base.js';

import { NavLink, Redirect} from 'react-router-dom'

import { FormInline, Button, MDBInput } from 'mdbreact';

class Home extends Component {

  constructor() {
    super();

    this.state = {
      code: 0, 
      visible: false,
    }
  }

  handleJoin = (ev) => {
    ev.preventDefault()

    this.checkGame(ev.target.gameCode.value)
  }

  checkGame = (code) => {
    let self = this
    var docRef = db.collection("games").doc(code);

    docRef.get().then(function(doc) {
        if (doc.exists) {
          self.setState({code: code})
        } else {
          self.setState({visible: true})
        }
    })
    
  }


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

          { this.state.visible ? <p style={{color: 'yellow', fontSize: '0.8em'}}>Game code does not exist</p> : null  }
      

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
