(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){},47:function(e,t,a){e.exports=a(87)},52:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(14),i=a.n(c),s=(a(52),a(9)),r=a(10),m=a(12),l=a(11),u=a(13),h=(a(29),a(33),a(34),a(35),a(3)),d=a(58);a(65),d.initializeApp({apiKey:"AIzaSyDynm1iQEugqjNl9b4UoVD5ANFhdJ3uW3c",authDomain:"tohell-b7845.firebaseapp.com",databaseURL:"https://tohell-b7845.firebaseio.com",projectId:"tohell-b7845",storageBucket:"tohell-b7845.appspot.com",messagingSenderId:"568288665390"});var p=d.firestore();p.settings({timestampsInSnapshots:!0});var b=a(44),g=a(42),v=a(5),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(l.a)(t).call(this))).handleJoin=function(t){t.preventDefault(),e.checkGame(t.target.gameCode.value)},e.checkGame=function(t){var a=Object(h.a)(Object(h.a)(e));p.collection("games").doc(t).get().then(function(e){e.exists?a.setState({code:t}):a.setState({visible:!0})})},e.state={code:0,visible:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return null!==this.state.code&&0!==this.state.code&&void 0!==this.state.code?o.a.createElement(b.a,{to:"/ToHell/Join/".concat(this.state.code)}):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",{style:{fontSize:"2em"}},"To Hell and Back!"),this.state.visible?o.a.createElement("p",{style:{color:"yellow",fontSize:"0.8em"}},"Game code does not exist"):null,o.a.createElement(v.FormInline,{onSubmit:this.handleJoin,className:"md-form m-0"},o.a.createElement(v.MDBInput,{type:"number",name:"gameCode",style:{color:"whitesmoke"},label:"Game Code"}),o.a.createElement(v.Button,{outline:!0,color:"white",size:"sm",type:"submit",className:"mr-auto"},"Search")),o.a.createElement(g.a,{style:{textDecoration:"none"},to:"/ToHell/CreateGame"},o.a.createElement("div",{style:{cursor:"pointer"},className:"sideHover"},o.a.createElement("h6",{style:{paddingTop:"3em",fontSize:"0.7em"}},"Create Game")))))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(l.a)(t).call(this))).generateCode=function(){var t=Math.floor(9e4*Math.random())+1e4;e.setState({code:t})},e.goToLobby=function(){var t=Object(h.a)(Object(h.a)(e));if(null!==e.state.name&&""!==e.state.name&&void 0!==e.state.name){var a={name:t.state.name,password:t.state.password};p.collection("games").doc(t.state.code.toString()).set({players:[a],playerGuessing:0,round:1,state:"Guess"}).then(function(){t.setState({transition:!0}),console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)})}else e.setState({visible:!0})},e.updateName=function(t){e.setState({name:t.target.value})},e.updatePassword=function(t){e.setState({password:t.target.value})},e.state={code:0,name:"",visible:!1,password:"",transition:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.generateCode()}},{key:"render",value:function(){return this.state.transition?o.a.createElement(b.a,{to:"/ToHell/Lobby/".concat(this.state.code,"/").concat(this.state.name)}):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",{style:{fontSize:"2em"}},"Game Code: ",this.state.code),this.state.visible?o.a.createElement("p",{style:{fontSize:"0.8em"}},"Please enter your name for the game!"):null,o.a.createElement(v.MDBInput,{onChange:this.updateName,name:"gameCode",style:{color:"whitesmoke"},label:"Name"}),o.a.createElement(v.MDBInput,{onChange:this.updatePassword,name:"gameCode",style:{color:"whitesmoke"},label:"Short Password"}),o.a.createElement(v.Button,{outline:!0,color:"primary",onClick:this.goToLobby},"Go to Lobby!")))}}]),t}(n.Component),j=a(28),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).componentWillMount=function(){var e=Object(h.a)(Object(h.a)(a));p.collection("games").doc(a.props.code.toString()).onSnapshot(function(t){e.setState({players:t.data().players})})},a.state={players:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("p",{style:{margin:"0",fontSize:"2.5em",backgroundColor:"#282c34",color:"whitesmoke",paddingTop:"2em"}},"Join at Code: ",this.props.code),o.a.createElement("div",{style:{backgroundColor:"#282c34",color:"whitesmoke",paddingTop:"5em"}},o.a.createElement(j.b,null,Object.keys(this.state.players).map(function(t){return o.a.createElement(j.a,{key:e.state.players[t].name,sm:"3"},o.a.createElement("p",null,e.state.players[t].name))})),o.a.createElement("p",{style:{height:"5em"}}," "),o.a.createElement(g.a,{style:{textDecoration:"none"},to:"/ToHell/Game/0/".concat(this.props.code,"/").concat(this.props.name,"/Guess/1/0")},o.a.createElement(v.Button,{outline:!0,color:"primary"},"Start!"))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).alreadyTaken=function(e){var t=Object(h.a)(Object(h.a)(a)),n="";for(var o in e){var c=e[o];if(c.name===t.state.name&&c.password===t.state.password)return n="Log In";if(c.name===t.state.name&&c.password!==t.state.password)return n="Already Taken";n="New Player"}return n},a.goToLobby=function(){var e=Object(h.a)(Object(h.a)(a));if(null!==a.state.name&&""!==a.state.name&&void 0!==a.state.name){var t=[];p.collection("games").doc(a.props.code.toString()).get().then(function(a){if(a.exists){t=a.data().players;var n=e.alreadyTaken(t);if("Log In"===n)return void e.setState({transition:!0});if("Already Taken"===n)return void e.setState({visible1:!0});var o={name:e.state.name,password:e.state.password};t.push(o),p.collection("games").doc(e.props.code.toString()).update({players:t}).then(function(){e.setState({transition:!0})}).catch(function(e){console.error("Error writing document: ",e)})}else console.log("No such document!")}).catch(function(e){console.log("Error getting document:",e)})}else a.setState({visible:!0})},a.updateName=function(e){a.setState({name:e.target.value})},a.updatePassword=function(e){a.setState({password:e.target.value})},a.state={name:"",visible:!1,visible1:!1,transition:!1,password:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.transition?o.a.createElement(b.a,{to:"/ToHell/Lobby/".concat(this.props.code,"/").concat(this.state.name)}):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",{style:{fontSize:"2em"}},"Game Code: ",this.props.code),this.state.visible?o.a.createElement("p",{style:{fontSize:"0.8em"}},"Please enter your name for the game!"):null,this.state.visible1?o.a.createElement("p",{style:{fontSize:"0.8em"}},"That name is already taken!"):null,o.a.createElement(v.MDBInput,{onChange:this.updateName,name:"gameCode",style:{color:"whitesmoke"},label:"Name"}),o.a.createElement(v.MDBInput,{onChange:this.updatePassword,name:"gameCode",style:{color:"whitesmoke"},label:"Short Password"}),o.a.createElement(v.Button,{outline:!0,color:"primary",onClick:this.goToLobby},"Go to Lobby!")))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(l.a)(t).call(this))).increment=function(){var t=e.state.guess+1;e.setState({guess:t}),e.state.guess+1>10&&e.setState({guess:10})},e.decrement=function(){var t=e.state.guess-1;e.setState({guess:t}),e.state.guess-1<0&&e.setState({guess:0})},e.nextPlayer=function(){var t=Object(h.a)(Object(h.a)(e));p.collection("games").doc(e.props.code.toString()).get().then(function(e){var a=e.data(),n=a.playerGuessing+1;n<=a.players.length-1&&(t.setState({playerGuessing:n}),p.collection("games").doc(t.props.code.toString()).update({playerGuessing:n}).then(function(){t.setState({transition:!0})}).catch(function(e){console.error("Error writing document: ",e)}))})},e.state={guess:0,playerGuessing:0,transition:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return this.state.transition?(this.setState({transition:!1}),o.a.createElement(b.a,{to:"/ToHell/Game/0/".concat(this.props.code,"/").concat(this.props.name,"/").concat(this.props.state,"/").concat(this.props.round,"/").concat(this.state.playerGuessing)})):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},this.props.players.length>0?o.a.createElement("p",{style:{fontSize:"2em"}}," ",this.props.players[this.props.playerNumber].name,"'s Round 1 Guess"):null,o.a.createElement("p",{style:{height:"1.5em"}}," "),o.a.createElement(v.Button,{onClick:this.increment,outline:!0,color:"success"},"+"),o.a.createElement("p",{style:{fontSize:"5em"}},this.state.guess),o.a.createElement(v.Button,{onClick:this.decrement,outline:!0,color:"success"},"-"),o.a.createElement("p",{style:{height:"3em"}}," "),o.a.createElement(v.Button,{outline:!0,color:"primary",onClick:this.nextPlayer},"Next!")))}}]),t}(n.Component),k=a(43),C=a(21),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).componentWillMount=function(){var e=Object(h.a)(Object(h.a)(a));p.collection("games").doc(a.props.code.toString()).onSnapshot(function(t){e.setState({players:t.data().players,playerGuessing:t.data().playerGuessing,round:t.data().round,state:t.data().state},function(){e.setState({transition:!0})})})},a.state={players:[],playerGuessing:0,round:1,state:"Guess",transition:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return this.state.transition?(this.setState({transition:!1}),o.a.createElement(b.a,{to:"/ToHell/Game/0/".concat(this.props.code,"/").concat(this.props.name,"/").concat(this.state.state,"/").concat(this.state.round,"/").concat(this.state.playerGuessing)})):o.a.createElement(k.a,null,o.a.createElement(C.a,{path:"/ToHell/Game/0/:code/:name/Guess/:roundnumber/:playerNumber",render:function(t){return o.a.createElement(w,{players:e.state.players,code:t.match.params.code,name:t.match.params.name,playerNumber:t.match.params.playerNumber,roundNumber:t.match.params.roundnumber})}}),o.a.createElement(C.a,{render:function(){return o.a.createElement(b.a,{to:"/ToHell"})}}))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(k.a,null,o.a.createElement(C.a,{exact:!0,path:"/ToHell/CreateGame",render:function(){return o.a.createElement(y,{setGameCode:e.setGameCode})}}),o.a.createElement(C.a,{exact:!0,path:"/ToHell",render:function(){return o.a.createElement(E,null)}}),o.a.createElement(C.a,{exact:!0,path:"/ToHell/Lobby/:code/:name",render:function(e){return o.a.createElement(S,{code:e.match.params.code,name:e.match.params.name})}}),o.a.createElement(C.a,{exact:!0,path:"/ToHell/Join/:code",render:function(e){return o.a.createElement(O,{code:e.match.params.code})}}),o.a.createElement(C.a,{path:"/ToHell/Game/0/:code/:name",render:function(e){return o.a.createElement(G,{code:e.match.params.code,name:e.match.params.name})}}),o.a.createElement(C.a,{render:function(){return o.a.createElement(b.a,{to:"/ToHell"})}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(41);i.a.render(o.a.createElement(N.a,null,o.a.createElement(C.a,{component:f})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,2,1]]]);
//# sourceMappingURL=main.2a51cf60.chunk.js.map