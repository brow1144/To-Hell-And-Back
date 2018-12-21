(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){},44:function(e,t,a){e.exports=a(87)},49:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(9),i=a.n(c),m=(a(49),a(10)),r=a(11),s=a(13),l=a(12),u=a(14),d=(a(34),a(52),a(54),a(56),a(8)),h=a(58);a(65),h.initializeApp({apiKey:"AIzaSyDynm1iQEugqjNl9b4UoVD5ANFhdJ3uW3c",authDomain:"tohell-b7845.firebaseapp.com",databaseURL:"https://tohell-b7845.firebaseio.com",projectId:"tohell-b7845",storageBucket:"tohell-b7845.appspot.com",messagingSenderId:"568288665390"});var b=h.firestore();b.settings({timestampsInSnapshots:!0});var p=a(41),v=a(26),g=a(7),E=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).handleJoin=function(t){t.preventDefault(),e.checkGame(t.target.gameCode.value)},e.checkGame=function(t){var a=Object(d.a)(Object(d.a)(e));b.collection("games").doc(t).get().then(function(e){e.exists?a.setState({code:t}):a.setState({visible:!0})})},e.state={code:0,visible:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return null!==this.state.code&&0!==this.state.code&&void 0!==this.state.code?o.a.createElement(p.a,{to:"/ToHell/Join/".concat(this.state.code)}):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",{style:{fontSize:"2em"}},"To Hell and Back!"),this.state.visible?o.a.createElement("p",{style:{color:"yellow",fontSize:"0.8em"}},"Game code does not exist"):null,o.a.createElement(g.FormInline,{onSubmit:this.handleJoin,className:"md-form m-0"},o.a.createElement(g.MDBInput,{type:"number",name:"gameCode",style:{color:"whitesmoke"},label:"Game Code"}),o.a.createElement(g.Button,{outline:!0,color:"white",size:"sm",type:"submit",className:"mr-auto"},"Search")),o.a.createElement(v.a,{style:{textDecoration:"none"},to:"/ToHell/CreateGame"},o.a.createElement("div",{style:{cursor:"pointer"},className:"sideHover"},o.a.createElement("h6",{style:{paddingTop:"3em",fontSize:"0.7em"}},"Create Game")))))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).generateCode=function(){var t=Math.floor(9e4*Math.random())+1e4;e.setState({code:t})},e.goToLobby=function(){if(null!==e.state.name&&""!==e.state.name&&void 0!==e.state.name){var t={name:e.state.name,password:e.state.password};b.collection("games").doc(e.state.code.toString()).set({players:[t]}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)})}else e.setState({visible:!0})},e.updateName=function(t){e.setState({name:t.target.value})},e.updatePassword=function(t){e.setState({password:t.target.value})},e.state={code:0,name:"",visible:!1,password:""},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.generateCode()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",{style:{fontSize:"2em"}},"Game Code: ",this.state.code),this.state.visible?o.a.createElement("p",{style:{fontSize:"0.8em"}},"Please enter your name for the game!"):null,o.a.createElement(g.MDBInput,{onChange:this.updateName,name:"gameCode",style:{color:"whitesmoke"},label:"Name"}),o.a.createElement(g.MDBInput,{onChange:this.updatePassword,name:"gameCode",style:{color:"whitesmoke"},label:"Short Password"}),o.a.createElement(v.a,{style:{textDecoration:"none"},to:"/ToHell/Lobby/".concat(this.state.code)},o.a.createElement(g.Button,{outline:!0,color:"primary",onClick:this.goToLobby},"Go to Lobby!"))))}}]),t}(n.Component),j=a(32),S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentWillMount=function(){var e=Object(d.a)(Object(d.a)(a));b.collection("games").doc(a.props.code.toString()).onSnapshot(function(t){e.setState({players:t.data().players})})},a.state={players:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("p",{style:{margin:"0",fontSize:"2.5em",backgroundColor:"#282c34",color:"whitesmoke",paddingTop:"2em"}},"Join at Code: ",this.props.code),o.a.createElement("div",{style:{backgroundColor:"#282c34",color:"whitesmoke",paddingTop:"5em"}},o.a.createElement(j.b,null,Object.keys(this.state.players).map(function(t){return o.a.createElement(j.a,{key:e.state.players[t].name,sm:"3"},o.a.createElement("p",null,e.state.players[t].name))})),o.a.createElement("p",{style:{height:"5em"}}," "),o.a.createElement(v.a,{style:{textDecoration:"none"},to:"/ToHell/Game/"},o.a.createElement(g.Button,{outline:!0,color:"primary"},"Start!"))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).alreadyTaken=function(e){var t=Object(d.a)(Object(d.a)(a)),n="";for(var o in e){var c=e[o];if(c.name===t.state.name&&c.password===t.state.password)return n="Log In";if(c.name===t.state.name&&c.password!==t.state.password)return n="Already Taken";n="New Player"}return n},a.goToLobby=function(){var e=Object(d.a)(Object(d.a)(a));if(null!==a.state.name&&""!==a.state.name&&void 0!==a.state.name){var t=[];b.collection("games").doc(a.props.code.toString()).get().then(function(a){if(a.exists){t=a.data().players;var n=e.alreadyTaken(t);if("Log In"===n)return void e.setState({transition:!0});if("Already Taken"===n)return void e.setState({visible1:!0});var o={name:e.state.name,password:e.state.password};t.unshift(o),b.collection("games").doc(e.props.code.toString()).set({players:t}).then(function(){e.setState({transition:!0})}).catch(function(e){console.error("Error writing document: ",e)})}else console.log("No such document!")}).catch(function(e){console.log("Error getting document:",e)})}else a.setState({visible:!0})},a.updateName=function(e){a.setState({name:e.target.value})},a.updatePassword=function(e){a.setState({password:e.target.value})},a.state={name:"",visible:!1,visible1:!1,transition:!1,password:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.transition?o.a.createElement(p.a,{to:"/ToHell/Lobby/".concat(this.props.code,"/").concat(this.state.name)}):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",{style:{fontSize:"2em"}},"Game Code: ",this.props.code),this.state.visible?o.a.createElement("p",{style:{fontSize:"0.8em"}},"Please enter your name for the game!"):null,this.state.visible1?o.a.createElement("p",{style:{fontSize:"0.8em"}},"That name is already taken!"):null,o.a.createElement(g.MDBInput,{onChange:this.updateName,name:"gameCode",style:{color:"whitesmoke"},label:"Name"}),o.a.createElement(g.MDBInput,{onChange:this.updatePassword,name:"gameCode",style:{color:"whitesmoke"},label:"Short Password"}),o.a.createElement(g.Button,{outline:!0,color:"primary",onClick:this.goToLobby},"Go to Lobby!")))}}]),t}(n.Component),y=a(40),k=a(21),C=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(y.a,null,o.a.createElement(k.a,{exact:!0,path:"/ToHell/CreateGame",render:function(){return o.a.createElement(w,{setGameCode:e.setGameCode})}}),o.a.createElement(k.a,{exact:!0,path:"/ToHell",render:function(){return o.a.createElement(E,null)}}),o.a.createElement(k.a,{exact:!0,path:"/ToHell/Lobby/:code/:name",render:function(e){return o.a.createElement(S,{code:e.match.params.code,name:e.match.params.name})}}),o.a.createElement(k.a,{exact:!0,path:"/ToHell/Join/:code",render:function(e){return o.a.createElement(O,{code:e.match.params.code})}}),o.a.createElement(k.a,{render:function(){return o.a.createElement(p.a,{to:"/ToHell"})}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(24);i.a.render(o.a.createElement(T.a,null,o.a.createElement(k.a,{component:C})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,2,1]]]);
//# sourceMappingURL=main.441b3014.chunk.js.map