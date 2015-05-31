(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;
if(!j&&i){return i(m,!0)
}if(a){return a(m,!0)
}var k=new Error("Cannot find module '"+m+"'");
throw k.code="MODULE_NOT_FOUND",k
}var h=g[m]={exports:{}};
b[m][0].call(h.exports,function(l){var o=b[m][1][l];
return c(o?o:l)
},h,h.exports,e,b,g,d)
}return g[m].exports
}var a=typeof require=="function"&&require;
for(var f=0;
f<d.length;
f++){c(d[f])
}return c
})({1:[function(b,d,a){var c=(function(){function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}return function(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}
})();
function h(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}var g=b("../alt");
var f=b("../utils/ArticleFetcher");
var i=(function(){function p(){h(this,p)
}c(p,[{key:"fetchArticle",value:function s(v){var u=this;
this.dispatch();
f.fetchArticle(v).then(function(w){u.actions.articleFetched({faq:w.faq})
})
}},{key:"articleFetched",value:function j(u){this.dispatch(u)
}},{key:"recommendedFetched",value:function k(u){this.dispatch(u)
}},{key:"fetchRecommended",value:function q(v){var u=this;
f.fetchRecommended().then(function(w){u.actions.recommendedFetched(w)
})
}},{key:"fetchTopic",value:function o(v){var u=this;
this.dispatch(v);
f.fetchTopic(v).then(function(w){u.actions.topicFetched(w)
})
}},{key:"topicFetched",value:function n(u){this.dispatch(u)
}},{key:"resetUUID",value:function l(){this.dispatch()
}},{key:"logHelpCenterClick",value:function r(u){this.dispatch(u)
}},{key:"logMainView",value:function m(u){this.dispatch(u)
}}]);
return p
})();
d.exports=g.createActions(i)
},{"../alt":2,"../utils/ArticleFetcher":9}],2:[function(b,d,a){var c=b("alt");
d.exports=new c()
},{alt:14}],3:[function(c,d,a){var b=c("react");
var g=window.$;
var h=c("../utils/ArticleUtils");
var i=c("../actions/ArticleActions");
var f=b.createClass({displayName:"Article",getInitialState:function(){return{loading:false}
},getAnswer:function(){return{__html:this.props.article.answer}
},onBack:function(j){j.preventDefault();
if(this.props.onBack){this.props.onBack()
}},onArticleClick:function(j){i.logHelpCenterClick(this.props.article.id)
},componentDidUpdate:function(){this.interceptInternalLinks()
},interceptInternalLinks:function(){var m=this;
var k=g(this.refs.dangerousBody.getDOMNode()).find("a");
var l=h.extractArticleLinks(k);
l.on("click",function(o){var n=h.extractArticleId(o.currentTarget.getAttribute("href"));
if(!isNaN(n)){o.preventDefault();
i.fetchArticle(n)
}});
var j=h.extractTopicLinks(k);
j.on("click",function(o){var n=h.extractTopicId(o.target.getAttribute("href"));
if(!isNaN(n)){o.preventDefault();
i.fetchTopic(n);
if(m.props.onBack){m.props.onBack()
}}})
},componentDidMount:function(){this.interceptInternalLinks()
},render:function(){return b.createElement("div",{className:"article"},b.createElement("div",{className:"row row-space-top-2"},b.createElement("div",{className:"col-lg-12"},b.createElement("a",{href:"#",onClick:this.onBack},"‹ ",t("back")))),b.createElement("div",{className:"row"},b.createElement("hr",{className:"col-12"})),b.createElement("div",{className:"article-body"},b.createElement("div",null,b.createElement("h4",null,this.props.article.question)),b.createElement("div",{className:"article-body--dangerous",ref:"dangerousBody",dangerouslySetInnerHTML:this.getAnswer()}),b.createElement("a",{href:"/help/article/"+this.props.article.id,onClick:this.onArticleClick},t("view this article in the help center")," ›")),b.createElement("div",{className:"expandable-indicator"}," "))
}});
d.exports=f
},{"../actions/ArticleActions":1,"../utils/ArticleUtils":10,react:"react"}],4:[function(f,d,i){var c=f("react");
var a=f("classnames");
var g=f("./Article");
var h=f("./ArticleLink");
var b=f("../stores/ArticleStore");
var k=f("../actions/ArticleActions");
var j=c.createClass({displayName:"Accordion",getInitialState:function(){return{expanded:false,currentArticle:null,topic:{name:null,articles:[]}}
},componentDidMount:function(){b.listen(this.onChange)
},onBack:function(){this.setState({expanded:false,currentArticle:null})
},onArticleClick:function(l){this.setState({expanded:true});
k.logMainView(l);
k.fetchArticle(l)
},onChange:function(l){if(!this.isMounted()){return
}this.setState({topic:l.topic,currentArticle:l.currentArticle})
},onHelpLink:function(l){k.logHelpCenterClick("help")
},render:function(){var q=this;
var n,p,o,m;
var l=a({accordion:true,expanded:this.state.expanded});
o=a({"left-panel":true,loading:!this.state.topic});
m=a({"right-panel":true,loading:!this.state.currentArticle});
if(this.state.topic&&this.state.topic.articles){n=this.state.topic.articles.map(function(r){return c.createElement(h,{key:r.title,onClick:q.onArticleClick,article:r})
})
}if(this.state.currentArticle){p=c.createElement(g,{article:this.state.currentArticle,onBack:this.onBack})
}return c.createElement("div",{className:"accordion-outer"},c.createElement("div",{className:l},c.createElement("div",{className:o},c.createElement("div",{className:"border-bottom"},c.createElement("a",{href:"/help",onClick:this.onHelpLink},t("visit the help center")," »")),n),c.createElement("div",{className:m},p)))
}});
d.exports=j
},{"../actions/ArticleActions":1,"../stores/ArticleStore":8,"./Article":3,"./ArticleLink":5,classnames:26,react:"react"}],5:[function(c,d,a){var b=c("react");
var h=c("../actions/ArticleActions");
var g=c("../utils/ArticleUtils");
var f=b.createClass({displayName:"ArticleLink",onClick:function(i){if(!this.props.article.id){h.logHelpCenterClick(g.extractHelpLink(this.props.article.link));
return true
}i.preventDefault();
this.props.onClick(this.props.article.id)
},render:function(){return b.createElement("div",{className:"article-link"},b.createElement("div",{className:"col-11"},b.createElement("a",{href:this.props.article.link||"#",onClick:this.onClick},this.props.article.title)),b.createElement("div",{className:"col-1"},b.createElement("i",{className:"pull-right icon icon-chevron-right"})))
}});
d.exports=f
},{"../actions/ArticleActions":1,"../utils/ArticleUtils":10,react:"react"}],6:[function(d,c,g){var b=d("react");
var i=d("alt/mixins/ListenerMixin");
var a=d("classnames");
var k=d("../actions/ArticleActions");
var j=d("./ArticleAccordion");
var h=d("jquery");
var f=b.createClass({displayName:"FieldGuide",mixins:[i],getInitialState:function(){return{visible:this.props.visible||false,expanded:false}
},togglePanel:function(m){var l=this.state.visible;
m.preventDefault();
this.setState({visible:!l});
if(l){k.resetUUID()
}},componentDidMount:function(){k.fetchRecommended()
},mouseLeaveHandler:function(l){var m=this;
h("html").on("click.field-guide",function(){m.setState({visible:false});
h("html").off("click.field-guide")
})
},mouseEnterHandler:function(l){h("html").off("click.field-guide")
},componentWillUnmount:function(){h("html").off("click.field-guide")
},render:function(){var l;
var m=a({comp:true,"pull-right":true,"no-border":true});
var n=a({tooltip:true,"tooltip-top-right":true,"field-guide":true,visible:this.state.visible});
l=b.createElement("a",{className:"panel-close",href:"#",onClick:this.togglePanel});
return b.createElement("div",{className:m,onMouseEnter:this.mouseEnterHandler,onMouseLeave:this.mouseLeaveHandler},b.createElement("a",{id:"header-help-trigger",className:"hdr-btn help-toggle link-reset",onClick:this.togglePanel,href:"#"},t("help")," ",b.createElement("i",{className:"icon icon-caret-down icon-light-gray h5"})),b.createElement("div",{className:n},b.createElement("div",{className:"panel-body field-guide-body"},b.createElement(j,{expanded:this.state.expanded}))))
}});
c.exports=f
},{"../actions/ArticleActions":1,"./ArticleAccordion":4,"alt/mixins/ListenerMixin":21,classnames:26,jquery:"jquery",react:"react"}],7:[function(c,d,a){var b=c("react");
var g=c("./components/FieldGuide");
var f=b.createElement(g);
b.render(f,document.getElementById("header-help-menu"))
},{"./components/FieldGuide":6,react:"react"}],8:[function(f,d,h){var g=(function(){function m(q,o){for(var n=0;
n<o.length;
n++){var p=o[n];
p.enumerable=p.enumerable||false;
p.configurable=true;
if("value" in p){p.writable=true
}Object.defineProperty(q,p.key,p)
}}return function(p,n,o){if(n){m(p.prototype,n)
}if(o){m(p,o)
}return p
}
})();
function i(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}var j=f("../alt");
var k=f("../actions/ArticleActions");
var c=f("../utils/ArticleUtils");
var l=f("underscore");
var a=f("uuid");
var b=(function(){function m(){i(this,m);
this.bindAction(k.fetchArticle,this.fetchArticle);
this.bindAction(k.articleFetched,this.onArticleFetched);
this.bindAction(k.recommendedFetched,this.onFetchRecommended);
this.bindAction(k.fetchTopic,this.fetchTopic);
this.bindAction(k.topicFetched,this.onTopicFetched);
this.bindAction(k.resetUUID,this.resetUUID);
this.bindAction(k.logHelpCenterClick,this.logHelpCenterClick);
this.bindAction(k.logMainView,this.logMainView);
this.currentArticle=null;
this.topic={};
this.helpFeatures={};
this.uuid=a.v4()
}g(m,[{key:"fetchArticle",value:function u(){this.currentArticle=null
}},{key:"fetchTopic",value:function p(){this.topic=null
}},{key:"onArticleFetched",value:function q(x){this.currentArticle=x.faq;
var w={panel_view:this.uuid,topic_name:this.topic.name,target_id:this.currentArticle.id};
c.logImpression({eventName:"field_guide_article_view",data:w})
}},{key:"onFetchRecommended",value:function r(w){this.topic={name:"Suggested Articles",articles:w.faqs};
this.helpFeatures=w.help_features
}},{key:"resetUUID",value:function n(){this.uuid=a.v4()
}},{key:"logHelpCenterClick",value:function v(w){c.logImpression({eventName:"field_guide_help_center_view",data:{panel_view:this.uuid,topic_name:this.topic.name,help_features:this.helpFeatures,article_list:l.map(this.topic.articles,function(x){return x.id
}),target_id:w},queue:true})
}},{key:"logMainView",value:function o(x){var w={panel_view:this.uuid,topic_name:this.topic.name,target_id:x,help_features:this.helpFeatures,url_list:l.map(this.topic.articles,function(y){return y.id
}),click_index:l.indexOf(this.topic.articles,l.findWhere(this.topic.articles,{id:x}))};
c.logImpression({eventName:"field_guide_menu_item",data:w})
}},{key:"onTopicFetched",value:function s(x){var w=x.faq_category;
this.topic={name:w.name,articles:w.faqs.map(function(y){return c.convertFaqtoArticle(y.faq)
})}
}}]);
return m
})();
d.exports=j.createStore(b)
},{"../actions/ArticleActions":1,"../alt":2,"../utils/ArticleUtils":10,underscore:"underscore",uuid:31}],9:[function(c,d,b){var a=window.Airbnb.Api;
var g=window.$;
var h=c("../actions/ArticleActions");
var f={fetchRecommended:function(){return g.get("/old_help/populate_help_dropdown",{window_location:window.location.href})
},fetchArticle:function(i){return a.get("/v1/help/faq/"+i)
},fetchTopic:function(i){return a.get("/v1/help/faq_category/"+i)
},search:function(i){a.get("/v1/help/search?q="+i,{success:function(j){h.searchArticles(j)
}})
}};
d.exports=f
},{"../actions/ArticleActions":1}],10:[function(c,d,a){var f=window.Airbnb;
var b=c("underscore");
var g={extractArticleLinks:function(h){return h.filter(function(i,j){return j.getAttribute("href").match(/\/(article|question)\/\d*$/)
})
},extractArticleId:function(h){if(!h){return
}return h.match(/\d+$/)
},extractTopicLinks:function(h){return h.filter(function(i,j){return j.getAttribute("href").match(/\/topic\/\d*$/)
})
},extractTopicId:function(h){if(!h){return
}return h.match(/\d+$/)
},convertFaqtoArticle:function(h){return{title:h.question,id:h.id}
},extractHelpLink:function(h){return h.replace("/help/","")
},logImpression:function(h){var i=h.data;
b.extend(i,{source:"help_center",is_host:f.userAttributes.is_active_host});
f.Tracking.logEvent({event_name:h.eventName,event_data:i,queue:h.queue||false})
}};
d.exports=g
},{underscore:"underscore"}],11:[function(b,c,a){b("../field_guide/initialize.js")
},{"../field_guide/initialize.js":7}],12:[function(f,c,i){Object.defineProperty(i,"__esModule",{value:true});
var g=(function(){function m(q,o){for(var n=0;
n<o.length;
n++){var p=o[n];
p.enumerable=p.enumerable||false;
p.configurable=true;
if("value" in p){p.writable=true
}Object.defineProperty(q,p.key,p)
}}return function(p,n,o){if(n){m(p.prototype,n)
}if(o){m(p,o)
}return p
}
})();
function k(o){if(o&&o.__esModule){return o
}else{var m={};
if(o!=null){for(var n in o){if(Object.prototype.hasOwnProperty.call(o,n)){m[n]=o[n]
}}}m["default"]=o;
return m
}}function j(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}var l=f("./symbols/symbols");
var d=k(l);
var h=d.ACTION_HANDLER;
var b=d.ACTION_UID;
var a=(function(){function n(q,o,p,s,r){j(this,n);
this[b]=o;
this[h]=p.bind(this);
this.actionDetails=r;
this.actions=s;
this.alt=q
}g(n,[{key:"dispatch",value:function m(o){this.alt.dispatch(this[b],o,this.actionDetails)
}}]);
return n
})();
i["default"]=a;
c.exports=i["default"]
},{"./symbols/symbols":15}],13:[function(o,d,x){Object.defineProperty(x,"__esModule",{value:true});
var s=(function(){function y(C,A){for(var z=0;
z<A.length;
z++){var B=A[z];
B.enumerable=B.enumerable||false;
B.configurable=true;
if("value" in B){B.writable=true
}Object.defineProperty(C,B.key,B)
}}return function(B,z,A){if(z){y(B.prototype,z)
}if(A){y(B,A)
}return B
}
})();
function w(A){if(A&&A.__esModule){return A
}else{var y={};
if(A!=null){for(var z in A){if(Object.prototype.hasOwnProperty.call(A,z)){y[z]=A[z]
}}}y["default"]=A;
return y
}}function b(y){return y&&y.__esModule?y:{"default":y}
}function g(y,z){if(!(y instanceof z)){throw new TypeError("Cannot call a class as a function")
}}var h=o("eventemitter3");
var c=b(h);
var n=o("object-assign");
var p=b(n);
var v=o("es-symbol");
var m=b(v);
var r=o("./symbols/symbols");
var u=w(r);
var j=u.ALL_LISTENERS;
var k=u.LIFECYCLE;
var l=u.LISTENERS;
var f=u.PUBLIC_METHODS;
var q=u.STATE_CONTAINER;
var a=m["default"]();
var i=(function(){function D(H,F,G,E){var I=this;
g(this,D);
this[a]=new c["default"]();
this[k]={};
this[q]=G||F;
this._storeName=F._storeName;
this.boundListeners=F[j];
this.StoreModel=E;
if(typeof this.StoreModel==="object"){this.StoreModel.state=p["default"]({},E.state)
}p["default"](this[k],F[k]);
p["default"](this,F[f]);
this.dispatchToken=H.dispatcher.register(function(L){if(F[k].beforeEach){F[k].beforeEach(L,I[q])
}if(F[l][L.action]){var J=false;
try{J=F[l][L.action](L.data)
}catch(K){if(I[k].error){I[k].error(K,L,I[q])
}else{throw K
}}if(J!==false){I.emitChange()
}}if(F[k].afterEach){F[k].afterEach(L,I[q])
}});
if(this[k].init){this[k].init()
}}s(D,[{key:"getEventEmitter",value:function B(){return this[a]
}},{key:"emitChange",value:function C(){this[a].emit("change",this[q])
}},{key:"listen",value:function z(E){var F=this;
this[a].on("change",E);
return function(){return F.unlisten(E)
}
}},{key:"unlisten",value:function A(E){if(this[k].unlisten){this[k].unlisten()
}this[a].removeListener("change",E)
}},{key:"getState",value:function y(){return this.StoreModel.config.getState.call(this,this[q])
}}]);
return D
})();
x["default"]=i;
d.exports=x["default"]
},{"./symbols/symbols":15,"es-symbol":23,eventemitter3:24,"object-assign":25}],14:[function(i,d,v){Object.defineProperty(v,"__esModule",{value:true});
var l=Function.prototype.bind;
var b=function u(D,A,z){var B=true;
_function:while(B){y=E=C=undefined;
B=false;
var x=D,F=A,w=z;
var y=Object.getOwnPropertyDescriptor(x,F);
if(y===undefined){var E=Object.getPrototypeOf(x);
if(E===null){return undefined
}else{D=E;
A=F;
z=w;
B=true;
continue _function
}}else{if("value" in y){return y.value
}else{var C=y.get;
if(C===undefined){return undefined
}return C.call(w)
}}}};
var p=(function(){function w(A,y){for(var x=0;
x<y.length;
x++){var z=y[x];
z.enumerable=z.enumerable||false;
z.configurable=true;
if("value" in z){z.writable=true
}Object.defineProperty(A,z.key,z)
}}return function(z,x,y){if(x){w(z.prototype,x)
}if(y){w(z,y)
}return z
}
})();
function c(w){return w&&w.__esModule?w:{"default":w}
}function m(x,w){if(typeof w!=="function"&&w!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof w)
}x.prototype=Object.create(w&&w.prototype,{constructor:{value:x,enumerable:false,writable:true,configurable:true}});
if(w){x.__proto__=w
}}function f(w,x){if(!(w instanceof x)){throw new TypeError("Cannot call a class as a function")
}}var h=i("object-assign");
var j=c(h);
var r=i("flux");
var k=i("./utils/makeAction");
var n=c(k);
var q=i("./utils/StateFunctions");
var a=i("./utils/StoreUtils");
var o=i("./symbols/symbols");
var s=i("./utils/AltUtils");
var g=(function(){function E(){var N=arguments[0]===undefined?{}:arguments[0];
f(this,E);
this.config=N;
this.serialize=N.serialize||JSON.stringify;
this.deserialize=N.deserialize||JSON.parse;
this.dispatcher=N.dispatcher||new r.Dispatcher();
this.actions={global:{}};
this.stores={};
this.storeTransforms=N.storeTransforms||[];
this[o.ACTIONS_REGISTRY]={};
this[o.INIT_SNAPSHOT]={};
this[o.LAST_SNAPSHOT]={}
}p(E,[{key:"dispatch",value:function F(P,O,N){this.dispatcher.dispatch({action:P,data:O,details:N})
}},{key:"createUnsavedStore",value:function C(P){for(var N=arguments.length,O=Array(N>1?N-1:0),R=1;
R<N;
R++){O[R-1]=arguments[R]
}var Q=P.displayName||"";
a.createStoreConfig(this.config,P);
var S=a.transformStore(this.storeTransforms,P);
return typeof S==="object"?a.createStoreFromObject(this,S,Q):a.createStoreFromClass.apply(undefined,[this,S,Q].concat(O))
}},{key:"createStore",value:function G(R,Q){for(var N=arguments.length,P=Array(N>2?N-2:0),O=2;
O<N;
O++){P[O-2]=arguments[O]
}var S=Q||R.displayName||R.name||"";
a.createStoreConfig(this.config,R);
var U=a.transformStore(this.storeTransforms,R);
if(this.stores[S]||!S){if(this.stores[S]){s.warn("A store named "+S+" already exists, double check your store names or pass in your own custom identifier for each store")
}else{s.warn("Store name was not specified")
}S=s.uid(this.stores,S)
}var T=typeof U==="object"?a.createStoreFromObject(this,U,S):a.createStoreFromClass.apply(undefined,[this,U,S].concat(P));
this.stores[S]=T;
q.saveInitialSnapshot(this,S);
return T
}},{key:"generateActions",value:function I(){for(var Q=arguments.length,P=Array(Q),N=0;
N<Q;
N++){P[N]=arguments[N]
}var O={name:"global"};
return this.createActions(P.reduce(function(S,R){S[R]=s.dispatchIdentity;
return S
},O))
}},{key:"createAction",value:function J(O,N,P){return n["default"](this,"global",O,N,P)
}},{key:"createActions",value:function A(U){var R=this;
for(var T=arguments.length,P=Array(T>2?T-2:0),N=2;
N<T;
N++){P[N-2]=arguments[N]
}var Q=arguments[1]===undefined?{}:arguments[1];
var S={};
var O=s.uid(this[o.ACTIONS_REGISTRY],U.displayName||U.name||"Unknown");
if(typeof U==="function"){(function(){j["default"](S,s.getInternalMethods(U.prototype,true));
var V=(function(Y){function W(){for(var ab=arguments.length,aa=Array(ab),Z=0;
Z<ab;
Z++){aa[Z]=arguments[Z]
}f(this,W);
b(Object.getPrototypeOf(W.prototype),"constructor",this).apply(this,aa)
}m(W,Y);
p(W,[{key:"generateActions",value:function X(){for(var Z=arguments.length,aa=Array(Z),ab=0;
ab<Z;
ab++){aa[ab]=arguments[ab]
}aa.forEach(function(ac){S[ac]=s.dispatchIdentity
})
}}]);
return W
})(U);
j["default"](S,new (l.apply(V,[null].concat(P)))())
})()
}else{j["default"](S,U)
}this.actions[O]=this.actions[O]||{};
return Object.keys(S).reduce(function(X,W){if(typeof S[W]!=="function"){return X
}X[W]=n["default"](R,O,W,S[W],X);
var V=s.formatAsConstant(W);
X[V]=X[W][o.ACTION_KEY];
return X
},Q)
}},{key:"takeSnapshot",value:function K(){for(var O=arguments.length,N=Array(O),Q=0;
Q<O;
Q++){N[Q]=arguments[Q]
}var P=q.snapshot(this,N);
j["default"](this[o.LAST_SNAPSHOT],P);
return this.serialize(P)
}},{key:"rollback",value:function L(){q.setAppState(this,this.serialize(this[o.LAST_SNAPSHOT]),function(N){if(N[o.LIFECYCLE].rollback){N[o.LIFECYCLE].rollback()
}N.emitChange()
})
}},{key:"recycle",value:function z(){for(var P=arguments.length,O=Array(P),Q=0;
Q<P;
Q++){O[Q]=arguments[Q]
}var N=O.length?q.filterSnapshots(this,this[o.INIT_SNAPSHOT],O):this[o.INIT_SNAPSHOT];
q.setAppState(this,this.serialize(N),function(R){if(R[o.LIFECYCLE].init){R[o.LIFECYCLE].init()
}R.emitChange()
})
}},{key:"flush",value:function M(){var N=this.serialize(q.snapshot(this));
this.recycle();
return N
}},{key:"bootstrap",value:function B(N){q.setAppState(this,N,function(O){if(O[o.LIFECYCLE].bootstrap){O[o.LIFECYCLE].bootstrap()
}O.emitChange()
})
}},{key:"prepare",value:function H(N,P){var O={};
if(!N._storeName){throw new ReferenceError("Store provided does not have a name")
}O[N._storeName]=P;
return this.serialize(O)
}},{key:"addActions",value:function y(O,R){for(var P=arguments.length,N=Array(P>2?P-2:0),Q=2;
Q<P;
Q++){N[Q-2]=arguments[Q]
}this.actions[O]=Array.isArray(R)?this.generateActions.apply(this,R):this.createActions.apply(this,[R].concat(N))
}},{key:"addStore",value:function x(P,O){for(var Q=arguments.length,N=Array(Q>2?Q-2:0),R=2;
R<Q;
R++){N[R-2]=arguments[R]
}this.createStore.apply(this,[O,P].concat(N))
}},{key:"getActions",value:function w(N){return this.actions[N]
}},{key:"getStore",value:function D(N){return this.stores[N]
}}]);
return E
})();
v["default"]=g;
d.exports=v["default"]
},{"./symbols/symbols":15,"./utils/AltUtils":16,"./utils/StateFunctions":17,"./utils/StoreUtils":19,"./utils/makeAction":20,flux:27,"object-assign":25}],15:[function(h,f,l){Object.defineProperty(l,"__esModule",{value:true});
function q(s){return s&&s.__esModule?s:{"default":s}
}var o=h("es-symbol");
var n=q(o);
var j=n["default"]();
l.ACTION_HANDLER=j;
var k=n["default"]();
l.ACTION_KEY=k;
var g=n["default"]();
l.ACTIONS_REGISTRY=g;
var c=n["default"]();
l.ACTION_UID=c;
var i=n["default"]();
l.ALL_LISTENERS=i;
var b=n["default"]();
l.INIT_SNAPSHOT=b;
var d=n["default"]();
l.LAST_SNAPSHOT=d;
var a=n["default"]();
l.LIFECYCLE=a;
var r=n["default"]();
l.LISTENERS=r;
var m=n["default"]();
l.PUBLIC_METHODS=m;
var p=n["default"]();
l.STATE_CONTAINER=p
},{"es-symbol":23}],16:[function(d,c,f){Object.defineProperty(f,"__esModule",{value:true});
f.getInternalMethods=b;
f.warn=k;
f.uid=j;
f.formatAsConstant=h;
f.dispatchIdentity=i;
function g(){}var a=Object.getOwnPropertyNames(g);
var l=Object.getOwnPropertyNames(g.prototype);
function b(o,n){var m=n?l:a;
return Object.getOwnPropertyNames(o).reduce(function(q,p){if(m.indexOf(p)!==-1){return q
}q[p]=o[p];
return q
},{})
}function k(m){if(typeof console!=="undefined"){console.warn(new ReferenceError(m))
}}function j(m,n){var p=0;
var o=n;
while(Object.hasOwnProperty.call(m,o)){o=n+String(++p)
}return o
}function h(m){return m.replace(/[a-z]([A-Z])/g,function(n){return""+n[0]+"_"+n[1].toLowerCase()
}).toUpperCase()
}function i(m){for(var o=arguments.length,n=Array(o>1?o-1:0),p=1;
p<o;
p++){n[p-1]=arguments[p]
}this.dispatch(n.length?[m].concat(n):m)
}},{}],17:[function(j,f,l){Object.defineProperty(l,"__esModule",{value:true});
l.setAppState=p;
l.snapshot=b;
l.saveInitialSnapshot=k;
l.filterSnapshots=o;
function m(v){if(v&&v.__esModule){return v
}else{var s={};
if(v!=null){for(var u in v){if(Object.prototype.hasOwnProperty.call(v,u)){s[u]=v[u]
}}}s["default"]=v;
return s
}}function r(s){return s&&s.__esModule?s:{"default":s}
}var i=j("object-assign");
var h=r(i);
var n=j("../symbols/symbols");
var g=m(n);
var c=g.INIT_SNAPSHOT;
var d=g.LAST_SNAPSHOT;
var a=g.LIFECYCLE;
var q=g.STATE_CONTAINER;
function p(s,v,u){var w=s.deserialize(v);
Object.keys(w).forEach(function(z){var x=s.stores[z];
if(x){var y=x.StoreModel.config;
if(y.onDeserialize){w[z]=y.onDeserialize(w[z])||w[z]
}h["default"](x[q],w[z]);
u(x)
}})
}function b(s){var v=arguments[1]===undefined?[]:arguments[1];
var u=v.length?v:Object.keys(s.stores);
return u.reduce(function(A,B){var z=B.displayName||B;
var x=s.stores[z];
var y=x.StoreModel.config;
if(x[a].snapshot){x[a].snapshot()
}var w=y.onSerialize&&y.onSerialize(x[q]);
A[z]=w?w:x.getState();
return A
},{})
}function k(s,u){var v=s.deserialize(s.serialize(s.stores[u][q]));
s[c][u]=v;
s[d][u]=v
}function o(s,v,u){return u.reduce(function(y,w){var x=w.displayName||w;
if(!v[x]){throw new ReferenceError(""+x+" is not a valid store")
}y[x]=v[x];
return y
},{})
}},{"../symbols/symbols":15,"object-assign":25}],18:[function(c,a,d){Object.defineProperty(d,"__esModule",{value:true});
function q(r){return r&&r.__esModule?r:{"default":r}
}var n=c("es-symbol");
var i=q(n);
var f=c("../symbols/symbols");
var p={waitFor:function h(s){if(!s){throw new ReferenceError("Dispatch tokens not provided")
}var r=s;
if(arguments.length===1){r=Array.isArray(r)?r:[r]
}else{r=Array.prototype.slice.call(arguments)
}var u=r.map(function(v){return v.dispatchToken||v
});
this.dispatcher.waitFor(u)
},exportPublicMethods:function o(r){var s=this;
Object.keys(r).forEach(function(u){if(typeof r[u]!=="function"){throw new TypeError("exportPublicMethods expects a function")
}s[f.PUBLIC_METHODS][u]=r[u]
})
},emitChange:function l(){this.getInstance().emitChange()
}};
d.StoreMixinEssentials=p;
var k={on:function j(s,r){this[f.LIFECYCLE][s]=r.bind(this)
},bindAction:function m(u,s){if(!u){throw new ReferenceError("Invalid action reference passed in")
}if(typeof s!=="function"){throw new TypeError("bindAction expects a function")
}if(s.length>1){throw new TypeError("Action handler in store "+this._storeName+" for "+(""+(u[f.ACTION_KEY]||u).toString()+" was defined with 2 ")+"parameters. Only a single parameter is passed through the dispatcher, did you mean to pass in an Object instead?")
}var r=u[f.ACTION_KEY]?u[f.ACTION_KEY]:u;
this[f.LISTENERS][r]=s.bind(this);
this[f.ALL_LISTENERS].push(i["default"].keyFor(r))
},bindActions:function b(s){var r=this;
Object.keys(s).forEach(function(w){var v=s[w];
var y=/./;
var x=w.replace(y,function(z){return"on"+z[0].toUpperCase()
});
var u=null;
if(r[w]&&r[x]){throw new ReferenceError("You have multiple action handlers bound to an action: "+(""+w+" and "+x))
}else{if(r[w]){u=r[w]
}else{if(r[x]){u=r[x]
}}}if(u){r.bindAction(v,u)
}})
},bindListeners:function g(s){var r=this;
Object.keys(s).forEach(function(u){var w=s[u];
var v=r[u];
if(!v){throw new ReferenceError(""+u+" defined but does not exist in "+r._storeName)
}if(Array.isArray(w)){w.forEach(function(x){r.bindAction(x,v)
})
}else{r.bindAction(w,v)
}})
}};
d.StoreMixinListeners=k
},{"../symbols/symbols":15,"es-symbol":23}],19:[function(k,c,w){Object.defineProperty(w,"__esModule",{value:true});
var q=Function.prototype.bind;
var a=function u(E,D,C){var A=true;
_function:while(A){z=F=B=undefined;
A=false;
var y=E,G=D,x=C;
var z=Object.getOwnPropertyDescriptor(y,G);
if(z===undefined){var F=Object.getPrototypeOf(y);
if(F===null){return undefined
}else{E=F;
D=G;
C=x;
A=true;
continue _function
}}else{if("value" in z){return z.value
}else{var B=z.get;
if(B===undefined){return undefined
}return B.call(x)
}}}};
w.createStoreConfig=d;
w.transformStore=h;
w.createStoreFromObject=g;
w.createStoreFromClass=m;
function b(x){return x&&x.__esModule?x:{"default":x}
}function f(x,y){if(!(x instanceof y)){throw new TypeError("Cannot call a class as a function")
}}function r(y,x){if(typeof x!=="function"&&x!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof x)
}y.prototype=Object.create(x&&x.prototype,{constructor:{value:y,enumerable:false,writable:true,configurable:true}});
if(x){y.__proto__=x
}}var j=k("object-assign");
var l=b(j);
var v=k("../AltStore");
var p=b(v);
var o=k("./AltUtils");
var i=k("./StoreMixins");
var s=k("../symbols/symbols");
function n(x,B,A){if(!A){return
}var y=B.StoreModel.config;
var z=typeof A==="function"?A(B[s.STATE_CONTAINER]):A;
B[s.STATE_CONTAINER]=y.setState.call(x,B[s.STATE_CONTAINER],z);
if(!x.alt.dispatcher.isDispatching()){x.emitChange()
}}function d(z,y){y.config=l["default"]({getState:function x(A){return Object.keys(A).reduce(function(C,B){C[B]=A[B];
return C
},{})
},setState:l["default"]},z,y.config)
}function h(y,x){return y.reduce(function(A,z){return z(A)
},x)
}function g(C,x,y){var B=undefined;
var A={};
A[s.ALL_LISTENERS]=[];
A[s.LIFECYCLE]={};
A[s.LISTENERS]={};
l["default"](A,{_storeName:y,alt:C,dispatcher:C.dispatcher,getInstance:function z(){return B
},setState:function D(E){n(this,B,E)
}},i.StoreMixinListeners,i.StoreMixinEssentials,x);
if(A.bindListeners){i.StoreMixinListeners.bindListeners.call(A,A.bindListeners)
}if(A.lifecycle){Object.keys(A.lifecycle).forEach(function(E){i.StoreMixinListeners.on.call(A,E,A.lifecycle[E])
})
}B=l["default"](new p["default"](C,A,A.state,x),A.publicMethods,{displayName:y});
return B
}function m(A,B,I){for(var F=arguments.length,H=Array(F>3?F-3:0),x=3;
x<F;
x++){H[x-3]=arguments[x]
}var E=undefined;
var y=B.config;
var D=(function(K){function J(){for(var L=arguments.length,N=Array(L),M=0;
M<L;
M++){N[M]=arguments[M]
}f(this,J);
a(Object.getPrototypeOf(J.prototype),"constructor",this).apply(this,N)
}r(J,K);
return J
})(B);
l["default"](D.prototype,i.StoreMixinListeners,i.StoreMixinEssentials,{_storeName:I,alt:A,dispatcher:A.dispatcher,getInstance:function z(){return E
},setState:function C(J){n(this,E,J)
}});
D.prototype[s.ALL_LISTENERS]=[];
D.prototype[s.LIFECYCLE]={};
D.prototype[s.LISTENERS]={};
D.prototype[s.PUBLIC_METHODS]={};
var G=new (q.apply(D,[null].concat(H)))();
E=l["default"](new p["default"](A,G,G[A.config.stateKey]||G[y.stateKey]||null,B),o.getInternalMethods(B),{displayName:I});
return E
}},{"../AltStore":13,"../symbols/symbols":15,"./AltUtils":16,"./StoreMixins":18,"object-assign":25}],20:[function(f,a,j){Object.defineProperty(j,"__esModule",{value:true});
j["default"]=n;
function q(r){return r&&r.__esModule?r:{"default":r}
}function k(u){if(u&&u.__esModule){return u
}else{var r={};
if(u!=null){for(var s in u){if(Object.prototype.hasOwnProperty.call(u,s)){r[s]=u[s]
}}}r["default"]=u;
return r
}}var l=f("../symbols/symbols");
var c=k(l);
var p=f("es-symbol");
var m=q(p);
var d=f("../AltAction");
var o=q(d);
var h=f("./AltUtils");
var i=c.ACTION_KEY;
var g=c.ACTION_HANDLER;
var b=c.ACTIONS_REGISTRY;
function n(D,x,u,y,A){var r=h.uid(D[b],""+x+"."+u);
D[b][r]=1;
var w=m["default"]["for"]("alt/"+r);
var B={namespace:x,name:u,id:r,symbol:w};
var C=new o["default"](D,w,y,A,B);
var z=C[g];
z.defer=function(){for(var E=arguments.length,F=Array(E),G=0;
G<E;
G++){F[G]=arguments[G]
}setTimeout(function(){C[g].apply(null,F)
})
};
z[i]=w;
z.data=B;
var s=D.actions[x];
var v=h.uid(s,u);
s[v]=z;
return z
}a.exports=j["default"]
},{"../AltAction":12,"../symbols/symbols":15,"./AltUtils":16,"es-symbol":23}],21:[function(c,d,b){var a=c("./Subscribe");
var f={componentWillMount:function(){a.create(this)
},componentWillUnmount:function(){a.destroy(this)
},listenTo:function(g,h){a.add(this,g,h)
},listenToMany:function(g,h){g.forEach(function(i){this.listenTo(i,h)
},this)
},getListeners:function(){return a.listeners(this)
}};
d.exports=f
},{"./Subscribe":22}],22:[function(d,f,b){var g=d("es-symbol");
var c=g("alt store listeners");
var a={create:function(h){h[c]=h[c]||[]
},add:function(i,h,j){i[c].push({store:h,handler:j});
h.listen(j)
},destroy:function(h){h[c].forEach(function(i){i.store.unlisten(i.handler)
});
h[c]=[]
},listeners:function(h){return h[c]
}};
f.exports=a
},{"es-symbol":23}],23:[function(f,d,g){var i={};
var a=Object.create;
var l=Object.defineProperties;
var m=Object.defineProperty;
var o=function(s){var r=arguments[1]===undefined?{}:arguments[1];
return{value:s,configurable:!!r.c,writable:!!r.w,enumerable:!!r.e}
};
var p=function(r){return r&&r[h.toStringTag]==="Symbol"
};
var q=undefined;
try{var n=m({},"y",{get:function(){return 1
}});
q=n.y===1
}catch(k){q=false
}var c={};
var j=function(v){v=String(v);
var s="";
var u=0;
while(c[v+s]){s=u+=1
}c[v+s]=1;
var r="Symbol("+v+""+s+")";
if(q){m(Object.prototype,r,{get:undefined,set:function(w){m(this,r,o(w,{c:true,w:true}))
},configurable:true,enumerable:false})
}return r
};
var b=a(null);
function h(s){if(this instanceof h){throw new TypeError("Symbol is not a constructor")
}s=s===undefined?"":String(s);
var r=j(s);
if(!q){return r
}return a(b,{__description__:o(s),__tag__:o(r)})
}l(h,{"for":o(function(r){var u=String(r);
if(i[u]){return i[u]
}var s=h(u);
i[u]=s;
return s
}),keyFor:o(function(r){if(q&&!p(r)){throw new TypeError(""+r+" is not a symbol")
}for(var s in i){if(i[s]===r){return q?i[s].__description__:i[s].substr(7,i[s].length-8)
}}})});
l(h,{hasInstance:o(h("hasInstance")),isConcatSpreadable:o(h("isConcatSpreadable")),iterator:o(h("iterator")),match:o(h("match")),replace:o(h("replace")),search:o(h("search")),species:o(h("species")),split:o(h("split")),toPrimitive:o(h("toPrimitive")),toStringTag:o(h("toStringTag")),unscopables:o(h("unscopables"))});
l(b,{constructor:o(h),toString:o(function(){return this.__tag__
}),valueOf:o(function(){return"Symbol("+this.__description__+")"
})});
if(q){m(b,h.toStringTag,o("Symbol",{c:true}))
}d.exports=typeof Symbol==="function"?Symbol:h
},{}],24:[function(d,c,f){function m(p,n,o){this.fn=p;
this.context=n;
this.once=o||false
}function l(){}l.prototype._events=undefined;
l.prototype.listeners=function i(q){if(!this._events||!this._events[q]){return[]
}if(this._events[q].fn){return[this._events[q].fn]
}for(var p=0,o=this._events[q].length,n=new Array(o);
p<o;
p++){n[p]=this._events[q][p].fn
}return n
};
l.prototype.emit=function j(o,q,p,n,z,y){if(!this._events||!this._events[o]){return false
}var x=this._events[o],v=arguments.length,w,u;
if("function"===typeof x.fn){if(x.once){this.removeListener(o,x.fn,true)
}switch(v){case 1:return x.fn.call(x.context),true;
case 2:return x.fn.call(x.context,q),true;
case 3:return x.fn.call(x.context,q,p),true;
case 4:return x.fn.call(x.context,q,p,n),true;
case 5:return x.fn.call(x.context,q,p,n,z),true;
case 6:return x.fn.call(x.context,q,p,n,z,y),true
}for(u=1,w=new Array(v-1);
u<v;
u++){w[u-1]=arguments[u]
}x.fn.apply(x.context,w)
}else{var r=x.length,s;
for(u=0;
u<r;
u++){if(x[u].once){this.removeListener(o,x[u].fn,true)
}switch(v){case 1:x[u].fn.call(x[u].context);
break;
case 2:x[u].fn.call(x[u].context,q);
break;
case 3:x[u].fn.call(x[u].context,q,p);
break;
default:if(!w){for(s=1,w=new Array(v-1);
s<v;
s++){w[s-1]=arguments[s]
}}x[u].fn.apply(x[u].context,w)
}}}return true
};
l.prototype.on=function h(p,o,n){var q=new m(o,n||this);
if(!this._events){this._events={}
}if(!this._events[p]){this._events[p]=q
}else{if(!this._events[p].fn){this._events[p].push(q)
}else{this._events[p]=[this._events[p],q]
}}return this
};
l.prototype.once=function b(p,o,n){var q=new m(o,n||this,true);
if(!this._events){this._events={}
}if(!this._events[p]){this._events[p]=q
}else{if(!this._events[p].fn){this._events[p].push(q)
}else{this._events[p]=[this._events[p],q]
}}return this
};
l.prototype.removeListener=function g(u,r,q){if(!this._events||!this._events[u]){return this
}var p=this._events[u],o=[];
if(r){if(p.fn&&(p.fn!==r||(q&&!p.once))){o.push(p)
}if(!p.fn){for(var n=0,s=p.length;
n<s;
n++){if(p[n].fn!==r||(q&&!p[n].once)){o.push(p[n])
}}}}if(o.length){this._events[u]=o.length===1?o[0]:o
}else{delete this._events[u]
}return this
};
l.prototype.removeAllListeners=function k(n){if(!this._events){return this
}if(n){delete this._events[n]
}else{this._events={}
}return this
};
l.prototype.off=l.prototype.removeListener;
l.prototype.addListener=l.prototype.on;
l.prototype.setMaxListeners=function a(){return this
};
l.EventEmitter=l;
l.EventEmitter2=l;
l.EventEmitter3=l;
c.exports=l
},{}],25:[function(b,c,a){function d(f){if(f==null){throw new TypeError("Object.assign cannot be called with null or undefined")
}return Object(f)
}c.exports=Object.assign||function(k,j){var m;
var h;
var l=d(k);
for(var g=1;
g<arguments.length;
g++){m=arguments[g];
h=Object.keys(Object(m));
for(var f=0;
f<h.length;
f++){l[h[f]]=m[h[f]]
}}return l
}
},{}],26:[function(b,c,a){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
function d(){var k="";
for(var j=0;
j<arguments.length;
j++){var f=arguments[j];
if(!f){continue
}var g=typeof f;
if("string"===g||"number"===g){k+=" "+f
}else{if(Array.isArray(f)){k+=" "+d.apply(null,f)
}else{if("object"===g){for(var h in f){if(f.hasOwnProperty(h)&&f[h]){k+=" "+h
}}}}}}return k.substr(1)
}if(typeof c!=="undefined"&&c.exports){c.exports=d
}if(typeof define!=="undefined"&&define.amd){define("classnames",[],function(){return d
})
}},{}],27:[function(b,c,a){c.exports.Dispatcher=b("./lib/Dispatcher")
},{"./lib/Dispatcher":28}],28:[function(g,h,f){var d=g("./invariant");
var c=1;
var a="ID_";
function b(){this.$Dispatcher_callbacks={};
this.$Dispatcher_isPending={};
this.$Dispatcher_isHandled={};
this.$Dispatcher_isDispatching=false;
this.$Dispatcher_pendingPayload=null
}b.prototype.register=function(j){var i=a+c++;
this.$Dispatcher_callbacks[i]=j;
return i
};
b.prototype.unregister=function(i){d(this.$Dispatcher_callbacks[i],"Dispatcher.unregister(...): `%s` does not map to a registered callback.",i);
delete this.$Dispatcher_callbacks[i]
};
b.prototype.waitFor=function(j){d(this.$Dispatcher_isDispatching,"Dispatcher.waitFor(...): Must be invoked while dispatching.");
for(var i=0;
i<j.length;
i++){var k=j[i];
if(this.$Dispatcher_isPending[k]){d(this.$Dispatcher_isHandled[k],"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",k);
continue
}d(this.$Dispatcher_callbacks[k],"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",k);
this.$Dispatcher_invokeCallback(k)
}};
b.prototype.dispatch=function(i){d(!this.$Dispatcher_isDispatching,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.");
this.$Dispatcher_startDispatching(i);
try{for(var j in this.$Dispatcher_callbacks){if(this.$Dispatcher_isPending[j]){continue
}this.$Dispatcher_invokeCallback(j)
}}finally{this.$Dispatcher_stopDispatching()
}};
b.prototype.isDispatching=function(){return this.$Dispatcher_isDispatching
};
b.prototype.$Dispatcher_invokeCallback=function(i){this.$Dispatcher_isPending[i]=true;
this.$Dispatcher_callbacks[i](this.$Dispatcher_pendingPayload);
this.$Dispatcher_isHandled[i]=true
};
b.prototype.$Dispatcher_startDispatching=function(i){for(var j in this.$Dispatcher_callbacks){this.$Dispatcher_isPending[j]=false;
this.$Dispatcher_isHandled[j]=false
}this.$Dispatcher_pendingPayload=i;
this.$Dispatcher_isDispatching=true
};
b.prototype.$Dispatcher_stopDispatching=function(){this.$Dispatcher_pendingPayload=null;
this.$Dispatcher_isDispatching=false
};
h.exports=b
},{"./invariant":29}],29:[function(c,d,b){var a=function(g,q,p,o,n,l,j,i){if(false){if(q===undefined){throw new Error("invariant requires an error message argument")
}}if(!g){var m;
if(q===undefined){m=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
}else{var k=[p,o,n,l,j,i];
var h=0;
m=new Error("Invariant Violation: "+q.replace(/%s/g,function(){return k[h++]
}))
}m.framesToPop=1;
throw m
}};
d.exports=a
},{}],30:[function(b,c,a){(function(i){var f;
if(i.crypto&&crypto.getRandomValues){var d=new Uint8Array(16);
f=function g(){crypto.getRandomValues(d);
return d
}
}if(!f){var h=new Array(16);
f=function(){for(var j=0,k;
j<16;
j++){if((j&3)===0){k=Math.random()*4294967296
}h[j]=k>>>((j&3)<<3)&255
}return h
}
}c.exports=f
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{}],31:[function(c,b,h){var d=c("./rng");
var q=[];
var j={};
for(var k=0;
k<256;
k++){q[k]=(k+256).toString(16).substr(1);
j[q[k]]=k
}function f(x,u,y){var v=(u&&y)||0,w=0;
u=u||[];
x.toLowerCase().replace(/[0-9a-f]{2}/g,function(i){if(w<16){u[v+w++]=j[i]
}});
while(w<16){u[v+w++]=0
}return u
}function m(u,w){var v=w||0,x=q;
return x[u[v++]]+x[u[v++]]+x[u[v++]]+x[u[v++]]+"-"+x[u[v++]]+x[u[v++]]+"-"+x[u[v++]]+x[u[v++]]+"-"+x[u[v++]]+x[u[v++]]+"-"+x[u[v++]]+x[u[v++]]+x[u[v++]]+x[u[v++]]+x[u[v++]]+x[u[v++]]
}var s=d();
var p=[s[0]|1,s[1],s[2],s[3],s[4],s[5]];
var g=(s[6]<<8|s[7])&16383;
var n=0,l=0;
function r(G,w,A){var B=w&&A||0;
var C=w||[];
G=G||{};
var z=G.clockseq!==undefined?G.clockseq:g;
var u=G.msecs!==undefined?G.msecs:new Date().getTime();
var F=G.nsecs!==undefined?G.nsecs:l+1;
var v=(u-n)+(F-l)/10000;
if(v<0&&G.clockseq===undefined){z=z+1&16383
}if((v<0||u>n)&&G.nsecs===undefined){F=0
}if(F>=10000){throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
}n=u;
l=F;
g=z;
u+=12219292800000;
var E=((u&268435455)*10000+F)%4294967296;
C[B++]=E>>>24&255;
C[B++]=E>>>16&255;
C[B++]=E>>>8&255;
C[B++]=E&255;
var D=(u/4294967296*10000)&268435455;
C[B++]=D>>>8&255;
C[B++]=D&255;
C[B++]=D>>>24&15|16;
C[B++]=D>>>16&255;
C[B++]=z>>>8|128;
C[B++]=z&255;
var y=G.node||p;
for(var x=0;
x<6;
x++){C[B+x]=y[x]
}return w?w:m(C)
}function o(v,u,z){var w=u&&z||0;
if(typeof(v)=="string"){u=v=="binary"?new Array(16):null;
v=null
}v=v||{};
var y=v.random||(v.rng||d)();
y[6]=(y[6]&15)|64;
y[8]=(y[8]&63)|128;
if(u){for(var x=0;
x<16;
x++){u[w+x]=y[x]
}}return u||m(y)
}var a=o;
a.v1=r;
a.v4=o;
a.parse=f;
a.unparse=m;
b.exports=a
},{"./rng":30}]},{},[11]);