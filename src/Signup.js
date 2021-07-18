import React ,{Component} from 'react';
import './Signup.css';


 class Signup extends Component  { 
     state={
           
     messagesignup:['','Signed-Up Successfully',"Do not leave any field 'Empty'","Password and Confirm Password doesn't match","Use '@' in Email-Id"],
     messagesignupindex:0,
     arrayFieldinput:[' ',' ',' ','','']
     }
 render(){

    const pushinginputtyped = (field,index)=>{
    
       this.state.arrayFieldinput.splice(index,1,document.getElementById(field).value);
    }  
    const Checking=()=> {
       if(this.state.arrayFieldinput[3]!==this.state.arrayFieldinput[4]){
           this.setState({messagesignupindex:3});
           setTimeout(() => {this.setState({messagesignupindex:0});}, 2000);
           console.log(this.state.messagesignupindex);
           console.log("hello");
       }
        else if(document.getElementById("Name").value===' '|| document.getElementById("Email-Id").value===' '|| document.getElementById("Phone number").value===' '||document.getElementById("Password").value===''||document.getElementById("Confirm Password").value===''){
            this.setState({messagesignupindex:2});
            setTimeout(() => {this.setState({messagesignupindex:0});}, 2000);
            console.log(this.state.messagesignupindex);
            console.log("hello 2nd");

       }
       else if(document.getElementById("Email-Id").value.search("@")===-1){
            this.setState({messagesignupindex:4});
            setTimeout(() => {this.setState({messagesignupindex:0});}, 2000);
            console.log(this.state.messagesignupindex);
            console.log("hello emailnd");

       }
        else{
            this.setState({messagesignupindex:1});
            setTimeout(() => {this.setState({messagesignupindex:0});}, 2000);
            document.getElementById("Name").value=' '; document.getElementById("Email-Id").value=' ';document.getElementById("Phone number").value=' ';
            document.getElementById("Password").value='';document.getElementById("Confirm Password").value='';
            console.log(this.state.messagesignupindex);
            console.log("hello 3rd");

    
        }}
    return (
        <div>
         <div className="message">{this.state.messagesignup[this.state.messagesignupindex]}</div>
         <div className="signup">
         <p className="text">Name  </p>
         <div className="inputbox">:&nbsp;<input id="Name" type="text" onChange={()=>{pushinginputtyped("Name",0)}}/> </div>
         <p className="text">Email-Id </p>
         <div className="inputbox">:&nbsp;<input id="Email-Id" type="email"  onChange={()=>{pushinginputtyped("Email-Id",1)}}/> </div>
         <p className="text">Phone number </p>
         <div className="inputbox">:&nbsp;<input id="Phone number"  type="number" onChange={()=>{pushinginputtyped("Phone number",2)}}/> </div>
         <p className="text">Password </p>
         <div className="inputbox">:&nbsp;<input id="Password"  type="password"  onChange={()=>{pushinginputtyped("Password",3)}}/> </div>
         <p className="text">Confirm Password </p>
         <div className="inputbox">:&nbsp;<input  id="Confirm Password" type="password" onChange={()=>{pushinginputtyped("Confirm Password",4)}}/> </div>
         </div>
         <div className="btnsignup" ><button  onClick={Checking}>Submit</button></div>
        </div>
       
    );
    }
}
export default Signup;


 
 