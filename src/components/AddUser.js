import React, { Component } from 'react';
import {Button ,Modal } from 'react-materialize';
import Form from '../components/Form';
class AddUser extends Component {
  constructor(){
    super()
    {
      this.state={
        userData:{}
      }
    }
  }
  userDataHandler=()=>{
    this.setState({userData:this.props.userData});
  }
    render() {
      return (
        <div className="App">
            {/* Modal for Getting the user info or Edit the info  */}
                    <Modal
                    className="white"
                        trigger={
                        <Button floating large={this.props.index>=0?false:true}
                        onClick={this.userDataHandler} 
                        className={this.props.index>=0?"pink":"yellow"} 
                        waves='light' icon={this.props.index>=0?"edit":"add"} 
                        tooltip={this.props.index>=0?"Edit your Info":"Add New User"} />}>
                    <div>
                      
                    <Form index={this.props.index} userData={this.props.userData}/>
                    </div>
            </Modal>
        </div>
      );
    }
  }
  
  export default AddUser;