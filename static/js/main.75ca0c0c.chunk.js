(this.webpackJsonpcryptodash=this.webpackJsonpcryptodash||[]).push([[0],{47:function(t,e,n){},48:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var r=n(5),c=n(0),a=n(1),o=n.n(a),i=n(13),s=n.n(i),l=(n(47),n(48),n(4)),u=n(8),d=n(16),b=n.n(d),j=n(12),O=n.n(j),f=o.a.createContext(),p=function(t){var e=Object(a.useContext)(f),n=Object(l.a)(e,4)[3];return Object(c.jsx)(c.Fragment,{children:n?Object(c.jsxs)("h1",{children:["Welcome to ",t.name," !!! Please select your favorite coins to begin."]}):Object(c.jsxs)("h1",{children:["Welcome back to ",t.name," !!!"]})})},x=n(2),h=n(3),m=!1,v="#42ff3a";var g="background-color: ".concat("#061a44"),y="background-color: ".concat("#010e2c"),C=("background-color: ".concat(v),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b")),S="box-shadow: 0px 0px 4px 2px #5fff17",k="font-size: 1.0em";function F(){var t=Object(x.a)(["\n  display: grid;\n  justify-content: center;\n"]);return F=function(){return t},t}function A(){var t=Object(x.a)(["\n  margin: 20px;\n  color: ",";\n  ",";\n  cursor: pointer;\n  border: 1px solid green;\n  border-radius: 5px;\n  padding: 2px;\n  &:hover {\n    color: yellow;\n    border-color: yellow;\n    ",";\n  }\n"]);return A=function(){return t},t}var E=h.b.div(A(),v,"font-size: 1.5em",S),N=h.b.div(F());function w(){var t=Object(a.useContext)(f),e=Object(l.a)(t,6),n=e[4],r=e[5];return Object(c.jsx)(N,{children:Object(c.jsx)(E,{onClick:function(){return r(!n)},children:"Confirm Favorites"})})}var D=function(t){var e=t.name,n=t.children,r=Object(a.useContext)(f),o=Object(l.a)(r,2)[1];return Object(c.jsx)("div",{children:o===e?Object(c.jsx)("div",{children:n}):null})},B=n(41);function U(){var t=Object(x.a)(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);return U=function(){return t},t}function L(){var t=Object(x.a)(["\n  &:hover {\n    cursor: pointer;\n    ",";\n  }\n"]);return L=function(){return t},t}function P(){var t=Object(x.a)(["\n  &:hover {\n    cursor: pointer;\n    ",";\n  }\n"]);return P=function(){return t},t}function T(){var t=Object(x.a)(["\n  ",";\n  ",";\n  padding: 10px;\n"]);return T=function(){return t},t}var H=h.b.div(T(),C,g),R=Object(h.b)(H)(P(),S),G=Object(h.b)(R)(L(),"box-shadow: 0px 0px 2px 2px #e41111"),I=Object(h.b)(H)(U());function W(){var t=Object(x.a)(["\n  justify-self: right;\n  display: none;\n  ",":hover & {\n    display: block;\n    color: red;\n  }\n"]);return W=function(){return t},t}function z(){var t=Object(x.a)(["\n  justify-self: right;\n"]);return z=function(){return t},t}function M(){var t=Object(x.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return M=function(){return t},t}var _=h.b.div(M()),V=h.b.div(z()),J=h.b.div(W(),G),K=function(t){var e=t.name,n=t.symbol,r=t.topSection;return Object(c.jsxs)(_,{children:[Object(c.jsx)("div",{className:"flex self-start",children:e}),r?Object(c.jsx)(J,{children:" X "}):Object(c.jsx)(V,{children:n})]})};function X(){var t=Object(x.a)(["\n  margin: auto;\n"]);return X=function(){return t},t}var Y=h.b.img(X()),$=function(t){var e=t.coin,n=t.spotlight;return Object(c.jsx)(Y,{alt:e.Symbol,src:"".concat("http://cryptocompare.com/").concat(e.ImageUrl),spotlight:n,className:"md:w-3/4 md:h-auto w-2/4 h-40 "})},q=function(t){var e=t.coinK,n=t.topSection,r=t.coinList,o=Object(a.useContext)(f),i=Object(l.a)(o,8),s=i[6],u=i[7],d=R;n?d=G:s.includes(e)&&(d=I);return Object(c.jsxs)(d,{onClick:n?function(){u(s.filter((function(t){return t!==e})))}:function(){s.length<10?u([].concat(Object(B.a)(s),[e])):alert("Sorry, max number of favorite coins is 10!")},children:[Object(c.jsx)(K,{topSection:n,name:r[e].CoinName,symbol:r[e].Symbol}),Object(c.jsx)($,{coin:r[e]})]})};function Q(){var t=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  grid-gap: 16px;\n  margin-top: 20px;\n"]);return Q=function(){return t},t}var Z=h.b.div(Q()),tt=function(t){var e=t.topSection,n=Object(a.useContext)(f),r=Object(l.a)(n,10),o=r[0],i=r[6],s=r[9];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"uppercase h2",children:e?Object(c.jsx)("span",{children:"Favourites coins"}):Object(c.jsxs)("span",{children:["Total Coin Lists: ",Object.keys(o).length]})}),Object(c.jsx)(Z,{children:(e?i:s&&Object.keys(s).length>0?Object.keys(s):Object.keys(o).slice(0,100)).map((function(t){return Object(c.jsx)(q,{topSection:e,coinK:t,coinList:o},t)}))})]})},et=o.a.memo(tt),nt=n(22),rt=n.n(nt),ct=n(37),at=n.n(ct);function ot(){var t=Object(x.a)(["\n  ",";\n  ",";\n  color: #1163c9;\n  border: 1px solid;\n  height: 30px;\n  place-self: center start;\n"]);return ot=function(){return t},t}function it(){var t=Object(x.a)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n"]);return it=function(){return t},t}var st=h.b.div(it()),lt=h.b.input(ot(),y,k),ut=function(){var t=Object(a.useContext)(f),e=Object(l.a)(t,9),n=e[0],r=e[8],o=rt.a.debounce((function(t){var e=Object.keys(n),c=e.map((function(t){return n[t].CoinName})),a=e.concat(c),o=at.a.filter(t,a).map((function(t){return t.string})),i=rt.a.pickBy(n,(function(t,e){var n=t.CoinName;return o.includes(e)||o.includes(n)}));r(i)}),500);return Object(c.jsxs)(st,{children:[Object(c.jsx)("h2",{children:"Search all coins"}),Object(c.jsx)(lt,{onKeyUp:function(t){return function(t){var e=t.target.value;e?o(e):r(null)}(t)}})]})},dt=function(){return Object(c.jsxs)(D,{name:"settings",children:[Object(c.jsx)(p,{name:"Cryptodash"}),Object(c.jsx)(et,{topSection:!0}),Object(c.jsx)(w,{}),Object(c.jsx)(ut,{}),Object(c.jsx)(et,{})]})};function bt(){var t=Object(x.a)(["\n  padding: 30px;\n  text-align: center;\n  color: yellow;\n  max-width: 1536px;\n  margin: auto;\n"]);return bt=function(){return t},t}var jt=h.b.div(bt());function Ot(){var t=Object(x.a)(["\n      display: none;\n    "]);return Ot=function(){return t},t}function ft(){var t=Object(x.a)(["\n      text-shadow: 0px 0px 40px #ffff05;\n    "]);return ft=function(){return t},t}function pt(){var t=Object(x.a)(["\n  cursor: pointer;\n  color: white;\n  display: flex;\n  align-items: center;\n  ","\n  ","\n"]);return pt=function(){return t},t}var xt=h.b.div(pt(),(function(t){return t.active&&Object(h.a)(ft())}),(function(t){return t.hidden&&Object(h.a)(Ot())})),ht=function(t){var e,n=t.name,r=Object(a.useContext)(f),o=Object(l.a)(r,4),i=o[1],s=o[2],u=o[3];return Object(c.jsx)(xt,{active:i===n,onClick:function(){return s(n)},hidden:u&&"dashboard"===n,children:(e=n,e.charAt(0).toUpperCase()+e.substr(1))})};function mt(){var t=Object(x.a)(["\n  display: grid;\n  margin-bottom: 40px;\n  color: white;\n  grid-template-columns:\n    minmax(min-content, 180px) auto minmax(min-content, 100px)\n    minmax(min-content, 100px);\n"]);return mt=function(){return t},t}function vt(){var t=Object(x.a)(["\n  font-size: 1.5em;\n  margin-right: 2px;\n"]);return vt=function(){return t},t}var gt=h.b.div(vt()),yt=h.b.div(mt()),Ct=function(){return Object(c.jsxs)(yt,{children:[Object(c.jsx)(gt,{children:"CryptoDash"}),Object(c.jsx)("div",{}),Object(c.jsx)(ht,{name:"dashboard"}),Object(c.jsx)(ht,{name:"settings"})]})},St=n(15),kt="All the coins",Ft="Get coins prices",At="Get historical data",Et="delete historical data",Nt=Object(St.b)((function(t){return{data:t.listCoins.data,coinPrices:t.coinPrices.data,historicalData:t.historicalData.data}}),{getCoins:function(){return{type:kt,payload:O.a.get("https://min-api.cryptocompare.com/data/all/coinlist")}},getPrices:function(t){return{type:Ft,payload:O.a.get("".concat("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=").concat(t,"&tsyms=USD,EUR"))}},getHistorical:function(t){return{type:At,payload:t}},deleteHistorical:function(){return{type:Et,payload:[]}}})((function(t){var e=t.children,n=t.getCoins,o=t.data,i=t.getPrices,s=t.coinPrices,d=t.getHistorical,j=t.historicalData,p=t.deleteHistorical,x=Object(a.useState)("dashboard"),h=Object(l.a)(x,2),m=h[0],v=h[1],g=Object(a.useState)(!1),y=Object(l.a)(g,2),C=y[0],S=y[1],k=Object(a.useState)([]),F=Object(l.a)(k,2),A=F[0],E=F[1],N=Object(a.useState)(!1),w=Object(l.a)(N,2),D=w[0],B=w[1],U=Object(a.useState)(o),L=Object(l.a)(U,2),P=L[0],T=L[1],H=Object(a.useState)([]),R=Object(l.a)(H,2),G=R[0],I=R[1],W=Object(a.useState)(""),z=Object(l.a)(W,2),M=z[0],_=z[1],V=Object(a.useState)([{name:"",data:[]}]),J=Object(l.a)(V,2),K=J[0],X=J[1],Y=Object(a.useState)([{name:"",data:[]}]),$=Object(l.a)(Y,2),q=$[0],Q=$[1],Z=Object(a.useState)("months"),tt=Object(l.a)(Z,2),et=tt[0],nt=tt[1],rt=Object(a.useState)("months"),ct=Object(l.a)(rt,2),at=ct[0],ot=ct[1],it=JSON.parse(localStorage.getItem("cryptoDash"));Object(a.useEffect)((function(){n(),it?(E(it.favorites),_(it.currentFavorite),A.length>0?i(A.toString()):i(it.favorites.toString())):(v("settings"),S(!0))}),[]),Object(a.useEffect)((function(){(o||0===Object.keys(P).length)&&(T(o),it&&_(it.currentFavorite))}),[o]),Object(a.useEffect)((function(){D&&(_(A[0]),S(!1),v("dashboard"),i(A.toString()),localStorage.setItem("cryptoDash",JSON.stringify({favorites:A,currentFavorite:M})))}),[D]),Object(a.useEffect)((function(){j.length>0&&function(){var t=j.filter((function(t){return Object.keys(t.data).toString()===M}));X([{name:"".concat(M," USD"),data:t.map((function(t,e){var n=Object.keys(t.data).toString();return[b()().subtract(Object(u.a)({},et,10-e)).valueOf(),t.data[n].USD]}))}]),Q([{name:"".concat(M," EUR"),data:t.map((function(t,e){var n=Object.keys(t.data).toString();return[b()().subtract(Object(u.a)({},at,10-e)).valueOf(),t.data[n].EUR]}))}])}()}),[j]),Object(a.useEffect)((function(){M&&function(t){for(var e,n,r,c=[],a=et||at,o=10;o>0;o--)c.push((e=t,n=["USD","EUR"],r=b()().subtract(Object(u.a)({},a,o)).toDate(),O.a.get("".concat("https://min-api.cryptocompare.com/data/pricehistorical?","fsym=").concat(e,"&tsyms=").concat(n,"&ts=").concat(+r)).then((function(t){return t}))));j.length>0&&p(),Promise.all(c).then((function(t){d(t)}))}(M)}),[M,at,et]);var st=[P,m,v,C,D,B,A,E,I,G,s,M,function(t){_(t),localStorage.setItem("cryptoDash",JSON.stringify(Object(r.a)(Object(r.a)({},JSON.parse(localStorage.getItem("cryptoDash"))),{},{currentFavorite:t})))},K,q,nt,ot];return Object(c.jsx)(f.Provider,{value:st,children:e})})),wt=function(){return Object(c.jsxs)("div",{children:["Loading...",Object(c.jsx)("div",{className:"loader mx-auto"})]})},Dt=function(t){var e=Object(a.useContext)(f),n=Object(l.a)(e,11),r=n[0],o=n[3],i=n[10];return Object(c.jsx)("div",{children:r&&(o||i)?Object(c.jsx)("div",{className:"w-full max-w-7xl mx-auto",children:t.children}):Object(c.jsx)(wt,{})})};function Bt(){var t=Object(x.a)(["\n      color: red;\n    "]);return Bt=function(){return t},t}function Ut(){var t=Object(x.a)(["\n  color: green;\n  ","\n"]);return Ut=function(){return t},t}function Lt(){var t=Object(x.a)(["\n  grid-template-columns: 1fr 2fr;\n"]);return Lt=function(){return t},t}function Pt(){var t=Object(x.a)(["\n  ",";\n  border-top: 1px solid gray;\n  display: flex;\n  flex-direction: column;\n"]);return Pt=function(){return t},t}function Tt(){var t=Object(x.a)(["\n  justify-self: right;\n"]);return Tt=function(){return t},t}function Ht(){var t=Object(x.a)(["\n      ",";\n      pointer-events: none;\n    "]);return Ht=function(){return t},t}function Rt(){var t=Object(x.a)(["\n      ","\n    "]);return Rt=function(){return t},t}function Gt(){var t=Object(x.a)(["\n  ","\n  ","\n"]);return Gt=function(){return t},t}var It=Object(h.b)(R)(Gt(),(function(t){return t.compact&&Object(h.a)(Rt(),"font-size: .75em")}),(function(t){return t.currentFavorite&&Object(h.a)(Ht(),S)})),Wt=h.b.div(Tt()),zt=h.b.div(Pt(),"font-size: 2em"),Mt=Object(h.b)(_)(Lt()),_t=h.b.div(Ut(),(function(t){return t.red&&Object(h.a)(Bt())}));function Vt(t){var e=t.dataE,n=t.dataU;return Object(c.jsxs)(Wt,{children:[Object(c.jsx)("p",{className:"text-blue-700",children:"CHANGE % 24H"}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsxs)(_t,{red:n.CHANGEPCT24HOUR<0,children:[Object(c.jsxs)("span",{children:[" $ ",n.CHANGEPCT24HOUR,"%"]}),Object(c.jsx)("span",{className:"text-white",style:{marginLeft:"2px",marginRight:"2px"},children:";"})]}),Object(c.jsx)(_t,{red:e.CHANGEPCT24HOUR<0,children:Object(c.jsxs)("span",{children:[" \u20ac ",e.CHANGEPCT24HOUR,"%"]})})]})]})}function Jt(t){var e=t.sym,n=t.dataU,r=t.dataE,a=t.currentFavorite,o=t.handlerCurrentFavorite;return Object(c.jsxs)(It,{currentFavorite:a,onClick:o,children:[Object(c.jsxs)(Mt,{children:[Object(c.jsxs)("div",{className:"text-purple-700 flex items-center justify-center font-bold",children:[e,":"," "]}),Object(c.jsx)(Vt,{dataU:n,dataE:r})]}),Object(c.jsx)("div",{className:"border border-purple-400 my-1"}),Object(c.jsxs)(zt,{children:[Object(c.jsx)("span",{children:n.PRICE}),Object(c.jsx)("span",{children:r.PRICE})]})]})}var Kt=function(t){var e=t.price,n=t.sym,r=(t.idx,Object(a.useContext)(f)),o=Object(l.a)(r,13),i=o[11],s=o[12],u=e.USD,d=e.EUR;return Object(c.jsx)(Jt,{sym:n,dataU:u,dataE:d,currentFavorite:i===n,handlerCurrentFavorite:function(){return s(n)}})};function Xt(){var t=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 15px;\n  margin-top: 60px;\n"]);return Xt=function(){return t},t}var Yt=h.b.div(Xt()),$t=function(){var t=Object(a.useContext)(f),e=Object(l.a)(t,11)[10];return Object(c.jsx)(Yt,{children:Object.keys(e).map((function(t,n){return Object(c.jsx)(Kt,{price:e[t],sym:t,idx:n},"priceTile-".concat(t))}))})};function qt(){var t=Object(x.a)(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  text-transform: uppercase;\n  text-align: center;\n"]);return qt=function(){return t},t}var Qt=h.b.h2(qt()),Zt=function(){var t=Object(a.useContext)(f),e=Object(l.a)(t,12),n=e[0],r=e[11];return Object(c.jsx)(c.Fragment,{children:n[r]&&n[r].CoinName?Object(c.jsxs)(H,{className:"flex md:grid md:items-center",children:[Object(c.jsx)(Qt,{children:n[r].CoinName}),Object(c.jsx)($,{coin:n[r],spotlight:!0})]}):Object(c.jsx)(wt,{})})},te=function(t,e){return{title:{text:""},yAxis:{title:{text:"Price"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:t||e,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}},ee=n(17),ne=n.n(ee),re={colors:["#61d936","#552ccb","#1163c9","#04A1EE","#08C6E0","#146B9E","#F376C1","#1B2839"],chart:{backgroundColor:"#061a44",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"#061a44",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineColor:"#333333",gridLineWidth:1,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"}},credits:{enabled:!1},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},borderColor:"#000000",symbolStroke:"#C0C0C0",hoverSymbolStroke:"#FFFFFF"}},exporting:{buttons:{exportButton:{symbolFill:"#55BE3B"},printButton:{symbolFill:"#7797BE"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"},legendBackgroundColor:"rgba(0, 0, 0, 0.5)",legendBackgroundColorSolid:"rgb(35, 35, 70)",dataLabelsColor:"#444",textColor:"#C0C0C0",maskColor:"rgba(255,255,255,0.3)"};function ce(){var t=Object(x.a)(["\n  ",";\n  ",";\n  width: 100px;\n  padding: 5px 5px;\n  border: 1px solid;\n  border-radius: 5px;\n  float: right;\n  color: #1163c9;\n"]);return ce=function(){return t},t}var ae=h.b.select(ce(),y,k);ne.a.Highcharts.setOptions(re);var oe=function(t){var e=t.euro,n=Object(a.useContext)(f),r=Object(l.a)(n,17),o=r[13],i=r[14],s=r[15],u=r[16];return Object(c.jsx)(H,{children:e?Object(c.jsx)(c.Fragment,{children:i?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(ae,{defaultValue:"months",onChange:function(t){return u(t.target.value)},children:[Object(c.jsx)("option",{value:"days",children:" Days "}),Object(c.jsx)("option",{value:"weeks",children:" Weeks "}),Object(c.jsx)("option",{value:"months",children:" Months "})]}),Object(c.jsx)(ne.a,{config:te(i)})]}):Object(c.jsx)(wt,{})}):Object(c.jsx)(c.Fragment,{children:o?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(ae,{defaultValue:"months",onChange:function(t){return s(t.target.value)},children:[Object(c.jsx)("option",{value:"days",children:" Days "}),Object(c.jsx)("option",{value:"weeks",children:" Weeks "}),Object(c.jsx)("option",{value:"months",children:" Months "})]}),Object(c.jsx)(ne.a,{config:te(o)})]}):Object(c.jsx)(wt,{})})})};function ie(){var t=Object(x.a)(["\n  display: grid;\n  margin-top: 120px;\n  grid-gap: 15px;\n  grid-template-columns: 1fr;\n  grid-template-rows: 200px 1fr;\n"]);return ie=function(){return t},t}h.b.div(ie());var se=function(){return Object(c.jsxs)(D,{name:"dashboard",children:[Object(c.jsx)($t,{}),Object(c.jsxs)("div",{className:"chart-grid mb-20 max-h-10",children:[Object(c.jsx)(Zt,{}),Object(c.jsxs)("div",{className:"chart-grid-tile",children:[Object(c.jsx)(oe,{}),Object(c.jsx)("div",{className:"mt-4",children:Object(c.jsx)(oe,{euro:!0})})]})]})]})};var le=function(){return Object(c.jsx)(jt,{children:Object(c.jsxs)(Nt,{children:[Object(c.jsx)(Ct,{}),Object(c.jsxs)(Dt,{children:[Object(c.jsx)(dt,{}),Object(c.jsx)(se,{})]})]})})},ue=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))},de=n(10),be=n(39),je=n(40),Oe=n.n(je),fe=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"".concat(kt,"_FULFILLED"):var n=e.payload.data.Response;return n?Object(r.a)(Object(r.a)({},t),{},{listCoins:{response:e.payload.data.Response,message:e.payload.data.Message,data:e.payload.data.Data}}):t;case"".concat(Ft,"_FULFILLED"):var c=e.payload.status;return 200!==c?t:Object(r.a)(Object(r.a)({},t),{},{coinPrices:{data:e.payload.data.DISPLAY,message:e.payload.statusText,response:e.payload.status}});case"".concat(At):case"".concat(Et):return Object(r.a)(Object(r.a)({},t),{},{historicalData:{data:e.payload}});default:return t}},pe={listCoins:{data:{},message:"",response:""},coinPrices:{data:{},message:"",response:""},historicalData:{data:[],message:"",response:""}},xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.c,he=Object(de.d)(fe,Object(r.a)({},pe),xe(Object(de.a)(Oe.a,be.a)));he.subscribe((function(){var t=he.getState();t&&(pe=t)})),s.a.render(Object(c.jsx)(St.a,{store:he,children:Object(c.jsx)(le,{})}),document.getElementById("root")),ue()}},[[71,1,2]]]);
//# sourceMappingURL=main.75ca0c0c.chunk.js.map