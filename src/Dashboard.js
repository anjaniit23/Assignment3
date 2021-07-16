import React from 'react';
import './Dashboard.css';


export const Textinput = (props) =>{

   return(
       <div className="heading">
         
          <div className="posttitle" ><p className="headingtext">Type the Text_Input below</p>uername:&nbsp;
            
                 <input type="text"   onChange={props.username}/><br/>Post:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <input type="textbox"  onChange={props.post}/>
                 <button  onClick={props.textstored}>Submit</button>
               
          </div>
       </div>
   ); 
}

export const Showtext = (props) =>{
    return(
        <div className="post">
            <div>
                <div className="upper"><p className="postusername">{props.username}</p>
                     <div className="editbutton"><button onClick={props.edit} type="button">edit</button>&nbsp;&nbsp;&nbsp;
                     <button onClick={props.delete} type="button">delete</button></div></div>
                <p className="postcontent">{props.postcontent}</p>
                <div><div className="imglike"><img  onClick={props.clicklike} src="https://th.bing.com/th?q=Like+Emoticon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.56&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247 " alt="Like" width="25%" height="100%"/>&nbsp;&nbsp;
                        <p className="textlike">{props.likecnt}</p></div><div className="imgdislike">
                        <img onClick={props.clickdislike} src="https://www.bing.com/th?id=OIP.aIlJZec72YFowfKKQBiN8gHaHa&w=96&h=95&c=8&rs=1&qlt=90&o=6&dpr=1.56&pid=3.1&rm=2" alt="Dislike" width="25%" height="100%"/>
                        <p className="textdislike">{props.dislikecnt}</p></div></div>
            </div> 
        </div>
    );
}

export const Message = () => {
    return (
        <div className="dashboard">
            <p>Item has been added </p>
        </div>
        
    );
}
