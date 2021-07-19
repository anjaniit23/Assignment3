import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export const Navbar =() =>{
    return( <div className="navbar">
        <span className="dashboardlink"><Link to="/dashboard" >Dashboard</Link></span>
        <span className="signuplink"><Link to="/signup">Sign-Up</Link></span>
        <span className="signinlink"><Link to="/signin">Sign-In</Link></span>
     </div>);
 }
 export const Textinput = (props) =>{
 
    return(
        <div >
           <div className="posttitle" ><p className="headingtext">Enter Your Post</p>
                 <div className="postfields"> Username:&nbsp;<input type="text" value={props.username}  onChange={props.setusername}/><br/>
                 Post:&emsp;&emsp;&nbsp;&nbsp; <input type="text" value={props.postcontent}  onChange={props.setpostcontent}/><br/>
                  &emsp;&emsp;&emsp;&emsp;<button  onClick={props.textstored}>{props.btn}</button>
                  </div>
           </div>
        </div>
    ); 
 }
 
 export const Showtext = (props) =>{
     return(
         <div className="post">
                 <div className="upper"><p className="postusername">{props.username}</p>
                      <div className="editbutton"><div className="edit" onClick={props.edit}>&#9874;</div>
                      <div className="delete" onClick={props.delete} >&#9760;</div>
                      </div>
                </div>
                 <p className="postcontent">{props.postcontent}</p>
                 <div class="count">
                      <div className="imglike"><img  onClick={props.clicklike} src="https://th.bing.com/th?q=Like+Emoticon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.56&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247 " alt="Like" width="25%" height="100%"/>&nbsp;&nbsp;
                         <p className="textlike">{props.likecnt}</p>
                      </div>
                      <div className="imgdislike">
                         <img onClick={props.clickdislike} src="https://www.bing.com/th?id=OIP.aIlJZec72YFowfKKQBiN8gHaHa&w=96&h=95&c=8&rs=1&qlt=90&o=6&dpr=1.56&pid=3.1&rm=2" alt="Dislike" width="25%" height="100%"/>
                         <p className="textdislike">{props.dislikecnt}</p>
                      </div>
                 </div>
         </div>
     );
 }
 
 export const Message = (props) => {
     return (
         <div>
             <p>{props.message}</p>
         </div>
         
     );
 }
 
export class Dashboard extends Component {
state={
    arrayvalue:["name"],
    editpostindex:null,
    inputvalue:[],// input values for signup
    newinputusername:'',newinputtext:'',
    inputpostcontent:[],inputusername:[],
    message:[' ','Post added successfully!','Post Edited !','Post Deleted!!','Some Field is kept empty,Fillup each field'],messageindex:0,
    like:[],dislike:[],likecnt:0,btn:'Submit'
    

}
editpost = (index) =>{
  this.setState({editpostindex:index});
  this.setState({newinputusername:this.state.inputusername[index]});
  this.setState({newinputtext:this.state.inputpostcontent[index]});
  this.setState({btn:'edit'});
}
deletepost = (index) => {
 const inputusername = this.state.inputusername;
 const inputpostcontent = this.state.inputpostcontent;
 inputpostcontent.splice(index,1);
 inputusername.splice(index,1);
 this.setState({inputusername:inputusername});
 this.setState({inputpostcontent:inputpostcontent});
 this.setState({messageindex:3});
 this.setState({newinputusername:''});
 this.setState({newinputtext:''});
 setTimeout(() => {
    this.setState({messageindex:0});
 }, 2000);

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

username = (e) =>{

 if(this.state.editpostindex===null){
 this.setState({newinputusername:e.target.value});
 console.log(this.state.newinputusername);
  
}
}
postcontent = (e) =>{
 this.setState({newinputtext:e.target.value});

}
poststored = (e) =>{
 e.preventDefault();
if(this.state.newinputusername===''|| this.state.newinputtext===''){
   this.setState({messageindex:4});
   setTimeout(() => {
    this.setState({messageindex:0});
 }, 2000);

   console.log("coulfot")
 }
else if(this.state.editpostindex===null&&(this.state.newinputusername!==''||this.state.newinputtext!=='')){   
 this.state.inputusername.push(this.state.newinputusername);
 this.state.inputpostcontent.push(this.state.newinputtext);
 this.state.like.push(0);
 this.state.dislike.push(0); 
 this.setState({newinputusername:''});
 this.setState({newinputtext:''});
 this.setState({messageindex:1});
 console.log("reaching");
 setTimeout(() => {
    this.setState({messageindex:0});
 }, 2000);

}
else{
  
  const editedinputpostcontent=this.state.newinputtext;
  this.state.inputpostcontent.splice(this.state.editpostindex,1,editedinputpostcontent);
  this.setState({editpostindex:null});
  
   this.setState({btn:'submit'});
   this.setState({messageindex:2});
   setTimeout(() => {
    this.setState({messageindex:0});
 }, 2000);
}

}
render(){
   
    let textinput=null;
    
    if((this.state.inputpostcontent.length !==0)){                                        // for showing posts
      textinput=(
        <div>
          {this.state.inputpostcontent.map(( e,index) =>{return (
                                                            <div>
                                                            <div className="postgap"></div>
                                                            <Showtext 
                                                             key={index}
                                                             username={this.state.inputusername[index]}
                                                             postcontent={this.state.inputpostcontent[index]} 
                                                             clicklike={this.clicklike.bind(this,index)}
                                                             clickdislike={this.clickdislike.bind(this,index)} 
                                                             likecnt={this.state.like[index]} 
                                                             dislikecnt={this.state.dislike[index]}
                                                             edit={this.editpost.bind(this,index)}
                                                             delete={this.deletepost.bind(this,index)} />
                                                             </div>);
                                                             })}
        
        </div> 
               );
    }
      return(
          <div>
           <div className="messagedashboard"><Message message={this.state.message[this.state.messageindex]}/></div>
            <Textinput username={this.state.newinputusername} setusername={this.username} postcontent={this.state.newinputtext} setpostcontent={this.postcontent} textstored={this.poststored} btn={this.state.btn} />
            {textinput}
          </div>

      );

}}
