function _interopRequireDefault(a){return a&&a.__esModule?a:{"default":a}
}var _airbnb=require("airbnb");
var _airbnb2=_interopRequireDefault(_airbnb);
var usePlaceholderSearchTip=false;
if(_airbnb2["default"].Utils.getScreenSize()==="lg"){usePlaceholderSearchTip=_airbnb2["default"].ERF.deliverExperiment("placeholder_search_tip",{control:function(){return false
},experiment:function(){return true
},treatment_unknown:function(){return false
}})
}if(usePlaceholderSearchTip){(function(){var a=I18n.t("saved_search_search_for_city_address_landmark");
location_el=$("#location");
location_el.each(function(){$(this).attr("value","");
$(this).attr("placeholder",a)
})
})()
}(function(){var a=require("o2");
AIR.DiscoveryHelper={els:{discoveryContainer:$("#discovery-container"),communityWrapper:$("#community-wrapper"),belongAnywhereWrapper:$("#belong-anywhere-wrapper")},loadDiscoverFeed:function(d){var c=$("#discover-recommendations .homepage-module");
var b=$("#weekend-recommendations");
if(!!d.error||!d.first_page_discovery_html){this.els.discoveryContainer.remove();
this.els.communityWrapper.after(this.els.belongAnywhereWrapper.detach());
return
}c.replaceWith(d.first_page_discovery_html);
if(d.weekend_discovery_html){b.html(d.weekend_discovery_html);
b.removeClass("hide")
}$(".mobile-discovery-arrow").removeClass("hide");
if(a.matchMedia.is("sm")){$(".discovery-card").each(function(f,h){var g=$(h);
if(g.data("sm-img-url")){g.css("background-image","url("+g.data("sm-img-url")+")")
}})
}$(".show-more").on("click",function(f){$(this).addClass("hide");
$(".all-destinations").removeClass("hide")
});
this.addDestinationClickHandlers(d);
this.addScrollLogging()
},loadSavedSearches:function(b){var c=$("#discovery-saved-searches");
if(b.saved_searches_html){this.els.discoveryContainer.on("click","#discovery-saved-searches .discovery-card",this.logClick.bind(this,"saved_searches",b.saved_searches_data));
c.html(b.saved_searches_html).removeClass("hide")
}},logClick:function(d,c,b){Airbnb.Tracking.queueEvent({event_name:"discovery",event_data:_.extend({page:"p1",operation:"click",section:d,click_url:$(b.target).parents(".discovery-card").find("a").attr("href")},c)})
},logDestinationClickHandler:function(b,d,f,c){Tracking.queueEvent({event_name:"discovery",event_data:{page:"p1",operation:"click",user_location:b.user_location,user_locale:b.user_locale,user_tld:b.user_tld,locations:d.locations,metadata:d.metadata,titles:d.titles,types:d.types,click_index:d.locations.indexOf($(c.target).parents('[data-hook="discovery-card"]').data("id")),section:f}})
},addScrollLogging:function(){var d=$(window);
var b=$("#discovery-container").offset().top;
var c=false;
d.on("scroll.discovery",_.throttle(function(){if(!c&&d.scrollTop()>b){Airbnb.Tracking.logEvent({event_name:"discovery",event_data:{page:"p1",operation:"impression",section:"500px"}});
d.off("scroll.discovery");
c=true
}},500))
},addDestinationClickHandlers:function(d){var f=d.user_location;
var c=d.user_locale;
var b=d.user_tld;
this.els.discoveryContainer.on("click",'#weekend-recommendations [data-hook="discovery-card"]',this.logDestinationClickHandler.bind(this,{user_location:f,user_locale:c,user_tld:b},d.weekend_carousel,"carousel"));
this.els.discoveryContainer.on("click",'#weekend-recommendations [data-hook="discovery-see-all-button"]',this.logDestinationClickHandler.bind(this,{user_location:f,user_locale:c,user_tld:b},d.weekend_carousel,"see_all_button"));
this.els.discoveryContainer.on("click",'#discover-recommendations [data-hook="discovery-card"]',this.logDestinationClickHandler.bind(this,{user_location:f,user_locale:c,user_tld:b},d,"general"))
}}
})();
(function(){this.JST||(this.JST={});
this.JST["homepages/trust"]=(function(){this.JST||(this.JST={});
this.JST["homepages/trust"]=Handlebars.template(function(d,k,c,j,i){this.compilerInfo=[2,">= 1.0.0-rc.3"];
c=c||d.helpers;
i=i||{};
var g="",a,f="function",h=this.escapeExpression,l=this;
function b(p,o){var m="",n;
m+='\n        <div class="col-4 text-center">\n          <div class="panel-body text-white">\n            <span class="icon trust-icon icon-size-3 icon-white ';
if(n=c.icon){n=n.call(p,{hash:{},data:o})
}else{n=p.icon;
n=typeof n===f?n.apply(p):n
}m+=h(n)+'"></span>\n            <h4>';
if(n=c.header){n=n.call(p,{hash:{},data:o})
}else{n=p.header;
n=typeof n===f?n.apply(p):n
}m+=h(n)+"</h4>\n            <p> ";
if(n=c.description){n=n.call(p,{hash:{},data:o})
}else{n=p.description;
n=typeof n===f?n.apply(p):n
}if(n||n===0){m+=n
}m+="</p>\n          </div>\n        </div>\n      ";
return m
}g+='<div class="page-container-full panel-hackberry panel-contrast text-center">\n  <div class="page-container-responsive">\n    <div class="row row-space-top-8 text-white">\n      <h2 class="text-center text-special text-white">';
if(a=c.header){a=a.call(k,{hash:{},data:i})
}else{a=k.header;
a=typeof a===f?a.apply(k):a
}g+=h(a)+'</h2>\n    </div>\n    <div class="row row-space-8">\n      ';
a=c.each.call(k,k.points,{hash:{},inverse:l.noop,fn:l.program(1,b,i),data:i});
if(a||a===0){g+=a
}g+="\n    </div>\n  </div>\n</div>\n";
return g
});
return this.JST["homepages/trust"]
}).call(this)
}).call(this);
(function(){this.JST||(this.JST={});
this.JST["homepages/video"]=(function(){this.JST||(this.JST={});
this.JST["homepages/video"]=Handlebars.template(function(f,l,d,k,j){this.compilerInfo=[2,">= 1.0.0-rc.3"];
d=d||f.helpers;
j=j||{};
var h="",b,g="function",i=this.escapeExpression,p=this;
function c(t,s){var q="",r;
q+='preload="';
if(r=d.preload){r=r.call(t,{hash:{},data:s})
}else{r=t.preload;
r=typeof r===g?r.apply(t):r
}q+=i(r)+'"';
return q
}function a(t,s){var q="",r;
q+='loop="';
if(r=d.loop){r=r.call(t,{hash:{},data:s})
}else{r=t.loop;
r=typeof r===g?r.apply(t):r
}q+=i(r)+'"';
return q
}function o(t,s){var q="",r;
q+='id="';
if(r=d.id){r=r.call(t,{hash:{},data:s})
}else{r=t.id;
r=typeof r===g?r.apply(t):r
}q+=i(r)+'"';
return q
}function n(t,s){var q="",r;
q+='<source src="';
if(r=d.mp4){r=r.call(t,{hash:{},data:s})
}else{r=t.mp4;
r=typeof r===g?r.apply(t):r
}q+=i(r)+'" type="video/mp4">';
return q
}function m(t,s){var q="",r;
q+='<source src="';
if(r=d.webm){r=r.call(t,{hash:{},data:s})
}else{r=t.webm;
r=typeof r===g?r.apply(t):r
}q+=i(r)+'" type="video/webm">';
return q
}h+="<video\n  ";
b=d["if"].call(l,l.preload,{hash:{},inverse:p.noop,fn:p.program(1,c,j),data:j});
if(b||b===0){h+=b
}h+="\n  ";
b=d["if"].call(l,l.loop,{hash:{},inverse:p.noop,fn:p.program(3,a,j),data:j});
if(b||b===0){h+=b
}h+="\n  ";
b=d["if"].call(l,l.id,{hash:{},inverse:p.noop,fn:p.program(5,o,j),data:j});
if(b||b===0){h+=b
}h+="\n>\n  ";
b=d["if"].call(l,l.mp4,{hash:{},inverse:p.noop,fn:p.program(7,n,j),data:j});
if(b||b===0){h+=b
}h+="\n  ";
b=d["if"].call(l,l.webm,{hash:{},inverse:p.noop,fn:p.program(9,m,j),data:j});
if(b||b===0){h+=b
}h+="\n</video>\n";
return h
});
return this.JST["homepages/video"]
}).call(this)
}).call(this);
(function(d,b){var a="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
d.fn.imagesLoaded=function(n){function k(){var f=d(r),g=d(s);
v&&(s.length?v.reject(u,f,g):v.resolve(u));
d.isFunction(n)&&n.call(t,u,f,g)
}function q(f,g){f.src===a||-1!==d.inArray(f,p)||(p.push(f),g?s.push(f):r.push(f),d.data(f,"imagesLoaded",{isBroken:g,src:f.src}),c&&v.notifyWith(d(f),[g,u,d(r),d(s)]),u.length===p.length&&(setTimeout(k),u.unbind(".imagesLoaded")))
}var t=this,v=d.isFunction(d.Deferred)?d.Deferred():0,c=d.isFunction(v.notify),u=t.find("img").add(t.filter("img")),p=[],r=[],s=[];
u.length?u.bind("load.imagesLoaded error.imagesLoaded",function(f){q(f.target,"error"===f.type)
}).each(function(f,g){var h=g.src,i=d.data(g,"imagesLoaded");
if(i&&i.src===h){q(g,i.isBroken)
}else{if(g.complete&&g.naturalWidth!==b){q(g,0===g.naturalWidth||0===g.naturalHeight)
}else{if(g.readyState||g.complete){g.src=a,g.src=h
}}}}):k();
return v?v.promise(t):t
}
})(jQuery);
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
})({1:[function(c,a,g){var d=(function(){function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}return function(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}
})();
function h(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}var i=window.Airbnb.Api;
var f=i.getUrl("/v2/batch");
var k="POST";
var j=c("underscore").extend;
var b=(function(){function m(u){h(this,m);
this.request={_transaction:!!u,operations:[]}
}d(m,[{key:"addOperation",value:function o(w,v,u){if(!w){throw new TypeError("must define a method")
}if(!v){throw new TypeError("must define an API path")
}this.request.operations.push(j({},u||{},{method:w,path:v}));
return this
}},{key:"submit",value:function r(u){return $.ajax(j({type:k,url:f,dataType:"json",contentType:"application/json",data:JSON.stringify(this.request)},u||{}))
}},{key:"options",value:function t(v,u){return this.addOperation("OPTIONS",v,u)
}},{key:"get",value:function n(v,u){return this.addOperation("GET",v,u)
}},{key:"put",value:function q(v,u){return this.addOperation("PUT",v,u)
}},{key:"post",value:function s(v,u){return this.addOperation("POST",v,u)
}},{key:"patch",value:function l(v,u){return this.addOperation("PATCH",v,u)
}},{key:"delete",value:function p(v,u){return this.addOperation("DELETE",v,u)
}}]);
return m
})();
a.exports=b
},{underscore:"underscore"}],2:[function(f,d,h){var b=f("react/addons");
var a=b.PropTypes;
var j=b.Children;
var g=f("classnames");
var i=f("jquery");
var k=f("../p1/search/util/Cancelable.js");
var c=b.createClass({displayName:"Slideshow",propTypes:{autoScroll:a.number},getInitialState:function(){return{index:0}
},render:function(){return b.createElement("div",{className:"slideshow"},this._renderPagination(),this._renderSlides())
},componentWillReceiveProps:function(l){if(this._childrenCount()>0){var o=this.props.children[this.state.index].key;
var n=j.map(l.children,function(p){return p.key
});
var m=n.indexOf(o);
if(m!==-1){this.setState({index:m})
}else{this.setState(this.getInitialState())
}}if(l.autoScroll!==this.props.autoScroll){this._resetAutoScroll()
}},componentDidMount:function(){this._resetAutoScroll()
},componentWillUnmount:function(){this._cancelPendingScrollCallback()
},_renderSlides:function(){var l=this;
return j.map(this.props.children,function(m,n){return b.createElement("div",{key:m.key,className:g({slide:true,hide:l.state.index!==n})},m)
})
},_renderPagination:function(){if(this._childrenCount()<=1){return null
}return b.createElement("div",null,b.createElement("a",{className:"slideshow-pagination-left text-left link-icon","data-prevent-default":true,onClick:this._prev},b.createElement("i",{className:"icon icon-size-3 icon-chevron-left text-contrast"})),b.createElement("a",{className:"slideshow-pagination-right text-right link-icon","data-prevent-default":true,onClick:this._next},b.createElement("i",{className:"icon icon-size-3 icon-chevron-right text-contrast"})))
},_resetAutoScroll:function(){this._cancelPendingScrollCallback();
if(this._childrenCount()>1&&this.props.autoScroll){this._autoScrollCallback=k(this._next);
setTimeout(this._autoScrollCallback.action,this.props.autoScroll)
}},_cancelPendingScrollCallback:function(){if(this._autoScrollCallback){this._autoScrollCallback.cancel()
}},_next:function(){this.setState({index:this._indexInc(+1)});
this._resetAutoScroll()
},_prev:function(){this.setState({index:this._indexInc(-1)});
this._resetAutoScroll()
},_indexInc:function(l){if(this._childrenCount()===0){return 0
}return(this.state.index+this._childrenCount()+l)%this._childrenCount()
},_childrenCount:function(){return j.count(this.props.children)
}});
d.exports=c
},{"../p1/search/util/Cancelable.js":31,classnames:48,jquery:"jquery","react/addons":"react/addons"}],3:[function(d,b,h){Object.defineProperty(h,"__esModule",{value:true});
var f=(function(){function o(s,q){for(var p=0;
p<q.length;
p++){var r=q[p];
r.enumerable=r.enumerable||false;
r.configurable=true;
if("value" in r){r.writable=true
}Object.defineProperty(s,r.key,r)
}}return function(r,p,q){if(p){o(r.prototype,p)
}if(q){o(r,q)
}return r
}
})();
var c=Object.assign||function(r){for(var p=1;
p<arguments.length;
p++){var q=arguments[p];
for(var o in q){if(Object.prototype.hasOwnProperty.call(q,o)){r[o]=q[o]
}}}return r
};
function n(o){return o&&o.__esModule?o:{"default":o}
}function i(o,p){if(!(o instanceof p)){throw new TypeError("Cannot call a class as a function")
}}function m(p,o){if(typeof o!=="function"&&o!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof o)
}p.prototype=Object.create(o&&o.prototype,{constructor:{value:p,enumerable:false,writable:true,configurable:true}});
if(o){p.__proto__=o
}}var k=d("react");
var g=n(k);
var j=d("classnames");
var l=n(j);
var a=(function(q){function o(){i(this,o);
if(q!=null){q.apply(this,arguments)
}}m(o,q);
f(o,[{key:"render",value:function p(){var r=l["default"]("icon","icon-"+this.props.name,this.props.color&&"icon-"+this.props.color,this.props.size&&"icon-"+this.props.size,this.props.className);
return g["default"].createElement("i",c({},this.props,{className:r}))
}}]);
return o
})(g["default"].Component);
h["default"]=a;
a.propTypes={name:k.PropTypes.string.isRequired,size:k.PropTypes.number,color:k.PropTypes.oneOf("babu beach ebisu hackberry kazan lima rausch tirol light-gray dark-gray gray".split(" "))};
b.exports=h["default"]
},{classnames:48,react:"react"}],4:[function(d,b,f){var c=Object.assign||function(n){for(var l=1;
l<arguments.length;
l++){var m=arguments[l];
for(var k in m){if(Object.prototype.hasOwnProperty.call(m,k)){n[k]=m[k]
}}}return n
};
var a=d("react");
var i=("placeholder" in document.createElement("input"));
var g=false&&window.Airbnb.Utils._isDev;
var h=d("underscore");
var j=function(l,k){return a.createClass({displayName:k,componentWillMount:function(){this.needsPlaceholding=g||this.props.placeholder&&!i
},componentWillReceiveProps:function(m){this.needsPlaceholding=g||m.placeholder&&!i
},render:function(){var m=g?h.omit(this.props,"placeholder"):this.props;
return a.createElement("span",{className:"input-placeholder-group"},this.renderLabel(),a.createElement(l,c({},m,{ref:"input"})))
},getInput:function(){return this.refs.input
},getValue:function(){try{return this.getInput().getDOMNode().value
}catch(m){return this.props.value||this.props.initialValue
}},renderLabel:function(){var m=this.needsPlaceholding&&!this.getValue();
var n="input-placeholder-label";
if(!m){n+=" screen-reader-only"
}return a.createElement("label",{className:n,htmlFor:this.props.name},this.props.placeholder)
}})
};
b.exports={Input:j("input","Input"),Textarea:j("textarea","Textarea")}
},{react:"react",underscore:"underscore"}],5:[function(c,d,b){var g=c("jquery");
var a=[];
if(typeof window!=="undefined"){window.__insp=a;
a.push(["wid",965988720])
}var f=function(i){g(window).on("load",function h(){var k=document.createElement("script");
k.async=true;
k.id="inspsync";
k.src="https://cdn.inspectlet.com/inspectlet.js";
var j=document.getElementsByTagName("script")[0];
j.parentNode.insertBefore(k,j)
});
f.push(["tagSession",i])
};
f.push=function(h){return a.push(h)
};
d.exports=f
},{jquery:"jquery"}],6:[function(h,d,j){var n=h("./p1/homepage_helper");
var l=h("./search/search_bar");
var p=h("./p1/search/app.jsx");
var k=h("./search/simple_search");
var m=h("./p1/china/HeaderSlideshow.jsx");
var c=h("./p1/china/side_bar.js");
var q=h("./p1/china/coupon_card.js");
var i=h("./p1/util/ChinaExperiments.js");
var f=h("o2");
var o=h("./trebuchet.js");
var b=h("./p1/search/api/featureStatus");
if(b.kill){n.initHomepageHero();
l.init()
}else{p.init();
n.initHomepageHero()
}if(I18n.locale()==="zh"){var g=i.inC1RedesignExperiment();
if(g!==null){m.init();
c.init();
if(g==="no_new_user_coupon"){new q(q.EXPERIMENT_WITHOUT_COUPON)
}else{if(g==="new_user_coupon"){new q(q.EXPERIMENT_WITH_COUPON)
}}}}if(Airbnb.Utils.isIphone()){var a=function(){var r=$(".js-p1-hero");
var s=$(".js-p1-simple-search");
r.addClass("p1-hero-search-experiment");
s.removeClass("hide");
k.init({el:$("#simple-search")})
};
Airbnb.ERF.deliverExperiment("search_modal_on_p1_mobile",{control:a,search_via_modal:function(){},treatment_unknown:a})
}$(window).on("load",function(){var s=BootstrapData.get("p1_init");
var r=[s.map_css];
n.initVideoPlayer();
n.initGreatTimeToHostBanner();
if(!Airbnb.Utils.isDev()){r.push(s.map_js)
}Airbnb.Utils.preload(r)
})
},{"./p1/china/HeaderSlideshow.jsx":7,"./p1/china/coupon_card.js":8,"./p1/china/side_bar.js":9,"./p1/homepage_helper":10,"./p1/search/api/featureStatus":21,"./p1/search/app.jsx":22,"./p1/util/ChinaExperiments.js":41,"./search/search_bar":43,"./search/simple_search":44,"./trebuchet.js":45,o2:"o2"}],7:[function(f,c,g){var h=f("jquery");
var b=f("react");
var a=b.PropTypes;
var d=f("../../components/Slideshow.jsx");
var i=5000;
function j(){var k=BootstrapData.get("c1_slides")||[];
return k.map(function(l,m){return b.createElement("div",{key:l.title,className:"china-p1-header-slide"},b.createElement("a",{href:l.url,className:"link-reset"},b.createElement("div",{className:"intro-area text-contrast"},b.createElement("h1",{id:"tagline",className:"uppercase text-jumbo text-contrast row-space-2"},l.title),b.createElement("div",{id:"subtitle",className:"h4 text-contrast"},l.subtitle)),b.createElement("img",{src:l.image})))
})
}c.exports={init:function(){b.render(b.createElement(d,{autoScroll:i},j()),h("#hero")[0])
}}
},{"../../components/Slideshow.jsx":2,jquery:"jquery",react:"react"}],8:[function(c,b,f){var d=(function(){function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}return function(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}
})();
function g(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}var h=c("jquery");
var i=1;
var a=2;
var j=3;
var k=(function(){function n(o){g(this,n);
this.mode=o;
if(this.mode===i){return
}this._$referralCouponCard=h(".referral-coupon-card-panel");
this._$newUserCouponCard=h(".new-user-coupon-card-panel");
if(Airbnb.Utils.isUserLoggedIn){this._$referralCouponCard.toggleClass("hide")
}else{if(this.mode===j){this._$newUserCouponCard.toggleClass("hide")
}}this._initTracking();
Airbnb.mediator.on("login",this._toggleC1CouponCard.bind(this));
Airbnb.mediator.on("logout",this._toggleC1CouponCard.bind(this))
}d(n,[{key:"_toggleC1CouponCard",value:function l(){if(this.mode===j){this._$newUserCouponCard.toggleClass("hide")
}this._$referralCouponCard.toggleClass("hide")
}},{key:"_initTracking",value:function m(){this._$newUserCouponCard.click(Airbnb.Utils.trackRegularEvent.bind(this,"c1_redesign","new-user-coupon-card","click"));
this._$referralCouponCard.click(Airbnb.Utils.trackQueuedEvent.bind(this,"c1_redesign","referral-coupon-card","click"))
}}]);
return n
})();
k.CONTROL=i;
k.EXPERIMENT_WITHOUT_COUPON=a;
k.EXPERIMENT_WITH_COUPON=j;
b.exports=k
},{jquery:"jquery"}],9:[function(b,d,a){var f=b("jquery");
var g=f(".c1-side-bar-scroll-to-top");
var c={init:function(){f(window).scroll(this.onScroll);
g.click(function(){window.scrollTo(0,0)
})
},onScroll:function(){if(f(window).scrollTop()<400){g.addClass("hide")
}else{g.removeClass("hide")
}}};
d.exports=c
},{jquery:"jquery"}],10:[function(b,c,a){(function(){var d;
var h=BootstrapData.get("p1_init");
var g=b("../inspectlet.js");
var f=b("o2");
d={intervalId:0,time_slideInterval:7000,time_slideTransition:800,time_captionFadeIn:1000,time_captionFadeOut:300,time_searchBarSlide:900,belongAnywhereSlideshowLoaded:false,belongAnywhereControlsDisplayed:false,communityContainerDisplayed:false,initHomepageHero:function(){this.cacheEls();
this.initEvents();
this.initPrice();
this.initChinaTrust();
this.initCxNumber();
this.initHowItWorks();
this.initSlideshows();
this.initSlideshowOrVideo();
this.trackPerfStats();
this.initDiscovery();
this.initLazyLoad();
this.initInspectlet();
this.initSmSearch();
this.initCookieBanner();
return this.trackUserActions()
},initEvents:function(){$(document).on("click",".slideshow-scroll",(function(i){return function(j){return i.clickSlideArrow(j)
}
})(this));
$(document).on("click","#great_time_to_host_banner_link",(function(i){return function(j){return i.clickGTTHBanner(j)
}
})(this));
$(document).on("click","#belong-play-button",{video:0},(function(i){return function(j){return i.goFullScreen(j)
}
})(this));
$(document).on("click","#belo-play-button",{video:1},(function(i){return function(j){return i.goFullScreen(j)
}
})(this));
$(document).on("click","#close-fullscreen-belo",{closeVideo:1},(function(i){return function(j){return i.goWindowed(j)
}
})(this));
$(document).on("click","#close-fullscreen-belong",{closeVideo:0},(function(i){return function(j){return i.goWindowed(j)
}
})(this));
$(document).on("click","#create a",{section:"slideshow",target:"create_slide"},(function(i){return function(j){return i.trackClick(j)
}
})(this));
$(document).on("click","#create-card",{section:"community",target:"create_card"},(function(i){return function(j){return i.trackClick(j)
}
})(this));
$(document).on("click","#share-card",{target:"share_card"},(function(i){return function(j){return i.trackClick(j)
}
})(this));
$(document).on("click",".how-it-works",this.showHowItWorks.bind(this));
$(document).on("click",".how-it-works-section .panel-close",this.closeHowItWorksViaX.bind(this));
$(".mobile-discovery-arrow").on("click",this.scrollToDiscover);
this.initScrollEvents();
return Airbnb.Tracking.registerScrollDepthTracking()
},closeHowItWorksViaX:function(i){i.preventDefault();
Airbnb.Tracking.logEvent({event_name:"homepage",event_data:{section:"how_it_works",action:"click",target:"close_button"}});
this.hideHowItWorks(300)
},clickGTTHBanner:function(i){Airbnb.Tracking.logEvent({event_name:"great_time_to_host",event_data:{section:"banner",operation:"click"}})
},scrollToDiscover:function(i){i.preventDefault();
$("body").stop().animate({scrollTop:$($(this).attr("href")).offset().top},400);
return false
},initCxNumber:function(){if(I18n.tld_country()==="KR"||I18n.tld_country()==="JP"||I18n.locale()==="zh"&&I18n.country()==="CN"){return $.get("/show_country_cx_number",(function(i){return function(m){var p,l,n,k,q,o;
if(m.cx_number){p=$(".cx-number");
q=m.cx_number;
o=[];
for(n=0,k=q.length;
n<k;
n++){l=q[n];
o.push(p.append(l+"<br>"))
}return o
}}
})(this))
}},initLazyLoad:function(){return $("img.lazy").lazyload({threshold:50})
},initDiscovery:function(){return AIR.onCustomRecommendedDestinationsLoad(function(i){var j;
j=$.parseJSON(i);
AIR.DiscoveryHelper.loadDiscoverFeed(j);
return AIR.DiscoveryHelper.loadSavedSearches(j)
})
},initInspectlet:function(){var j=false;
var i=false;
if(I18n.locale()==="zh"&&Math.random()<0.1){j=true
}i=j||Airbnb.ERF.deliverExperiment("inspectlet_on_guest",{inspectlet_active:function(){return true
},control:function(){return false
},treatment_unknown:function(){return false
}});
if(i){g({user_id:Airbnb.userAttributes.id})
}},cacheEls:function(){this.els={};
this.els.hero=$("#hero");
this.els.arrows=$(".slideshow-scroll");
this.els.slideshow=$("#slideshow");
this.els.slides=this.els.slideshow.children();
this.els.video=$("#pretzel-video");
this.els.belongAnywhereSlideshow=$("#belong-anywhere-slideshow");
this.els.belongAnywhereSlides=this.els.belongAnywhereSlideshow.children();
this.els.belongAnywhereSlideshowPrev=$("#belong-anywhere-container .slideshow-scroll-prev");
this.els.belongAnywhereSlideshowNext=$("#belong-anywhere-container .slideshow-scroll-next");
this.els.belongAnywhereSlideshowPlay=$("#belo-play-button");
this.els.belongSlideshowPlay=$("#belong-play-button");
this.els.communityContainer=$(".community-container");
this.els.communityCards=this.els.communityContainer.children();
this.els.communityTravelingCardBackground=$(".background-traveling-card-lazy");
this.els.communityHostingCardBackground=$(".background-hosting-card-lazy");
this.els.communityShareCardBackground=$(".background-share-card-lazy");
this.els.hiwSection=$(".how-it-works-section");
return this.els.shiftWithHiw=$(".shift-with-hiw")
},initHowItWorks:function(){this.els.shiftHeight=this.els.hiwSection.outerHeight();
this.els.hiwShiftHeight=0;
if($("body").hasClass("has-smart-banner")){this.els.hiwShiftHeight=73
}$("#header").addClass("shift-with-hiw");
return this.els.hiwSection.css("top","-"+(this.els.shiftHeight+1)+"px")
},initCookieBanner:function(){if(h.inShowCookie){if(!JSCookie.cookie("accepts_cookies")&&!Airbnb.Utils.isUserLoggedIn&&!JSCookie.cookie("has_logged_out")){Flash.notice(h.cookieNoticeText,{no_fade_out:true});
return JSCookie.cookie("accepts_cookies",true,{expires:365})
}}},initChinaTrust:function(){if(I18n.locale()==="zh"){return $(".trust").html(JST["homepages/trust"](h.trust_and_safety))
}},trackClick:function(i){return Airbnb.Tracking.queueEvent({event_name:"homepage",event_data:{action:"click",section:i.data.section,target:i.data.target}})
},initPrice:function(){var i;
i=Airbnb.userAttributes.guest_exchange;
if(i){return this.els.slides.each((function(j){return function(m,o){var k,l,n;
k=$(o).find(".price");
n=k.data("price");
l=I18n.guestConvertFromUsd(n,{format:true});
return k.html(l)
}
})(this))
}},initSmSearch:function(){var i=Airbnb.Utils.isIphone()&&Airbnb.ERF.deliverExperiment("search_modal_on_p1_mobile",{control:function(){return true
},search_via_modal:function(){return false
},treatment_unknown:function(){return true
}});
if(!i){$(".js-p1-search-cta").removeClass("hide");
$("#sm-search-field").on("click",function(j){Airbnb.mediator.emit("search-modal:open")
})
}},showHowItWorks:function(j){var i=400;
this._hideIfOutOfViewport=this.hideIfOutOfViewport.bind(this);
j.preventDefault();
Airbnb.Tracking.logEvent({event_name:"homepage",event_data:{section:"hero",action:"click",target:"how_it_works_button"}});
$(".responsive-hiw-step").addClass("show-image");
window.scrollTo(0,0);
this.els.hiwSection.animate({top:this.els.hiwShiftHeight+"px"},i);
this.els.shiftWithHiw.animate({marginTop:this.els.shiftHeight+"px"},i);
$(window).on("scroll",this._hideIfOutOfViewport);
this.els.hiwSection.attr("aria-hidden",false);
this.els.hiwSection.get(0).tabIndex=-1;
this.els.hiwSection.get(0).focus()
},hideIfOutOfViewport:function(){if($(window).scrollTop()>this.els.shiftHeight){Airbnb.Tracking.logEvent({event_name:"homepage",event_data:{section:"how_it_works",action:"scroll_close",target:"self"}});
this.hideHowItWorks(0);
return window.scrollTo(0,0)
}},hideHowItWorks:function(i){this.els.shiftWithHiw.animate({marginTop:"0"},i);
this.els.hiwSection.animate({top:"-="+(this.els.shiftHeight+1)+"px"},i);
$(window).off("scroll",this._hideIfOutOfViewport);
this._hideIfOutOfViewport=null;
this.els.hiwSection.attr("aria-hidden",true)
},initScrollEvents:function(){var i;
if(!f.matchMedia.is("lg")){this.els.belongAnywhereSlideshowPrev.removeClass("hidden");
this.els.belongAnywhereSlideshowNext.removeClass("hidden");
this.els.belongAnywhereSlideshowPlay.removeClass("hidden");
this.els.belongSlideshowPlay.removeClass("hidden");
this.els.communityTravelingCardBackground.addClass("background-traveling-card");
this.els.communityHostingCardBackground.addClass("background-hosting-card");
this.els.communityShareCardBackground.addClass("background-share-card");
return this.els.communityCards.removeClass("hidden")
}else{i=(function(j){return function(){var l,n,k,m;
m=$(window).scrollTop();
k=$(window).scrollTop()+$(window).height();
if(j.els.belongAnywhereSlideshow.length){n=j.els.belongAnywhereSlideshow.offset().top;
l=n+j.els.belongAnywhereSlideshow.height();
if(!j.belongAnywhereSlideshowLoaded&&k>=n-100){j.belongAnywhereSlideshowLoaded=true;
j.els.belongAnywhereSlideshow.addClass("belong-anywhere-slideshow-loaded")
}if(!j.belongAnywhereControlsDisplayed&&k>=l-80){j.belongAnywhereControlsDisplayed=true;
j.els.belongAnywhereSlideshowPrev.removeClass("hidden");
j.els.belongAnywhereSlideshowNext.removeClass("hidden");
j.els.belongAnywhereSlideshowPlay.removeClass("hidden");
j.els.belongSlideshowPlay.removeClass("hidden")
}}if(j.els.communityContainer.length){if(!j.communityContainerDisplayed&&k>=j.els.communityContainer.position().top){j.communityContainerDisplayed=true;
j.els.communityTravelingCardBackground.addClass("background-traveling-card");
j.els.communityHostingCardBackground.addClass("background-hosting-card");
j.els.communityShareCardBackground.addClass("background-share-card");
j.els.communityCards.removeClass("hidden")
}}}
})(this);
$(window).on("scroll load",_.debounce(i,500));
i()
}},initSlideshows:function(){this.startingSlides=true;
this.slideshows={};
this.slideshows.main={};
this.slideshows.main.slides=this.els.slides;
this.slideshows.main.currentSlideIndex=0;
this.slideshows.main.video=this.els.video;
this.slideshows.main.animating=false;
this.slideshows.belongAnywhere={};
this.slideshows.belongAnywhere.slides=this.els.belongAnywhereSlides;
this.slideshows.belongAnywhere.currentSlideIndex=0;
this.slideshows.belongAnywhere.focusOnTransition=true;
this.slideshows.belongAnywhere.animating=false
},initSlideshowOrVideo:function(){var j,i;
i=this.els.video;
if(h.slideshowOnly||!f.matchMedia.is("lg")){return this.initHeroSlideshow()
}else{this.insertVideosIntoDOM(i);
i=this.els.video=$("#pretzel-video");
if(i.get(0)&&i.get(0).canPlayType){j=function(){i.get(0).play();
i.addClass("video-playing");
return $("#slideshow").addClass("hide")
};
if(i.get(0).readyState>=i.get(0).HAVE_FUTURE_DATA){return j()
}else{return i.get(0).addEventListener("canplay",function(){return j()
},false)
}}else{return $(window).on("load",(function(k){return function(){return k.initHeroSlideshow()
}
})(this))
}}},initHeroSlideshow:function(){var i;
if(!f.matchMedia.is("sm")){this.els.slides.find("img[data-image-url]").each((function(j){return function(l,m){var k;
k=$(m);
return k.attr("src",k.data("image-url"))
}
})(this));
i=this.els.slideshow.imagesLoaded();
return i.done((function(j){return function(k){var l;
l=$(".slideshow-scroll");
l.removeClass("faded-out");
j.els.hero.hover(function(){return l.removeClass("faded-out")
},function(){return l.addClass("faded-out")
});
return j.play(j.slideshows.main)
}
})(this))
}},play:function(i){this.pause();
return this.intervalId=setInterval((function(j){return function(){return j.next(i)
}
})(this),this.time_slideInterval)
},pause:function(){return clearInterval(this.intervalId)
},next:function(i){var j,k;
if(i.animating){return
}j=i.slides.eq(i.currentSlideIndex);
i.currentSlideIndex++;
i.currentSlideIndex%=i.slides.length;
k=i.slides.eq(i.currentSlideIndex);
if(this.startingSlides&&i.currentSlideIndex===1&&i.video&&!i.video.hasClass("video-playing")){this.els.video.find("source").attr("src","");
this.startingSlides=false
}return this.transitionSlide(j,k,i,"left")
},prev:function(i){var j,k;
if(i.animating){return
}j=i.slides.eq(i.currentSlideIndex);
Airbnb.Tracking.logEvent({event_name:"homepage",event_data:{section:"slideshow",action:"click",target:"slideshow_scroll_prev",current_slide:i.currentSlideIndex}});
i.currentSlideIndex--;
i.currentSlideIndex+=i.slides.length;
i.currentSlideIndex%=i.slides.length;
k=i.slides.eq(i.currentSlideIndex);
return this.transitionSlide(j,k,i,"right")
},clickSlideArrow:function(i){i.preventDefault();
if(i.target.id==="belong-anywhere-container"||$(i.target).parents("#belong-anywhere-container").size()){if($(i.currentTarget).hasClass("slideshow-scroll-prev")){this.prev(this.slideshows.belongAnywhere);
return Airbnb.Tracking.logEvent({event_name:"homepage",event_data:{section:"slideshow",action:"click",target:"slideshow_scroll_prev",current_slide:this.slideshows.belongAnywhere.currentSlideIndex}})
}else{this.next(this.slideshows.belongAnywhere);
return Airbnb.Tracking.logEvent({event_name:"homepage",event_data:{section:"slideshow",action:"click",target:"slideshow_scroll_next",current_slide:this.slideshows.belongAnywhere.currentSlideIndex}})
}}else{if($(i.currentTarget).hasClass("slideshow-scroll-prev")){this.prev(this.slideshows.main)
}else{this.next(this.slideshows.main)
}return this.play(this.slideshows.main)
}},transitionSlide:function(j,l,i,k){i.animating=true;
l.addClass("next "+k);
j.find(".caption").fadeOut(this.time_captionFadeOut);
return j.fadeOut(this.time_slideTransition,(function(m){return function(){j.removeClass("active");
j.attr("aria-hidden",true);
l.addClass("active").removeClass("next "+k);
j.show();
l.find(".caption").fadeIn(m.time_captionFadeIn);
l.attr("aria-hidden",false);
if(i.focusOnTransition){l.attr("tabIndex",-1);
l.focus()
}return i.animating=false
}
})(this))
},insertVideosIntoDOM:function(i){return i.each(function(k,l){var j,m;
j=$(l);
m=j.data();
return j.replaceWith(JST["homepages/video"](m))
})
},initVideoPlayer:function(j){var i;
i=$("[data-hook=homepage-video]");
this.insertVideosIntoDOM(i);
this.player1=$("#belong-video-player");
this.player2=$("#belo-video-player");
this.videoArea1=this.player1.find("video");
this.videoArea2=this.player2.find("video");
this.video1=this.videoArea1[0];
this.video2=this.videoArea2[0];
this.playButtonFullscreen1=$("#belong-play-button");
this.playButtonFullscreen2=$("#belo-play-button");
this.playButton1=$("#play-button-belong");
this.playButton2=$("#play-button-belo");
this.fadeTimeout=null;
this.hovering=false;
this.videoLoaded=false;
return this.fullScreen=false
},goFullScreen:function(i){var j=this;
if(i.data.video===1){this.video=this.video2;
this.player=this.player2;
this.playButton=this.playButton2;
this.playButtonFullscreen=this.playButtonFullscreen2;
this.videoArea=this.videoArea2;
Airbnb.Tracking.logEvent({event_name:"homepage",event_data:{section:"slideshow",action:"click",target:"belo_slide_play_button"}})
}else{this.video=this.video1;
this.player=this.player1;
this.playButton=this.playButton1;
this.playButtonFullscreen=this.playButtonFullscreen1;
this.videoArea=this.videoArea1;
Airbnb.Tracking.logEvent({event_name:"homepage",event_data:{section:"slideshow",action:"click",target:"belong_slide_play_button"}})
}this.playButtonFullscreen.off("click");
if(!this.fullScreen){this.fullScreen=true;
if(this.video.paused){this.toggleVideoPlay()
}this.player.css({"z-index":1001});
this.player.removeClass("hidden").afterTransition(function(){j.player.attr("aria-hidden",false);
j.player.attr("tabIndex",-1);
j.player.focus();
$("body").addClass("fullscreen-mode")
});
this.video.onended=(function(k){return function(l){k.goWindowed(l);
return k.next(k.slideshows.belongAnywhere)
}
})(this);
$(document).on("keyup",(function(k){return function(l){if(l.keyCode===27){k.goWindowed(l)
}if(l.keyCode===32){return k.toggleVideoPlay()
}}
})(this));
this.playButton.on("click",(function(k){return function(l){l.preventDefault();
return k.toggleVideoPlay()
}
})(this));
this.videoArea.on("click",(function(k){return function(l){l.preventDefault();
return k.toggleVideoPlay()
}
})(this));
this.fullScreenPosition=$(window).scrollTop();
return setTimeout((function(k){return function(){return k.videoLoaded=true
}
})(this),1000)
}},goWindowed:function(i){i.preventDefault();
if(this.fullScreen){$("body").removeClass("fullscreen-mode");
window.scrollTo(0,this.fullScreenPosition);
if(i.ni&&i.data.video===0){Airbnb.Tracking.logEvent({event_name:"homepage",event_data:{section:"belong_video",action:"click",target:"close",video_length_played:this.video.currentTime}})
}else{if(i.data.video===1){Airbnb.Tracking.logEvent({event_name:"homepage",event_data:{section:"belo_video",action:"click",target:"close",video_length_played:this.video.currentTime}})
}}this.player.addClass("hidden").afterTransition((function(j){return function(k){if(!j.video.paused){j.toggleVideoPlay()
}j.player.css({"z-index":-1001});
j.fullScreen=false;
j.player.attr("aria-hidden",true);
$(document).on("click","#belong-play-button",{video:0},function(l){return j.goFullScreen(l)
});
return $(document).on("click","#belo-play-button",{video:1},function(l){return j.goFullScreen(l)
})
}
})(this));
$(document).off("keyup");
this.playButton.off("click");
return this.videoArea.off("click")
}},toggleVideoPlay:function(){if(this.video.paused){this.video.play();
return this.playButton.addClass("hide")
}else{this.video.pause();
return this.playButton.removeClass("hide")
}},trackPerfStats:function(){return this.trackPerfForHeroImages()
},trackPerfForHeroImages:function(){var i;
i=function(n,l,j){var o,k,m;
o=n.duration;
k=(m=n.duration>0)!=null?m:{1:0};
if(o<0){o=j-n.startTime
}return{type:l,name:n.name,duration:Math.round(o),start_time:Math.round(n.startTime),completed:k}
};
return $(window).on("load",function(){var q,t,r,o,n,w,p,l,k,s,m,v;
try{s=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};
if(typeof s.getEntriesByType==="function"){v=[];
o=/static.*\.jpg$/;
w=/.*\.js$/;
q=/.*\.css$/;
l=s.now();
m=s.getEntriesByType("resource");
for(n=0,p=m.length;
n<p;
n++){t=m[n];
if(o.test(t.name)){v.push(i(t,"image",l))
}else{if(w.test(t.name)){v.push(i(t,"js",l))
}else{if(q.test(t.name)){v.push(i(t,"css",l))
}}}}k={page:"p1",payload:v};
return Airbnb.Tracking.logEvent({event_name:"resource_timing",event_data:k})
}}catch(u){r=u
}})
},trackUserActions:function(){$("#location").on("click",function(){return Airbnb.Utils.trackRegularEvent("homepage","search","click",{target:"search_box"})
});
$("#location").one("keypress",function(i){if(i.which!==13){return Airbnb.Utils.trackRegularEvent("homepage","search","type",{target:"search_box"})
}});
$("#checkin").on("change",function(){return Airbnb.Utils.trackRegularEvent("homepage","search","change",{target:"check_in_dates"})
});
$("#checkout").on("change",function(){return Airbnb.Utils.trackRegularEvent("homepage","search","change",{target:"check_out_dates"})
});
$("#guests").on("change",function(){return Airbnb.Utils.trackRegularEvent("homepage","search","change",{target:"number_of_guests"})
});
return $("#submit_location").on("click",function(){return Airbnb.Utils.trackQueuedEvent("homepage","search","click",{target:"search_button"})
})
},initGreatTimeToHostBanner:function(){if(Airbnb.Utils.isAdmin()&&$.query.keys.show_chicago_banner==="true"){$("#great-time-to-host-banner").removeClass("hide").attr("aria-hidden",false)
}else{$.ajax({url:"/global_supply/display_homepage_banner",success:function(i){if(i.display){$("#great-time-to-host-banner").removeClass("hide").attr("aria-hidden",false);
Airbnb.Tracking.logEvent({event_name:"great_time_to_host",event_data:{operation:"impression",section:"banner"}})
}},dataType:"JSON"})
}}};
c.exports=d
}).call(this)
},{"../inspectlet.js":5,o2:"o2"}],11:[function(i,b,u){var k=i("react"),n=i("./makeCodeDispatch.js"),g=function(){},s=i("underscore").extend,l=i("../util/setSelectionRange.js"),p=i("../../components/o2/PlaceholderLabel.jsx").Input;
var c=!!document.createElement("input").setSelectionRange;
var d=false;
try{document.createEvent("CompositionEvent");
d=true
}catch(t){}var h="_menu",j="_input",m=0;
var f=0;
function o(){return ++f
}var a={propTypes:{value:k.PropTypes.any},getInitialState:function(){return{inputValue:this.findInputValue(),menuOpen:false,matchedMenuOption:null,activedescendant:null}
},getDefaultProps:function(){return{menuGuid:"menu-"+o(),value:undefined}
},getMenu:function(){return this.refs&&this.refs[h]
},getInput:function(){return this.refs&&this.refs[j].getInput()
},findInputValue:function(w){w=w||this.props.value;
var v,x;
x=this.getMenu();
if(x){x.forEachOption(function(y){if(y.props.value===w){v=q(y)
}})
}return v||w
},openMenu:function(){return this.setState({menuOpen:true},(function(){this.getMenu().focus()
}).bind(this))
},closeMenu:function(){this.getMenu().clearFocused();
this.setState({menuOpen:false})
},focusInput:function(){return this.getInput().getDOMNode().focus()
},makeAutocomplete:function(A,w){var C=this;
w.onInput=w.onInput||g;
w.onChange=w.onChange||g;
w.props=w.props||{};
if(!w.onSelect){throw new Error("makeAutocompleteInput requires options.onSelect")
}var v,B;
B=A.props.id=A.props.id||this.props.menuGuid;
var y=s({},A.props,{ref:h,"aria-expanded":this.state.menuOpen+""});
y.onSelect=function(D,E){return C.setState({inputValue:q(E),matchedMenuOption:null},function(){C.getInput().getDOMNode().blur();
return w.onSelect(E.props.value,true,D)
})
};
if(y.useFocus){A.props.onPassStart=A.props.onPassEnd=function(){C.getMenu().clearFocused();
C.focusInput()
}
}var x={type:"text",className:"menu-autocomplete-input","aria-activedescendant":this.state.activedescendant,"aria-autocomplete":"both","aria-owns":B,autoComplete:"off",value:this.state.inputValue,ref:j};
var z=s({},x,w.props);
z.onKeyDown=n({DownArrow:function(){if(!C.state.menuOpen){C.openMenu()
}return C.getMenu().focusNext()
},UpArrow:function(){if(C.state.menuOpen){C.getMenu().focusPrev()
}},Enter:function(){var D;
var E=C.getMenu();
if(E.getFocusedOption()){return E.selectFocused()
}if(C.state.matchedMenuOption!==null){D=C.state.matchedMenuOption;
return E.selectIndex(D)
}E.clearSelected();
return w.onSelect(C.getInput().getDOMNode().value,false)
}});
z.onBlur=function(D){var E=C.getMenu();
if(!w.disableUpdateOnBlur){w.onInput(C.getInput().getDOMNode().value)
}if(E.props.useFocus&&E.getFocusedOption()){return
}C.closeMenu()
};
z.onFocus=function(D){C.openMenu()
};
z.onChange=function(D){var E=C.getInput().getDOMNode().value;
C.getMenu().clearFocused();
return C.setState({inputValue:null,matchedMenuOption:null},function(){w.onInput(E);
if(!C.state.menuOpen){return C.openMenu()
}})
};
z.onKeyUp=function(D){var E=C.getMenu();
if(E.getOptionCount()===0||D.keyCode===8){return
}return C.autocompleteInputValue()
};
z.onCompositionStart=function(){C._imeUsed=true
};
return{input:k.createElement(p,z),menu:k.addons.cloneWithProps(A,y)}
},autocompleteInputValue:function(){if(!c){return
}if(!d){return
}if(this._imeUsed){return
}var y,w,v,x,z;
z=this.getMenu();
if(z.getOptionCount()===0){return
}w=this.getInput().getDOMNode();
v=w.value;
y=null;
z.forEachOption(function(B,A){if(A===0){y=B
}});
if(y===null){return
}x=q(y);
if(!r(v,x)){return
}w.value=x;
l(w,v.length,x.length);
return this.setState({matchedMenuOption:0})
}};
function q(v){if(v.props.label!=null){return v.props.label
}else{return v.props.children
}}function r(v,w){v=v.toLowerCase();
w=w.toLowerCase();
if(v===""||v===w){return false
}return w.indexOf(v)===0
}b.exports=a
},{"../../components/o2/PlaceholderLabel.jsx":4,"../util/setSelectionRange.js":42,"./makeCodeDispatch.js":15,react:"react",underscore:"underscore"}],12:[function(h,f,k){var g=Object.assign||function(t){for(var r=1;
r<arguments.length;
r++){var s=arguments[r];
for(var q in s){if(Object.prototype.hasOwnProperty.call(s,q)){t[q]=s[q]
}}}return t
};
var d=h("react"),n=h("./Option.jsx"),m=h("./Section.jsx");
var a=d.PropTypes;
var c=function(){};
function p(q){this.set(q)
}p.prototype.get=function(){return this._value
};
p.prototype.set=function(q){this._value=q
};
function o(q){return function(r){return r&&(r.type===q.type||r.constructor===q.type)
}
}var j=o(m),b=o(n);
function i(q,s,r){r=r||0;
d.Children.forEach(q,function(u,t){if(b(u)){s(u,r);
r++;
return
}if(j(u)){r+=i(u.props.children,s,r)
}});
return r
}var l=d.createClass({displayName:"Menu",propTypes:{useFocus:a.bool,onPassEnd:a.func,onPassStart:a.func,onSelect:a.func,onEscape:a.func,onFocusIndex:a.func},getInitialState:function(){return{focusedIndex:NaN,selectedIndex:NaN}
},getDefaultProps:function(){return{useFocus:false,onPassEnd:c,onPassStart:c,onSelect:c,onEscape:c,onFocusIndex:c}
},focusNext:function(){if(isNaN(this.state.focusedIndex)){return this.setIndex(0)
}return this.setIndex(this.state.focusedIndex+1)
},focusPrev:function(){if(isNaN(this.state.focusedIndex)){return this.setIndex(this.getMaxIndex())
}return this.setIndex(this.state.focusedIndex-1)
},focusIndex:function(q){return this.setIndex(q)
},clearFocused:function(){return this.setIndex(NaN)
},focus:function(){var q;
if(!this.props.useFocus){return
}if(isNaN(this.state.focusedIndex)){return this.focusNext()
}q=this.getFocusedOption();
if(q){return q.getDOMNode().focus()
}},selectIndex:function(q){this.setIndex(q,(function(){this.selectFocused()
}).bind(this))
},selectFocused:function(){this.childSelected(this.state.focusedIndex,this.refs.focused)
},clearSelected:function(){this.setState({selectedIndex:NaN})
},getSelectedOption:function(){if(this.state.focusedIndex===this.state.selectedIndex){return this.refs.focused
}return this.refs.selected
},getFocusedOption:function(){return this.refs.focused
},getOptionCount:function(){return this.state.optionCount
},forEachOption:function(q){return i(this.props.children,q)
},addOptionHandlers:function(r,q){r.onFocusAbove=this.focusPrev;
r.onFocusBelow=this.focusNext;
r.onSelect=this.childSelected.bind(this,q);
r.onEscape=this.childEscape.bind(this,q);
r.onBecameFocused=this.setIndex.bind(this,q,undefined);
if(!this.props.useFocus){r.onMouseDown=function(s){s.preventDefault();
s.target.unselectable=true
}
}},childSelected:function(q,r){this.setState({selectedIndex:q});
return this.props.onSelect(q,r)
},childEscape:function(q){this.setIndex(NaN);
return this.props.onEscape(q)
},getMaxIndex:function(){return this.getOptionCount()-1
},setIndex:function(r,q){var t,s;
s=0;
t=this.getMaxIndex();
q=q||c;
if(r<s){this.setIndex(t,this.props.onPassStart);
return
}if(r>t){this.setIndex(s,this.props.onPassEnd);
return
}return this.setState({focusedIndex:r},(function(){this.props.onFocusIndex(r);
q()
}).bind(this))
},cloneOption:function(r,t){var q,s;
q=t.get();
t.set(q+1);
s={isFocused:this.state.focusedIndex===q,isSelected:this.state.selectedIndex===q,useFocus:this.props.useFocus,key:r.props.key||r.key};
if(s.isSelected){s.ref="selected"
}if(s.isFocused){s.ref="focused"
}if(this.props.useFocus){s.tabIndex="-1"
}this.addOptionHandlers(s,q);
return d.addons.cloneWithProps(r,s)
},cloneSection:function(r,s){var q=d.Children.map(r.props.children,(function(u,t){if(j(u)){return this.cloneSection(u,s)
}if(b(u)){return this.cloneOption(u,s)
}return u
}).bind(this));
return d.addons.cloneWithProps(r,{children:q})
},render:function(){var q=this.cloneSection(d.createElement(m,null,this.props.children),new p(0));
var r="menu "+(this.props.className||"");
return d.createElement("div",g({},this.props,{className:r,"aria-role":"listbox"}),q)
},componentWillReceiveProps:function(q){this.setState({optionCount:i(q.children,c)})
}});
f.exports=l
},{"./Option.jsx":13,"./Section.jsx":14,react:"react"}],13:[function(g,d,j){var f=Object.assign||function(o){for(var m=1;
m<arguments.length;
m++){var n=arguments[m];
for(var l in n){if(Object.prototype.hasOwnProperty.call(n,l)){o[l]=n[l]
}}}return o
};
var c=g("react/addons"),h=g("./makeCodeDispatch.js"),i=c.addons.classSet;
var a=c.PropTypes;
var b=function(){};
var k=c.createClass({displayName:"Option",propTypes:{value:a.any.isRequired,label:a.string,onSelect:a.func,onFocusAbove:a.func,onFocusBelow:a.func,onEscape:a.func,onBecameFocused:a.func,isSelected:a.bool,isFocused:a.bool,label:a.string},getDefaultProps:function(){return{role:"option",isSelected:false,isFocused:false,label:null,onFocusAbove:b,onFocusBelow:b,onEscape:b,onSelect:b,onBecameFocused:b}
},onKeyDown:h({DownArrow:"onDownArrow",UpArrow:"onUpArrow",Escape:"onEscape",Enter:"onEnter"}),onDownArrow:function(){return this.props.onFocusBelow()
},onUpArrow:function(){return this.props.onFocusAbove()
},onEscape:function(){return this.props.onEscape()
},onEnter:function(){return this.props.onSelect(this)
},onClick:function(l){return this.props.onSelect(this)
},onMouseOver:function(l){return this.props.onBecameFocused(l)
},componentDidUpdate:function(){if(this.props.useFocus&&this.props.isFocused){return this.getDOMNode().focus()
}},render:function(){var l=i({"menu-option":true,selected:this.props.isSelected,focused:this.props.isFocused});
return c.createElement("div",f({},this.props,{className:l,onKeyDown:this.onKeyDown,onClick:this.onClick,onMouseOver:this.onMouseOver}),this.props.children)
}});
d.exports=k
},{"./makeCodeDispatch.js":15,"react/addons":"react/addons"}],14:[function(c,f,a){var d=Object.assign||function(l){for(var j=1;
j<arguments.length;
j++){var k=arguments[j];
for(var h in k){if(Object.prototype.hasOwnProperty.call(k,h)){l[h]=k[h]
}}}return l
};
var b=c("react");
var g=b.createClass({displayName:"Section",render:function(){var h="menu-section "+(this.props.className||"");
return b.createElement("div",d({},this.props,{className:h}),this.props.children)
}});
f.exports=g
},{react:"react"}],15:[function(d,f,b){var c,a;
function a(g,h){if(h==null){h=true
}return function(j){var i;
i=g[j.keyCode]||g[c[j.keyCode]];
if(!i){return
}if(h){j.preventDefault()
}if(typeof i==="function"){return i(j)
}else{return this[i](j)
}}
}c={40:"DownArrow",38:"UpArrow",27:"Escape",13:"Enter"};
f.exports=a
},{}],16:[function(c,d,b){var a=c("../dispatchers/SearchDispatcher"),f=c("../constants/SearchConstants");
d.exports={setSearchText:function(h,g){a.dispatch({type:f.SET_SEARCH_TEXT,value:{text:h,shiftFocusToCheckIn:g}})
},clickTopDestination:function(g){a.dispatch({type:f.CLICK_TOP_DESTINATION,value:g})
},setCheckIn:function(g){a.dispatch({type:f.SET_CHECK_IN,value:g})
},setCheckOut:function(g){a.dispatch({type:f.SET_CHECK_OUT,value:g})
},setGuestCount:function(g){a.dispatch({type:f.SET_GUEST_COUNT,value:g})
},submitForm:function(){a.dispatch({type:f.SUBMIT_FORM})
}}
},{"../constants/SearchConstants":23,"../dispatchers/SearchDispatcher":24}],17:[function(f,d,g){var j=f("../dispatchers/SearchDispatcher");
var b=f("../constants/SearchConstants");
var n=f("../util/Cancelable");
var i=f("../util/location_suggesters/GoogleLocationSuggester");
var k=f("../util/location_suggesters/AirbnbLocationSuggester");
var c=f("../../util/ChinaExperiments");
var m=c.inTypeaheadExperiment;
var l=[];
var a;
if(window.Bloodhound&&m()){a=new k();
a.init()
}else{a=new i();
a.init()
}var h=d.exports={receive:function(o){j.dispatch({type:b.RECEIVE_LOCATION_SUGGESTIONS,locations:o})
},select:function(o){j.dispatch({type:b.SELECT_LOCATION_SUGGESTION,location:o})
},requestForSearchText:function(p){if(a){var o;
l.forEach(function(q){q.cancel()
});
l=[];
if(p===""){h.receive([]);
return
}o=n(h.receive);
l.push(o);
a.query(p,o.action)
}}}
},{"../../util/ChinaExperiments":41,"../constants/SearchConstants":23,"../dispatchers/SearchDispatcher":24,"../util/Cancelable":31,"../util/location_suggesters/AirbnbLocationSuggester":33,"../util/location_suggesters/GoogleLocationSuggester":35}],18:[function(c,f,b){var a=c("../dispatchers/SearchDispatcher"),d=c("../constants/SearchConstants");
f.exports={receive:function(g){a.dispatch({type:d.RECEIVE_SAVED_SEARCHES,searches:g})
},select:function(g){a.dispatch({type:d.SELECT_SAVED_SEARCH,search:g})
}}
},{"../constants/SearchConstants":23,"../dispatchers/SearchDispatcher":24}],19:[function(c,a,f){var d=(function(){function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}return function(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}
})();
function h(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}var b=window.amplify;
var j=window.Airbnb.Utils._isDev;
var i="hash_user_id";
var g=(function(){function m(){h(this,m)
}d(m,[{key:"get",value:function l(){return b.store(i)
}},{key:"set",value:function n(o){b.store(i,o);
return true
}},{key:"withId",value:function k(p){var o=this.get();
if(o){return p(o)
}}}]);
return m
})();
a.exports=new g()
},{}],20:[function(f,d,L){var h=(function(){function S(W,U){for(var T=0;
T<U.length;
T++){var V=U[T];
V.enumerable=V.enumerable||false;
V.configurable=true;
if("value" in V){V.writable=true
}Object.defineProperty(W,V.key,V)
}}return function(V,T,U){if(T){S(V.prototype,T)
}if(U){S(V,U)
}return V
}
})();
var O=function N(T,W,V){var X=Object.getOwnPropertyDescriptor(T,W);
if(X===undefined){var U=Object.getPrototypeOf(T);
if(U===null){return undefined
}else{return N(U,W,V)
}}else{if("value" in X){return X.value
}else{var S=X.get;
if(S===undefined){return undefined
}return S.call(V)
}}};
function E(S,T){if(!(S instanceof T)){throw new TypeError("Cannot call a class as a function")
}}function x(T,S){if(typeof S!=="function"&&S!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof S)
}T.prototype=Object.create(S&&S.prototype,{constructor:{value:T,enumerable:false,writable:true,configurable:true}});
if(S){T.__proto__=S
}}var s=window.amplify;
var m=f("events").EventEmitter;
var R=f("underscore");
var A=window.jQuery;
var k=f("./HashedUserId");
var P=f("../../../api/Batch");
var H=f("moment");
var t=f("./featureStatus");
var y=false&&window.Airbnb.Utils.isDev();
var i="savedSearches";
var c=30;
var g="change";
var Q=4;
var C=8;
var w="abcdefghijklmnopqrstuvwxyz0123456789";
var q="saved_searches";
var I=15;
var a=1000*60*1;
var r={location:String,checkin:String,checkout:String,guests:p,price_min:p,price_max:p,ib:M,last_minute:M,currency:String,amenities:G,neighborhoods:G,room_types:G,min_beds:p,min_bedrooms:p,min_bathrooms:p,listing_types:G,search_by_map:M,sw_lng:Number,sw_lat:Number,ne_lng:Number,ne_lat:Number,empHost:G,superhost:M,languages:G,property_type_id:G,keywords:G};
var l=Object.keys(r);
var v=(function(ah){function X(){E(this,X);
O(Object.getPrototypeOf(X.prototype),"constructor",this).call(this);
this._initLock=true;
var ao=s.store(i);
if(!ao||!ao.version||ao.version<Q){this.data=F();
this._migrate(ao)
}else{this.data=ao
}this._persist();
this.ENABLE_SYNC=true&&!(t.kill||t.killSync);
this._pull()
}x(X,ah);
h(X,[{key:"create",value:function ad(ap){if(!ap){throw new Error("must supply searchParams")
}var ao=b(B(),ap);
this._queueUpload(ao);
this._saveLocal(ao.saved_search_id,ao);
this._persist();
this._emitChange();
return ao
}},{key:"getOrCreate",value:function ac(aq){var ap=D(aq);
var ao=this._sortedSearches()[0];
if(ao&&R.isEqual(ap,ao.search_params)){return ao
}return this.create(aq)
}},{key:"getLatest",value:function aj(ao){return this._sortedSearches().slice(0,ao||c)
}},{key:"update",value:function ab(ar,aq){var ao;
var ap=this._getLocal(ar);
if(ap){ao=ap;
ao.search_params=D(aq);
ao.modified_at=Date.now()
}else{ao=b(ar,aq)
}this._queueUpload(ao);
this._saveLocal(ar,ao);
this._persist();
this._emitChange();
return ao
}},{key:"_clearCache",value:function Y(){this.data=F();
this._persist();
this._emitChange()
}},{key:"_getLocal",value:function aa(ao){return this.data.objects[ao]
}},{key:"_saveLocal",value:function W(ap,ao){this.data.objects[ap]=ao
}},{key:"_sortedSearches",value:function al(){return R.values(this.data.objects).sort(o)
}},{key:"_emitChange",value:function an(){this.emit(g,this._sortedSearches())
}},{key:"_cull",value:function af(ao){this.data.objects=n(this.data.objects,ao);
this.data.sync.needsPush=n(this.data.sync.needsPush,ao)
}},{key:"_persist",value:function ai(){this._cull(c);
s.store(i,this.data)
}},{key:"_pull",value:function ae(){var ao=this;
if(!this.ENABLE_SYNC){return
}k.withId(function(aq){var ap=Airbnb.Api.getUrl("/v2/"+q);
A.ajax({type:"GET",url:ap,timeout:a}).done(ao._finishPull.bind(ao)).fail(function(){ao._initLock=false;
ao._queuePush.bind(ao)
})
})
}},{key:"_finishPull",value:function S(ar){var aq=this;
this._initLock=false;
this.data.sync.lastPull=Date.now();
var ap=ar.saved_searches.sort(o);
var ao={};
if(ap.length===0){this._sortedSearches().forEach(function(au){return aq._queueUpload(au)
});
this._persist();
return
}ap.forEach(function(av){var aw=av.saved_search_id;
var au=aq._getLocal(aw);
J(av.search_params,"checkin",z);
J(av.search_params,"checkout",z);
if(!au||av.modified_at>au.modified_at){aq._saveLocal(aw,av)
}else{if(au.modified_at>av.modified_at){aq._queueUpload(au)
}}ao[aw]=true
});
var at=ap[ap.length-1].modified_at;
this._sortedSearches().forEach(function(au){if(ao[au.saved_search_id]){return
}if(au.modified_at<=at){return
}aq._queueUpload(au)
});
this._queuePush();
this._persist();
this._emitChange()
}},{key:"_queueUpload",value:function V(ao){this.data.sync.needsPush[ao.saved_search_id]=ao;
this._queuePush()
}},{key:"_unqueueUpload",value:function U(ao){delete this.data.sync.needsPush[ao.saved_search_id]
}},{key:"_queuePush",value:function ak(){if(this._initLock){return
}clearTimeout(this._pushTimeout);
this._pushTimeout=setTimeout(this._push.bind(this),I)
}},{key:"_push",value:function am(){var ao=this;
clearTimeout(this._pushTimeout);
this._pushTimeout=false;
if(!this.ENABLE_SYNC){return
}k.withId(function(ap){var aq=R.values(ao.data.sync.needsPush);
if(aq.length===0){return
}ao._batch(ap,aq).submit({timeout:a}).fail(function(ar){return ao._finishPush(ar.responseJSON)
}).done(ao._finishPush.bind(ao))
})
}},{key:"_finishPush",value:function ag(ao){if(!ao||!R.isArray(ao.operations)){return
}var ap=ao.operations.filter(function(aq){return !aq.response.error_code
}).map(function(aq){return aq.response.saved_search
});
if(ap.length){ap.forEach(this._unqueueUpload.bind(this));
this.data.sync.latestPush=Date.now();
this._persist()
}}},{key:"_batch",value:function T(aq,ap){var ao=new P();
ap.forEach(function(at){if(at.search_params.checkin||at.search_params.checkout){at=R.clone(at);
at.search_params=R.clone(at.search_params);
J(at.search_params,"checkin",K);
J(at.search_params,"checkout",K)
}var ar=window.encodeURIComponent(aq);
var au=window.encodeURIComponent(at.saved_search_id);
ao.put(""+q+"/"+ar+"/"+au,{body:at})
});
return ao
}},{key:"_migrate",value:function Z(ap){var ao=this;
if(!ap){return
}if(ap.version!==3){return
}R.values(ap.objects).forEach(function(aq){return ao.create(aq.search_params)
})
}}]);
return X
})(m);
d.exports=new v();
if(y){window.SavedSearchAPI=d.exports
}function B(){var S="";
while(S.length<C){S+=w.charAt(Math.floor(Math.random()*w.length))
}return S
}function D(T){var S=R.pick(T,l);
l.forEach(function(U){J(S,U,r[U])
});
if(!S.checkin){delete S.checkin
}if(!S.checkout){delete S.checkout
}return S
}function b(T,S){return{saved_search_id:T,modified_at:Date.now(),source:"web",search_params:D(S)}
}function F(){return{objects:{},version:Q,sync:{lastPush:0,lastPull:0,needsPush:{}}}
}function J(U,S,T){if(S in U){U[S]=T(U[S])
}}function p(S){return parseInt(S,10)
}function M(S){if(typeof S==="string"){switch(S){case"true":case"1":return true;
case"false":case"0":return false;
default:}}return Boolean(S)
}function G(S){return S
}function o(U,S){var V=U.modified_at;
var T=S.modified_at;
return T-V
}function n(V,U){var T=R.values(V);
var S={};
T.filter(j).sort(o).slice(0,U).forEach(function(W){return S[W.saved_search_id]=W
});
return S
}function j(V){var X=24*60*60*1000;
var S=Date.now();
var W=V.search_params;
var U=W.checkin;
var T=W.checkout;
if(T){T=A.datepicker.parseDate(T);
return T.getTime()+X>S
}if(U){U=A.datepicker.parseDate(U);
return U.getTime()+X>S
}return true
}function z(S){if(typeof S!=="object"){S=H(S).toDate()
}return A.datepicker.formatDate(S)
}function K(T){if(typeof T!=="object"){T=A.datepicker.parseDate(T)
}var S=H(T).toISOString();
if(S==="Invalid date"){return undefined
}return S
}function u(){if(y){console.log.apply(console,arguments)
}}},{"../../../api/Batch":1,"./HashedUserId":19,"./featureStatus":21,events:46,moment:"moment",underscore:"underscore"}],21:[function(d,f,b){function g(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}var a=window.BootstrapData;
var c=function c(){g(this,c);
this.kill=!!a.get("saved_search_kill");
this.killSync=!!a.get("saved_search_kill_sync")
};
f.exports=new c()
},{}],22:[function(d,b,g){var j=d("./dispatchers/SearchDispatcher");
if(window.Airbnb.Utils.isDev()){j.register(function(m){if("value" in m){console.log("action ",m.type," with value ",JSON.stringify(m.value,undefined,"  ")," ",m)
}else{console.log("action",m.type,m)
}})
}var h=d("jquery");
var a=d("react");
var l=d("./views/SearchForm.jsx");
var i=d("./api/SavedSearchAPI");
var k=d("./actions/SavedSearchActions");
var f=d("../util/ChinaExperiments");
var c=b.exports={stores:{LocationSuggestions:d("./stores/LocationSuggestionStore"),SavedSearches:d("./stores/SavedSearchStore"),SearchParams:d("./stores/SearchParamsStore"),AirEvents:d("./stores/AirEventStore"),SearchTextBox:d("./stores/SearchTextBoxStore")},actions:{Form:d("./actions/FormActions"),SavedSearch:d("./actions/SavedSearchActions"),LocationSuggestion:d("./actions/LocationSuggestionActions")},constants:d("./constants/SearchConstants"),dispatcher:j,init:function(){h(window).on("load",function(){Airbnb.Utils.loadGooglePlaces()
});
var n=h("#search_form").parent();
var o=BootstrapData.get("search_form_data");
h.extend(o,BootstrapData.get("top_destinations"));
var m=n.find("[name=location]").val();
var q=n.find("[name=checkin]").val();
var p=n.find("[name=checkout]").val();
var s=n.find("[name=guests]").val();
if(m){c.actions.Form.setSearchText(m)
}if(q){c.actions.Form.setCheckIn(q)
}if(p){c.actions.Form.setCheckOut(p)
}if(s&&s!=="1"){c.actions.Form.setGuestCount(s)
}var r=o.groupedDestinations&&o.groupedDestinations.length>0&&f.inSearchBoxExperiment();
a.render(a.createElement(l,{options:o,showDestinations:r}),n.get(0))
}}
},{"../util/ChinaExperiments":41,"./actions/FormActions":16,"./actions/LocationSuggestionActions":17,"./actions/SavedSearchActions":18,"./api/SavedSearchAPI":20,"./constants/SearchConstants":23,"./dispatchers/SearchDispatcher":24,"./stores/AirEventStore":25,"./stores/LocationSuggestionStore":26,"./stores/SavedSearchStore":27,"./stores/SearchParamsStore":28,"./stores/SearchTextBoxStore":29,"./views/SearchForm.jsx":39,jquery:"jquery",react:"react"}],23:[function(b,c,a){var d=b("react/lib/keyMirror");
c.exports=d({SELECT_SAVED_SEARCH:null,SELECT_LOCATION_SUGGESTION:null,SET_SEARCH_TEXT:null,SET_CHECK_IN:null,SET_CHECK_OUT:null,SET_GUEST_COUNT:null,CLICK_TOP_DESTINATION:null,SUBMIT_FORM:null,RECEIVE_SAVED_SEARCHES:null,RECEIVE_LOCATION_SUGGESTIONS:null})
},{"react/lib/keyMirror":53}],24:[function(c,d,b){var a=c("flux").Dispatcher;
d.exports=new a()
},{flux:49}],25:[function(h,f,j){var p=h("../dispatchers/SearchDispatcher");
var c=h("../constants/SearchConstants.js");
var l=h("underscore").extend;
var a=window.Airbnb.Tracking;
var o=window.Airbnb.Utils._isDev;
var m=false;
var i=p.register(function(r){var q;
switch(r.type){case c.SELECT_LOCATION_SUGGESTION:q=n(r.location);
a.logEvent(q);
break;
case c.SELECT_SAVED_SEARCH:q=b(r.search);
a.queueEvent(q);
break;
case c.SET_SEARCH_TEXT:if(m){break
}q=d(r.value.text);
a.logEvent(q);
m=true;
break;
case c.CLICK_TOP_DESTINATION:Airbnb.Utils.trackRegularEvent("top_destination_click","select_a_destination","click",{destination:r.value});
break
}});
f.exports={dispatchToken:i};
function k(q){return{event_name:"saved_search",event_data:q}
}function g(r,q){return l({},r,q.search_params,{saved_search_id:q.ss_id,saved_search_modified_at:q.modified_at})
}function b(q){return k(g({operation:"select",section:"search_suggestions",selected:"saved_search",page:"p1"},q))
}function n(q){return k(l({operation:"select",section:"search_suggestions",selected:"location_suggestion",page:"p1"},q))
}function d(q){return k({operation:"keypress",section:"search_suggestions",text:q,page:"p1"})
}},{"../constants/SearchConstants.js":23,"../dispatchers/SearchDispatcher":24,underscore:"underscore"}],26:[function(f,c,i){var g=f("./makeStore"),j=f("../dispatchers/SearchDispatcher"),b=f("../constants/SearchConstants.js");
var d=[],h=5;
var a=g({get:function(){if(!d){return[]
}return d.slice(0,h)
},getAll:function(){return this.get()
}});
a.dispatchToken=j.register((function(k){switch(k.type){case b.RECEIVE_LOCATION_SUGGESTIONS:d=k.locations;
this.emitChange();
break;
default:}}).bind(a));
c.exports=a
},{"../constants/SearchConstants.js":23,"../dispatchers/SearchDispatcher":24,"./makeStore":30}],27:[function(g,f,j){var h=g("./makeStore"),p=g("../dispatchers/SearchDispatcher"),c=g("../constants/SearchConstants.js"),n=g("../api/SavedSearchAPI");
var i=5;
var m=30;
var l=n.getLatest(m).filter(b);
var o="";
var d=f.exports=h({_searchesForQuery:function(s){if(!s){return q(l)
}var u=r(s);
var t=l.filter(function(v){var w=r(v.search_params.location);
return w.indexOf(u)===0
});
return q(t)
},get:function(){return this._searchesForQuery(o)
},getAll:function(){return l.slice()
},_onAPIChange:function(s){l=s.filter(b);
this.emitChange()
}});
d.dispatchToken=p.register((function(s){switch(s.type){case c.RECEIVE_SAVED_SEARCHES:l=s.searches.filter(b);
this.emitChange();
break;
case c.SET_SEARCH_TEXT:o=s.value.text;
this.emitChange();
break;
default:}}).bind(d));
n.on("change",d._onAPIChange);
function r(s){return s.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`'"~()]/g,"").replace(/\s+/g," ").toLowerCase()
}function a(u,t,w){var v={};
var s=[];
u.forEach(function(x){var z=t(x);
var y=1+(v[z]||0);
v[z]=y;
if(y<=w){s.push(x)
}});
return s
}function k(s){var t=s.search_params;
return[r(t.location),t.checkin||"",t.checkout||"",t.guests||1].join("|")
}function q(s){return a(s,k,1)
}function b(s){return"location" in s.search_params
}},{"../api/SavedSearchAPI":20,"../constants/SearchConstants.js":23,"../dispatchers/SearchDispatcher":24,"./makeStore":30}],28:[function(j,a,s){var h=j("./makeStore");
var o=j("../dispatchers/SearchDispatcher");
var b=j("../constants/SearchConstants.js");
var q=j("../actions/FormActions");
var d=j("../api/SavedSearchAPI");
var m=j("./AirEventStore");
var l=jQuery.param;
var k="/s";
var r=j("underscore");
var c=Airbnb.Utils.isDev();
function p(){return{location:""}
}var f=p();
var g=false;
var n=false;
var i=h({validate:function(t){if(t||g){g=!f.location
}},getParams:function(){return f
},getError:function(){return g
},isSubmitting:function(){return n
},performSearch:function(){if(!f.ss_id){var t=d.getOrCreate(f);
f.ss_id=t.saved_search_id
}f.source="bb";
var u=k+"?"+l(f);
if(c){console.log("constructed search uri",u,"from",r.clone(f))
}window.location.assign(u);
n=true
}});
i.dispatchToken=o.register((function(t){switch(t.type){case b.SET_SEARCH_TEXT:f.location=t.value.text;
this.validate();
this.emitChange();
break;
case b.SET_CHECK_IN:f.checkin=t.value;
this.validate();
this.emitChange();
break;
case b.SET_CHECK_OUT:f.checkout=t.value;
this.validate();
this.emitChange();
break;
case b.SET_GUEST_COUNT:f.guests=t.value;
this.validate();
this.emitChange();
break;
case b.SELECT_LOCATION_SUGGESTION:f.location=t.location.description;
this.validate();
this.emitChange();
break;
case b.SELECT_SAVED_SEARCH:o.waitFor([m.dispatchToken]);
f=r.extend({},t.search.search_params,f);
f.location=t.search.search_params.location;
f.ss_id=t.search.saved_search_id;
case b.SUBMIT_FORM:this.validate(true);
if(!g){this.performSearch()
}this.emitChange();
break;
default:}}).bind(i));
a.exports=i
},{"../actions/FormActions":16,"../api/SavedSearchAPI":20,"../constants/SearchConstants.js":23,"../dispatchers/SearchDispatcher":24,"./AirEventStore":25,"./makeStore":30,underscore:"underscore"}],29:[function(c,b,h){var g=c("./makeStore");
var j=c("../dispatchers/SearchDispatcher");
var a=c("../constants/SearchConstants.js");
function i(){return{location:"",shiftFocusToCheckIn:false}
}var d=i();
var f=g({getState:function(){return d
}});
f.dispatchToken=j.register((function(k){d.shiftFocusToCheckIn=false;
switch(k.type){case a.SET_SEARCH_TEXT:d.location=k.value.text;
d.shiftFocusToCheckIn=k.value.shiftFocusToCheckIn;
this.emitChange();
break;
default:}}).bind(f));
b.exports=f
},{"../constants/SearchConstants.js":23,"../dispatchers/SearchDispatcher":24,"./makeStore":30}],30:[function(d,f,b){var g=d("events").EventEmitter,h=d("underscore").extend;
var a="change";
f.exports=function c(j){var i=h({},g.prototype,j,{emitChange:function(){this.emit(a)
},addChangeListener:function(k){this.on(a,k)
},removeChangeListener:function(k){this.removeListener(a,k)
}});
Object.keys(i).forEach(function(k){var l=i[k];
if(typeof l==="function"){i[k]=l.bind(i)
}});
return i
}
},{events:46,underscore:"underscore"}],31:[function(b,c,a){function d(f){var i=false;
function g(){i=true
}function h(){if(i){return
}return f.apply(this,arguments)
}return{action:h,cancel:g}
}c.exports=d
},{}],32:[function(b,c,a){c.exports=d;
function d(f){var g=", ";
var j=f.split(g),i=j[0],h=j.slice(1).join(g);
return[i,h]
}},{}],33:[function(b,a,d){var c=(function(){function k(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}return function(n,l,m){if(l){k(n.prototype,l)
}if(m){k(n,m)
}return n
}
})();
function f(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}var i=b("./GeoLocationUtils");
var g=b("./queryTokenizer");
var h=window.Bloodhound;
var j=(function(){function k(){f(this,k);
var o="c1_typeahead_data";
var n="0bf0786cd85f9caff2d043c912f45658";
window.engine=this.engine=new h({queryTokenizer:g,datumTokenizer:i.tokenizer.bind(null,I18n.language()),sorter:i.sorter,prefetch:{cacheKey:o,thumbprint:n,url:""+o+"_"+n+".json"}})
}c(k,[{key:"init",value:function m(){return this.engine.initialize()
}},{key:"query",value:function l(n,o){this.engine.get(n,function(p){var q=p.map(function(r){return{description:i.toSearchString(r)}
});
o(q)
})
}}]);
return k
})();
a.exports=j
},{"./GeoLocationUtils":34,"./queryTokenizer":36}],34:[function(d,b,i){var a=["city","state","country"];
function h(l,m){a.forEach(function(n){if(l[n]){m(l[n],n)
}})
}function j(n,l){var m=[];
h(l,function(p,q){if(p.en&&!(n==="zh"&&c(l))){m=m.concat(p.en.split(/[-\s]+/))
}if(p.zh){m.push(p.zh)
}if(p.py&&n==="zh"){var o=p.py.split(" ");
m.push(o.join(""));
m.push(o.reduce(function(r,s){return r+s[0]
},""))
}});
return m
}function g(l){var m=[];
h(l,function(n,o){if(n.zh){m.push(n.zh)
}else{m.push(n.en)
}});
return m.join(", ")
}function k(l,m){return m.p-l.p
}function f(l){var m=undefined;
h(l,function(n,o){m=o
});
return m
}function c(l){var m=l[f(l)];
return m.en==="China"||m.zh==="中国"||m.en==="Taiwan"||m.zh==="台湾"
}b.exports={GEO_LEVELS:a,forEachGeoLevel:h,sorter:k,tokenizer:j,toSearchString:g,getHighestGeoLevel:f,isInGreaterChina:c}
},{}],35:[function(c,f,b){var d=(function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
})();
function h(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var a=null;
var g=(function(){function j(){h(this,j)
}d(j,[{key:"init",value:function k(){var l=this;
Airbnb.Utils.withGooglePlaces(function(){if(!a){a=google.maps.places.PlacesServiceStatus
}l.service=new google.maps.places.AutocompleteService()
})
}},{key:"query",value:function i(l,m){if(this.service){this.service.getPlacePredictions({input:l,types:["geocode"]},function(o,n){if(!(n==a.OK||n==a.ZERO_RESULTS)){throw Error("Bad places response: "+n)
}m(o)
})
}else{m([])
}}}]);
return j
})();
f.exports=g
},{}],36:[function(b,c,a){function d(f){if(f){var g=f.toString();
return g.split(/[-—,，\s]+/)
}else{return[]
}}c.exports=d
},{}],37:[function(f,h,b){var d=f("react");
var c=f("../actions/FormActions");
var a=6;
var g=d.createClass({displayName:"Destination",onMouseDownOrTouchEnd:function(k){var j=this.props.destination[0]+", "+this.props.destination[1];
c.setSearchText(j,true);
c.clickTopDestination(j)
},render:function(){return d.createElement("div",{onMouseDown:this.onMouseDownOrTouchEnd,onTouchEnd:this.onMouseDownOrTouchEnd,className:"search-top-destination col-sm-2"},this.props.destination[0])
}});
var i=d.createClass({displayName:"GroupedDestinations",render:function(){var m=this.props.destinationGroup;
var j=this.props.destinations.map(function(n){return d.createElement(g,{destination:n,key:n})
});
var l=[];
for(var k=1;
k*a<=j.length;
++k){if(k===1){l.push(d.createElement("div",{className:"search-destination-group-single-line col-sm-12 space-2 space-top-2",key:k},j.slice((k-1)*a,k*a)))
}else{l.push(d.createElement("div",{className:"search-destination-group-single-line col-sm-12 space-2",key:k},j.slice((k-1)*a,k*a)))
}}return d.createElement("div",{className:"search-top-destinations row"},d.createElement("div",{className:"search-destination-group col-sm-2 space-2 space-top-2"},d.createElement("b",null,this.props.destinationGroup)),d.createElement("div",{className:"search-destination-group-content col-sm-10"},l))
}});
h.exports=i
},{"../actions/FormActions":16,react:"react"}],38:[function(f,h,c){var d=f("react");
var b=f("../../../components/o2/Icon.jsx");
var a=f("./SearchLocation.jsx");
var i=f("../util/localeAndRegion");
var g=d.createClass({displayName:"SavedSearch",propTypes:{search:d.PropTypes.object.isRequired},render:function(){var j=this.props.search.search_params;
var m=i(j.location);
var l=this.renderGuests(j.guests);
var k=this.renderDates(j.checkin,j.checkout);
return d.createElement("div",{className:"saved-search"},d.createElement(a,{locale:m[0],region:m[1],icon:d.createElement(b,{name:"search"})}),d.createElement("span",{className:"saved-search-date"},k),d.createElement("span",{className:"saved-search-guests"},l))
},renderGuests:function(j){return I18n.t("saved_search_guests",{smart_count:j||1})
},renderDates:function(k,j){if(!(k||j)){return null
}k=this.renderDateString(k);
j=this.renderDateString(j);
return[d.createElement("span",{className:"date-start"},k),d.createElement("span",{className:"seperator"},"—"),d.createElement("span",{className:"date-end"},j)]
},renderDateString:function(k){if(!k){return""
}var j=$.datepicker.parseDate(k);
return moment(j).format("l")
}});
h.exports=g
},{"../../../components/o2/Icon.jsx":3,"../util/localeAndRegion":32,"./SearchLocation.jsx":40,react:"react"}],39:[function(m,c,B){var p=m("react/addons");
var f=p.addons.classSet;
var i=m("../util/localeAndRegion");
var x=m("underscore");
var h=x.debounce;
var b=m("../../menu/AutocompleteMixin.jsx");
var j=m("../../menu/Menu.jsx");
var n=m("../../menu/Option.jsx");
var z=m("../../menu/Section.jsx");
var r=m("./SearchLocation.jsx");
var o=m("./SavedSearch.jsx");
var a=m("./GroupedDestinations.jsx");
var t=m("../../../components/o2/PlaceholderLabel.jsx");
var v=t.Input;
var C={Form:m("../actions/FormActions"),LocationSuggestions:m("../actions/LocationSuggestionActions"),SavedSearches:m("../actions/SavedSearchActions")};
var k=m("../stores/LocationSuggestionStore");
var u=m("../stores/SavedSearchStore");
var l=m("../stores/SearchParamsStore");
var A=m("../stores/SearchTextBoxStore");
var d=7;
var y=5;
var w=navigator.userAgent.match(/iPad/i)!==null;
var g=w?100:15;
var q=h(C.LocationSuggestions.requestForSearchText,g);
var s=p.createClass({displayName:"SearchForm",mixins:[b],getStateFromStores:function(){var D={formParams:l.getParams(),formError:l.getError(),formSubmitting:l.isSubmitting(),savedSearches:u.get(),locationSuggestions:k.get(),searchTextBoxState:A.getState()};
if(D.searchTextBoxState.shiftFocusToCheckIn){D.inputValue=D.searchTextBoxState.location;
this.refs.checkin.getInput().getDOMNode().focus()
}return D
},getInitialState:function(){return this.getStateFromStores()
},syncState:function(){this.setState(this.getStateFromStores())
},datePickerChanged:function(){C.Form.setCheckIn(this.refs.checkin.getInput().getDOMNode().value);
C.Form.setCheckOut(this.refs.checkout.getInput().getDOMNode().value)
},componentWillMount:function(){this.inPlaceholderExperiment=Airbnb.ERF.deliverExperiment("placeholder_search_tip",{control:function(){return false
},experiment:function(){return true
},treatment_unknown:function(){return false
}})
},componentDidMount:function(){k.addChangeListener(this.syncState);
u.addChangeListener(this.syncState);
l.addChangeListener(this.syncState);
A.addChangeListener(this.syncState);
$(this.getDOMNode()).airbnbInputDateSpan({onCheckinClose:this.onCheckinChange,onCheckoutClose:this.onCheckoutChange})
},componentWillUnmount:function(){k.removeChangeListener(this.syncState);
u.removeChangeListener(this.syncState);
l.removeChangeListener(this.syncState)
},onSubmit:function(D){D.preventDefault();
C.Form.submitForm()
},onLocationChange:function(D){C.Form.setSearchText(D);
q(D);
this.setState({showDestinations:!D})
},onCheckinChange:function(D){var E;
if(D){E=D.target.value
}else{E=this.refs.checkin.getInput().getDOMNode().value
}C.Form.setCheckIn(E)
},onCheckoutChange:function(D){var E;
if(D){E=D.target.value
}else{E=this.refs.checkout.getInput().getDOMNode().value
}C.Form.setCheckOut(E)
},onGuestsChange:function(D){C.Form.setGuestCount(parseInt(D.target.value,10))
},onAutocompleteSelect:function(F,D,E){if(D===false){Airbnb.Utils.trackRegularEvent("homepage","search","type",{target:"enter_key"});
C.Form.setSearchText(F);
C.Form.submitForm();
return
}if(F.saved_search_id){Airbnb.Utils.trackQueuedEvent("homepage","search","click",{target:"saved_search"});
C.SavedSearches.select(F);
return
}if(F.description){Airbnb.Utils.trackRegularEvent("homepage","search","click",{target:"autocomplete_text"});
C.LocationSuggestions.select(F);
C.Form.setSearchText(F.description);
this.refs.checkin.getInput().getDOMNode().focus();
return
}throw Error("unknown menu type",F)
},renderGroupedDestinations:function(){var D=[];
this.props.options.groupedDestinations.map(function(E){D.push(p.createElement(a,{destinationGroup:E.name,destinations:E.destinations,key:E.name}))
});
D.push(p.createElement("div",{className:"search-top-destination-tips space-1 space-top-1",key:"tips"},this.props.options.groupedDestinationTips));
return p.createElement("div",{className:"page-container-full",key:"top-destinations"},D)
},renderMenu:function(){var F=[],D,G;
if(this.props.showDestinations&&this.state.showDestinations){F.push(this.renderGroupedDestinations())
}else{D=this.state.locationSuggestions.map(function(H){var I=i(H.description);
return p.createElement(n,{key:H.description,value:H,label:H.description},p.createElement(r,{locale:I[0],region:I[1]}))
});
G=this.state.savedSearches.map(function(H){return p.createElement(n,{value:H,key:H.saved_search_id,label:H.search_params.location},p.createElement(o,{search:H}))
});
F.push.apply(F,G.slice(0,y));
if(D.length){D=D.slice(0,Math.min(d-F.length,y));
F.push(p.createElement(z,{className:"location-suggestions"},D))
}}var E=f({hide:!this.state.menuOpen||!F.length});
return p.createElement(j,{className:E},F)
},onSearchTextBoxFocus:function(){this.setState({showDestinations:true})
},render:function(){var O=I18n.t("saved_search_where_do_you_want_to_go",{"default":"Where do you want to go?"});
if(I18n.locale()==="zh"){Airbnb.ERF.deliverExperiment("c1_search_box_text",{experiment:function(){O="选择下一站旅途"
},control:function(){},treatment_unknown:function(){}})
}var E=this.inPlaceholderExperiment&&Airbnb.Utils.getScreenSize()==="lg";
if(E){O=I18n.t("saved_search_search_for_city_address_landmark",{"default":"Search by city, address, landmark..."})
}var H=I18n.t("saved_search_please_set_location",{"default":"Please set location"});
var G=I18n.t("saved_search_checkin",{"default":"Check In"});
var M=I18n.t("saved_search_checkout",{"default":"Check Out"});
var J=I18n.t("saved_search_search_button",{"default":"Search"});
var N=I18n.t("saved_search_number_of_guests",{"default":"Number of guests"});
var L=this.props.options.optionsHTML;
var K=f({bad:true,hide:!this.state.formError});
var I=f({"search-form-input-wrapper":true,loading:this.state.formSubmitting});
var F=this.renderMenu();
var D=this.makeAutocomplete(F,{onSelect:this.onAutocompleteSelect,onInput:this.onLocationChange,disableUpdateOnBlur:this.state.showDestinations,props:{defaultValue:this.state.formParams.location,placeholder:O,name:"location",id:"location",className:f({"form-inline":true,location:true,"input-large":true,"input-contrast":true,"menu-open":this.state.menuOpen&&F.props.children.length})}});
return p.createElement("form",{action:this.props.action,onSubmit:this.onSubmit,id:"search_form",method:"get",ref:"form"},p.createElement("div",{className:I},p.createElement("div",{className:"location-wrapper",onFocus:this.onSearchTextBoxFocus},D.input,p.createElement("p",{id:"enter_location_error_message",className:K},H)),p.createElement(v,{type:"text",id:"checkin",className:"form-inline checkin search-option input-large input-contrast input-underline",name:"checkin",ref:"checkin",placeholder:G,onChange:this.onCheckinChange,value:this.state.formParams.checkin}),p.createElement(v,{type:"text",id:"checkout",className:"form-inline checkout search-option input-large input-contrast input-underline",name:"checkout",ref:"checkout",placeholder:M,onChange:this.onCheckoutChange,value:this.state.formParams.checkout}),p.createElement("div",{className:"select select-large"},p.createElement("label",{htmlFor:"guests",className:"screen-reader-only"},N),p.createElement("select",{id:"guests",name:"guests",onChange:this.onGuestsChange,dangerouslySetInnerHTML:{__html:L},value:this.state.formParams.guests})),D.menu),p.createElement("input",{type:"hidden",name:"source",value:"bb"}),p.createElement("button",{type:"submit",className:"search-button form-inline btn btn-primary btn-large",id:"submit_location"},J))
}});
c.exports=s
},{"../../../components/o2/PlaceholderLabel.jsx":4,"../../menu/AutocompleteMixin.jsx":11,"../../menu/Menu.jsx":12,"../../menu/Option.jsx":13,"../../menu/Section.jsx":14,"../actions/FormActions":16,"../actions/LocationSuggestionActions":17,"../actions/SavedSearchActions":18,"../stores/LocationSuggestionStore":26,"../stores/SavedSearchStore":27,"../stores/SearchParamsStore":28,"../stores/SearchTextBoxStore":29,"../util/localeAndRegion":32,"./GroupedDestinations.jsx":37,"./SavedSearch.jsx":38,"./SearchLocation.jsx":40,"react/addons":"react/addons",underscore:"underscore"}],40:[function(d,g,b){var f=Object.assign||function(l){for(var j=1;
j<arguments.length;
j++){var k=arguments[j];
for(var h in k){if(Object.prototype.hasOwnProperty.call(k,h)){l[h]=k[h]
}}}return l
};
var c=d("react");
var a=c.createClass({displayName:"SearchLocation",render:function(){var h=this.props.icon?this.props.icon:null;
return c.createElement("span",f({},this.props,{className:"search-location"}),h,c.createElement("span",{className:"search-locale"},this.props.locale)," ",c.createElement("span",{className:"search-region"},this.props.region))
}});
g.exports=a
},{react:"react"}],41:[function(b,c,a){var d=b("../../inspectlet.js");
c.exports={inSearchBoxExperiment:function(){return Airbnb.ERF.deliverExperiment("china_p1_search_box",{control:function(){return false
},experiment:function(){d.push(["tagSession","china_p1_search_box"]);
return true
},treatment_unknown:function(){return false
}})
},inTypeaheadExperiment:function(){return Airbnb.ERF.deliverExperiment("china_p1_typeahead",{control:function(){return false
},experiment:function(){d.push(["tagSession","china_p1_typeahead"]);
return true
},treatment_unknown:function(){return false
}})
},inC1RedesignExperiment:function(){if(BootstrapData.get("c1_redesign_trebuchet")){return Airbnb.ERF.deliverExperiment("c1_redesign_1",{control:function(){return null
},new_c1_without_new_user_coupon:function(){d.push(["tagSession","china_p1_redesign"]);
return"no_new_user_coupon"
},new_c1_with_new_user_coupon:function(){d.push(["tagSession","china_p1_redesign"]);
return"new_user_coupon"
},treatment_unknown:function(){return null
}})
}else{return null
}}}
},{"../../inspectlet.js":5}],42:[function(b,c,a){c.exports=d;
function d(h,i,f){if(h.setSelectionRange){h.setSelectionRange(i,f);
return
}if(h.createTextRange){var g=h.createTextRange();
g.collapse(true);
g.moveStart("character",i);
g.moveEnd("character",f);
g.select();
return
}throw new Error("can't setSelectionRange")
}},{}],43:[function(b,c,a){c.exports={init:function(d){d=_.extend({focusSearch:true},d);
this.cacheEls();
this.initEvents();
d.focusSearch&&this.showSearch();
this.initCalendars();
this.initCustomForms();
this.initGooglePlaces()
},cacheEls:function(){this.els={loc:$("#location"),searchArea:$(".search-area"),form:$("#search_form")}
},initEvents:function(){$(document).on("click",".input-wrapper span",(function(d){this.clickInput(d)
}).bind(this));
$(document).on("submit","#search_form",(function(d){this.checkInputsAndSubmit(d)
}).bind(this))
},showSearch:function(){this.els.loc.focus();
this.els.searchArea.find('input[type="text"]').placeholder()
},initCalendars:function(){var d=$.datepicker._defaults.dateFormat;
var f=$("#checkin");
var g=$("#checkout");
var i="";
if(!f.attr("placeholder")){i=d
}try{$.datepicker.parseDate(f.val());
$.datepicker.parseDate(g.val())
}catch(h){f.val(i).blur();
g.val(i).blur()
}this.els.form.airbnbInputDateSpan()
},initCustomForms:function(){var d=this.els.form.find("#guests");
var g=d.parent().find(".current");
function f(h){g.text(d.find(":selected").text())
}d.change(f);
d.keyup(f);
d.focus(function(){g.addClass("focus")
});
d.blur(function(){g.removeClass("focus")
});
d.change()
},initGooglePlaces:function(){var d=this.els.loc;
$(window).on("load",function(){Airbnb.Utils.preloadGoogleMapsCommon();
Airbnb.Utils.withGooglePlaces(function(){new google.maps.places.Autocomplete(d[0],{types:["geocode"]})
});
var f=null;
d.on("keydown",function(g){if(g.keyCode===13){if(!f||!f.length){f=$(".pac-container")
}if(f.is(":visible")){g.preventDefault()
}}})
})
},clickInput:function(d){$(d.currentTarget).prev('input[type="text"]').focus()
},checkInputsAndSubmit:function(f){var d=$("#enter_location_error_message");
f.preventDefault();
if(this.locationIsBlank()){d.removeClass("hide");
return false
}d.addClass("hide");
Airbnb.SearchUtils.handleFormSubmit(f.currentTarget)
},locationIsBlank:function(){return !this.els.loc.val()||this.els.loc.hasClass("placeholder")||this.els.loc.hasClass("pac-placeholder")
}}
},{}],44:[function(b,c,a){c.exports={init:function(d){this.$el=d.el;
if(!this.$el){return
}this.cacheEls();
this.initEvents();
this.initGooglePlaces();
this.initCalendars()
},cacheEls:function(){this.ui={location:this.$el.find(".js-search-location"),checkin:this.$el.find(".js-search-checkin"),checkout:this.$el.find(".js-search-checkout"),guests:this.$el.find(".js-search-guests"),error:this.$el.find(".js-search-error")}
},initEvents:function(){this.$el.on("submit",this.submit.bind(this))
},initGooglePlaces:function(){var d=this.ui.location;
$(window).on("load",function(){Airbnb.Utils.preloadGoogleMapsCommon();
Airbnb.Utils.withGooglePlaces(function(){new google.maps.places.Autocomplete(d[0],{types:["geocode"]})
});
var f=null;
d.on("keydown",function(g){if(g.keyCode===13){if(!f||!f.length){f=$(".pac-container")
}if(f.is(":visible")){g.preventDefault()
}}})
})
},initCalendars:function(){var d=$.datepicker._defaults.dateFormat;
var g="";
if(!this.ui.checkin.attr("placeholder")){g=d
}try{$.datepicker.parseDate(this.ui.checkin.val());
$.datepicker.parseDate(this.ui.checkout.val())
}catch(f){this.ui.checkin.val(g).blur();
this.ui.checkout.val(g).blur()
}this.$el.airbnbInputDateSpan()
},submit:function(d){d.preventDefault();
if(this.locationIsBlank()){this.ui.error.removeClass("hide");
return false
}this.ui.error.addClass("hide");
Airbnb.SearchUtils.handleFormSubmit(d.currentTarget)
},locationIsBlank:function(){return !this.ui.location.val()||this.ui.location.hasClass("placeholder")||this.ui.location.hasClass("pac-placeholder")
}}
},{}],45:[function(c,d,b){var f=null;
var a=function(i,h){h.forEach(function(j){i[j.feature]=j.launch
});
return i
};
var g={getBootstrap:function(h){f=f||BootstrapData.get("trebuchet");
if(Object.hasOwnProperty.call(f,h)){return f[h]
}else{throw new ReferenceError(""+h+" was not bootstrapped")
}},fetch:function(j,h){if(!Array.isArray(j)){j=[j]
}var i=j.reduce(function(l,k){return(l[k]=false,l)
},{});
Airbnb.Api.get("/v1/trebuchet/multi",{data:{features:j},success:function(k){return h(a(i,k.features))
},error:function(){return h(i)
}})
}};
d.exports=g
},{}],46:[function(f,g,c){function h(){this._events=this._events||{};
this._maxListeners=this._maxListeners||undefined
}g.exports=h;
h.EventEmitter=h;
h.prototype._events=undefined;
h.prototype._maxListeners=undefined;
h.defaultMaxListeners=10;
h.prototype.setMaxListeners=function(j){if(!d(j)||j<0||isNaN(j)){throw TypeError("n must be a positive number")
}this._maxListeners=j;
return this
};
h.prototype.emit=function(o){var p,n,j,k,l,m;
if(!this._events){this._events={}
}if(o==="error"){if(!this._events.error||(a(this._events.error)&&!this._events.error.length)){p=arguments[1];
if(p instanceof Error){throw p
}throw TypeError('Uncaught, unspecified "error" event.')
}}n=this._events[o];
if(b(n)){return false
}if(i(n)){switch(arguments.length){case 1:n.call(this);
break;
case 2:n.call(this,arguments[1]);
break;
case 3:n.call(this,arguments[1],arguments[2]);
break;
default:j=arguments.length;
k=new Array(j-1);
for(l=1;
l<j;
l++){k[l-1]=arguments[l]
}n.apply(this,k)
}}else{if(a(n)){j=arguments.length;
k=new Array(j-1);
for(l=1;
l<j;
l++){k[l-1]=arguments[l]
}m=n.slice();
j=m.length;
for(l=0;
l<j;
l++){m[l].apply(this,k)
}}}return true
};
h.prototype.addListener=function(k,l){var j;
if(!i(l)){throw TypeError("listener must be a function")
}if(!this._events){this._events={}
}if(this._events.newListener){this.emit("newListener",k,i(l.listener)?l.listener:l)
}if(!this._events[k]){this._events[k]=l
}else{if(a(this._events[k])){this._events[k].push(l)
}else{this._events[k]=[this._events[k],l]
}}if(a(this._events[k])&&!this._events[k].warned){var j;
if(!b(this._maxListeners)){j=this._maxListeners
}else{j=h.defaultMaxListeners
}if(j&&j>0&&this._events[k].length>j){this._events[k].warned=true;
console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[k].length);
if(typeof console.trace==="function"){console.trace()
}}}return this
};
h.prototype.on=h.prototype.addListener;
h.prototype.once=function(j,l){if(!i(l)){throw TypeError("listener must be a function")
}var m=false;
function k(){this.removeListener(j,k);
if(!m){m=true;
l.apply(this,arguments)
}}k.listener=l;
this.on(j,k);
return this
};
h.prototype.removeListener=function(l,o){var n,j,m,k;
if(!i(o)){throw TypeError("listener must be a function")
}if(!this._events||!this._events[l]){return this
}n=this._events[l];
m=n.length;
j=-1;
if(n===o||(i(n.listener)&&n.listener===o)){delete this._events[l];
if(this._events.removeListener){this.emit("removeListener",l,o)
}}else{if(a(n)){for(k=m;
k-->0;
){if(n[k]===o||(n[k].listener&&n[k].listener===o)){j=k;
break
}}if(j<0){return this
}if(n.length===1){n.length=0;
delete this._events[l]
}else{n.splice(j,1)
}if(this._events.removeListener){this.emit("removeListener",l,o)
}}}return this
};
h.prototype.removeAllListeners=function(l){var j,k;
if(!this._events){return this
}if(!this._events.removeListener){if(arguments.length===0){this._events={}
}else{if(this._events[l]){delete this._events[l]
}}return this
}if(arguments.length===0){for(j in this._events){if(j==="removeListener"){continue
}this.removeAllListeners(j)
}this.removeAllListeners("removeListener");
this._events={};
return this
}k=this._events[l];
if(i(k)){this.removeListener(l,k)
}else{while(k.length){this.removeListener(l,k[k.length-1])
}}delete this._events[l];
return this
};
h.prototype.listeners=function(k){var j;
if(!this._events||!this._events[k]){j=[]
}else{if(i(this._events[k])){j=[this._events[k]]
}else{j=this._events[k].slice()
}}return j
};
h.listenerCount=function(l,k){var j;
if(!l._events||!l._events[k]){j=0
}else{if(i(l._events[k])){j=1
}else{j=l._events[k].length
}}return j
};
function i(j){return typeof j==="function"
}function d(j){return typeof j==="number"
}function a(j){return typeof j==="object"&&j!==null
}function b(j){return j===void 0
}},{}],47:[function(c,d,b){var h=d.exports={};
var a=[];
var i=false;
function g(){if(i){return
}i=true;
var l;
var j=a.length;
while(j){l=a;
a=[];
var k=-1;
while(++k<j){l[k]()
}j=a.length
}i=false
}h.nextTick=function(j){a.push(j);
if(!i){setTimeout(g,0)
}};
h.title="browser";
h.browser=true;
h.env={};
h.argv=[];
h.version="";
h.versions={};
function f(){}h.on=f;
h.addListener=f;
h.once=f;
h.off=f;
h.removeListener=f;
h.removeAllListeners=f;
h.emit=f;
h.binding=function(j){throw new Error("process.binding is not supported")
};
h.cwd=function(){return"/"
};
h.chdir=function(j){throw new Error("process.chdir is not supported")
};
h.umask=function(){return 0
}
},{}],48:[function(b,c,a){
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
}},{}],49:[function(b,c,a){c.exports.Dispatcher=b("./lib/Dispatcher")
},{"./lib/Dispatcher":50}],50:[function(g,h,f){var d=g("./invariant");
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
},{"./invariant":51}],51:[function(c,d,b){var a=function(g,q,p,o,n,l,j,i){if(false){if(q===undefined){throw new Error("invariant requires an error message argument")
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
},{}],52:[function(b,c,a){(function(f){var d=function(g,q,p,o,n,l,j,i){if("production"!==f.env.NODE_ENV){if(q===undefined){throw new Error("invariant requires an error message argument")
}}if(!g){var m;
if(q===undefined){m=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
}else{var k=[p,o,n,l,j,i];
var h=0;
m=new Error("Invariant Violation: "+q.replace(/%s/g,function(){return k[h++]
}))
}m.framesToPop=1;
throw m
}};
c.exports=d
}).call(this,b("_process"))
},{_process:47}],53:[function(b,c,a){(function(g){var d=b("./invariant");
var f=function(j){var h={};
var i;
("production"!==g.env.NODE_ENV?d(j instanceof Object&&!Array.isArray(j),"keyMirror(...): Argument must be an object."):d(j instanceof Object&&!Array.isArray(j)));
for(i in j){if(!j.hasOwnProperty(i)){continue
}h[i]=i
}return h
};
c.exports=f
}).call(this,b("_process"))
},{"./invariant":52,_process:47}]},{},[6]);