import React from 'react';
import './Signup.css';


 const Signup = (props) => { 
    return (
        <div className="signup">
         <h1> {props.field}</h1>
         <input type={props.type} onChange={props.changed} onClick={props.click}/> 
        </div>
       
    );

}
export default Signup;


 
 