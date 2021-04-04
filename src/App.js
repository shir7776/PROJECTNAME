import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch,  Redirect} from 'react-router-dom';
import LoginModal from "react-login-modal";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./homePage";
import AddGiver from "./addGiver";
import UpdateGiver from "./updateGiver";
import GiveConfirmation from "./giveConfirmation";
import Statistics from "./statistics";
import Blog from "./blog";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      login:this.login,
      currpage:<div>hello</div>
    }
  }
  handleSignup = (username, email, password) => {};
  handleLogin = (username, password) => {}
  on=()=>{
    this.setState(
      {currpage:Customers}
    )
  }
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return ( 
      // <LoginModal
      //       handleSignup={this.handleSignup}
      //       handleLogin={this.handleLogin}
      //     />
      <HashRouter>
        <div>
            <h1>Simple SPA</h1>
            <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/addGiver">Add Giver</NavLink></li>
            <li><NavLink to="/updateGiver">Update Giver</NavLink></li>
            <li><NavLink to="/giveConfirmation">Give Confirmation</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/addGiver" component={AddGiver}/>
            <Route path="/updateGiver" component={UpdateGiver}/>
            <Route path="/giveConfirmation" component={GiveConfirmation}/>
            <Route path="/statistics" component={Statistics}/>
            <Route path="/blog" component={Blog}/>
          </div>
          </div>
        </HashRouter>
    );
  }
}

export default App;
