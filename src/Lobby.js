import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'
// import {db} from './base.js';
import {Row, Col} from 'reactstrap'
import {Button} from 'mdbreact'

class Lobby extends Component {

  render() {
    return (

      <div className="App">

        <p style={{margin: '0', fontSize: '2.5em', 
                  backgroundColor: '#282c34', color: "whitesmoke", 
                  paddingTop: '2em'}}
        >
          Join at Code: 13424
        </p>

        <div style={{backgroundColor: '#282c34', color: 'whitesmoke',
                      paddingTop: '5em', }}>
          <Row>
            <Col sm='3'>
              <p>Lobby!</p>
            </Col>  
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
            <Col sm='3'>
              <p>Lobby!</p>
            </Col> 
          </Row>

          <p style={{height: '5em'}}> </p>

          <NavLink style={{textDecoration: 'none'}} to={`/ToHell/Game/`}>
            <Button
                outline
                color="primary"
                
            >
                Start!
            </Button>
          </NavLink>

          </div>

      </div>

    );
  }
}

export default Lobby;
