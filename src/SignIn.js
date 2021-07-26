  
import React from 'react';
// import { findAllInRenderedTree } from 'react-dom/test-utils';
import './Signup.css';


  
const Signin = () => {

        return (
                <div> 
                  <div className="message"></div>
                  <form onSubmit={alert("Signed In successfully!")}>
                   <div className="signin">
                       <div className="textsignin"><span >Enter Email Add.</span><input className="inputboxsignin" type="email"  required /></div>
                       <div className="textsignin"><span >Enter Password</span><input className="inputboxsignin" type="password" pattern=".{8,}" title="Should contain 8 or more chars"  required /> </div> 
                       <div className="btnsignin"><input type="submit" /></div>
                  </div> 
                  </form>
               </div>
        );
        }
            


export default Signin;
