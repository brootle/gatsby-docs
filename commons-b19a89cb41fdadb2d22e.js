(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,i=r("q1tI"),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},Bl7J:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("q1tI"),i=r.n(n);function a(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("main",null,t))}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Qencode Documentation","description":"Qencode Documentation","author":"Qencode"}}}}')},"HAE/":function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},Oyvg:function(e,t,r){var n=r("dyZX"),i=r("Xbzi"),a=r("hswa").f,o=r("kJMx").f,s=r("quPj"),c=r("C/va"),u=n.RegExp,l=u,d=u.prototype,f=/a/g,p=/a/g,y=new u(f)!==f;if(r("nh4g")&&(!y||r("eeVq")((function(){return p[r("K0xU")("match")]=!1,u(f)!=f||u(p)==p||"/a/i"!=u(f,"i")})))){u=function(e,t){var r=this instanceof u,n=s(e),a=void 0===t;return!r&&n&&e.constructor===u&&a?e:i(y?new l(n&&!a?e.source:e,t):l((n=e instanceof u)?e.source:e,n&&a?c.call(e):t),r?this:d,u)};for(var m=function(e){e in u||a(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},g=o(l),w=0;g.length>w;)m(g[w++]);d.constructor=u,u.prototype=d,r("KroJ")(n,"RegExp",u)}r("elZq")("RegExp")},TYdL:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzEuNTIgNDEuNjEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMzE2ZmVhO308L3N0eWxlPjwvZGVmcz48dGl0bGU+UV9Mb2dvX1RleHQ8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYuODcsMjcuODNjMC0xMS40Myw4LjIyLTIwLjM4LDIwLjY2LTIwLjM4czIwLjY2LDksMjAuNjYsMjAuMzhhMjEuNzMsMjEuNzMsMCwwLDEtMi45MiwxMWwzLjQ5LDNMNDMuMDcsNDguNWwtMy44My0zLjM4YTIxLjc0LDIxLjc0LDAsMCwxLTExLjcxLDMuMjFDMTUuMDksNDguMzMsNi44NywzOS40Myw2Ljg3LDI3LjgzWm0xMCwwYzAsNi42NSw0LjM5LDExLjQ5LDEwLjY0LDExLjQ5YTEwLjEzLDEwLjEzLDAsMCwwLDQuMjItLjg1TDI4LjQ5LDM1LjZsNS41Ny02LjUzLDMuNDQsM2ExNC42NCwxNC42NCwwLDAsMCwuNjctNC4yM2MwLTYuNDctNC4zMy0xMS4zNy0xMC42NC0xMS4zN1MxNi44OSwyMS4zNiwxNi44OSwyNy44M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02Ljg3IC02Ljg5KSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYwLjU4LDM1LjI3Yy4yMywyLjY0LDIuNzYsNC44OSw2LjI1LDQuODlBNy42Miw3LjYyLDAsMCwwLDczLDM3bDYuMiw0Ljc5Yy0uODUsMS43NC00LjksNi41My0xMi41Niw2LjUzQzU2LjkyLDQ4LjMzLDUxLDQxLjYzLDUxLDMyLjlzNS44Ni0xNS42LDE0LjUzLTE1LjZjOS40LDAsMTQuNTMsNiwxNC41MywxNi4xMSwwLC41NiwwLDEuMTgtLjA2LDEuODZabS4yOC02aDkuNTdhNC41Myw0LjUzLDAsMCwwLTQuNzgtNC40QTQuNjgsNC42OCwwLDAsMCw2MC44NiwyOS4zWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuODcgLTYuODkpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAxLjEyLDMwYzAtMi43Ni0xLjYzLTQuMjItMy44OS00LjIyYTMuOTEsMy45MSwwLDAsMC00LDQuMjJWNDcuNmgtOS40VjE4SDkzdjNhOC44Myw4LjgzLDAsMCwxLDcuNDMtMy43OGM5LjIzLDAsMTAuMTMsNy44OSwxMC4xMywxMy45MVY0Ny42aC05LjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi44NyAtNi44OSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMzYuNDIsMzhsMi40OCw3LjcxYTE1LjQsMTUuNCwwLDAsMS04LjY3LDIuNjVjLTkuNCwwLTE2LTYuNDItMTYtMTUuNDlzNi44Ny0xNS41NCwxNi0xNS41NEExNC45MywxNC45MywwLDAsMSwxMzksMjBMMTM2LjQyLDI4YTkuMjcsOS4yNywwLDAsMC01LjkxLTIuMmMtNC40NSwwLTYuOTMsMy4xLTYuOTMsN2E2Ljg5LDYuODksMCwwLDAsNy4yNyw3LjI2QTkuMTYsOS4xNiwwLDAsMCwxMzYuNDIsMzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi44NyAtNi44OSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTUuNTEsMTcuM2M5LjUxLDAsMTYuMjEsNi41MywxNi4yMSwxNS40OXMtNi44NiwxNS41NC0xNi4yMSwxNS41NC0xNi02LjUzLTE2LTE1LjQzUzE0Ni4zOSwxNy4zLDE1NS41MSwxNy4zWm0wLDIyLjc1YzMuODgsMCw2LjgxLTMsNi44MS03LjI2cy0zLTcuMjEtNi44MS03LjIxLTYuNjUsMy02LjY1LDcuMzJTMTUxLjY4LDQwLjA1LDE1NS41MSw0MC4wNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02Ljg3IC02Ljg5KSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5Ni42MSw0NS4yOWExMS4xNCwxMS4xNCwwLDAsMS04LDNjLTguNTEsMC0xNC40OC02LjQyLTE0LjQ4LTE1LjQ5czUuNDEtMTUuNTQsMTQtMTUuNTRhMTAuOTMsMTAuOTMsMCwwLDEsNy44OCwzVjYuODloOS40VjQ3LjZoLTguNzhabS02LjctMTkuNzFjLTMuODMsMC02LjM2LDMtNi4zNiw3LjMyczIuNTksNy4yMSw2LjM2LDcuMjFjNC4wNSwwLDYuMzYtMy4yNyw2LjM2LTcuMjFDMTk2LjI3LDI4LjIzLDE5My42MywyNS41OCwxODkuOTEsMjUuNThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi44NyAtNi44OSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMTksMzUuMjdjLjIzLDIuNjQsMi43Niw0Ljg5LDYuMjUsNC44OWE3LjY2LDcuNjYsMCwwLDAsNi4yLTMuMTVsNi4xOSw0Ljc5Yy0uODUsMS43NC00LjksNi41My0xMi41Niw2LjUzLTkuNzQsMC0xNS43MS02LjctMTUuNzEtMTUuNDNzNS44Ni0xNS42LDE0LjUzLTE1LjZjOS40LDAsMTQuNTMsNiwxNC41MywxNi4xMSwwLC41NiwwLDEuMTgtLjA2LDEuODZabS4yOC02aDkuNThBNC41NCw0LjU0LDAsMCwwLDIyNCwyNC45LDQuNjgsNC42OCwwLDAsMCwyMTkuMjQsMjkuM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02Ljg3IC02Ljg5KSIvPjwvc3ZnPg=="},URBP:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"totalCount":25,"edges":[{"node":{"id":"def00efc-4f0f-5b88-a1fe-d9dc5511759f","frontmatter":{"post_title":"How to start","dir":"How to start","weight":null},"fields":{"slug":"/api-reference/introduction/how-to-start/"}}},{"node":{"id":"ca9822b1-b075-51b8-8f1e-806fed372b8a","frontmatter":{"post_title":"Introduction","dir":"Introduction","weight":null},"fields":{"slug":"/api-reference/introduction/"}}},{"node":{"id":"1fe874dd-063a-5156-8139-f1fc38cb89e0","frontmatter":{"post_title":"More Details","dir":"More Details","weight":null},"fields":{"slug":"/tutorials/storage/more-details/"}}},{"node":{"id":"a23e06b2-382e-5a54-892e-149b6a347a41","frontmatter":{"post_title":"Watermarks","dir":"Watermarks","weight":null},"fields":{"slug":"/tutorials/transcoding/watermarks/"}}},{"node":{"id":"953ed8c3-1407-52f9-9b61-2bdea9c34845","frontmatter":{"post_title":"Output names and folders","dir":"Output names and folders","weight":null},"fields":{"slug":"/tutorials/transcoding/outputs-names-and-folders/"}}},{"node":{"id":"522a68d1-a2de-5e73-886e-b771ad837966","frontmatter":{"post_title":"Launch a player","dir":"Launch a player","weight":null},"fields":{"slug":"/tutorials/videoplayer/launch-a-player/"}}},{"node":{"id":"0d3a60aa-6d24-5687-afbf-852863d8c968","frontmatter":{"post_title":"FTP","dir":"FTP","weight":null},"fields":{"slug":"/tutorials/storage/third-party-storage/ftp/"}}},{"node":{"id":"97d226f5-8a83-54be-82cc-496b593f8d5e","frontmatter":{"post_title":"Google Cloud","dir":"Google Cloud","weight":null},"fields":{"slug":"/tutorials/storage/third-party-storage/google-cloud/"}}},{"node":{"id":"f14bf789-5a7d-56c6-a05d-63967b6f2df9","frontmatter":{"post_title":"Third-Party Storage","dir":"Third-Party Storage","weight":null},"fields":{"slug":"/tutorials/storage/third-party-storage/"}}},{"node":{"id":"f822ab59-56b9-5f57-818c-6d318267c677","frontmatter":{"post_title":"Microsoft Azure","dir":"Microsoft Azure","weight":null},"fields":{"slug":"/tutorials/storage/third-party-storage/microsoft-azure/"}}},{"node":{"id":"62430422-913b-5e09-bc8a-e3b213abf2a6","frontmatter":{"post_title":"Bucket Limits","dir":"Bucket Limits","weight":null},"fields":{"slug":"/tutorials/storage/qencode-storage/bucket-limits/"}}},{"node":{"id":"b0e5ae87-5b6f-5b8f-8a72-bc7946fbe720","frontmatter":{"post_title":"Create Storage","dir":"Create Storage","weight":null},"fields":{"slug":"/tutorials/storage/qencode-storage/create-storage/"}}},{"node":{"id":"4b363a40-19d5-5a1d-9803-3b21094fd93e","frontmatter":{"post_title":"Qencode Storage","dir":"Qencode Storage","weight":null},"fields":{"slug":"/tutorials/storage/qencode-storage/"}}},{"node":{"id":"2ecf47cb-f48e-5a7f-98c7-b3ad197ae1cb","frontmatter":{"post_title":"Super-Storage","dir":"Super-Storage","weight":null},"fields":{"slug":"/tutorials/storage/super-storage/"}}},{"node":{"id":"4e1a5aa8-f20a-58f4-8118-b5575534a3c6","frontmatter":{"post_title":"New Storage","dir":"New Storage","weight":null},"fields":{"slug":"/tutorials/storage/super-storage/new-storage/"}}},{"node":{"id":"11ffb515-1f86-5844-9aee-2774bdd22546","frontmatter":{"post_title":"Welcome to Customization","dir":"Welcome to Customization","weight":null},"fields":{"slug":"/tutorials/videoplayer/customization/"}}},{"node":{"id":"237e8e89-18a8-5bf6-852d-81784246004c","frontmatter":{"post_title":"Player size","dir":"Player size","weight":null},"fields":{"slug":"/tutorials/videoplayer/customization/player-size/"}}},{"node":{"id":"4922b716-efa6-55ce-a578-740c7a32ddd7","frontmatter":{"post_title":"API Reference","dir":"API Reference","weight":4000},"fields":{"slug":"/api-reference/"}}},{"node":{"id":"fa7b519e-6abf-5e13-8786-213ddf441e2f","frontmatter":{"post_title":"Tutorials","dir":"Tutorials","weight":3000},"fields":{"slug":"/tutorials/"}}},{"node":{"id":"02306fc5-d6d8-5db6-a2fe-d7bf365d81c7","frontmatter":{"post_title":"Welcome to Transcoding","dir":"Transcoding","weight":3000},"fields":{"slug":"/tutorials/transcoding/"}}},{"node":{"id":"13c0d287-8cf8-53f5-af86-d3ea0ded583d","frontmatter":{"post_title":"FAQ","dir":"FAQ","weight":2000},"fields":{"slug":"/faq/"}}},{"node":{"id":"7df091ab-8a0e-5ef1-a1af-f724601f3b39","frontmatter":{"post_title":"Storage","dir":"Storage","weight":2000},"fields":{"slug":"/tutorials/storage/"}}},{"node":{"id":"8cf5859b-a438-5f34-b5cf-46295be83747","frontmatter":{"post_title":"Support","dir":"Support","weight":1000},"fields":{"slug":"/support/"}}},{"node":{"id":"4b4957d3-97a9-5a0f-b239-7f7bbaabeb23","frontmatter":{"post_title":"Welcome to Videoplayer","dir":"Videoplayer","weight":1000},"fields":{"slug":"/tutorials/videoplayer/"}}},{"node":{"id":"852f2a10-71cc-5acf-bc9a-b31ddc0fe571","frontmatter":{"post_title":"Main","dir":"","weight":1},"fields":{"slug":"/"}}}]}}}')},VQ3a:function(e,t,r){e.exports={menu:"sidebar-module--menu--18SQX",header:"sidebar-module--header--3RnzZ",logo:"sidebar-module--logo--3QUts",content:"sidebar-module--content--2nNbz",doc:"sidebar-module--doc--1_isx",active:"sidebar-module--active--19b7C",section:"sidebar-module--section--2Nlz7",categories:"sidebar-module--categories--390CN",category:"sidebar-module--category--3ghJ5",sections:"sidebar-module--sections--BEvxW",posts:"sidebar-module--posts--344_R"}},ZhWT:function(e,t,r){r("SRfc"),r("RW0V"),r("a1Th"),r("h7Nl"),r("OEbY"),r("Oyvg"),r("LK8F"),r("T39b"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("9AAn");var n="undefined"!=typeof Element,i="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var s,c,u,l;if(Array.isArray(t)){if((s=t.length)!=r.length)return!1;for(c=s;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(i&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!r.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!e(c.value[1],r.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!r.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((s=t.length)!=r.length)return!1;for(c=s;0!=c--;)if(t[c]!==r[c])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((s=(u=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(r,u[c]))return!1;if(n&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!t.$$typeof)&&!e(t[u[c]],r[u[c]]))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},h7Nl:function(e,t,r){var n=Date.prototype,i=n.toString,a=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("KroJ")(n,"toString",(function(){var e=a.call(this);return e==e?i.call(this):"Invalid Date"}))},pMgH:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r("KKXr"),r("f3/d"),r("Z2Ku"),r("L9s1");var n=r("URBP"),i=r("q1tI"),a=r.n(i),o=r("Wbzz"),s=r("TYdL"),c=r.n(s),u=r("VQ3a"),l=r.n(u);function d(){var e=n.data;var t=[],r=[],i=e.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.push(t.fields.slug),{url:t.fields.slug,name:t.frontmatter.dir}}));i.forEach((function(e){var r=e.url,n=e.name,i=r.slice(1,-1).split("/");1===i.length&&t.push({name:n,dir:i[0],categories:[]})})),i.forEach((function(e){var r=e.url,n=e.name,i=r.slice(1,-1).split("/");2===i.length&&t.forEach((function(e,r){var a=e.dir;i[0]===a&&t[r].categories.push({name:n,dir:i[1],sections:[],posts:[]})}))})),i.forEach((function(e){var n=e.url,a=e.name,o=n.slice(1,-1).split("/");if(3===o.length)if(function(e,t){var r=-1;return t.forEach((function(t){t.includes(e)&&r++})),!r}(n,r))t.forEach((function(e,r){var n=e.dir;o[0]===n&&t[r].categories.forEach((function(e){e.dir===o[1]&&e.posts.push({name:a,dir:o[2]})}))}));else{var s;s=function(e,t){var r=t.map((function(e){return{dir:e.url,name:e.name}}));return r=(r=r.filter((function(t){var r=t.dir;return r.includes(e)&&r!==e}))).map((function(e){var t=e.dir,r=e.name;return{dir:t=t.slice(1,-1).split("/")[3],name:r}}))}(n,i),t.forEach((function(e,r){var n=e.dir;o[0]===n&&t[r].categories.forEach((function(e){e.dir===o[1]&&e.sections.push({name:a,dir:o[2],posts:s})}))}))}}));var s=(t=t.filter((function(e){return""!==e.dir}))).map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(o.Link,{to:"/"+e.dir+"/",className:l.a.doc,activeClassName:l.a.active,partiallyActive:!0},a.a.createElement("img",{src:Object(o.withPrefix)("/images/docs/"+e.dir+".svg"),alt:e.dir}),a.a.createElement("div",null,e.name)),a.a.createElement("ul",{className:l.a.section+" "+l.a.categories},e.categories.map((function(t,r){return a.a.createElement("li",{key:r},a.a.createElement(o.Link,{to:"/"+e.dir+"/"+t.dir+"/",activeClassName:l.a.active,className:l.a.category,partiallyActive:!0},t.name),a.a.createElement("ul",{className:l.a.section+" "+l.a.sections},t.sections.map((function(r,n){return a.a.createElement("li",{key:n},a.a.createElement(o.Link,{to:"/"+e.dir+"/"+t.dir+"/"+r.dir+"/",activeClassName:l.a.active,partiallyActive:!0},r.name),a.a.createElement("ul",{className:l.a.section+" "+l.a.posts},r.posts.map((function(n,i){return a.a.createElement("li",{key:i},a.a.createElement(o.Link,{to:"/"+e.dir+"/"+t.dir+"/"+r.dir+"/"+n.dir+"/",activeClassName:l.a.active},n.name))}))))})),t.posts.map((function(r,n){return a.a.createElement("li",{key:n},a.a.createElement(o.Link,{to:"/"+e.dir+"/"+t.dir+"/"+r.dir+"/",activeClassName:l.a.active},r.name))}))))}))))}));return a.a.createElement("div",{className:l.a.menu},a.a.createElement("div",{className:l.a.header},a.a.createElement(o.Link,{to:"/"},a.a.createElement("img",{className:l.a.logo,src:c.a,alt:"Qencode"}))),a.a.createElement("nav",{className:l.a.content},a.a.createElement("ul",null,s)))}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return me}));r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,i,a,o,s=r("17x9"),c=r.n(s),u=r("8+s/"),l=r.n(u),d=r("ZhWT"),f=r.n(d),p=r("q1tI"),y=r.n(p),m=r("MgzW"),g=r.n(m),w="bodyAttributes",h="htmlAttributes",L="titleAttributes",M={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(M).map((function(e){return M[e]})),"charset"),T="cssText",N="href",j="http-equiv",v="innerHTML",S="itemprop",C="name",E="property",D="rel",O="src",x="target",A={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},z="defaultTitle",I="defer",k="encodeSpecialCharacters",Y="onChangeClientState",P="titleTemplate",R=Object.keys(A).reduce((function(e,t){return e[A[t]]=t,e}),{}),Q=[M.NOSCRIPT,M.SCRIPT,M.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},B=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=X(e,M.TITLE),r=X(e,P);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,z);return t||n||void 0},q=function(e){return X(e,Y)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[M.BASE]})).map((function(e){return e[M.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},V=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],c=s.toLowerCase();-1===t.indexOf(c)||r===D&&"canonical"===e[r].toLowerCase()||c===D&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==v&&s!==T&&s!==S||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],c=g()({},n[s],i[s]);n[s]=c}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;ce(M.BODY,n),ce(M.HTML,i),se(d,f);var p={baseTag:ue(M.BASE,r),linkTags:ue(M.LINK,a),metaTags:ue(M.META,o),noscriptTags:ue(M.NOSCRIPT,s),scriptTags:ue(M.SCRIPT,u),styleTags:ue(M.STYLE,l)},y={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,y,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(M.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=a.indexOf(c);-1!==l&&a.splice(l,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(M.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===v)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute("data-react-helmet","true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[A[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case M.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,i=de(r,n),[y.a.createElement(M.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=le(r),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+B(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+B(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case w:case h:return{toComponent:function(){return de(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=A[e]||e;if(r===v||r===T){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),y.a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===v||e===T)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+B(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===Q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:fe(M.BASE,t,n),bodyAttributes:fe(w,r,n),htmlAttributes:fe(h,i,n),link:fe(M.LINK,a,n),meta:fe(M.META,o,n),noscript:fe(M.NOSCRIPT,s,n),script:fe(M.SCRIPT,c,n),style:fe(M.STYLE,u,n),title:fe(M.TITLE,{title:d,titleAttributes:f},n)}},ye=l()((function(e){return{baseTag:K([N,x],e),bodyAttributes:J(w,e),defer:X(e,I),encode:X(e,k),htmlAttributes:J(h,e),linkTags:V(M.LINK,[D,N],e),metaTags:V(M.META,[C,b,j,E,S],e),noscriptTags:V(M.NOSCRIPT,[v],e),onChangeClientState:q(e),scriptTags:V(M.SCRIPT,[O,v],e),styleTags:V(M.STYLE,[T],e),title:G(e),titleAttributes:J(L,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),pe)((function(){return null})),me=(i=ye,o=a=function(e){function t(){return F(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case M.SCRIPT:case M.NOSCRIPT:return{innerHTML:t};case M.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case M.TITLE:return H({},i,((t={})[n.type]=o,t.titleAttributes=H({},a),t));case M.BODY:return H({},i,{bodyAttributes:H({},a)});case M.HTML:return H({},i,{htmlAttributes:H({},a)})}return H({},i,((r={})[n.type]=H({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return y.a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(Z(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case M.LINK:case M.META:case M.NOSCRIPT:case M.SCRIPT:case M.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Z(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),y.a.createElement(i,n)},_(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(y.a.Component),a.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("EH9Q"),i=r("q1tI"),a=r.n(i),o=r("qhky");function s(e){var t=e.description,r=e.lang,i=e.meta,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(i)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-b19a89cb41fdadb2d22e.js.map