
import React,{Component} from 'react';
import Signup from './Signup.js';
import SignIn from './SignIn.js';
import './App.css';
import  {Textinput,Showtext,Message} from './Dashboard';

class App extends Component {
  
  state={
       arrayvalue:["name"],
       arrayFields:["Email Id","Name","Phone no.","Password","Confirm Password"],
       arrayFieldstype:["email","text","number","password","password"],
       Signupdetails:false,
       SignIndetails:false,editpostindex:null,
       inputsigninemail:null,inputsigninpassword:null,
       inputvalue:[],// input values for signup
       inputvaluelength:5,
       inputpostcontent:[],inputusername:[],
       message:0,newinputtext:null,
       like:[],dislike:[],likecnt:0
       

  }
  editpost = (index) =>{
     this.setState({editpostindex:index});
  }
  deletepost = (index) => {
    const inputusername = this.state.inputusername;
    const inputpostcontent = this.state.inputpostcontent;
    inputpostcontent.splice(index,1);
    inputusername.splice(index,1);
    this.setState({inputusername:inputusername});
    this.setState({inputpostcontent:inputpostcontent});
    console.log(this.state.inputusername);
    console.log(this.state.inputpostcontent);
  }
  clicklike =(index)=>{
    let newcnt=this.state.like[index]+1;
    this.state.like.splice(index,1,newcnt);
    this.setState({editpostindex:null});// just to use setstate for rerendering cgnages
    console.log(this.state.like);
  }
  clickdislike =(index)=>{
    let newcnt2=this.state.dislike[index]+1;
    this.state.dislike.splice(index,1,newcnt2);
    this.setState({editpostindex:null});// just to use setstate for rerendering cgnages
    console.log(this.state.dislike);
  }
  inputsigninemail = (e) =>{
    this.setState({inputsigninemail:e.target.value});
  }
  inputsigninpassword = (e) =>{
    this.setState({inputsigninpassword:e.target.value});
  }
  verificationSignIn = () =>{
    if((this.state.inputsigninemail===null)||(this.state.inputsigninpassword===null)){
      alert("Could not Sign-In");
    }
    else{
       alert("signed In successfully");
    }
   
  }
  verificationSignUp = () => {
    if((this.state.inputvalue[3]===this.state.inputvalue[4])&&(this.state.inputvalue.length===5)){
      alert("Signed Up successfully!!");
    }
    if(((this.state.inputvalue[3]!==this.state.inputvalue[4])&&(this.state.inputvalue.length===5))||this.state.inputvalue.length!==5){
      alert("Could not Sign-Up");
    }
    
  }
 
  showsignup = () => {
    if(this.state.inputvaluelength===5){
      alert('Note: it is made for one time use only .Do not use Cookies, enter "each Field" on you own and wait for Correct status untill the "submit" button is pressed');
      this.setState({inputvaluelength:1});
      
    }
    else if(this.state.inputvaluelength===0){
      this.state.inputvalue.shift();
    }
        const currentSignupdetails=this.state.Signupdetails;
        this.setState({Signupdetails:!currentSignupdetails});
    } 
    
  showsignIn = () => {
      const currentSignIndetails=this.state.SignIndetails;
      this.setState({SignIndetails:!currentSignIndetails});
  } 
  valuetyped = (e) => {
    this.setState({newinput:e.target.value});
  }
  valuestored =()=>{
    
    if(this.state.inputvalue.length<=this.state.inputvaluelength){
      this.state.inputvalue.push(this.state.newinput);
    }
    if(this.state.inputvalue.length===this.state.inputvaluelength+1){
        this.state.inputvalue.shift();
        this.setState({inputvaluelength:0});
        
    }
   
  }
  
  username = (e) =>{
   
    if(this.state.editpostindex===null){
    this.setState({message:0});
    this.setState({newinputusername:e.target.value});
    console.log(this.state.newinputusername);
     
  }
  
  }
  postcontent = (e) =>{
   
    if(this.state.editpostindex!==null){ // for differentiating between editing and creating a post
      
    this.setState({newinputtext:e.target.value});
  }
  else{
    this.setState({newinputtext:e.target.value});
    console.log(this.state.newinputtext);
}

  }
  poststored = () =>{
    if(this.state.editpostindex===null){   
    this.state.inputusername.push(this.state.newinputusername);
    this.state.inputpostcontent.push(this.state.newinputtext);
    this.state.like.push(0);
    this.state.dislike.push(0); 
    this.setState({message:1});
   
  }
   else{
     
     const editedinputpostcontent=this.state.newinputtext;
     this.state.inputpostcontent.splice(this.state.editpostindex,1,editedinputpostcontent);
     this.setState({editpostindex:null});
     };
    

   }

render(){
   
    let textinput=null;
    let detailsignup=null;
    let detailsignIn=null;
    
   
    if((this.state.inputpostcontent.length !==0)){                                        // for showing posts
      textinput=(
        <div>
          {this.state.inputpostcontent.map(( e,index) =>{return <Showtext 
                                                             key={index}
                                                             username={this.state.inputusername[index]}
                                                             postcontent={this.state.inputpostcontent[index]} 
                                                             clicklike={this.clicklike.bind(this,index)}
                                                             clickdislike={this.clickdislike.bind(this,index)} 
                                                             likecnt={this.state.like[index]} 
                                                             dislikecnt={this.state.dislike[index]}
                                                             edit={this.editpost.bind(this,index)}
                                                             delete={this.deletepost.bind(this,index)} /> })
                                                             }
        </div>
      );
    }
    if(this.state.Signupdetails){                                                    // for signup fields
        detailsignup=(
            <div>
              <form onSubmit={this.verificationSignUp} >
                {this.state.arrayFields.map((element,index) => {
                   return <Signup field={this.state.arrayFields[index]} type={this.state.arrayFieldstype[index]} changed={ this.valuetyped} click={this.valuestored}  key={index} />
                })}
                <button type="submit" onClick={this.valuestored}>Submit</button>
                </form>
            </div>

        );
            
        
    }
   
  if(this.state.SignIndetails){                                                   // for SignIn fields
            detailsignIn=(
              <div>
                <SignIn verify={this.verificationSignIn} email={this.inputsigninemail}  password={this.inputsigninpassword} />
              </div>
              
            );
    }


  return (
    <div className="App">
      {this.state.message?<Message/>:null}
      <Textinput  username={this.username}post={this.postcontent} textstored={this.poststored} />
      {textinput}
      <button type="button" onClick={this.showsignup} >Signup</button>
      {detailsignup}
      <button type="button" onClick={this.showsignIn} >SignIn</button>
      {detailsignIn}
      

    </div>
  );
}}

export default App;
