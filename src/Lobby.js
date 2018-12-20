import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'
import {db} from './base.js';
import {Row, Col} from 'reactstrap'
import {Button} from 'mdbreact'

class Lobby extends Component {

  constructor(props) {
    super(props)

    this.state = {
      players: [],
    }
  }

  componentWillMount = () => {
    let self = this

    db.collection("games").doc(this.props.code.toString())
    .onSnapshot(function(doc) {
        console.log(doc.data().players);
        self.setState({players: doc.data().players})
    });
  }

  render() {
    return (

      <div className="App">

        <p style={{margin: '0', fontSize: '2.5em', 
                  backgroundColor: '#282c34', color: "whitesmoke", 
                  paddingTop: '2em'}}
        >
          Join at Code: {this.props.code}
        </p>

        <div style={{backgroundColor: '#282c34', color: 'whitesmoke',
                      paddingTop: '5em', }}>
                      
          <Row>
          {this.state.players.map((key) => {
             return (
              <Col sm='3'>
                <p>{key}</p>
              </Col> 
                  
            )
          })}
  
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
