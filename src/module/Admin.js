import React, { Component } from 'react';
import '../App.css';
import NavBar from '../components/Nav';
import {Card,Row} from 'react-materialize';
import UserCard from '../components/Card';
import AddUser from '../components/AddUser';

class Admin extends Component {
    constructor(){
      super();
      this.state={
        users:[]
      }
    }
    componentWillMount(){
      if(localStorage.getItem("users")===null)
      {
        const users=[];
        localStorage.setItem("users",JSON.stringify(users));
      }
      else{
        const values=JSON.parse(localStorage.getItem("users"));
        this.setState({
          users:values
        });
      }
    }
    changeData=(index)=>{
      const person={
          ...this.state.users[index]
      }
      this.setState({
          person:person
      });
      this.setState({
        index:index
    });
    this.setState({
        checkEdit:true
    });
  }

  
  render() {
    return (
      <div className="App">
    <div className="container">
      <Card className='hoverable'>
      <center><h5 className="pink" style={{color:'white'}}>USERS</h5></center>
      <Row> {this.state.users.map((user, i) => <UserCard
                 key={i} userData = {user}  
                 index={i}  />
                 )}
               
      </Row>
    
      
      </Card>
      </div>
     
      </div>
    );
  }
}

export default Admin;