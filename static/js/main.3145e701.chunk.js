(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{108:function(e,a,r){},109:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),c=r(7),l=r.n(c),o=r(19),s=r(22),i=r(62),u=r(63),m=r(46),p=r.n(m),d=r(64),E=r(68),f=r(26),g=r(65),y=r.n(g),h={coins:[],sortingParam:"FROM_EXPENSIVE",searchParam:"",isVisibleProgress:!1,selectedCurrency:{},amountSelectedCurrency:0},b=function(e){return{type:"TOGGLE_PROGRESS",payload:e}},C=function(e){return{type:"ADD_COIN",payload:e}},N=function(e){return{type:"SELECT_CURRENCY",currency:e}},v=Object(s.combineReducers)({currency:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_PROGRESS":return Object(f.a)({},e,{isVisibleProgress:a.payload});case"ADD_COIN":return Object(f.a)({},e,{coins:Object(E.a)(a.payload)});case"CHANGE_SORTING_PARAM":return Object(f.a)({},e,{sortingParam:"FROM_EXPENSIVE"===e.sortingParam?"FROM_CHEAP":"FROM_EXPENSIVE"});case"SEARCH_BY_STRING":return Object(f.a)({},e,{searchParam:a.searchParam});case"SELECT_CURRENCY":return Object(f.a)({},e,{selectedCurrency:a.currency});case"EXCHANGE_CURRENCY":return Object(f.a)({},e,{amountSelectedCurrency:a.amount});default:return e}}}),O=Object(s.createStore)(v,Object(i.composeWithDevTools)(Object(s.applyMiddleware)(u.a))),P=r(47),R=Object(P.a)([function(e){return e.currency.coins},function(e){return e.currency.sortingParam},function(e){return e.currency.searchParam}],(function(e,a,r){var t=function(e){return e.fullName.toLowerCase().includes(r.toLowerCase())};switch(a){case"FROM_EXPENSIVE":return e.sort((function(e,a){return e.price>a.price?1:e.price<a.price?-1:0})).filter((function(e){return t(e)}));case"FROM_CHEAP":return e.sort((function(e,a){return e.price>a.price?-1:e.price<a.price?1:0})).filter((function(e){return t(e)}));default:return e.filter((function(e){return t(e)}))}})),S=Object(P.a)([function(e){return e.currency.amountSelectedCurrency},function(e){return e.currency.selectedCurrency}],(function(e,a){return e*a.price})),w=r(152),x=r(154),I=r(158),_=r(157),j=r(148),A=r(155),H=r(156),G=r(159),V=r(153),B=r(66),U=r.n(B),D={fetchCoins:function(){return function(){var e=Object(d.a)(p.a.mark((function e(a){var r,t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(b(!0)),e.next=3,y.a.get("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=".concat("3a06d412960b4f017361f492d59765a72c8cd3266d7e0ac360df95b1d3aae70d"));case 3:r=e.sent,t=r.data,n=t.Data.map((function(e){return{name:e.CoinInfo.Name,fullName:e.CoinInfo.FullName,imageUrl:"https://www.cryptocompare.com/".concat(e.CoinInfo.ImageUrl),price:e.RAW.USD.PRICE,volume24Hour:e.RAW.USD.VOLUME24HOUR,changeHour:e.RAW.USD.CHANGEHOUR}})),console.log(n),a(b(!1)),a(C(n)),a(N(n[0]));case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},changeSortingParam:function(){return{type:"CHANGE_SORTING_PARAM"}},selectCurrencyHandler:N},M=Object(o.b)((function(e){return{coins:R(e),sortingParam:e.currency.sortingParam,searchParam:e.currency.searchParam,isVisibleProgress:e.currency.isVisibleProgress}}),D)((function(e){var a=e.coins,r=e.sortingParam,c=e.searchParam,l=e.isVisibleProgress,o=e.fetchCoins,s=e.changeSortingParam,i=e.selectCurrencyHandler,u=e.classes;return Object(t.useEffect)((function(){o()}),[]),n.a.createElement(j.a,{component:w.a,elevation:3},l?n.a.createElement("div",{className:u.progressBox},n.a.createElement(V.a,{color:"secondary"})):n.a.createElement(x.a,{"aria-label":"simple table"},n.a.createElement(A.a,null,n.a.createElement(H.a,null,n.a.createElement(_.a,null),n.a.createElement(_.a,{align:"left"},"FullName"),n.a.createElement(_.a,{align:"left"},"Name"),n.a.createElement(_.a,{onClick:s,className:u.sortable,align:"left"},"Price",n.a.createElement("img",{src:U.a,className:"FROM_EXPENSIVE"===r?u.pointerDown:"",alt:"Arrow"})),n.a.createElement(_.a,{align:"left"},"Volume24hour"))),n.a.createElement(I.a,null,a.map((function(e){return n.a.createElement(H.a,{onClick:function(){return i(e)},key:e.name,className:u.row},n.a.createElement(_.a,{component:"th",scope:"row"},n.a.createElement("img",{src:e.imageUrl,className:u.currencyImage,alt:"Coin icon"})),n.a.createElement(_.a,{align:"left"},e.name),n.a.createElement(_.a,{align:"left"},e.fullName),n.a.createElement(_.a,{className:e.changeHour>0?u.cellGreen:u.cellRed,align:"left"},"$",e.price),n.a.createElement(_.a,{align:"left"},"$",e.volume24Hour.toFixed(5)))})),c&&0===a.length&&n.a.createElement(H.a,null,n.a.createElement(_.a,{component:"th",scope:"row",align:"center"},n.a.createElement(G.a,{variant:"h5",gutterBottom:!0},"No such currency found"))))))})),T=r(170),k=r(172),F=r(168),L=r(160),X=r(167),Y={selectCurrencyHandler:N,exchangeCurrencyHandler:function(e){return{type:"EXCHANGE_CURRENCY",amount:e}}},W=Object(o.b)((function(e){return{coins:e.currency.coins,selectedCurrency:e.currency.selectedCurrency,amountSelectedCurrency:S(e)}}),Y)((function(e){var a=e.coins,r=e.selectedCurrency,t=e.selectCurrencyHandler,c=e.exchangeCurrencyHandler,l=e.amountSelectedCurrency,o=e.classes;return n.a.createElement(w.a,{className:o.paper,elevation:3},n.a.createElement("div",{className:o.inputBox},n.a.createElement(L.a,{className:o.currencyValue},n.a.createElement(T.a,{onChange:function(e){var a=e.target.value;c(a)},id:"standard-basic",label:"\u0421\u0443\u043c\u043c\u0430"})),n.a.createElement(L.a,{className:o.currencyType},n.a.createElement(k.a,{id:"demo-simple-select-label"},"\u0412\u0430\u043b\u044e\u0442\u0430"),n.a.createElement(X.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:function(e){var r=a.find((function(a){return a.name===e.target.value}));r&&t(r)},value:r.name?r.name:""},a.map((function(e){return n.a.createElement(F.a,{key:e.name,value:e.name},e.name)}))))),n.a.createElement("div",{className:o.inputBox},n.a.createElement(L.a,{className:o.outputValue},n.a.createElement(T.a,{value:l,disabled:!0,id:"filled-disabled",label:"\u0421\u0443\u043c\u043c\u0430",variant:"filled"}))))})),J=r(69),$=r(163),q=r(67),z=r.n(q),K={searchByString:function(e){return{type:"SEARCH_BY_STRING",searchParam:e}}},Q=Object(o.b)((function(e){return{searchParam:e.currency.searchParam}}),K)((function(e){var a=e.searchParam,r=e.searchByString,t=e.classes;return n.a.createElement(w.a,{elevation:3,className:t.header},n.a.createElement(w.a,{component:"form",className:t.search,elevation:1},n.a.createElement(J.a,{value:a,onChange:function(e){return r(e.target.value)},className:t.searchInput,placeholder:"Search by fullname..."}),n.a.createElement($.a,{type:"button",className:t.searchButton},n.a.createElement(z.a,null))))})),Z=r(164),ee=r(169),ae=Object(Z.a)((function(e){return Object(ee.a)({root:{padding:e.spacing(10)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},row:{cursor:"pointer"},header:{padding:40},search:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},searchInput:{flex:1},searchButton:{padding:10},inputBox:{marginTop:20,marginBottom:20},currencyValue:{width:"calc(70% - 15px)",marginRight:15},outputValue:{width:"100%"},currencyType:{width:"30%"},currencyImage:{width:18,height:18,borderRadius:"50%"},cellGreen:{background:"#c4feb5"},cellRed:{background:"#ffb1b1"},sortable:{cursor:"pointer",display:"flex",justifyContent:"space-between"},pointerDown:{transform:"scale(-1, -1)"},progressBox:{display:"flex",alignItems:"center",justifyContent:"center",padding:20}})})),re=r(165),te=r(166);var ne=function(){var e=ae();return n.a.createElement(re.a,{className:e.root,maxWidth:"lg"},n.a.createElement("div",{className:"App"},n.a.createElement(te.a,{container:!0,spacing:3},n.a.createElement(te.a,{item:!0,xs:12},n.a.createElement(Q,{classes:e})),n.a.createElement(te.a,{item:!0,xs:8},n.a.createElement(M,{classes:e})),n.a.createElement(te.a,{item:!0,xs:4},n.a.createElement(W,{classes:e})))))};r(108);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(o.a,{store:O},n.a.createElement(ne,null))),document.getElementById("root"))},66:function(e,a,r){e.exports=r.p+"static/media/arrow.e000943e.svg"},78:function(e,a,r){e.exports=r(109)}},[[78,1,2]]]);
//# sourceMappingURL=main.3145e701.chunk.js.map