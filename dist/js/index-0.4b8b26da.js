!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var s in a)("object"==typeof exports?exports:e)[s]=a[s]}}(window,function(){return(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/2R5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAlbumList=t.updateUserInfo=void 0;var s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a("Axbo"));t.updateUserInfo=function(e){return{type:s.UPDATE_USERINFO,data:e}},t.getAlbumList=function(e){return{type:s.GET_ALBUMLIST,data:e}}},0:function(e,t,a){a("201c"),e.exports=a("tjUo")},"20KN":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=g(a("kPKH")),n=g(a("BMrR")),l=g(a("Yz+Y")),r=g(a("iCc5")),u=g(a("V7oC")),o=g(a("FYw3")),i=g(a("mRg0"));a("rO+z"),a("Jmwx");var d=g(a("q1tI")),c=a("/MKj"),f=a("/2R5"),p=a("ANjH"),m=a("eO8H"),j=a("vaoO"),h=g(a("Fea+"));function g(e){return e&&e.__esModule?e:{default:e}}a("jM62");var y=function(e){function t(e){(0,r.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.state={},a}return(0,i.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this;(0,j.getAlbumList)().then(function(t){e.props.albumListDispatchs(t.data)})}},{key:"render",value:function(){return d.default.createElement("section",{className:"recommend"},d.default.createElement(n.default,{style:{paddingLeft:"10px",margin:"20px 0 10px 0",fontSize:"17px",borderLeft:"4px solid #1890ff"}},"推荐歌单"),d.default.createElement(n.default,{gutter:10,type:"flex",justify:"space-between"},""==this.props.albumList?d.default.createElement(h.default,null):this.props.albumList.map(function(e,t){return d.default.createElement(s.default,{span:8,style:{paddingBottom:"10px"},key:t},d.default.createElement("div",{className:"music-list"},d.default.createElement(m.Link,{to:{pathname:"/albumdetail",search:"?id="+e.id,query:{id:e.id}}},d.default.createElement("span",{className:"listen"},e.playCount),d.default.createElement("img",{alt:"",src:e.coverImgUrl}),d.default.createElement("div",{className:"music-text"},e.title))))})))}}]),t}(d.default.Component);t.default=(0,c.connect)(function(e){return e},function(e){return{albumListDispatchs:(0,p.bindActionCreators)(f.getAlbumList,e)}})(y)},Axbo:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.UPDATE_USERINFO="UPDATE_USERINFO",t.GET_ALBUMLIST="GET_ALBUMLIST"},"Fea+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=c(a("BMrR")),n=c(a("CtXQ")),l=c(a("Yz+Y")),r=c(a("iCc5")),u=c(a("V7oC")),o=c(a("FYw3")),i=c(a("mRg0"));a("Jmwx"),a("2oDE");var d=c(a("q1tI"));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){(0,r.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.state={},a}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return d.default.createElement(s.default,{type:"flex",justify:"center",align:"middle",style:{padding:"50px",width:"100%"}},d.default.createElement(n.default,{type:"loading",style:{fontSize:"35px",color:"#7caeff"}}))}}]),t}(d.default.Component);t.default=f},Ffhv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,n=a("ANjH"),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a("Axbo")),r=a("OXQi"),u=(s=r)&&s.__esModule?s:{default:s};t.default=(0,n.combineReducers)({userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.default.userInfo,t=arguments[1];switch(t.type){case l.UPDATE_USERINFO:return t.data;default:return e}},albumList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.default.albumList,t=arguments[1];switch(t.type){case l.GET_ALBUMLIST:return t.data;default:return e}}})},Gcfw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=g(a("CtXQ")),n=g(a("BMrR")),l=g(a("kPKH")),r=g(a("Yz+Y")),u=g(a("iCc5")),o=g(a("V7oC")),i=g(a("FYw3")),d=g(a("mRg0")),c=g(a("5rEg"));a("2oDE"),a("Jmwx"),a("rO+z"),a("1vPl");var f=g(a("q1tI")),p=a("eO8H"),m=a("uJMD"),j=a("vaoO"),h=g(a("Fea+"));function g(e){return e&&e.__esModule?e:{default:e}}a("SL7a");var y=c.default.Search,v=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.state={inputSearchValue:"周杰伦",searchStorageName:"searchStorage",searchStorageArr:[],initSearchMusic:!1,searchNetEaseList:[],searchQqList:[],searchKugouList:[]},a.startSearch=a.startSearch.bind(a),a.handleChange=a.handleChange.bind(a),a}return(0,d.default)(t,e),(0,o.default)(t,[{key:"startSearch",value:function(e){var t=this;""!=e&&(console.log(e),(0,m.setLocalStorage)(e,this.state.searchStorageName),this.setState({searchStorageArr:(0,m.getLocalStorage)(this.state.searchStorageName),initSearchMusic:!0}),(0,j.getNetEaseSearch)({s:e}).then(function(e){200==e.code&&t.setState({searchNetEaseList:e.data})}),(0,j.getQqSearch)({s:e}).then(function(e){200==e.code&&t.setState({searchQqList:e.data})}),(0,j.getKugouSearch)({s:e}).then(function(e){200==e.code&&t.setState({searchKugouList:e.data})}))}},{key:"handleChange",value:function(e){console.log(e.target)}},{key:"render",value:function(){var e=this,t=function(e){var t=e.ele,a=e.index;return f.default.createElement(p.Link,{to:{pathname:"/songdetail",query:{id:t.id},search:"?id="+t.id},key:a},f.default.createElement(n.default,{type:"flex",align:"middle",style:{padding:"5px 0 5px 10px"}},f.default.createElement(l.default,{xs:{span:2},sm:{span:1},style:{fontSize:"18px",color:"#999"}},a+1),f.default.createElement(l.default,{xs:{span:22},sm:{span:23},style:{borderBottom:"1px solid rgba(170, 170, 170, 0.3)",paddingRight:"10px"}},f.default.createElement(n.default,{type:"flex",justify:"space-between",align:"middle"},f.default.createElement(n.default,{style:{width:"90%"}},f.default.createElement(l.default,{style:{fontSize:"16px",color:"#333"}},t.name),f.default.createElement(l.default,{style:{fontSize:"12px",color:"#888"}},t.singer)),f.default.createElement(s.default,{type:"play-circle",style:{fontSize:"23px",color:"#aaaaaa"}})))))};return f.default.createElement("section",{className:"search"},f.default.createElement(n.default,{type:"flex",align:"middle",justify:"center",style:{padding:"10px 5px"}},f.default.createElement(l.default,{span:24},f.default.createElement(y,{placeholder:"请输入歌手、歌名",defaultValue:this.inputSearchValue,onChange:this.handleChange,onSearch:function(t){return e.startSearch(t)}}))),f.default.createElement(n.default,{type:"flex",align:"top",justify:"center",style:{flexDirection:"column",padding:"5px"}},f.default.createElement(l.default,null,"搜索历史"),f.default.createElement(n.default,{type:"flex",align:"middle",justify:"start",style:{paddingTop:"10px",fontSize:"14px"}},0==this.state.searchStorageArr.length?"":f.default.createElement(function(){return e.state.searchStorageArr.map(function(t,a){return f.default.createElement(l.default,{style:{padding:"0px 15px",border:"1px solid #d3d4da",borderRadius:"15px",lineHeight:"32px",margin:"0 10px 10px 0",cursor:"pointer"},key:a,onClick:function(){return e.startSearch(t)}},t)})},null))),f.default.createElement(n.default,{type:"flex",align:"top",justify:"center",style:{flexDirection:"column",padding:"5px"}},1==this.state.initSearchMusic&&0==this.state.searchNetEaseList.length&&0==this.state.searchQqList.length&&0==this.state.searchKugouList.length?f.default.createElement(h.default,null):"",0==this.state.searchNetEaseList.length?"":f.default.createElement("section",{style:{width:"100%"}},f.default.createElement(l.default,{style:{fontSize:"17px",color:"#333"}},"网易云搜索结果"),f.default.createElement(function(){return e.state.searchNetEaseList.map(function(e,a){if(a<30)return f.default.createElement(t,{ele:e,index:a,key:a})})},null)),0==this.state.searchQqList.length?"":f.default.createElement("section",{style:{width:"100%"}},f.default.createElement(l.default,{style:{fontSize:"17px",color:"#333"}},"QQ音乐搜索结果"),f.default.createElement(function(){return e.state.searchQqList.map(function(e,a){if(a<30)return f.default.createElement(t,{ele:e,index:a,key:a})})},null)),0==this.state.searchKugouList.length?"":f.default.createElement("section",{style:{width:"100%"}},f.default.createElement(l.default,{style:{fontSize:"17px",color:"#333"}},"酷狗音乐搜索结果"),f.default.createElement(function(){return e.state.searchKugouList.map(function(e,a){if(a<30)return f.default.createElement(t,{ele:e,index:a,key:a})})},null))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0==t.searchStorageArr.length?{searchStorageArr:(0,m.getLocalStorage)(t.searchStorageName)}:null}}]),t}(f.default.Component);t.default=v},HB48:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(a("14Xm")),n=o(a("4d7F")),l=o(a("gDS+")),r=o(a("GQeE")),u=o(a("D3Ub"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,u.default)(s.default.mark(function e(){var t,a,u,o,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=i.url,c=void 0===d?"":d,f=i.type,p=void 0===f?"GET":f,m=i.data,j=void 0===m?{}:m;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("GET"==(p=p.toUpperCase())?(t="",j&&((0,r.default)(j).forEach(function(e){t+=e+"="+j[e]+"&"}),c=(c+"?"+t).slice(0,-1))):"POST"==p&&(j=(0,l.default)(j)),!window.fetch){e.next=14;break}return a={method:p,mode:"cors",cache:"force-cache",headers:{"Content-type":"application/json",Accept:"application/json"}},"POST"==p&&Object.defineProperty(a,"body",{value:j}),e.next=7,fetch(c,a);case 7:return u=e.sent,e.next=10,u.json();case 10:return o=e.sent,e.abrupt("return",o);case 14:return e.abrupt("return",new n.default(function(e){var t=new XMLHttpRequest||new ActiveXObject("Microsoft.XMLHTTP");t.open(p,c,!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),t.send(j),t.onreadystatechange=function(a){if(4==t.readyState&&200==t.status){var s="";t.response.constructor!=Object&&(s=JSON.parse(t.responseText)),e(s)}}}));case 15:case"end":return e.stop()}},e,void 0)}))},KnRw:function(e,t,a){var s={"./af":"/Tvm","./af.js":"/Tvm","./ar":"yRKQ","./ar-dz":"2Mgn","./ar-dz.js":"2Mgn","./ar-kw":"SyK9","./ar-kw.js":"SyK9","./ar-ly":"Km2t","./ar-ly.js":"Km2t","./ar-ma":"k+3Q","./ar-ma.js":"k+3Q","./ar-sa":"dbzX","./ar-sa.js":"dbzX","./ar-tn":"E7L0","./ar-tn.js":"E7L0","./ar.js":"yRKQ","./az":"marO","./az.js":"marO","./be":"c9Cq","./be.js":"c9Cq","./bg":"Rxhz","./bg.js":"Rxhz","./bm":"Zf0k","./bm.js":"Zf0k","./bn":"qbSa","./bn.js":"qbSa","./bo":"aPmz","./bo.js":"aPmz","./br":"V/F2","./br.js":"V/F2","./bs":"CToL","./bs.js":"CToL","./ca":"GuxH","./ca.js":"GuxH","./cs":"qrel","./cs.js":"qrel","./cv":"wv9F","./cv.js":"wv9F","./cy":"7JVd","./cy.js":"7JVd","./da":"PtRy","./da.js":"PtRy","./de":"xhqU","./de-at":"bJtj","./de-at.js":"bJtj","./de-ch":"fRjz","./de-ch.js":"fRjz","./de.js":"xhqU","./dv":"tEna","./dv.js":"tEna","./el":"vE8+","./el.js":"vE8+","./en-au":"aGvD","./en-au.js":"aGvD","./en-ca":"TyIU","./en-ca.js":"TyIU","./en-gb":"xbvL","./en-gb.js":"xbvL","./en-ie":"8wpQ","./en-ie.js":"8wpQ","./en-il":"O112","./en-il.js":"O112","./en-nz":"mRnY","./en-nz.js":"mRnY","./eo":"nEfC","./eo.js":"nEfC","./es":"QqXE","./es-do":"OH6n","./es-do.js":"OH6n","./es-us":"VqXm","./es-us.js":"VqXm","./es.js":"QqXE","./et":"/BjE","./et.js":"/BjE","./eu":"lS/Y","./eu.js":"lS/Y","./fa":"Xl2a","./fa.js":"Xl2a","./fi":"pKmA","./fi.js":"pKmA","./fo":"1sIW","./fo.js":"1sIW","./fr":"t+gs","./fr-ca":"ApVP","./fr-ca.js":"ApVP","./fr-ch":"mR/r","./fr-ch.js":"mR/r","./fr.js":"t+gs","./fy":"zrXP","./fy.js":"zrXP","./gd":"7WNt","./gd.js":"7WNt","./gl":"EkHg","./gl.js":"EkHg","./gom-latn":"IlNN","./gom-latn.js":"IlNN","./gu":"SIlg","./gu.js":"SIlg","./he":"RWgf","./he.js":"RWgf","./hi":"fVgC","./hi.js":"fVgC","./hr":"QeL5","./hr.js":"QeL5","./hu":"UGq4","./hu.js":"UGq4","./hy-am":"powx","./hy-am.js":"powx","./id":"+gpe","./id.js":"+gpe","./is":"3azS","./is.js":"3azS","./it":"T/vC","./it.js":"T/vC","./ja":"n/+T","./ja.js":"n/+T","./jv":"pOn/","./jv.js":"pOn/","./ka":"5BLU","./ka.js":"5BLU","./kk":"i4p7","./kk.js":"i4p7","./km":"Rdvl","./km.js":"Rdvl","./kn":"x+k7","./kn.js":"x+k7","./ko":"+Fhz","./ko.js":"+Fhz","./ku":"4wLu","./ku.js":"4wLu","./ky":"dDLa","./ky.js":"dDLa","./lb":"Gudj","./lb.js":"Gudj","./lo":"VShb","./lo.js":"VShb","./lt":"5eMR","./lt.js":"5eMR","./lv":"JdG9","./lv.js":"JdG9","./me":"VVnP","./me.js":"VVnP","./mi":"oQ6b","./mi.js":"oQ6b","./mk":"tXUT","./mk.js":"tXUT","./ml":"uPxb","./ml.js":"uPxb","./mn":"p9cx","./mn.js":"p9cx","./mr":"b8N1","./mr.js":"b8N1","./ms":"Wnnz","./ms-my":"b+tO","./ms-my.js":"b+tO","./ms.js":"Wnnz","./mt":"V6YG","./mt.js":"V6YG","./my":"rt8X","./my.js":"rt8X","./nb":"xyXD","./nb.js":"xyXD","./ne":"4vTz","./ne.js":"4vTz","./nl":"6QMr","./nl-be":"LMGY","./nl-be.js":"LMGY","./nl.js":"6QMr","./nn":"Qsvx","./nn.js":"Qsvx","./pa-in":"oA7N","./pa-in.js":"oA7N","./pl":"C/jI","./pl.js":"C/jI","./pt":"V7OV","./pt-br":"b3iz","./pt-br.js":"b3iz","./pt.js":"V7OV","./ro":"TwjK","./ro.js":"TwjK","./ru":"YJSy","./ru.js":"YJSy","./sd":"4xdR","./sd.js":"4xdR","./se":"j5S3","./se.js":"j5S3","./si":"Am5L","./si.js":"Am5L","./sk":"sSmc","./sk.js":"sSmc","./sl":"9iY4","./sl.js":"9iY4","./sq":"cnMZ","./sq.js":"cnMZ","./sr":"ss7R","./sr-cyrl":"tGLK","./sr-cyrl.js":"tGLK","./sr.js":"ss7R","./ss":"mYhl","./ss.js":"mYhl","./sv":"IGtO","./sv.js":"IGtO","./sw":"p49z","./sw.js":"p49z","./ta":"VVil","./ta.js":"VVil","./te":"YQaq","./te.js":"YQaq","./tet":"2u18","./tet.js":"2u18","./tg":"oil7","./tg.js":"oil7","./th":"gJLt","./th.js":"gJLt","./tl-ph":"ogwM","./tl-ph.js":"ogwM","./tlh":"0bHV","./tlh.js":"0bHV","./tr":"BYDG","./tr.js":"BYDG","./tzl":"IUMd","./tzl.js":"IUMd","./tzm":"94jC","./tzm-latn":"Mgge","./tzm-latn.js":"Mgge","./tzm.js":"94jC","./ug-cn":"4xjM","./ug-cn.js":"4xjM","./uk":"NrFT","./uk.js":"NrFT","./ur":"U58I","./ur.js":"U58I","./uz":"orAx","./uz-latn":"jCvl","./uz-latn.js":"jCvl","./uz.js":"orAx","./vi":"t2dB","./vi.js":"t2dB","./x-pseudo":"XFnJ","./x-pseudo.js":"XFnJ","./yo":"qKGQ","./yo.js":"qKGQ","./zh-cn":"3O3J","./zh-cn.js":"3O3J","./zh-hk":"Fu0X","./zh-hk.js":"Fu0X","./zh-tw":"2Pdx","./zh-tw.js":"2Pdx"};function n(e){var t=l(e);return a(t)}function l(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(s)},n.resolve=l,e.exports=n,n.id="KnRw"},LDel:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={albumList:"https://api.bzqll.com/music/netease/hotSongList",songList:"https://api.bzqll.com/music/netease/songList",songMsg:"https://api.bzqll.com/music/netease/song",netEaseSearch:"https://api.bzqll.com/music/netease/search",qqSearch:"https://api.bzqll.com/music/tencent/search",kugouSearch:"https://api.bzqll.com/music/kugou/search"}},OXQi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={userInfo:"",albumList:[]}},Q2AE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("ANjH"),n=r(a("Ffhv")),l=r(a("sINF"));function r(e){return e&&e.__esModule?e:{default:e}}var u=(0,s.createStore)(n.default,(0,s.applyMiddleware)(l.default));t.default=u},RnhZ:function(e,t,a){var s={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function n(e){var t=l(e);return a(t)}function l(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(s)},n.resolve=l,e.exports=n,n.id="RnhZ"},SL7a:function(e,t,a){},VVpj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=j(a("CtXQ")),n=j(a("BMrR")),l=j(a("kPKH")),r=j(a("Yz+Y")),u=j(a("iCc5")),o=j(a("V7oC")),i=j(a("FYw3")),d=j(a("mRg0"));a("2oDE"),a("Jmwx"),a("rO+z");var c=j(a("q1tI")),f=a("eO8H"),p=a("vaoO"),m=j(a("Fea+"));function j(e){return e&&e.__esModule?e:{default:e}}a("n0f3");var h=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.state={id:null,songMsg:{}},a.getSongs=a.getSongs.bind(a),a}return(0,d.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.query,t=this.props.location.search,a=e&&e.id?e.id:t.split("=")[1];this.getSongs(a)}},{key:"getSongs",value:function(e){var t=this;(0,p.getSongList)({id:e,limit:30}).then(function(a){200==a.code&&t.setState({id:e,songMsg:a.data})})}},{key:"render",value:function(){return c.default.createElement("section",{className:"album-detail"},c.default.createElement(n.default,{className:"head",style:{padding:"30px 10px 30px 15px"}},c.default.createElement("div",{className:"mask",style:{backgroundImage:"url("+this.state.songMsg.songListPic+")"}}),c.default.createElement(l.default,{xs:{span:10},sm:{span:6},style:{postion:"relative",zIndex:2}},c.default.createElement("img",{src:this.state.songMsg.songListPic,alt:"",style:{width:"126px",height:"126px"}}),c.default.createElement("span",{className:"listen"},this.state.songMsg.songListPlayCount)),c.default.createElement(l.default,{span:14,style:{postion:"relative",zIndex:2}},c.default.createElement("p",{style:{color:"#fefefe",fontSize:"17px",lineHeight:"20px"}},this.state.songMsg.songListName),c.default.createElement("p",{style:{color:"#ccc",fontSize:"14px"}},"ID:",this.state.songMsg.songListUserId))),c.default.createElement(n.default,{style:{padding:"20px 10px 10px 15px",color:"#666",fontSize:"14px"}},"简介：",this.state.songMsg.songListDescription),c.default.createElement(n.default,{style:{padding:"0px 10px 0px 15px",color:"#666",fontSize:"14px",lineHeight:"25px",background:"#eeeff0"}},"歌单列表："),c.default.createElement(n.default,{style:{zIndex:10,position:"relative"}},this.state.songMsg.songs?this.state.songMsg.songs.map(function(e,t){if(t<30)return c.default.createElement(f.Link,{to:{pathname:"/songdetail",query:{id:e.id},search:"?id="+e.id},key:t},c.default.createElement(n.default,{type:"flex",align:"middle",style:{padding:"5px 0 5px 10px"}},c.default.createElement(l.default,{xs:{span:2},sm:{span:1},style:{fontSize:"18px",color:"#999"}},t+1),c.default.createElement(l.default,{xs:{span:22},sm:{span:23},style:{borderBottom:"1px solid rgba(170, 170, 170, 0.3)",paddingRight:"10px"}},c.default.createElement(n.default,{type:"flex",justify:"space-between",align:"middle"},c.default.createElement(n.default,{style:{width:"90%"}},c.default.createElement(l.default,{style:{fontSize:"16px",color:"#333"}},e.name),c.default.createElement(l.default,{style:{fontSize:"12px",color:"#888"}},e.singer)),c.default.createElement(s.default,{type:"play-circle",style:{fontSize:"23px",color:"#aaaaaa"}})))))}):c.default.createElement(m.default,null)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null}}]),t}(c.default.Component);t.default=h},a6px:function(e,t,a){},geJ5:function(e,t,a){},ia6h:function(e,t,a){},jM62:function(e,t,a){},lggp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=v(a("BvKs")),n=v(a("BMrR")),l=v(a("kPKH")),r=v(a("Tckk")),u=v(a("Yz+Y")),o=v(a("iCc5")),i=v(a("V7oC")),d=v(a("FYw3")),c=v(a("mRg0")),f=v(a("5rEg")),p=v(a("Ol7k"));a("2WkQ"),a("Jmwx"),a("rO+z"),a("xpQY"),a("1vPl"),a("M7k7");var m=v(a("q1tI")),j=a("eO8H");a("geJ5");var h=v(a("t57H")),g=v(a("20KN")),y=v(a("Gcfw"));function v(e){return e&&e.__esModule?e:{default:e}}var x=p.default.Header,E=p.default.Content,b=(p.default.Footer,p.default.Sider,f.default.Search),S=function(e){function t(e){(0,o.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.state={title:"Music",curRoute:"recommend",routes:{recommend:"recommend",hotlist:"hotlist",search:"search"}},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){return m.default.createElement("div",{className:"home"},m.default.createElement(p.default,null,m.default.createElement(x,{style:{background:"#1890ff",padding:"0 10px",position:"sticky",top:0,left:0,zIndex:10}},m.default.createElement(n.default,{align:"middle",type:"flex",justify:"space-between"},m.default.createElement(l.default,null,m.default.createElement(r.default,{src:"../../assets/images/logo.svg",size:"large"})),m.default.createElement(l.default,{span:7,style:{color:"#fff",fontSize:"16px"}},this.state.title),m.default.createElement(l.default,{span:14},m.default.createElement(j.Link,{to:this.props.match.url+"/"+this.state.routes.search},m.default.createElement(b,{placeholder:"搜索",disabled:!0}))))),m.default.createElement(E,{style:{background:"#fff",overflow:"hidden"}},m.default.createElement(s.default,{mode:"horizontal",selectedKeys:[this.state.curRoute],style:{display:"flex",justifyContent:"space-between"}},m.default.createElement(s.default.Item,{key:this.state.routes.recommend},m.default.createElement(j.Link,{to:this.props.match.url+"/"+this.state.routes.recommend},"推荐音乐")),m.default.createElement(s.default.Item,{key:this.state.routes.hotlist},m.default.createElement(j.Link,{to:this.props.match.url+"/"+this.state.routes.hotlist},"热门歌曲")),m.default.createElement(s.default.Item,{key:this.state.routes.search},m.default.createElement(j.Link,{to:this.props.match.url+"/"+this.state.routes.search},"搜索"))),m.default.createElement(j.Switch,null,m.default.createElement(j.Route,{path:this.props.match.path+"/"+this.state.routes.hotlist,exact:!0,component:h.default}),m.default.createElement(j.Route,{path:this.props.match.path+"/"+this.state.routes.search,exact:!0,component:y.default}),m.default.createElement(j.Route,{path:this.props.match.path+"/:"+this.state.routes.recommend+"?",exact:!0,component:g.default})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.location.pathname.slice(6);return t.routes[a]?{curRoute:t.routes[a]}:null}}]),t}(m.default.Component);t.default=S},n0f3:function(e,t,a){},oYx3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(a("q1tI")),n=a("eO8H"),l=o(a("lggp")),r=o(a("zbIP")),u=o(a("VVpj"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return s.default.createElement(n.HashRouter,null,s.default.createElement(n.Switch,null,s.default.createElement(n.Route,{path:"/home",component:l.default}),s.default.createElement(n.Route,{path:"/songdetail",component:r.default}),s.default.createElement(n.Route,{path:"/albumdetail",component:u.default}),s.default.createElement(n.Redirect,{to:"/home"})))}},pYmE:function(e,t,a){},qz5Q:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.type||"get",a=e.dataType||"json",s=e.url,n=e.data||{},l=e.success,r="";for(var u in n)r+=u+"="+n[u]+"&";if(r=r.slice(0,-1),"json"==a){var o=new XMLHttpRequest;"get"==t?(o.open("get",s+"?"+r),o.send(null)):"post"==t&&(o.open("post",s),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(r)),o.onreadystatechange=function(){if(200==o.status&&4==o.readyState){var e=o.responseText;e=JSON.parse(e),l(e)}}}else if("jsonp"==a){var i="myJsonp"+(new Date).getTime()+Math.random().toString().slice(2),d=document.createElement("script");window[i]=function(e){l(e)},d.src=""==r?s+"&callback="+i:s+"?"+r+"&callback="+i,document.body.appendChild(d)}}},t57H:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=j(a("CtXQ")),n=j(a("BMrR")),l=j(a("kPKH")),r=j(a("Yz+Y")),u=j(a("iCc5")),o=j(a("V7oC")),i=j(a("FYw3")),d=j(a("mRg0"));a("2oDE"),a("Jmwx"),a("rO+z");var c=j(a("q1tI")),f=a("eO8H"),p=a("vaoO"),m=j(a("Fea+"));function j(e){return e&&e.__esModule?e:{default:e}}a("ia6h");var h=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.state={songList:[]},a}return(0,d.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this;(0,p.getSongList)().then(function(t){200==t.code&&e.setState({songList:t.data})})}},{key:"render",value:function(){return c.default.createElement("section",{className:"hot-list"},c.default.createElement(n.default,null,c.default.createElement(l.default,{span:24,className:"banner"},c.default.createElement("div",{className:"title-bg"}))),c.default.createElement(n.default,null,this.state.songList.songs?this.state.songList.songs.map(function(e,t){if(t<20)return c.default.createElement(f.Link,{to:{pathname:"/songdetail",query:{id:e.id},search:"?id="+e.id},key:t},c.default.createElement(n.default,{type:"flex",align:"middle",style:{padding:"5px 0 5px 10px"}},c.default.createElement(l.default,{xs:{span:2},sm:{span:1},style:{fontSize:"18px",color:"#999"}},t+1),c.default.createElement(l.default,{xs:{span:22},sm:{span:23},style:{borderBottom:"1px solid rgba(170, 170, 170, 0.3)",paddingRight:"10px"}},c.default.createElement(n.default,{type:"flex",justify:"space-between",align:"middle"},c.default.createElement(n.default,{style:{width:"90%"}},c.default.createElement(l.default,{style:{fontSize:"16px",color:"#333"}},e.name),c.default.createElement(l.default,{style:{fontSize:"12px",color:"#888"}},e.singer)),c.default.createElement(s.default,{type:"play-circle",style:{fontSize:"23px",color:"#aaaaaa"}})))))}):c.default.createElement(m.default,null)))}}]),t}(c.default.Component);t.default=h},tjUo:function(e,t,a){"use strict";var s=i(a("MR/8"));a("yQ84");var n=i(a("q1tI")),l=i(a("i8i4")),r=i(a("xc/l")),u=i(a("wd/R"));a("XDpg");var o=i(a("vpQ9"));function i(e){return e&&e.__esModule?e:{default:e}}u.default.locale("zh-cn"),l.default.render(n.default.createElement(s.default,{locale:r.default},n.default.createElement(o.default,null)),document.getElementById("root"))},uJMD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delLocalStorage=t.getLocalStorage=t.setLocalStorage=void 0;var s,n=a("gDS+"),l=(s=n)&&s.__esModule?s:{default:s};t.setLocalStorage=function(e,t){var a=r(t);if(e.constructor==Object)u(t),window.localStorage.setItem(t,(0,l.default)(e));else if(a)-1==(0,l.default)(a).indexOf(e.toString())&&a.constructor==Array&&(a.push(e),window.localStorage.setItem(t,(0,l.default)(a)));else{var s=[];s.push(e),window.localStorage.setItem(t,(0,l.default)(s))}};var r=t.getLocalStorage=function(e){return window.localStorage.getItem(e)?JSON.parse(window.localStorage.getItem(e)):""},u=t.delLocalStorage=function(e){e&&window.localStorage.removeItem(e,"")}},vaoO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getKugouSearch=t.getQqSearch=t.getNetEaseSearch=t.getSongMsg=t.getSongList=t.getAlbumList=void 0;var s=l(a("HB48")),n=(l(a("qz5Q")),l(a("LDel")));function l(e){return e&&e.__esModule?e:{default:e}}t.getAlbumList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,a=void 0===t?12:t,l=e.order,r=void 0===l?"hot":l;return(0,s.default)({url:n.default.albumList,data:{key:579621905,cat:"全部",limit:a,offset:0,order:r}})},t.getSongList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,a=void 0===t?20:t,l=e.id,r=void 0===l?3778678:l;return(0,s.default)({url:n.default.songList,data:{key:579621905,id:r,limit:a,offset:0}})},t.getSongMsg=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id,t=void 0===e?516728102:e;return(0,s.default)({url:n.default.songMsg,data:{key:579621905,id:t}})},t.getNetEaseSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.s,a=void 0===t?"":t,l=e.type,r=void 0===l?"song":l,u=e.limit,o=void 0===u?10:u;return(0,s.default)({url:n.default.netEaseSearch,data:{key:579621905,s:a,type:r,limit:o,offset:0}})},t.getQqSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.s,a=void 0===t?"":t,l=e.type,r=void 0===l?"song":l,u=e.limit,o=void 0===u?10:u;return(0,s.default)({url:n.default.qqSearch,data:{key:579621905,s:a,type:r,limit:o,offset:0}})},t.getKugouSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.s,a=void 0===t?"":t,l=e.type,r=void 0===l?"song":l,u=e.limit,o=void 0===u?10:u;return(0,s.default)({url:n.default.kugouSearch,data:{key:579621905,s:a,type:r,limit:o,offset:0}})}},vpQ9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=p(a("Yz+Y")),n=p(a("iCc5")),l=p(a("V7oC")),r=p(a("FYw3")),u=p(a("mRg0")),o=a("q1tI"),i=p(o),d=a("/MKj"),c=p(a("oYx3")),f=p(a("Q2AE"));function p(e){return e&&e.__esModule?e:{default:e}}a("pYmE");var m=function(e){function t(){return(0,n.default)(this,t),(0,r.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return i.default.createElement(d.Provider,{store:f.default},i.default.createElement("div",{className:"app"},i.default.createElement(c.default,null)))}}]),t}(o.Component);t.default=m},zbIP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(a("Yz+Y")),n=i(a("iCc5")),l=i(a("V7oC")),r=i(a("FYw3")),u=i(a("mRg0")),o=i(a("q1tI"));a("eO8H");function i(e){return e&&e.__esModule?e:{default:e}}a("a6px");var d=function(e){function t(e){(0,n.default)(this,t);var a=(0,r.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.state={},a}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return o.default.createElement("section",{className:"song-detail"},"播放音乐")}}]),t}(o.default.Component);t.default=d}},[[0,1,2]]])});