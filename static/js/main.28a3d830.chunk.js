(this.webpackJsonplessonsreact=this.webpackJsonplessonsreact||[]).push([[0],{101:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return h}));var a=n(9),r=n.n(a),c=n(15),i=n(37),u=n(5),o=n(13),s={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProcess:[]},l=function(e){return{type:"FOLLOW",userId:e}},f=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET_USERS",users:e}},d=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},m=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",followingInProcess:e,userId:t}},b=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(m(!0)),a(d(e)),n.next=4,Object(o.c)(e,t);case 4:c=n.sent,a(m(!1)),a(p(c.items)),a({type:"SET_TOTAL_USERS_COUNT",count:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(d(e)),a(m(!0)),n.next=4,Object(o.e)(e,t);case 4:c=n.sent,a(m(!1)),a(p(c.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)(Object(u.a)({},e),{},{followingInProcess:t.followingInProcess?[].concat(Object(i.a)(e.followingInProcess),[t.userId]):e.followingInProcess.filter((function(e){return e!=t.userId}))});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"h",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return d}));var a=n(126),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,"API-KEY":"614a97b4-e7f5-4aa7-8483-5a00861c0bf2"}),c=function(e){return r.get("profile/"+e)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},u=function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},o=function(){return r.get("auth/me")},s=function(e){return r.delete("follow/".concat(e))},l=function(e){return r.post("follow/".concat(e))},f={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},d=function(){return r.delete("auth/login")}},130:function(e,t,n){e.exports=n.p+"static/media/loader.f90ea624.gif"},156:function(e,t,n){e.exports=n(288)},161:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(62),i=n.n(c),u=(n(161),n(11)),o=n(17),s=n(8),l=n(53),f=n(63),p={userData:[{logo:"https://gordonua.com/img/article/1880/74_tn.jpg",name:"Alex"},{logo:"https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg",name:"Lora"},{logo:"https://i.pinimg.com/originals/e8/83/7b/e8837b00067930f307a825c2ff74f3fa.jpg",name:"Sveta"}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return t.type,e},m=n(101),g=n(9),b=n.n(g),h=n(15),E=n(5),v=n(13),O=n(38),S={userId:null,email:null,login:null,isAuth:!1},j=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},w=function(){return function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,r,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,c=a.login,i=a.email,t(j(r,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(E.a)(Object(E.a)({},e),t.payload);default:return e}},_={initialized:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{initialized:!0});default:return e}},I=n(124),T=n(127),P=Object(s.c)({profilePage:l.c,dialogsPage:f.b,sidebar:d,usersPage:m.a,auth:y,appReducer:x,form:I.a}),k=Object(s.e)(P,Object(s.a)(T.a));window.store=k;var N=k,A={_State:{profilePage:{postData:[{id:1,post:"\u043a\u0430\u043a \u0432\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u043b\u043e\u0441\u044c? ",likes:5},{id:2,post:"\u0444\u043e\u0442\u043e \u0431\u0435\u0437 \u043f\u043e\u0434\u043f\u0438\u0441\u0438",likes:7},{id:3,post:"\u0441\u043d\u0438\u043c\u043a\u0438 \u0431\u0435\u0437 \u0442\u0435\u043a\u0441\u0442\u0430",likes:3},{id:4,post:"\u0431\u044b\u0442\u044c \u0434\u043b\u044f \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438",likes:5},{id:5,post:"\u0412 \u0441\u0442\u0440\u0430\u043d\u0430\u0445 \u0421\u041d\u0413 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f",likes:8}],newPostText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b Profile"},dialogsPage:{dialogsData:[{id:1,name:"Dima",age:24,avatarUrl:"https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"},{id:2,name:"Sveta",age:27,avatarUrl:"https://www.pngarts.com/files/3/Avatar-PNG-High-Quality-Image.png"},{id:3,name:"Lena",age:29,avatarUrl:"https://www.pngarts.com/files/3/Avatar-PNG-High-Quality-Image.png"},{id:4,name:"Oleg",age:23,avatarUrl:"https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"},{id:5,name:"Sasha",age:21,avatarUrl:"https://www.pngarts.com/files/3/Avatar-PNG-High-Quality-Image.png"}],textData:[{id:1,text:"Hi"},{id:2,text:"Hello"},{id:3,text:"Whats up?"},{id:4,text:"Its ok"},{id:5,text:"Lets go"},{id:6,text:"Cool"}],newMessagesText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b Dialogs"},sidebar:{userData:[{logo:"https://gordonua.com/img/article/1880/74_tn.jpg",name:"Alex"},{logo:"https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg",name:"Lora"},{logo:"https://i.pinimg.com/originals/e8/83/7b/e8837b00067930f307a825c2ff74f3fa.jpg",name:"Sveta"}]}},getState:function(){return this._State},_callSubscriber:function(){console.log("state changed")},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){this._State.profilePage=Object(l.c)(this._State.profilePage,e),this._State.dialogsPage=Object(f.b)(this._State.dialogsPage,e),this._State.sidebar.userData=d(this._State.sidebar.userData,e),this._callSubscriber(this._State)}},D=n(49),L=n(50),U=n(52),C=n(51),G=n(27),R=(n(243),function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:e.logo,alt:"logoName"}),e.name)}),F=(n(244),function(e){var t=e.userItem.map((function(e){return r.a.createElement(R,{logo:e.logo,name:e.name,key:e.id})}));return r.a.createElement("nav",{className:"navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/profile",activeClassName:"active"},"Profile")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/dialogs"},"Messages")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/news"},"News")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/music"},"Music")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/users"},"Users")),r.a.createElement("li",{className:"navigation-settings"},r.a.createElement(u.b,{to:"/settings"},"Settings"))),r.a.createElement("div",{className:"friends"},r.a.createElement("h2",null,"Friends"),r.a.createElement("ul",{className:"friends-list"},t)))}),z=(n(246),function(){return r.a.createElement("div",{className:"settings"},"Settings")}),M=(n(247),function(e){return r.a.createElement("header",{className:"header"},r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{src:"https://s2.logaster.com/static/v3/img/products/logo.png",alt:"logo"})),r.a.createElement("div",{className:"loginBlock"},e.isAuth?r.a.createElement("div",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u043b\u043e\u0433\u0438\u043d\u0435\u043d \u0438 \u0435\u0433\u043e \u043b\u043e\u0433\u0438\u043d = ",e.login," ",r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(u.b,{to:"/login"},"Login")))}),H=function(e){Object(U.a)(n,e);var t=Object(C.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){return r.a.createElement(M,this.props)}}]),n}(r.a.Component),W=Object(o.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.g)();case 2:0===e.sent.data.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(H),Q=n(123),B=n(122),J=n(64),Z=n(42),K=Object(Z.a)(30),Y=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:"name"},r.a.createElement(B.a,{component:J.b,name:"email",placeholder:"email",validate:[Z.b,K]})),r.a.createElement("div",{className:"password"},r.a.createElement(B.a,{component:J.b,name:"password",placeholder:"password",type:"password",validate:[Z.b,K]})),r.a.createElement("div",{className:"remember-checkbox"},r.a.createElement(B.a,{component:J.b,name:"rememberMe",type:"checkbox",validate:[Z.c]})," remeber me"),e.error&&r.a.createElement("div",{className:"error-message"},e.error),r.a.createElement("div",{className:"btn"},r.a.createElement("button",null,"login")))},$=Object(Q.a)({form:"login"})(Y),q=Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(h.a)(b.a.mark((function a(r){var c,i;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(v.f)(e,t,n,!0);case 2:0===(c=a.sent).data.resultCode?r(w()):(i=c.data.messages.length>0?c.data.messages[0]:"Some error",r(Object(O.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(G.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement($,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),V=n(31),X=(n(286),n(287),r.a.lazy((function(){return n.e(4).then(n.bind(null,305))}))),ee=r.a.lazy((function(){return n.e(3).then(n.bind(null,304))})),te=r.a.lazy((function(){return n.e(5).then(n.bind(null,306))})),ne=r.a.lazy((function(){return n.e(7).then(n.bind(null,302))})),ae=r.a.lazy((function(){return n.e(6).then(n.bind(null,303))})),re=function(e){Object(U.a)(n,e);var t=Object(C.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(W,null),r.a.createElement(F,{name:this.props.appState.dialogsPage.dialogsData,userItem:this.props.appState.sidebar.userData}),r.a.createElement("div",{className:"content"},r.a.createElement(G.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(V.a,null)},r.a.createElement(ee,null))}}),r.a.createElement(G.b,{path:"/dialogs",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(V.a,null)},r.a.createElement(X,null))}}),r.a.createElement(G.b,{path:"/news",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(V.a,null)},r.a.createElement(ne,null))}}),r.a.createElement(G.b,{path:"/music",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(V.a,null)},r.a.createElement(ae,null))}}),r.a.createElement(G.b,{path:"/users",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(V.a,null)},r.a.createElement(te,null))}}),r.a.createElement(G.b,{path:"/settings",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(G.b,{path:"/login",render:function(){return r.a.createElement(q,null)}}))):r.a.createElement(V.a,null)}}]),n}(r.a.Component),ce=Object(s.d)(G.f,Object(o.b)((function(e){return{initialized:e.appReducer.initialized}}),{initializeApp:function(){return function(e){e(w()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(u.a,null,r.a.createElement(o.a,{store:N},r.a.createElement(ce,{appState:A.getState()}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(130),i=n.n(c);t.a=function(e){return r.a.createElement("img",{src:i.a,alt:"preloader"})}},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c}));var a=function(e){if(!e)return"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u0432\u0435\u043b\u0438"},r=function(e){return function(t){if(t&&t.length>e)return"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}},c=function(e){if(!e)return"\u0412\u044b \u043d\u0435 \u043d\u0430\u0436\u0430\u043b\u0438 - Remember me"}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return m}));var a=n(9),r=n.n(a),c=n(15),i=n(37),u=n(5),o=n(13),s={postData:[{id:1,post:"\u043a\u0430\u043a \u0432\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u043b\u043e\u0441\u044c? ",likes:5},{id:2,post:"\u0444\u043e\u0442\u043e \u0431\u0435\u0437 \u043f\u043e\u0434\u043f\u0438\u0441\u0438",likes:7},{id:3,post:"\u0441\u043d\u0438\u043c\u043a\u0438 \u0431\u0435\u0437 \u0442\u0435\u043a\u0441\u0442\u0430",likes:3},{id:4,post:"\u0431\u044b\u0442\u044c \u0434\u043b\u044f \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438",likes:5},{id:5,post:"\u0412 \u0441\u0442\u0440\u0430\u043d\u0430\u0445 \u0421\u041d\u0413 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f",likes:8}],newPostText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b Profile",profile:null,status:""},l=function(e){return{type:"ADD-POST",newMessagesPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.d)(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.h.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.h.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:6,post:t.newMessagesPostText,likes:2};return Object(u.a)(Object(u.a)({},e),{},{postData:[].concat(Object(i.a)(e.postData),[n])});case"SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!=t.postId}))});default:return e}}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(37),r=n(5),c={dialogsData:[{id:1,name:"Dima",age:24,avatarUrl:"https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"},{id:2,name:"Sveta",age:27,avatarUrl:"https://www.pngarts.com/files/3/Avatar-PNG-High-Quality-Image.png"},{id:3,name:"Lena",age:29,avatarUrl:"https://www.pngarts.com/files/3/Avatar-PNG-High-Quality-Image.png"},{id:4,name:"Oleg",age:23,avatarUrl:"https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"},{id:5,name:"Sasha",age:21,avatarUrl:"https://www.pngarts.com/files/3/Avatar-PNG-High-Quality-Image.png"}],textData:[{id:1,text:"Hi"},{id:2,text:"Hello"},{id:3,text:"Whats up?"},{id:4,text:"Its ok"},{id:5,text:"Lets go"},{id:6,text:"Cool"}]},i=function(e){return{type:"ADD-NEW-MESSAGE",newMessagesText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-NEW-MESSAGE":var n={id:7,text:t.newMessagesText};return Object(r.a)(Object(r.a)({},e),{},{textData:[].concat(Object(a.a)(e.textData),[n])});default:return e}}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var a=n(89),r=n(0),c=n.n(r),i=(n(248),function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return c.a.createElement("div",{className:"formControl "+(i?"error":"")},c.a.createElement("textarea",Object.assign({},t,r)),i&&c.a.createElement("span",null,n.error))}),u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return c.a.createElement("div",{className:"formControl "+(i?"error":"")},c.a.createElement("input",Object.assign({},t,r)),i&&c.a.createElement("span",null,n.error))}}},[[156,1,2]]]);
//# sourceMappingURL=main.28a3d830.chunk.js.map