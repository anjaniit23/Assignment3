(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,s){},25:function(e,t,s){},27:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(19),c=s.n(a),l=(s(25),s(8)),d=s(9),o=s(11),u=s(10),r=(s(18),s(0)),p=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={messagesignup:["","Signed-Up Successfully","Do not leave any field 'Empty'","Password and Confirm Password don't match","Use '@' in Email-Id"],messagesignupindex:0,arrayFieldinput:[" "," "," ","",""]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this,t=function(t,s){e.state.arrayFieldinput.splice(s,1,document.getElementById(t).value)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"message",children:this.state.messagesignup[this.state.messagesignupindex]}),Object(r.jsxs)("div",{className:"signup",children:[Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("span",{children:"Name  "}),Object(r.jsxs)("div",{className:"inputbox",children:[":",Object(r.jsx)("input",{id:"Name",type:"text",onChange:function(){t("Name",0)}})," "]})]}),Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("span",{children:"Email-Id "}),Object(r.jsxs)("div",{className:"inputbox",children:[":",Object(r.jsx)("input",{id:"Email-Id",type:"email",onChange:function(){t("Email-Id",1)}})," "]})]}),Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("span",{children:"Phone number "}),Object(r.jsxs)("div",{className:"inputbox",children:[":",Object(r.jsx)("input",{id:"Phone number",pattern:".{10,}",type:"number",onChange:function(){t("Phone number",2)}})," "]})]}),Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("span",{children:"Password "}),Object(r.jsxs)("div",{className:"inputbox",children:[":",Object(r.jsx)("input",{id:"Password",type:"password",onChange:function(){t("Password",3)}})," "]})]}),Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("span",{children:"Confirm Password "}),Object(r.jsxs)("div",{className:"inputbox",children:[":\xa0",Object(r.jsx)("input",{id:"Confirm Password",type:"password",onChange:function(){t("Confirm Password",4)}})," "]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btnsignup",onClick:function(){e.state.arrayFieldinput[3]!==e.state.arrayFieldinput[4]?(e.setState({messagesignupindex:3}),setTimeout((function(){e.setState({messagesignupindex:0})}),2e3),console.log(e.state.messagesignupindex),console.log("hello")):" "===document.getElementById("Name").value||" "===document.getElementById("Email-Id").value||" "===document.getElementById("Phone number").value||""===document.getElementById("Password").value||""===document.getElementById("Confirm Password").value?(e.setState({messagesignupindex:2}),setTimeout((function(){e.setState({messagesignupindex:0})}),2e3),console.log(e.state.messagesignupindex),console.log("hello 2nd")):-1===document.getElementById("Email-Id").value.search("@")?(e.setState({messagesignupindex:4}),setTimeout((function(){e.setState({messagesignupindex:0})}),2e3),console.log(e.state.messagesignupindex),console.log("hello emailnd")):(e.setState({messagesignupindex:1}),setTimeout((function(){e.setState({messagesignupindex:0})}),2e3),document.getElementById("Name").value=" ",document.getElementById("Email-Id").value=" ",document.getElementById("Phone number").value=" ",document.getElementById("Password").value="",document.getElementById("Confirm Password").value="",console.log(e.state.messagesignupindex),console.log("hello 3rd"))},children:"Submit"})})]})]})}}]),s}(n.Component),j=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"message"}),Object(r.jsx)("form",{action:"https://www.betterteam.com/i/thank-you-letter-to-employees-1024x512-20190212-1-1.jpg",children:Object(r.jsxs)("div",{className:"signin",children:[Object(r.jsxs)("div",{className:"textsignin",children:[Object(r.jsx)("span",{children:"Enter Email Add."}),Object(r.jsx)("input",{placeholder:"abc@xyz.com",className:"inputboxsignin",type:"email",required:!0})]}),Object(r.jsxs)("div",{className:"textsignin",children:[Object(r.jsx)("span",{children:"Enter Password"}),Object(r.jsx)("input",{placeholder:"password..",className:"inputboxsignin",type:"password",pattern:".{8,}",title:"Should contain 8 or more chars",required:!0})," "]}),Object(r.jsx)("div",{className:"btnsignin",children:Object(r.jsx)("input",{type:"submit"})})]})})]})},m=s(12),x=(s(27),function(){return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("span",{className:"dashboardlink",children:Object(r.jsx)(m.b,{to:"/dashboard",children:"Dashboard"})}),Object(r.jsx)("span",{className:"signuplink",children:Object(r.jsx)(m.b,{to:"/signup",children:"Sign-Up"})}),Object(r.jsx)("span",{className:"signinlink",children:Object(r.jsx)(m.b,{to:"/signin",children:"Sign-In"})})]})}),b=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"posttitle",children:[Object(r.jsx)("p",{className:"headingtext",children:"Enter Your Post"}),Object(r.jsxs)("div",{className:"postfields",children:[" Username:\xa0",Object(r.jsx)("input",{className:"inputbox",type:"text",value:e.username,onChange:e.setusername})]}),Object(r.jsxs)("div",{className:"postfields",children:[" Post:\u2003\u2003\xa0\xa0 ",Object(r.jsx)("input",{className:"inputbox",type:"text",value:e.postcontent,onChange:e.setpostcontent})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btndash",onClick:e.textstored,children:e.btn})})]})})},h=function(e){return Object(r.jsxs)("div",{className:"post",children:[Object(r.jsxs)("div",{className:"upper",children:[Object(r.jsx)("p",{className:"postusername",children:e.username}),Object(r.jsxs)("div",{className:"editbutton",children:[Object(r.jsx)("div",{className:"edit",onClick:e.edit,children:"\u2692"}),Object(r.jsx)("div",{className:"delete",onClick:e.delete,children:"\u2620"})]})]}),Object(r.jsx)("p",{className:"postcontent",children:e.postcontent}),Object(r.jsxs)("div",{class:"count",children:[Object(r.jsxs)("div",{className:"imglike",children:[Object(r.jsx)("img",{onClick:e.clicklike,src:"https://th.bing.com/th?q=Like+Emoticon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.56&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247 ",alt:"Like",width:"25%",height:"100%"}),"\xa0\xa0",Object(r.jsx)("p",{className:"textlike",children:e.likecnt})]}),Object(r.jsxs)("div",{className:"imgdislike",children:[Object(r.jsx)("img",{onClick:e.clickdislike,src:"https://www.bing.com/th?id=OIP.aIlJZec72YFowfKKQBiN8gHaHa&w=96&h=95&c=8&rs=1&qlt=90&o=6&dpr=1.56&pid=3.1&rm=2",alt:"Dislike",width:"25%",height:"100%"}),Object(r.jsx)("p",{className:"textdislike",children:e.dislikecnt})]})]})]})},g=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:e.message})})},O=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={arrayvalue:["name"],editpostindex:null,inputvalue:[],newinputusername:"",newinputtext:"",inputpostcontent:[],inputusername:[],message:[" ","Post added successfully!","Post Edited !","Post Deleted!!","Some Field is kept empty,Fillup each field"],messageindex:0,like:[],dislike:[],likecnt:0,btn:"Submit"},e.editpost=function(t){e.setState({editpostindex:t}),e.setState({newinputusername:e.state.inputusername[t]}),e.setState({newinputtext:e.state.inputpostcontent[t]}),e.setState({btn:"edit"})},e.deletepost=function(t){var s=e.state.inputusername,n=e.state.inputpostcontent;n.splice(t,1),s.splice(t,1),e.setState({inputusername:s}),e.setState({inputpostcontent:n}),e.setState({messageindex:3}),e.setState({newinputusername:""}),e.setState({newinputtext:""}),setTimeout((function(){e.setState({messageindex:0})}),2e3)},e.clicklike=function(t){var s=e.state.like[t]+1;e.state.like.splice(t,1,s),e.setState({editpostindex:null}),console.log(e.state.like)},e.clickdislike=function(t){var s=e.state.dislike[t]+1;e.state.dislike.splice(t,1,s),e.setState({editpostindex:null}),console.log(e.state.dislike)},e.username=function(t){null===e.state.editpostindex&&(e.setState({newinputusername:t.target.value}),console.log(e.state.newinputusername))},e.postcontent=function(t){e.setState({newinputtext:t.target.value})},e.poststored=function(t){if(t.preventDefault(),""===e.state.newinputusername||""===e.state.newinputtext)e.setState({messageindex:4}),setTimeout((function(){e.setState({messageindex:0})}),2e3),console.log("coulfot");else if(null!==e.state.editpostindex||""===e.state.newinputusername&&""===e.state.newinputtext){var s=e.state.newinputtext;e.state.inputpostcontent.splice(e.state.editpostindex,1,s),e.setState({editpostindex:null}),e.setState({btn:"submit"}),e.setState({messageindex:2}),setTimeout((function(){e.setState({messageindex:0})}),2e3)}else e.state.inputusername.push(e.state.newinputusername),e.state.inputpostcontent.push(e.state.newinputtext),e.state.like.push(0),e.state.dislike.push(0),e.setState({newinputusername:""}),e.setState({newinputtext:""}),e.setState({messageindex:1}),console.log("reaching"),setTimeout((function(){e.setState({messageindex:0})}),2e3)},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this,t=null;return 0!==this.state.inputpostcontent.length&&(t=Object(r.jsx)("div",{children:this.state.inputpostcontent.map((function(t,s){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"postgap"}),Object(r.jsx)(h,{username:e.state.inputusername[s],postcontent:e.state.inputpostcontent[s],clicklike:e.clicklike.bind(e,s),clickdislike:e.clickdislike.bind(e,s),likecnt:e.state.like[s],dislikecnt:e.state.dislike[s],edit:e.editpost.bind(e,s),delete:e.deletepost.bind(e,s)},s)]})}))})),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"messagedashboard",children:Object(r.jsx)(g,{message:this.state.message[this.state.messageindex]})}),Object(r.jsx)(b,{username:this.state.newinputusername,setusername:this.username,postcontent:this.state.newinputtext,setpostcontent:this.postcontent,textstored:this.poststored,btn:this.state.btn}),t]})}}]),s}(n.Component),v=(s(36),s(2)),f=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(r.jsx)(m.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(x,{}),Object(r.jsx)("div",{children:Object(r.jsx)(v.c,{children:Object(r.jsx)(v.a,{path:"/dashboard",children:Object(r.jsx)(O,{})})})}),Object(r.jsx)("div",{children:Object(r.jsx)(v.c,{children:Object(r.jsx)(v.a,{path:"/Signup",children:Object(r.jsx)(p,{})})})}),Object(r.jsx)("div",{children:Object(r.jsx)(v.c,{children:Object(r.jsx)(v.a,{path:"/SignIn",children:Object(r.jsx)(j,{})})})})]})})}}]),s}(n.Component),k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),a(e),c(e)}))};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.28803f17.chunk.js.map