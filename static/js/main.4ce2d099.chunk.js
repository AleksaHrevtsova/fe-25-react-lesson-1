(this["webpackJsonpfe-25-react-lesson-1"]=this["webpackJsonpfe-25-react-lesson-1"]||[]).push([[0],{11:function(e,t,a){e.exports={card:"Weather_card__PilFW",search:"Weather_search__2fZGv",searchBar:"Weather_searchBar__1jVOx",weather:"Weather_weather__DUSiN",city:"Weather_city__nZoTc",temp:"Weather_temp__vwdak",flex:"Weather_flex__15Erb",description:"Weather_description__1Xprg",loading:"Weather_loading__2GHZW"}},13:function(e,t,a){e.exports={title:"Contacts_title__38Eqf",wrapper:"Contacts_wrapper__2o3f0",contactsForm:"Contacts_contactsForm__29ALy",btn:"Contacts_btn__pxRjU"}},15:function(e,t,a){e.exports={gallery:"Gallery_gallery__3GbIp",galleryList:"Gallery_galleryList__1YsL1",imgWrapper:"Gallery_imgWrapper__1tSYP",imgHover:"Gallery_imgHover__3yUjq"}},22:function(e,t,a){e.exports={backDrop:"Modal_backDrop__1sfVg",content:"Modal_content__2D7n1"}},23:function(e,t,a){e.exports={mainColor:"white",logo:"Header_logo__fJbKt",header:"Header_header__287Zc"}},33:function(e,t,a){e.exports={clockFace:"Timer_clockFace__2bZJx"}},34:function(e,t,a){e.exports={navList:"Navigation_navList__1PDpK"}},37:function(e,t,a){e.exports={footer:"Footer_footer__3Osec"}},38:function(e){e.exports=JSON.parse('{"one":"One","two":"two","three":"three"}')},39:function(e){e.exports=JSON.parse('[{"id":"1","props":{"name":"home","path":"/"}},{"id":"2","props":{"name":"about","path":"/about"}},{"id":"3","props":{"name":"contacts","path":"/contacts"}}]')},45:function(e,t,a){},47:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),o=(a(45),a(14)),l=a.n(o),i=a(16),h=a(18),u=a(6),d=a(7),j=a(9),p=a(8),b=(a(47),a(48),a(33)),m=a.n(b),g=a(1),f=(n.Component,a(22)),O=a.n(f),x=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleClose=function(t){console.log(t),console.log("target",t.target),console.log("currentTarget",t.currentTarget);var a=e.props.toggleModal;console.log(a),t.target===t.currentTarget&&a()},e.handleEsc=function(t){console.log(t),console.log(t.code);var a=e.props.toggleModal;console.log(a),"Escape"===t.code&&a()},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.handleEsc;window.addEventListener("keydown",e)}},{key:"componentWillUnmount",value:function(){var e=this.handleEsc;window.removeEventListener("keydown",e)}},{key:"render",value:function(){var e=this.handleClose,t=this.props,a=t.children;t.source;return Object(c.createPortal)(Object(g.jsx)("div",{className:O.a.backDrop,onClick:e,children:Object(g.jsx)("div",{className:O.a.content,children:a})}),document.getElementById("modal-root"))}}]),a}(n.Component);var v={getFetch:function(e){var t="".concat("https://api.openweathermap.org/data/2.5/weather?q=").concat(e,"&units=metric&appid=").concat("b17a2dddb01d7481fea6373f92c2e546");return fetch(t).then((function(e){if(!e.ok)throw alert("No weather found."),new Error("No weather found.");return e.json()})).then((function(e){return e}))}},y=a(11),_=a.n(y),w=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"Kyiv",data:""},e.getData=function(){var t=e.state.search;v.getFetch(t).then((function(t){e.setState({data:t})}))},e.handleSumbit=function(t){t.preventDefault(),e.setState({search:t.target.elements.search.value}),t.target.elements.search.value=""},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.search;t.search!==a&&this.getData()}},{key:"render",value:function(){var e=this.handleChange,t=this.handleSumbit,a=this.state,n=a.data,r=(a.search,n.name),c=n.main,s=n.weather,o=n.wind;return console.log("main",c),console.log("weather",s),Object(g.jsx)(g.Fragment,{children:n&&Object(g.jsxs)("div",{className:_.a.card,children:[Object(g.jsxs)("form",{className:_.a.search,onSubmit:t,children:[Object(g.jsx)("input",{type:"text",className:_.a.searchBar,placeholder:"Search",onChange:e,name:"search"}),Object(g.jsxs)("h2",{className:_.a.city,children:["Weather in ",r]})]}),Object(g.jsxs)("div",{className:_.a.weather,children:[Object(g.jsxs)("h1",{className:_.a.temp,children:[Math.round(c.temp),"\xb0C"]}),Object(g.jsx)("ul",{className:_.a.flex,children:s.map((function(e){console.log(e);var t=e.icon,a=e.description;return Object(g.jsxs)("li",{children:[Object(g.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t,".png"),alt:"icon",className:_.a.icon}),Object(g.jsx)("div",{className:_.a.description,children:a})]},e.id)}))}),Object(g.jsxs)("p",{className:_.a.humidity,children:["Humidity: ",c.humidity,"%"]}),Object(g.jsxs)("p",{className:_.a.wind,children:["Wind speed: ",o.speed," km/h"]})]})]})})}}]),a}(n.Component),k=a(23),N=a.n(k),C=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showWidget:!1},e.toggleWidget=function(){e.setState({showWidget:!e.state.showWidget})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.toggleWidget,t=this.props.children,a=this.state.showWidget;return Object(g.jsx)("header",{className:N.a.header,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("a",{href:"#",className:N.a.logo,children:"Header"}),a&&Object(g.jsx)(x,{toggleModal:e,children:Object(g.jsx)(w,{})}),Object(g.jsx)("button",{className:"mainBtn",onClick:e,children:"show Weather"}),Object(g.jsx)("nav",{children:t})]})})}}]),a}(n.Component),S=a(34),W=a.n(S),q=a(74),M=function(e){var t=e.links;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("ul",{className:W.a.navList,children:t.map((function(e){var t=e.props,a=t.path,n=t.name;return Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:a,children:n})},Object(q.a)())}))})})};var D=function(e){var t=e.children;return Object(g.jsx)("main",{children:t})},E=a(15),L=a.n(E),F=a(73),G=function(e){var t=e.el,a=e.getElem,n=t.src,r=t.alt;return Object(g.jsxs)("li",{children:[Object(g.jsx)("div",{className:L.a.imgWrapper,children:Object(g.jsx)("img",{src:n.tiny,alt:r})}),Object(g.jsx)("div",{className:L.a.imgHover,children:Object(g.jsx)("a",{href:"#",onClick:function(){a(t)},children:"Click Me!"})})]})},A=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,queryValue:"",elem:null},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e.handleChange=function(t){e.setState({queryValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.getQuery)(e.state.queryValue),console.log(t.target.elements.query.value),e.state.queryValue=""},e.getElem=function(t){e.toggleModal(),e.setState({elem:t})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.gallery,t=this.toggleModal,a=this.handleChange,n=this.handleSubmit,r=this.getElem,c=this.state,s=c.showModal,o=c.queryValue,l=c.elem;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("section",{className:L.a.gallery,children:Object(g.jsxs)("div",{className:"container",children:[s&&Object(g.jsx)(x,{toggleModal:t,children:Object(g.jsx)("img",{src:l.src.original,alt:"img"})}),Object(g.jsx)("div",{children:Object(g.jsx)(F.a,{onSubmit:n,children:Object(g.jsxs)(F.a.Group,{children:[Object(g.jsx)(F.a.Control,{size:"lg",type:"text",placeholder:"Search...",name:"query",onChange:a,value:o}),Object(g.jsx)("br",{})]})})}),Object(g.jsx)("ul",{className:L.a.galleryList,children:e.map((function(e){return Object(g.jsx)(G,{el:e,getElem:r},e.id)}))})]})})})}}]),a}(n.Component),B=a(35),U=a(36),H=a(13),I=a.n(H),J=a(75),P=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",phone:"",email:"",show:!1,counter:0},e.handleSubmit=function(t){t.preventDefault();var a={name:e.state.name,phone:e.state.phone};e.props.getFormObject(a)},e.handleChange=function(t){console.log(t.target.name),e.setState(Object(U.a)({},t.target.name,t.target.value))},e.handleClick=function(){e.setState((function(e){return{counter:e.counter+10}})),e.setState((function(e){return{counter:e.counter+10}}))},e}return Object(d.a)(a,[{key:"render",value:function(){console.log("props",this.props),console.log("state",this.state);var e=this.handleClick,t=this.handleSubmit,a=this.handleChange,n=this.props.myProps;return Object(B.a)(this.state),Object(g.jsxs)("section",{className:I.a.contacts,children:[Object(g.jsx)("h2",{className:I.a.title,children:"Contacts"}),Object(g.jsx)("p",{children:n}),Object(g.jsxs)("div",{className:I.a.wrapper,children:[Object(g.jsxs)("div",{className:I.a.contactsList,children:[Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"tel:",children:"050 00 00 000"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"mail:",children:"mail@gmail.com"})})]}),Object(g.jsx)("button",{onClick:e,className:I.a.btn,children:"click"})]}),Object(g.jsx)("div",{className:I.a.contactsForm,children:Object(g.jsxs)(F.a,{onSubmit:t,children:[Object(g.jsxs)(F.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(F.a.Label,{children:"Email address"}),Object(g.jsx)(F.a.Control,{onChange:a,type:"text",name:"name",placeholder:"name"})]}),Object(g.jsxs)(F.a.Group,{controlId:"formBasicPassword",children:[Object(g.jsx)(F.a.Label,{children:"Password"}),Object(g.jsx)(F.a.Control,{onChange:a,type:"tel",name:"phone",placeholder:"phone"})]}),Object(g.jsx)(F.a.Group,{controlId:"formBasicCheckbox",children:Object(g.jsx)(F.a.Check,{type:"checkbox",label:"Check me out"})}),Object(g.jsx)(J.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})]})}}]),a}(r.a.Component);P.defaultProps={};var V=a(37),T=a.n(V),Z=function(){return Object(g.jsx)("footer",{className:T.a.footer,children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("p",{children:["\xa9 \u0412\u0441\u0456 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043d\u0456 ",Object(g.jsx)("span",{children:"CS technology 2021"})]})})})},Q=a(38),z=a(39),K=a(12),R=a.n(K);function Y(){return(Y=Object(h.a)(l.a.mark((function e(t,a){var n,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"563492ad6f917000010000012eb7a26bec714b6cbbd6f346c10047af",R.a.defaults.baseURL="https://api.pexels.com/v1",R.a.defaults.headers.common.Authorization="563492ad6f917000010000012eb7a26bec714b6cbbd6f346c10047af",n="/search?query=".concat(t,"&per_page=6&page=").concat(a),e.next=6,R.a.get(n);case 6:return r=e.sent,e.next=9,r.data;case 9:return c=e.sent,e.next=12,c.photos;case 12:return s=e.sent,e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(e,t){return Y.apply(this,arguments)},$=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"moon",page:1,formObject:null,gallery:[],msg:""},e.getFormObject=function(t){e.setState({formObject:t})},e.getQuery=function(t){console.log(t),e.setState({query:t})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,a,n,r,c,s,o,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.query,n=t.page,!(r=JSON.parse(localStorage.getItem("gallery")))){e.next=5;break}return this.setState((function(){return{gallery:Object(i.a)(r)}})),e.abrupt("return");case 5:return"563492ad6f917000010000012eb7a26bec714b6cbbd6f346c10047af",R.a.defaults.baseURL="https://api.pexels.com/v1",R.a.defaults.headers.common.Authorization="563492ad6f917000010000012eb7a26bec714b6cbbd6f346c10047af",c="/search?query=".concat(a,"&per_page=6&page=").concat(n),e.next=11,R.a.get(c);case 11:return s=e.sent,e.next=14,s.data;case 14:return o=e.sent,e.next=17,o.photos;case 17:h=e.sent,this.setState({gallery:Object(i.a)(h)});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){var a=this;console.log("\u042f \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u0441\u044f",this.state.query);var n=this.state,r=n.query,c=n.page,s=n.gallery;r!==t.query&&X(r,c).then((function(e){console.log(e),e.length?a.setState((function(t){return{gallery:[].concat(Object(i.a)(t.gallery),Object(i.a)(e))}})):(a.setState({msg:"Nothing to show by your request"}),alert(a.state.msg))})).catch((function(e){console.log(e)})),s!==t.gallery&&(console.log(this.state.gallery),localStorage.setItem("gallery",JSON.stringify(this.state.gallery)))}},{key:"componentWillUnmount",value:function(){console.log("\u042f \u043f\u043e\u0448\u0435\u043b \u0441\u043f\u0430\u0442\u044c")}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.msg,n=this.getQuery;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(C,{children:Object(g.jsx)(M,{links:z})}),Object(g.jsxs)(D,{db:Q,children:[a&&Object(g.jsx)("p",{children:a}),Object(g.jsx)(A,{gallery:t,getQuery:n})]}),Object(g.jsx)(Z,{})]})}}]),a}(n.Component);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)($,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.4ce2d099.chunk.js.map