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
                       <p className="textsignin">Enter Email Add. :</p>
                      <input className="inputboxsignin" type="email" onChange={Inputsigninemail} />
                       <p className="textsignin">Enter Password &nbsp;&nbsp;:</p>
                      &nbsp; <input className="inputboxsignin" type="password" pattern=".{8,}" onChange={Inputsigninpassword} />  
                   </div>
                   <div className="btnsignin"><input type="submit" /></div>
                
                </form>
               </div>
        );
        }
            


export default Signin;



