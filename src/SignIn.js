  
import React from 'react';
import './Signup.css';


  
const Signin = () => {
      let inputsigninemail=null;
      let inputsigninpassword=null;
    const verificationSignIn = () =>{
        if((inputsigninemail===null)||(inputsigninpassword===null)){
          alert("Do not leave any field Empty");
        }
        else{
           alert("signed In successfully");
        }
       
      } 
      const  Inputsigninemail = (e) =>{
        inputsigninemail=e.target.value;
      }
      const  Inputsigninpassword = (e) =>{
        inputsigninpassword=e.target.value;
      }
        return (
                <div> 
                  <div className="message"></div>
                  <form onSubmit={verificationSignIn}>
                   <div className="signin">
                       <div className="textsignin"><span >Enter Email Add.</span><input className="inputboxsignin" type="email" onChange={Inputsigninemail} /></div>
                       <div className="textsignin"><span >Enter Password</span><input className="inputboxsignin" type="password" pattern=".{8,}" title="Should contain 8 or more chars" onChange={Inputsigninpassword} /> </div> 
                       <div className="btnsignin"><input type="submit" /></div>
                    </div>
            
                
                </form>
               </div>
        );
        }
            


export default Signin;
