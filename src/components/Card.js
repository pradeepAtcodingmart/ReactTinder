import React, { Component } from 'react';
import {Card,CardTitle ,Col,Button,Modal} from 'react-materialize';
import AddUser from './AddUser';


export default class UserCard extends Component {
    constructor(){
        super();
            this.state={
                likes:0
        }
    }
    componentWillMount(){
        let values=[...JSON.parse(localStorage.getItem("users"))];
        let likes=values[this.props.index].like;
        if(likes==null)
        {
            likes=0;
        }
        this.setState({likes:likes});
    }
    //Function for deleting the particlar user
    deleteData=(index)=>{
        let values=JSON.parse(localStorage.getItem("users"));
            values.splice(index, 1);     
                        localStorage.setItem("users",JSON.stringify(values));
                        window.location.reload(); 
    
    }
    handleLike=()=>{
        let values=[...JSON.parse(localStorage.getItem("users"))];
        if(values[this.props.index].like==null)
        values[this.props.index].like=1;
        else{
        values[this.props.index].like=values[this.props.index].like+1;
        }
        // console.log(values[this.props.index].like);
        localStorage.setItem("users",JSON.stringify(values));
        this.setState({
            likes:values[this.props.index].like
        })
    }
    render() {
        let { userData } = this.props
        return (
            <div>
                    <Col s={12} m={4}>
                    <Card className='small hoverable'
                        header={<CardTitle image={this.props.userData.PhotoUrl}>{this.props.viewer?null:<AddUser index={this.props.index} userData={this.props.userData}/>}</CardTitle>}
                        actions={[ 
                            <h6>{this.props.userData.Name}</h6>, 
                            this.props.viewer?null:<Button waves='purple' className="red" key={this.props.index} onClick={()=>this.deleteData(this.props.index)} tooltip="delete the user">Delete</Button>
                            ,
                            <i onClick={()=>this.handleLike()} style={{marginLeft:"70%",overflow:"auto"}} className="material-icons orange600">favorite_border</i>, <span>{this.state.likes}</span>
                        ]}>
                   </Card>
                    <Modal
                    className="pink card-small  "
                        fixedFooter
                        trigger={<i className="material-icons orange600">info</i>}>
                    <div>
                    <div className="container">
                          <Col m={6} s={12}>
                              <div className="card-image">
                              <img src={this.props.userData.PhotoUrl} width="30%" alt=""/>
                              </div>
                              <Card className='hoverable card-small'>
                              Name:{ this.props.userData.Name}
                              </Card>
                              <Card className='hoverable'>
                              Age:{ this.props.userData.Age}<br/>
                              </Card>   
                              <Card className='hoverable'>
                              City:{ this.props.userData.City}<br/>
                              </Card>
                              <Card className='hoverable'>
                              Work:{ this.props.userData.Work}<br/>
                              </Card>
                              <Card className='hoverable'>
                              About:{ this.props.userData.Name}<br/>
                              </Card>
                           </Col> 
                    </div>  
                    </div>
           </Modal>
                           
                    </Col>
          </div>
        );
    }
}
