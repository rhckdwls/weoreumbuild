"use strict";(self.webpackChunkweoreum_ts=self.webpackChunkweoreum_ts||[]).push([[804],{78505:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(89583),l=(0,n(35366).Z)("footer",{target:"eqk1h6s0"})({name:"19tadqx",styles:"background-color:#333;width:100%;min-height:10vh;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:2rem;color:#fff"}),i=function(){return r.createElement(l,null,r.createElement("p",null,"Jin"," ",r.createElement("a",{href:"https://github.com/rhckdwls/WeOreumTs",target:"_blank"},r.createElement(a.hJX,null))))}},51804:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(38678),a=n(21670),l=n(67294),i=n(11358),o=n.n(i),c=n(5977),u=n(76547),s=n(35366),p=(0,s.Z)("div",{target:"enjm9jy3"})({name:"9ay5j6",styles:"display:flex;width:100%;height:100vh;margin:0 auto;justify-content:center;align-items:center;flex-direction:column"}),m=(0,s.Z)("div",{target:"enjm9jy2"})({name:"1oejs4c",styles:"background:url(img/bg1.jpg) center no-repeat;background-size:cover;width:100%;height:400px;display:flex;align-items:center;justify-content:center;flex-direction:column;img{width:570px;height:400px;}"}),d=(0,s.Z)("div",{target:"enjm9jy1"})({name:"1il02uw",styles:"display:flex;flex-direction:column;width:100%;margin:0 auto;justify-content:center;align-items:center;& .pagination{display:flex;justify-content:center;margin-top:15px;cursor:pointer;}&.page-selection{width:48px;height:30px;color:#cccccb;}& ul{list-style:none;padding:0;&.pagination li{display:inline-block;width:30px;height:30px;border:1px solid #e2e2e2;display:flex;justify-content:center;align-items:center;font-size:1rem;}&.pagination li:first-child{border-radius:5px 0 0 5px;}&.pagination li:last-child{border-radius:0 5px 5px 0;}&.pagination li a{text-decoration:none;color:#091118;font-size:1rem;}&.pagination li.active a{color:white;}&.pagination li.active{background-color:#337ab7;}&.pagination li a:hover,&.pagination li a.active{color:blue;}}p{margin-top:30px;font-size:25px;margin-bottom:30px;span{color:#c73329;}}table{border:none;width:1000px;height:300px;text-align:center;thead{border-bottom:solid 2px #091118;font-size:18px;}td{padding:5px;}tr{cursor:pointer;&:hover{background-color:#e2e6ae;}}}"}),g=(0,s.Z)("div",{target:"enjm9jy0"})({name:"1rppq1n",styles:"font-size:70px;margin-top:20px"}),f=n(78505);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=function(){var e,t=(0,c.k6)(),n=h((0,l.useState)(u.slice(0,90)),2),i=n[0],s=(n[1],h((0,l.useState)(0),2)),x=s[0],v=s[1],w=h((0,r.Z)(""),3),E=w[0],j=w[1],C=(w[2],h((0,l.useState)(10),2)),k=C[0],S=(C[1],k),L=x*S,A=function(e){if(Array.isArray(e))return b(e)}(e=i.filter((function(e){return""===E||e.title.toLowerCase().includes(E.toLowerCase())||e.place.toLowerCase().includes(E.toLowerCase())?e:void 0})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),Z=A.slice(L,L+S).filter((function(e){return""===E||e.title.toLowerCase().includes(E.toLowerCase())||e.place.toLowerCase().includes(E.toLowerCase())?e:void 0})).map((function(e,n){return l.createElement("tr",{onClick:function(){t.push("/searchoreum/"+e.id)}},l.createElement("th",null,e.id),l.createElement("td",null,e.title),l.createElement("td",null,e.place))})),z=Math.ceil(A.length/S);return l.createElement(l.Fragment,null,l.createElement(p,null,l.createElement(m,null,l.createElement("img",{src:"img/map.png",alt:"map"}),l.createElement(a.II,{style:{width:"400px"},type:"text",placeholder:"오름검색 / 이름,주소",className:"form-control ",onChange:j,value:E})),l.createElement(d,null,l.createElement("p",null,"총 ",l.createElement("span",null,A.length,"개")," 오름이 검색되었습니다."),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{scope:"col"},"No"),l.createElement("th",{scope:"col"},"이름"),l.createElement("th",{scope:"col"},"주소"))),l.createElement("tbody",null,Z,0===A.length&&l.createElement(g,null,"검색 결과가 없습니다."))),l.createElement(o(),{pageCount:z,previousLabel:"<",nextLabel:">",marginPagesDisplayed:9,onPageChange:function(e){var t=e.selected;v(t)},containerClassName:"pagination",activeClassName:"page-item page-link",previousClassName:"page-link page-item",nextClassName:"page-link page-item"}))),l.createElement(f.Z,null))}}}]);