(this.webpackJsonpobject_detector=this.webpackJsonpobject_detector||[]).push([[0],{21:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(1),a=n.n(c),i=n(15),o=n.n(i),u=(n(21),n(0)),s=n.n(u),d=n(3),f=n(23),v=function(e,t){return new Promise((function(n,r){e.detect(t,(function(e,t){e&&r(e),n(t)}))}))},h=function(){var e=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.objectDetector("cocossd",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=n(7),p=function(e){var t=e.current;if(t){var n=t.getContext("2d");return n||void 0}},b=1e3/30,x=function e(t,n,r,c,a,i){t.paused||t.ended||(n.drawImage(t,0,0,r,c),i&&i(t,n,r,c,a),setTimeout((function(){return e(t,n,r,c,a,i)}),b))},j=function(){var e=Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(s.a.mark((function e(t,n,r,c,a,i){var o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,a();case 3:o=e.sent;case 4:return e.next=6,j();case 6:n.srcObject=e.sent,n.addEventListener("loadeddata",(function(){n.play(),setTimeout((function(){return x(n,t,r,c,o,i)}),b)}));case 8:case"end":return e.stop()}}),e)})));return function(t,n,r,c,a,i){return e.apply(this,arguments)}}(),O=Object(c.createContext)({ctx:void 0,setCtx:void 0,video:void 0,setVideo:void 0}),g=function(e){var t=Object(c.useState)(e.ctx),n=Object(l.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(e.video),u=Object(l.a)(o,2),s=u[0],d=u[1];return Object(r.jsx)(O.Provider,{value:{ctx:a,setCtx:i,video:s,setVideo:d},children:e.children})},m=function(e){var t=Object(c.createRef)(),n=document.createElement("video"),a=e.width,i=e.height,o=e.children,u=e.onReady,s=e.onDraw;Object(c.useEffect)((function(){var e=p(t);e&&w(e,n,a,i,u,s)}),[t,n,a,i,s,u]);var d=p(t);return Object(r.jsx)("canvas",{ref:t,width:a,height:i,children:Object(r.jsx)(g,{ctx:d,video:n,children:o})})},y=function(e,t,n){if(null===n||void 0===n?void 0:n.length){e.fillStyle="#000000",e.fillRect(0,0,600,400),e.drawImage(t,0,0,600,400);for(var r=0;r<n.length;r+=1)e.font="16px Arial",e.fillStyle="green",e.fillText("".concat(n[r].label," ").concat((100*n[r].confidence).toFixed(0),"%"),n[r].x+4,n[r].y+16),e.beginPath(),e.rect(n[r].x,n[r].y,n[r].width,n[r].height),e.strokeStyle="green",e.stroke(),e.closePath()}};var k=function(){var e=function(){var e=Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(d.a)(s.a.mark((function e(t,n,r,c,a){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(a,t);case 2:i=e.sent,y(n,t,i);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,c,a){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(m,{width:600,height:400,onReady:e,onDraw:t})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),C()}},[[42,1,2]]]);
//# sourceMappingURL=main.99adb73e.chunk.js.map