(this["webpackJsonpfe-25-react-lesson-1"]=this["webpackJsonpfe-25-react-lesson-1"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={title:"Contacts_title__38Eqf",wrapper:"Contacts_wrapper__2o3f0",contactsForm:"Contacts_contactsForm__29ALy",btn:"Contacts_btn__pxRjU"}},function(e,t,n){e.exports={gallery:"Gallery_gallery__3GbIp",galleryList:"Gallery_galleryList__1YsL1",imgWrapper:"Gallery_imgWrapper__1tSYP",imgHover:"Gallery_imgHover__3yUjq"}},,,,,,function(e,t,n){e.exports={mainColor:"white",header:"Header_header__287Zc"}},function(e,t,n){e.exports={backDrop:"Modal_backDrop__1sfVg",content:"Modal_content__2D7n1"}},function(e){e.exports=JSON.parse('[{"id":"1","props":{"name":"home","path":"/"}},{"id":"2","props":{"name":"about","path":"/about"}},{"id":"3","props":{"name":"contacts","path":"/contacts"}}]')},,,function(e,t,n){e.exports={navList:"Navigation_navList__1PDpK"}},,,function(e,t,n){e.exports={footer:"Footer_footer__3Osec"}},function(e){e.exports=JSON.parse('{"one":"One","two":"two","three":"three"}')},,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),s=(n(34),n(14)),l=n(6),i=n(7),h=n(9),u=n(8),j=(n(35),n(36),n(17)),d=n.n(j),p=n(1),b=function(e){var t=e.children;return Object(p.jsx)("header",{className:d.a.header,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("a",{href:"#",className:d.a.logo,children:"Header"}),Object(p.jsx)("nav",{children:t})]})})},m=n(22),g=n.n(m),O=n(44),f=function(e){var t=e.links;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{className:g.a.navList,children:t.map((function(e){var t=e.props,n=t.path,a=t.name;return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:n,children:a})},Object(O.a)())}))})})};var x=function(e){var t=e.children;return Object(p.jsx)("main",{children:t})},v=n(11),y=n.n(v),_=n(43),C=n(18),k=n.n(C),w=(document.getElementById("modal-root"),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e.handleClose=function(t){console.log("target",t.target),console.log("currentTarget",t.currentTarget);var n=e.props.toggleModal;console.log(n),t.target===t.currentTarget&&n()},e.handleEsc=function(t){console.log(t.code);var n=e.props.toggleModal;console.log(n),"Escape"===t.code&&n()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.handleEsc;window.addEventListener("keydown",e)}},{key:"componentWillUnmount",value:function(){var e=this.handleEsc;window.removeEventListener("keydown",e)}},{key:"render",value:function(){var e=this.handleClose,t=this.props,n=t.children,a=t.source;return Object(r.createPortal)(Object(p.jsx)("div",{className:k.a.backDrop,onClick:e,children:Object(p.jsxs)("div",{className:k.a.content,children:[Object(p.jsx)("p",{children:"Hello World"}),Object(p.jsx)("img",{src:a,alt:""}),n]})}),document.getElementById("modal-root"))}}]),n}(a.Component)),N=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={showModal:!1,queryValue:"",elem:null},e.toggleModal=function(){console.log("toggle"),e.setState({showModal:!e.state.showModal})},e.handleChange=function(t){console.log(t.target.value),e.setState({queryValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.getQuery)(e.state.queryValue),console.log(t.target.elements.query.value),e.state.queryValue=""},e.getElem=function(t){e.toggleModal(),e.setState({elem:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.gallery,t=this.toggleModal,n=this.handleChange,a=this.handleSubmit,c=this.getElem,r=this.state,o=r.showModal,s=r.queryValue,l=r.elem;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("section",{className:y.a.gallery,children:Object(p.jsxs)("div",{className:"container",children:[o&&Object(p.jsx)(w,{toggleModal:t,source:l.src.tiny,children:Object(p.jsx)("p",{children:"Everybody"})}),Object(p.jsx)("button",{className:"mainBtn",onClick:t,children:"show modal"}),Object(p.jsx)("div",{children:Object(p.jsx)(_.a,{onSubmit:a,children:Object(p.jsxs)(_.a.Group,{children:[Object(p.jsx)(_.a.Control,{size:"lg",type:"text",placeholder:"Search...",name:"query",onChange:n,value:s}),Object(p.jsx)("br",{})]})})}),Object(p.jsx)("ul",{className:y.a.galleryList,children:e.map((function(e){return Object(p.jsxs)("li",{children:[Object(p.jsx)("div",{className:y.a.imgWrapper,children:Object(p.jsx)("img",{src:e.src.tiny,alt:e.alt})}),Object(p.jsx)("div",{className:y.a.imgHover,children:Object(p.jsx)("a",{href:"#",onClick:function(){c(e)},children:"Click Me!"})})]},Object(O.a)())}))})]})})})}}]),n}(a.Component),S=n(23),E=n(24),M=n(10),q=n.n(M),L=n(45),D=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",phone:"",email:"",show:!1,counter:0},e.handleSubmit=function(t){t.preventDefault();var n={name:e.state.name,phone:e.state.phone};e.props.getFormObject(n)},e.handleChange=function(t){console.log(t.target.name),e.setState(Object(E.a)({},t.target.name,t.target.value))},e.handleClick=function(){e.setState((function(e){return{counter:e.counter+10}})),e.setState((function(e){return{counter:e.counter+10}}))},e}return Object(i.a)(n,[{key:"render",value:function(){console.log("props",this.props),console.log("state",this.state);var e=this.handleClick,t=this.handleSubmit,n=this.handleChange,a=this.props.myProps;return Object(S.a)(this.state),Object(p.jsxs)("section",{className:q.a.contacts,children:[Object(p.jsx)("h2",{className:q.a.title,children:"Contacts"}),Object(p.jsx)("p",{children:a}),Object(p.jsxs)("div",{className:q.a.wrapper,children:[Object(p.jsxs)("div",{className:q.a.contactsList,children:[Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"tel:",children:"050 00 00 000"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"mail:",children:"mail@gmail.com"})})]}),Object(p.jsx)("button",{onClick:e,className:q.a.btn,children:"click"})]}),Object(p.jsx)("div",{className:q.a.contactsForm,children:Object(p.jsxs)(_.a,{onSubmit:t,children:[Object(p.jsxs)(_.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(_.a.Label,{children:"Email address"}),Object(p.jsx)(_.a.Control,{onChange:n,type:"text",name:"name",placeholder:"name"})]}),Object(p.jsxs)(_.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(_.a.Label,{children:"Password"}),Object(p.jsx)(_.a.Control,{onChange:n,type:"tel",name:"phone",placeholder:"phone"})]}),Object(p.jsx)(_.a.Group,{controlId:"formBasicCheckbox",children:Object(p.jsx)(_.a.Check,{type:"checkbox",label:"Check me out"})}),Object(p.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})]})}}]),n}(c.a.Component);D.defaultProps={};var G=n(25),F=n.n(G),A=function(){return Object(p.jsx)("footer",{className:F.a.footer,children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("p",{children:["\xa9 \u0412\u0441\u0456 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043d\u0456 ",Object(p.jsx)("span",{children:"CS technology 2021"})]})})})},B=n(26),I=n(19),P=n(20),H=n.n(P),V=n(27);function W(){return(W=Object(V.a)(H.a.mark((function e(t,n){var a,c,r,o,s,l,i,h,u,j=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.length>2&&void 0!==j[2]?j[2]:12,c="563492ad6f917000010000012eb7a26bec714b6cbbd6f346c10047af\n",r="https://api.pexels.com/v1",o="/search?query=".concat(t,"&per_page=").concat(a,"&page=").concat(n),s=r+o,l={method:"GET",headers:{Authorization:c}},e.next=8,fetch(s,l);case 8:return i=e.sent,e.next=11,i.json();case 11:return h=e.sent,u=h.photos,e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e,t){return W.apply(this,arguments)};console.log(I);var Q=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={query:"moon",page:1,formObject:null,gallery:[]},e.getFormObject=function(t){e.setState({formObject:t})},e.getQuery=function(t){e.setState({query:t})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state,n=t.query,a=t.page;J(n,a).then((function(t){console.log(t),e.setState({gallery:Object(s.a)(t)})})).catch((function(e){}))}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state,c=a.query,r=a.page;c!==t.query&&J(c,r).then((function(e){console.log(e),n.setState((function(t){return{gallery:[].concat(Object(s.a)(t.gallery),Object(s.a)(e))}}))})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state.gallery,t=this.getQuery;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{children:Object(p.jsx)(f,{links:I})}),Object(p.jsx)(x,{db:B,children:Object(p.jsx)(N,{gallery:e,getQuery:t})}),Object(p.jsx)(A,{})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.605acebd.chunk.js.map