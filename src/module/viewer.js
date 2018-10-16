import React, { Component } from 'react';
import NavBar from '../components/Nav';
import Swipe from '../Swipe';
import {Chip} from 'react-materialize';

class Viewer extends Component {
    render() {
      return (
        <div className="App">
        <br/>
        <Chip>
          Swipe left/Right to next user 
        </Chip>
        {/* Swiper cards */}
        <Swipe/>
        </div>
      );
    }
  }
  
  export default Viewer;