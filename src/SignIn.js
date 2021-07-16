import React from 'react';
import './Signup.css';


const signIn = (props) => {
    return (
            <div className="App"> 
            <form onSubmit={props.verify}>
               <h1>Enter Email Add.</h1>
               <input type="email" onChange={props.email} />
               <h1>Enter Password</h1>
               <input type="password"onChange={props.password} /><br/>
               <button type="submit">Submit</button>
            </form>   
           </div>
    );
}

export default signIn;