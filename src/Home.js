import React, { Component } from 'react';
import './App.css';
// import {firestore} from './base.js';

import { NavLink } from 'react-router-dom'

import { FormInline, Button, MDBInput } from 'mdbreact';

class Home extends Component {

  // constructor() {
  //   super();
  // }

  handleJoin = (ev) => {
    ev.preventDefault()

    console.log(ev.target.gameCode.value)

  }


  render() {
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
