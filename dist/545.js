"use strict";(self.webpackChunkweoreum_ts=self.webpackChunkweoreum_ts||[]).push([[545],{34545:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var o=n(80509),l=n(17354),r=n(38678),a=n(32951),c=n(35366),i=(0,c.Z)("div",{target:"e19ncw41"})({name:"90qzpz",styles:"display:flex;flex-wrap:wrap;height:calc(100vh - 70px);flex-flow:column;position:relative"}),u=(0,c.Z)("header",{target:"e19ncw40"})({name:"it219l",styles:"height:62px;display:flex;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);border-top:solid 1px rgba(1, 1, 1, 0.2);padding:20px 16px 20px 20px;font-weight:bold;align-items:center;& .header-right{display:flex;flex:1;justify-content:flex-end;align-items:center;}"}),s=n(83564),f=n(18667),d=n(9669),h=n.n(d),p=n(67294),m=n(5977),v=n(72132),g=n(8100),b=n(44593),w=n(91041),y=n(45155);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,l,r=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){c=!0,l=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var x=function(){var e,t,n=(0,m.UO)(),c=n.workspace,d=n.channel,k=S((0,a.Z)(c),1)[0],x=(0,g.ZP)("/api/users",s.Z).data,C=(0,g.ZP)("/api/workspaces/".concat(c,"/channels"),s.Z).data,E=null==C?void 0:C.find((function(e){return e.name===d})),Z=(0,b.ZP)((function(e){return"/api/workspaces/".concat(c,"/channels/").concat(d,"/chats?perPage=").concat(20,"&page=").concat(e+1)}),s.Z,{onSuccess:function(e){1===(null==e?void 0:e.length)&&setTimeout((function(){var e;null===(e=O.current)||void 0===e||e.scrollToBottom()}),100)}}),T=Z.data,_=Z.mutate,A=Z.setSize,I=(0,g.ZP)(x?"/api/workspaces/".concat(c,"/channels/").concat(d,"/members"):null,s.Z).data,B=S((0,r.Z)(""),3),P=B[0],z=B[1],U=B[2],j=S((0,p.useState)(!1),2),D=j[0],M=j[1],O=(0,p.useRef)(null),R=S((0,p.useState)(!1),2),H=(R[0],R[1],0===(null==T||null===(e=T[0])||void 0===e?void 0:e.length)),N=H||T&&(null===(t=T[T.length-1])||void 0===t?void 0:t.length)<20||!1,V=(0,p.useCallback)((function(){M(!1)}),[]),W=(0,p.useCallback)((function(e){if(e.preventDefault(),null!=P&&P.trim()&&T&&E&&x){var t=P;_((function(e){var n;return null==e||e[0].unshift({id:((null===(n=T[0][0])||void 0===n?void 0:n.id)||0)+1,content:t,UserId:x.id,User:x,createdAt:new Date,ChannelId:E.id,Channel:E}),e}),!1).then((function(){var e;localStorage.setItem("".concat(c,"-").concat(d),(new Date).getTime().toString()),U(""),O.current&&(console.log("scrollToBottom!",null===(e=O.current)||void 0===e?void 0:e.getValues()),O.current.scrollToBottom())})),h().post("/api/workspaces/".concat(c,"/channels/").concat(d,"/chats"),{content:t}).catch(console.error)}}),[P,c,d,E,x,T,_,U]),q=(0,p.useCallback)((function(e){e.Channel.name===d&&(e.content.startsWith("uploads\\")||e.content.startsWith("uploads/")||e.UserId!==(null==x?void 0:x.id))&&_((function(t){return null==t||t[0].unshift(e),t}),!1).then((function(){var e;O.current&&(O.current.getScrollHeight()<O.current.getClientHeight()+O.current.getScrollTop()+150?(console.log("scrollToBottom!",null===(e=O.current)||void 0===e?void 0:e.getValues()),setTimeout((function(){var e;null===(e=O.current)||void 0===e||e.scrollToBottom()}),100)):v.Am.success("새 메시지가 도착했습니다.",{onClick:function(){var e;null===(e=O.current)||void 0===e||e.scrollToBottom()},closeOnClick:!0}))}))}),[d,x,_]);(0,p.useEffect)((function(){return null==k||k.on("message",q),function(){null==k||k.off("message",q)}}),[k,q]),(0,p.useEffect)((function(){localStorage.setItem("".concat(c,"-").concat(d),(new Date).getTime().toString())}),[c,d]);var F=(0,p.useCallback)((function(){M(!0)}),[]);if(C&&!E)return p.createElement(m.l_,{to:"/workspace/".concat(c,"/channel/일반")});var L=(0,f.Z)(T?T.flat().reverse():[]);return p.createElement(i,null,p.createElement(u,null,p.createElement("span",null,"#",d),p.createElement("div",{className:"header-right"},p.createElement("span",null,null==I?void 0:I.length),p.createElement("button",{onClick:F,className:"c-button-unstyled p-ia__view_header__button","aria-label":"Add people to #react-native","data-sk":"tooltip_parent",type:"button"},p.createElement(y.LsP,{style:{fontSize:"20px"}})))),p.createElement(l.Z,{scrollbarRef:O,isReachingEnd:N,isEmpty:H,chatSections:L,setSize:A}),p.createElement(o.Z,{onSubmitForm:W,chat:P,onChangeChat:z,placeholder:"Message #".concat(d)}),p.createElement(w.Z,{show:D,onCloseModal:V,setShowInviteChannelModal:M}))}}}]);