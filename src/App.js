
import React,{Component} from 'react';
import Signup from './Signup.js';
import SignIn from './SignIn.js';
import { Dashboard ,Navbar} from './Dashboard.js';
// import {Messagesignup} from './Signup';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

class App extends Component {
render(){
  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <div>
          <Switch>
            <Route path="/"  component={Dashboard}  ></Route>
          </Switch>
        </div>
        <div >
         <Switch>
           <Route path="/Signup">
             <Signup/>
           </Route>
         </Switch>
        </div>
        <div >
          <Switch>
            <Route path="/SignIn">
            <SignIn/>
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}}

export default App;
