import React ,{Component} from 'react';
import './Signup.css';


 class Signup extends Component  { 
     state={
           
     messagesignup:['','Signed-Up Successfully',"Do not leave any field 'Empty'","Password and Confirm Password don't match","Use '@' in Email-Id"],
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
         <div className="text">
         <span>Name  </span>
         <div className="inputbox">:<input id="Name" type="text" onChange={()=>{pushinginputtyped("Name",0)}}/> </div>
         </div>
         <div className="text">
         <span >Email-Id </span>
         <div className="inputbox">:<input id="Email-Id" type="email"  onChange={()=>{pushinginputtyped("Email-Id",1)}}/> </div>
         </div>
         <div className="text">
         <span>Phone number </span>
         <div className="inputbox">:<input id="Phone number" pattern=".{10,}" type="number" onChange={()=>{pushinginputtyped("Phone number",2)}}/> </div>
         </div>
         <div className="text">
         <span>Password </span>
         <div className="inputbox">:<input id="Password"  type="password"  onChange={()=>{pushinginputtyped("Password",3)}}/> </div>
         </div>
         <div className="text">
         <span >Confirm Password </span>
         <div className="inputbox">:&nbsp;<input  id="Confirm Password" type="password" onChange={()=>{pushinginputtyped("Confirm Password",4)}}/> </div>
         </div>
         <div  ><button className="btnsignup" onClick={Checking}>Submit</button></div>
         </div>
         
        </div>
       
    );
    }
}
export default Signup;

