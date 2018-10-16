import React, { Component } from 'react';
import './App.css';
import Admin from './module/Admin';
import Viewer from './module/viewer';
import Button from './components/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Root from "./Root";

class App extends Component {
  constructor(){
    super();
    this.state={
      check:true
    }
    
  }
  handle=()=>{
    this.setState(
      {
        check:!this.state.check
      }
    );
  }
  render() {
    return (
      <Router>
        <Root/>
      </Router>
      // <div className="App">
      // {/* Button for move to Admin or Viewer */}
      //  <Button onClick={this.handle}>{this.state.check?"Viewer":"Admin"}</Button>
      //  {this.state.check?<Admin/>:<Viewer/>}
      
      // </div>
    );
  }
}

export default App;
