import React, { Component } from 'react';
import {Card,Row,Input,Col,Button} from 'react-materialize';
export default class Forms extends Component {
    //Getting user information
    constructor(){
         super();
                this.state={
                    users:[],
                    user:{
                    Name:"",
                    Age:"",
                    City:"",
                    Work:"",
                    PhotoUrl:"",
                    About:"",
                    like:0
                    }

                }
        }
        componentWillMount(){
             const users=[...JSON.parse(localStorage.getItem("users"))];
             const user={...users[this.props.index]};
             console.log(user);
             this.setState({user:user});
        }
        //Function handle the input box changing values
        inputHandler=(event)=>{
            const user={...this.state.user};
            user[event.target.name] = event.target.value
           this.setState({
             user:user
           }
           );
          }
          //function handle the values when user submit the information
          inputSubmit=(event)=>{
               const {user}= this.state;
            if(user.Name.length!==0 && user.Age.length!==0 && user.City.length!==0 && user.Work.length!==0 && user.About.length!==0)
                {
                    const values=JSON.parse(localStorage.getItem("users"));
                    values.push(user);
                    //After the submitting this function removes the values in the form
                    const userr={
                                Name:"",
                                Age:"",
                                City:"",
                                Work:"",
                                PhotoUrl:"",
                                About:"",
                                 }
                    this.setState({user:userr
                    });
                   localStorage.setItem("users",JSON.stringify(values));
                   this.setState({
                    users:values
                  });
                }
                else
                {
                    alert("Enter all input");
                }
         }
         //This function handle the file url
         fileHandler=(e)=>{
            const reader=new FileReader();
            const self = this;
            reader.onload=function(){
                self.state.user.PhotoUrl=reader.result;
            }
            reader.readAsDataURL(e.target.files[0]);
           
         }
         //This function  excecutes when the Admin Edit their Information 
         editData =(evt)=>{
            //  evt.preventDefault();
             const index=this.props.index;
            const user={...this.state.user};
            if(user.Name.length!==0 && user.Age.length!==0 && user.City.length!==0 && user.Work.length!==0  && user.About.length!==0)
                {
                    const users=[...JSON.parse(localStorage.getItem("users"))];
                    users[index]=this.state.user;
                    console.log(index);
                    this.setState({
                         user:users
                    });
                   localStorage.setItem("users",JSON.stringify(users));
        }
    }
    render() {
 return (
    // Form for getting the information for user
     
            <div>
                          <form>
                                <Input s={12} type="text" onChange={this.inputHandler} value={this.state.user.Name} label="Name"  name="Name"/>
                                <Input s={12} type="text" onChange={this.inputHandler} value={this.state.user.Age} label="Age"   name="Age"/>
                                <Input s={12} type="text" onChange={this.inputHandler} value={this.state.user.City} label="City"  name="City"/>
                                <Input s={12} type="text" onChange={this.inputHandler} value={this.state.user.Work} label="Work"  name="Work"/>
                                <Input s={12} className="small" type="file" id="i" onChange={this.fileHandler} label="Browse" accept="image/x-png,image/gif,image/jpeg"  name="PhotoUrl"/>
                                <Input s={12} type="text" onChange={this.inputHandler} value={this.state.user.About} label="About"  name="About"/>                                
                                <div>
                                {this.props.index>=0?null:<Button waves='green' className="blue" type="submit" onClick={this.inputSubmit} className="blue">Add</Button>}
                                {this.props.index>=0?<Button waves='purple' className="red" onClick={this.editData} >Update</Button>:null}
                                 </div>
                        </form>
          </div>
        );
    }
         }
