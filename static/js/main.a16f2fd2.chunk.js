(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(7),o=n.n(s),c=(n(12),n(2)),a=n(3),i=n(5),h=n(4),u=(n(13),n(0)),l=function(e){e.robots;throw new Error("Ada yang salah bang")},b=function(e){var t=e.searchChange;return Object(u.jsx)("section",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){return Object(u.jsx)("section",{style:{overflowY:"scroll",border:"2px solid #000",height:"77vh"},children:e.children})},d=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oops. Error(s) found. I'll fix it."}):this.props.children}}]),n}(r.Component),f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots?Object(u.jsx)("h1",{children:"Loading"}):Object(u.jsxs)("section",{className:"tc",children:[Object(u.jsx)("h1",{children:"RoboFriends"}),Object(u.jsx)(d,{children:Object(u.jsx)(b,{searchChange:this.onSearchChange})}),Object(u.jsx)(j,{children:Object(u.jsx)(d,{children:Object(u.jsx)(l,{robots:t})})})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),o(e),c(e)}))};n(15);o.a.render(Object(u.jsx)(f,{}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.a16f2fd2.chunk.js.map