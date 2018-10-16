import React, { Component } from 'react';
import Swipeable from "react-swipy";
import CardSwipe from "./components/CardSwipe";
import UserCard from './components/Card';
import {Toast, Card} from 'react-materialize';
const appStyles = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    overflow: "hidden"
  };
  
  const wrapperStyles = { position: "relative", width: "250px", height: "250px" };
  const actionsStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 12
  };
  
  export default class Swipe extends Component {
    state = {
        cards: [],
        index:0,
        checkSwipe:false,
        cardIndex:0
    };
    componentWillMount(){
      //Retrive the data from localstorage 
        const users=JSON.parse(localStorage.getItem("users"));
        //putting the all user data cards 
        const cards=users.map((user, i) => 
        (<UserCard
        key = {i} userData = {user}  
        index={i}  viewer={true}/>
        ))
        console.log(cards);
        this.setState({
          cards:cards
        });
        
        
    }
  
    remove = () =>{
         this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));
    }
    swipe = (e) =>{
      const index=this.state.cardIndex;
      
      if(e==="right")
      {
        window.Materialize.toast("Liked", 1500,'teal rounded');
        let values=[...JSON.parse(localStorage.getItem("users"))];
        values[index].like=values[index].like+1;
        localStorage.setItem("users",JSON.stringify(values));
        this.setState({
          cardIndex:this.state.cardIndex+1
        })
      }
      else{
        window.Materialize.toast("DisLike", 1500,'red rounded');
      }
    }
    render() {
      const { cards } = this.state;
  
      return (
        <div style={appStyles}>
          <div style={wrapperStyles}>
            {cards.length > 0 && (
              <div style={wrapperStyles}>
                  
                <Swipeable
                  buttons={({ right, left }) => (
                    <div style={actionsStyles}>
                    </div>
                  )}
                  
                  onSwipe={this.swipe}
                  onAfterSwipe={this.remove}
                >
                {/* <div style={{border:'2px solid black',height:'12  0%'}}> */}
                  <CardSwipe>{cards[0]}</CardSwipe>
                  {/* </div> */}
                </Swipeable>
                {cards.length > 1 && <CardSwipe zIndex={-2}>{cards[1]}</CardSwipe>}
              </div>
            )}
            {/* {cards.length <= 1 && <CardSwipe zIndex={-2}>No more Users</CardSwipe>} */}
          </div>
        </div>
      );
    }
  }