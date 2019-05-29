(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{222:function(e,t,a){e.exports=a(506)},227:function(e,t,a){},255:function(e,t,a){},506:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),s=a.n(l),c=(a(227),a(8)),i=a(10),o=a(12),u=a(11),m=a(13),h=a(50),d=a(37),p=a(63),g=a.n(p),b=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var a=g.a.create({baseURL:"https://dhl-twilio.herokuapp.com",withCredentials:!0});this.service=a},f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.service.signup(n,r).then(function(e){a.setState({username:"",password:"",loggedInUser:!0}),a.props.getUser(e)}).catch(function(e){if(e.response&&e.response.data)return a.setState({message:e.response.data.message})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.state={username:"",password:"",message:null,loggedInUser:null},a.service=new b,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(h.a,{to:"/contacts"}):r.a.createElement("div",{className:"columns is-mobile is-centered",style:{marginTop:"20px"}},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{name:"username",className:"input",type:"text",value:this.state.username,onChange:function(t){return e.handleChange(t)},placeholder:"username"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},placeholder:"Password"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"control is-centered columns is-mobile ",style:{marginTop:"20px"}},r.a.createElement("button",{className:"button",style:{backgroundColor:"#FFCC01",color:"white"},type:"submit",value:"Signup"},"SIGNUP"))),this.state.message&&r.a.createElement("div",null," ",this.state.message," "))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.service.login(n,r).then(function(e){a.setState({username:"",password:"",loggedInUser:!0}),a.props.getUser(e)}).catch(function(e){if(e.response&&e.response.data)return a.setState({message:e.response.data.message})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.state={username:"",password:"",loggedInUser:null,message:null},a.service=new b,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(h.a,{to:"/contacts/create"}):r.a.createElement("div",{className:"columns is-mobile is-centered",style:{marginTop:"20px"}},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{name:"username",className:"input",type:"text",value:this.state.username,onChange:function(t){return e.handleChange(t)},placeholder:"username"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},placeholder:"Password"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"control is-centered columns is-mobile ",style:{marginTop:"20px"}},r.a.createElement("button",{className:"button",style:{backgroundColor:"#FFCC01",color:"white"},type:"submit",value:"Login"},"LOGIN"))),this.state.message&&r.a.createElement("div",null," ",this.state.message," "))}}]),t}(n.Component),E=(a(255),a(193)),N=a(22),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logoutUser=function(){a.service.logout().then(function(){a.setState({loggedInUser:null}),a.props.getUser(null)})},a.toggleNav=function(){a.setState(function(e){return{isActive:!e.isActive}})},a.state={loggedInUser:null,isActive:!1},a.service=new b,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(E.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("nav",{className:"navbar is-black",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"/"},r.a.createElement("img",{src:"../images/DHL-logo.jpg",alt:"DHL-logo",width:110,height:38})),r.a.createElement("button",{className:"button is-black navbar-burger navbar-end",onClick:this.toggleNav},r.a.createElement("span",{className:"navbar-end"}),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarBasicExample",className:this.state.isActive?"navbar-menu is-active":"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement(N.b,{className:"navbar-link",to:"/"},"More"),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement(N.b,{className:"navbar-item",to:"/contacts"},"My Contacts"),r.a.createElement(N.b,{className:"navbar-item",to:"/contacts/create"},"Add Contact")))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement(N.b,{to:"/",className:"button is-danger",onClick:function(){return e.logoutUser()}},"Logout")))))):r.a.createElement("nav",{className:"navbar is-black ",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"/"},r.a.createElement("img",{src:"/images/DHL-logo.jpg",alt:"logo",width:110,height:38})),r.a.createElement("button",{className:"button is-black navbar-burger",onClick:this.toggleNav},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarBasicExample",className:this.state.isActive?"navbar-menu is-active":"navbar-menu"},r.a.createElement("div",{className:"navbar-start"}),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement(N.b,{className:"button is-warning",to:"/signup"},r.a.createElement("strong",null,"Sign up")),r.a.createElement(N.b,{className:"button is-light",to:"/login"}," Log in"))))))}}]),t}(n.Component),O=g.a.create({baseURL:"https://dhl-twilio.herokuapp.com"}),y=function(e){throw e},j={service:O,handleUpload:function(e){return O.post("/upload",e).then(function(e){return e.data}).catch(y)},saveNewContact:function(e){return console.log("new contact is: ",e),O.post("/contacts/create",e,{withCredentials:!0}).then(function(e){return e.data}).catch(y)},sendSMS:function(e){return console.log("new SMS is: ",e),O.post("/sms/out",e,{withCredentials:!0}).then(function(e){return e.data}).catch(y)}},S=a(40),w=a.n(S),x=a(51),U=a.n(x),k=a(41),T=a.n(k),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange,n=e.handlePhoneChange;return r.a.createElement(w.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{hintText:"Enter First Name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement("br",null),r.a.createElement(U.a,{hintText:"Enter Last Name",floatingLabelText:"Last Name",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement("br",null),r.a.createElement(U.a,{hintText:"Cell Number",floatingLabelText:"954-555-4444",onChange:n("cellNumber"),defaultValue:t.cellNumber,maxLength:"10"}),r.a.createElement("br",null),r.a.createElement(T.a,{label:"Continue",secondary:!0,style:L.button,onClick:this.continue})))}}]),t}(n.Component),L={button:{margin:15}},F=I,P=a(66),D=a(196),A=a.n(D),M=a(195),V=a.n(M),B=a(42),H=a.n(B),R=a(80),W=a.n(R),_=a(79),G=a.n(_),J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).back=function(e){e.preventDefault(),a.props.prevStep()},a.save=function(e){e.preventDefault(),a.props.handleSubmit()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleFileUpload;return r.a.createElement(w.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(H.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(G.a,null,r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement(W.a,{variant:"h6",color:"textPrimary"},"Verify Contact Information"),r.a.createElement(P.List,null,r.a.createElement(P.ListItem,null,r.a.createElement("input",{accept:"image/*",id:"icon-button-file",type:"file",style:{display:"none"},defaultValue:t.imageUrl,onChange:function(e){return a(e)}}),r.a.createElement("label",{htmlFor:"icon-button-file"},r.a.createElement(V.a,{color:"primary",component:"span"},r.a.createElement(A.a,null),r.a.createElement("p",null,"Add Photo")))),r.a.createElement(P.ListItem,{primaryText:"First Name",secondaryText:t.firstName}),r.a.createElement(P.ListItem,{primaryText:"Last Name",secondaryText:t.lastName}),r.a.createElement(P.ListItem,{primaryText:"Cell Number",secondaryText:t.cellNumber})),r.a.createElement(T.a,{label:"Save Contact",secondary:!0,style:z.button,onClick:this.save}),r.a.createElement(T.a,{label:"Back",primary:!1,style:z.button,onClick:this.back}))))))}}]),t}(n.Component),z={button:{margin:15},gridBox:{maxWidth:500}},$=J,q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.prevStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(d.a)({},e,t.target.value))}},a.handlePhoneChange=function(e){return function(t){a.setState(Object(d.a)({},e,"+1"+t.target.value))}},a.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),j.handleUpload(t).then(function(e){a.setState({imageUrl:e.secure_url})}).catch(function(e){console.log("Error while uploading the file: ",e)})},a.handleSubmit=function(e){var t=a.state.step;j.saveNewContact(a.state).then(function(e){console.log("added: ",e),a.setState({firstName:"",lastName:"",cellNumber:"",imageUrl:"",step:t+1})}).catch(function(e){console.log("Error while adding contact: ",e)})},a.state={step:1,firstName:"",lastName:"",cellNumber:"",imageUrl:"",owner:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,cellNumber:t.cellNumber,imageUrl:t.imageUrl,owner:t.owner};switch(e){case 1:return r.a.createElement(F,{nextStep:this.nextStep,handleChange:this.handleChange,handleFileUpload:this.handleFileUpload,handlePhoneChange:this.handlePhoneChange,values:a});case 2:return r.a.createElement($,{nextStep:this.nextStep,prevStep:this.prevStep,handleFileUpload:this.handleFileUpload,handleSubmit:this.handleSubmit,values:a});case 3:return r.a.createElement(h.a,{to:"/contacts"})}}}]),t}(n.Component),K=a(203),Q=a.n(K),X=a(204),Y=a.n(X),Z=a(208),ee=a.n(Z),te=a(206),ae=a.n(te),ne=a(207),re=a.n(ne),le=a(205),se=a.n(le),ce=a(197),ie=a.n(ce),oe=a(199),ue=a.n(oe),me=a(198),he=a.n(me),de=a(200),pe=a.n(de),ge=a(201),be=a.n(ge),fe=a(202),ve=a.n(fe),Ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleVisibility=function(){a.setState(function(e){return{open:!1,hidden:!e.hidden}})},a.handleClick=function(){a.setState(function(e){return{open:!e.open}})},a.handleOpen=function(){a.state.hidden||a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.state={open:!1,hidden:!1,to:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cellNumber;console.log(t);var a=this.state,n=a.hidden,l=a.open,s=[{icon:r.a.createElement(ie.a,null),name:"Call"},{icon:r.a.createElement(he.a,null),name:"Text",href:"/sms/out"},{icon:r.a.createElement(ue.a,null),name:"Edit",href:"/contacts/create"}];return r.a.createElement("div",null,r.a.createElement(pe.a,{ariaLabel:"Contact Options",hidden:n,icon:r.a.createElement(be.a,null),onBlur:this.handleClose,onClick:this.handleClick,onClose:this.handleClose,onFocus:this.handleOpen,onMouseEnter:this.handleOpen,onMouseLeave:this.handleClose,open:l,direction:"left",ButtonProps:{color:"secondary",size:"small"}},s.map(function(a){return r.a.createElement(ve.a,{icon:a.icon,tooltipTitle:a.name,tooltipPlacement:"bottom",onClick:e.handleClick,href:a.href,defaultValue:t})})))}}]),t}(n.Component),Ne=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getAllContacts=function(){g.a.get("".concat("https://dhl-twilio.herokuapp.com","/contacts"),{withCredentials:!0}).then(function(t){e.setState({listOfContacts:t.data})})},e.state={listOfContacts:[],open:!1,hidden:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAllContacts()}},{key:"render",value:function(){var e=this.state.listOfContacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(H.a,{item:!0,xs:7},r.a.createElement(Q.a,null,e.map(function(e){return r.a.createElement(Y.a,{button:!0,divider:!0,key:e._id},r.a.createElement(se.a,null,r.a.createElement(ae.a,{alt:"Profile Pic",src:e.imageUrl})),r.a.createElement(re.a,{primary:e.firstName,secondary:e.lastName}),r.a.createElement(ee.a,null,r.a.createElement(Ee,{cellNumber:e.cellNumber,id:e._id})))})))))}}]),t}(n.Component),Ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.handleSubmit()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.cellNumber,n=e.handleChange,l=e.handlePhoneChange;return r.a.createElement(w.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{hintText:"To Cell Number",floatingLabelText:"954-555-4444",onChange:l("to"),defaultValue:a,maxLength:"10"}),r.a.createElement("br",null),r.a.createElement(U.a,{hintText:"Enter Message",floatingLabelText:"Message",onChange:n("body"),defaultValue:t.body}),r.a.createElement("br",null),r.a.createElement(T.a,{label:"Continue",secondary:!0,style:Oe.button,onClick:this.continue})))}}]),t}(n.Component),Oe={button:{margin:15}},ye=Ce,je=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.handleChange=function(e){return function(t){a.setState(Object(d.a)({},e,t.target.value))}},a.handlePhoneChange=function(e){return function(t){a.setState(Object(d.a)({},e,"+1"+t.target.value))}},a.handleSubmit=function(e){var t=a.state.step;j.sendSMS(a.state).then(function(e){console.log("new SMS: ",e),a.setState({to:"",body:"",step:t+1})}).catch(function(e){console.log("error while sendign SMS",e)})},a.state={to:"",body:"",step:1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.to,a=e.body,n=e.step,l=this.props.defaultValue,s={to:t,body:a};switch(n){case 1:return r.a.createElement(ye,{nextStep:this.nextStep,handleChange:this.handleChange,handleSubmit:this.handleSubmit,handlePhoneChange:this.handlePhoneChange,defaultValue:l,values:s});case 2:return r.a.createElement(w.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Message Sent"),r.a.createElement(T.a,{label:"Continue",secondary:!0,style:Se.button,onClick:this.nextStep})));case 3:return r.a.createElement(h.a,{to:"/contacts"})}}}]),t}(n.Component),Se={button:{margin:15}},we=je,xe=a(64),Ue=a(211),ke=a.n(Ue),Te=a(212),Ie=a.n(Te),Le=a(215),Fe=a.n(Le),Pe=a(214),De=a.n(Pe),Ae=a(213),Me=a.n(Ae),Ve=a(81),Be=a.n(Ve),He=a(209),Re=a.n(He),We=Object(xe.a)({root:{background:"linear-gradient(45deg, #D2002E 30%, #FFCC00 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:38,padding:"0 30px",marginRight:"5px"}});function _e(){var e=We();return r.a.createElement(N.b,{to:"/signup"},r.a.createElement(Be.a,{className:e.root},"Signup",r.a.createElement(Re.a,{style:{paddingLeft:"5px"}})))}var Ge=a(210),Je=a.n(Ge),ze=Object(xe.a)({root:{background:"linear-gradient(45deg, #FFCC00 30%, #D2002E 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:38,padding:"0 30px"}});function $e(){var e=ze();return r.a.createElement(N.b,{to:"/login"},r.a.createElement(Be.a,{className:e.root},"Login",r.a.createElement(Je.a,{style:{paddingLeft:"5px"}})))}var qe=Object(xe.a)({card:{maxWidth:345},media:{height:240},actions:{justifyContent:"center"}});function Ke(){var e=qe();return r.a.createElement(ke.a,{className:e.card},r.a.createElement(Ie.a,null,r.a.createElement(Me.a,{className:e.media,image:"../images/DHLtwilio.jpg",title:"DHL Twilio Landing Page"}),r.a.createElement(De.a,null,r.a.createElement(W.a,{variant:"body2",color:"textSecondary",component:"p"},"Welcome to DHL Express VOIP application. Please create an account below or login if you have an existing account."))),r.a.createElement(Fe.a,{className:e.actions},r.a.createElement(_e,null),r.a.createElement($e,null)))}var Qe=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(H.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(G.a,null,r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement(Ke,null))))))}}]),t}(n.Component),Xe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null},a.service=new b,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?r.a.createElement("div",{className:"App"},r.a.createElement(C,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(f,{getUser:e.getTheUser})}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(v,{getUser:e.getTheUser})}}),r.a.createElement(h.b,{exact:!0,path:"/contacts/create",render:function(){return r.a.createElement(q,{getUser:e.getTheUser})}}),r.a.createElement(h.b,{exact:!0,path:"/contacts",render:function(){return r.a.createElement(Ne,{Component:q,getUser:e.getTheUser})}}),r.a.createElement(h.b,{exact:!0,path:"/sms/out",render:function(){return r.a.createElement(we,{Component:we,getUser:e.getTheUser})}}))):r.a.createElement("div",{className:"App"},r.a.createElement(C,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),r.a.createElement(Qe,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(f,{getUser:e.getTheUser})}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(v,{getUser:e.getTheUser})}})))}}]),t}(n.Component);a(505),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N.a,null,r.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[222,1,2]]]);
//# sourceMappingURL=main.8170dc13.chunk.js.map