import React from 'react';
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Row } from 'react-materialize';
import UserCard from './components/Card';

  class ListItem extends React.Component {
     
        render() {
            let content = "";
            
            switch (this.props.item.type) {
                case 'appNote': 
                     content = 
                     <mobiscroll.Card> 
                         
                         <Row> 
                             {/* <h1>{this.state.users[0].Name
                            }</h1> */}
                                {/* {this.state.users.map((user, i) => <UserCard
                                key = {i} userData = {user}  
                                index={i}  />
                                )}
                */}
                         </Row>
                        {/* <mobiscroll.CardContent>
                            <mobiscroll.Avatar src={this.props.item.img} />
                            <mobiscroll.CardTitle>{this.props.item.title}</mobiscroll.CardTitle>
                            <mobiscroll.CardSubtitle>{this.props.item.text}</mobiscroll.CardSubtitle>
                        </mobiscroll.CardContent>
                    </mobiscroll.Card> 
                    break;
                case 'reminder': 
                     content = 
                     <mobiscroll.Card> 
                         <mobiscroll.CardHeader>
                            <mobiscroll.CardTitle>{this.props.item.title}</mobiscroll.CardTitle>
                         </mobiscroll.CardHeader>
                        <mobiscroll.CardContent>
                            {this.props.item.text}
                        </mobiscroll.CardContent>
                         */}
                    </mobiscroll.Card> 
                    break;
            }
            
            return <li> {content} </li>;
        }
    }
    
    export default class ListviewDemo extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                    items: [{
                    title: 'Netflix',
                    text: 'Sherlock Series 3 is now avalable on Netflix',
                    img: 'https://img.mobiscroll.com/demos/netflix.png',
                    type: 'appNote',
                    id: 1
                }, {
                    title: 'Angry birds',
                    text: 'Dont forget your daily Arena entry.',
                    img: 'https://img.mobiscroll.com/demos/angrybirds.png',
                    type: 'appNote',
                    id: 2
                }, {
                    title: 'Today is Jenifer\'s birthday',
                    text: 'Don\'t forget she is turning 25!!!',
                    img: 'https://img.mobiscroll.com/demos/opencam.png',
                    type: 'reminder',
                    id: 3
                }, {
                    title: 'Candycam',
                    text: 'A new update is available!',
                    img: 'https://img.mobiscroll.com/demos/candycam.png',
                    type: 'appNote',
                    id: 4
                }, {
                    title: 'Subway Surf',
                    text: 'Is it your lucky day? 24-Hour Mega Jackpint Event happening right now!',
                    img: 'https://img.mobiscroll.com/demos/subwaysurf.png',
                    type: 'appNote',
                    id: 5
                }, {
                    title: 'Mobiscroll',
                    text: 'The new Mobiscroll 4.0.0 is out!',
                    img: 'https://img.mobiscroll.com/demos/mbsc-logo.png',
                    type: 'appNote',
                    id: 6
                }, {
                    title: 'Open Camera',
                    text: 'A new update is available!',
                    img: 'https://img.mobiscroll.com/demos/opencam.png',
                    type: 'appNote',
                    id: 7
                }],
                users:[]
            };
        }
        componentWillMount(){
            const values=JSON.parse(localStorage.getItem("users"));
            this.setState({
              users:values
            });
            console.log(values);
            console.log(this.state.users);
            }
        stages = () => {
            var ids = 6;
            
            return [{
                    percent: -20,
                    action: (event, inst) => {
                        inst.remove(event.target);
                        return false;
                    }
                }, {
                    percent: 20,
                    action: (event, inst) => {
                        inst.remove(event.target);
                        return false;
                    }
                }]
        }
        
        render() {
            return (
                <div>
                    <mobiscroll.Note color="primary"></mobiscroll.Note>
                    <mobiscroll.Listview
                         className="mbsc-card-list"
                        theme="ios"  // Specify theme like: theme="ios" or omit setting to use default
                        lang="en"    // Specify language like: lang="pl" or omit setting to use default
                        itemType={ListItem} 
                        data={this.state.items}
                        stages={this.stages()}
                    />
            </div>
            );
        }
    }
