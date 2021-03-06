/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */
!function(r){var q=function(){return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1
},isBlankString:function(b){return !b||/^\s*$/.test(b)
},escapeRegExChars:function(b){return b.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},isString:function(b){return"string"==typeof b
},isNumber:function(b){return"number"==typeof b
},isArray:r.isArray,isFunction:r.isFunction,isObject:r.isPlainObject,isUndefined:function(b){return"undefined"==typeof b
},toStr:function(b){return q.isUndefined(b)||null===b?"":b+""
},bind:r.proxy,each:function(a,f){function e(d,c){return f(c,d)
}r.each(a,e)
},map:r.map,filter:r.grep,every:function(a,f){var e=!0;
return a?(r.each(a,function(b,c){return(e=f.call(null,c,b,a))?void 0:!1
}),!!e):e
},some:function(a,f){var e=!1;
return a?(r.each(a,function(b,c){return(e=f.call(null,c,b,a))?!1:void 0
}),!!e):e
},mixin:r.extend,getUniqueId:function(){var b=0;
return function(){return b++
}
}(),templatify:function(a){function d(){return String(a)
}return r.isFunction(a)?a:d
},defer:function(b){setTimeout(b,0)
},debounce:function(g,f,s){var i,h;
return function(){var d,c,b=this,a=arguments;
return d=function(){i=null,s||(h=g.apply(b,a))
},c=s&&!i,clearTimeout(i),i=setTimeout(d,f),c&&(h=g.apply(b,a)),h
}
},throttle:function(s,i){var y,x,w,v,u,t;
return u=0,t=function(){u=new Date,w=null,v=s.apply(y,x)
},function(){var b=new Date,a=i-(b-u);
return y=this,x=arguments,0>=a?(clearTimeout(w),w=null,u=b,v=s.apply(y,x)):w||(w=setTimeout(t,a)),v
}
},noop:function(){}}
}(),p="0.10.5",o=function(){function b(c){return c=q.toStr(c),c?c.split(/\s+/):[]
}function f(c){return c=q.toStr(c),c?c.split(/\W+/):[]
}function e(c){return function(){var a=[].slice.call(arguments,0);
return function(h){var g=[];
return q.each(a,function(d){g=g.concat(c(q.toStr(h[d])))
}),g
}
}
}return{nonword:f,whitespace:b,obj:{nonword:e(f),whitespace:e(b)}}
}(),n=function(){function f(d){this.maxSize=q.isNumber(d)?d:100,this.reset(),this.maxSize<=0&&(this.set=this.get=r.noop)
}function b(){this.head=this.tail=null
}function a(d,c){this.key=d,this.val=c,this.prev=this.next=null
}return q.mixin(f.prototype,{set:function(g,e){var i,h=this.list.tail;
this.size>=this.maxSize&&(this.list.remove(h),delete this.hash[h.key]),(i=this.hash[g])?(i.val=e,this.list.moveToFront(i)):(i=new a(g,e),this.list.add(i),this.hash[g]=i,this.size++)
},get:function(d){var c=this.hash[d];
return c?(this.list.moveToFront(c),c.val):void 0
},reset:function(){this.size=0,this.hash={},this.list=new b
}}),q.mixin(b.prototype,{add:function(c){this.head&&(c.next=this.head,this.head.prev=c),this.head=c,this.tail=this.tail||c
},remove:function(c){c.prev?c.prev.next=c.next:this.head=c.next,c.next?c.next.prev=c.prev:this.tail=c.prev
},moveToFront:function(c){this.remove(c),this.add(c)
}}),f
}(),m=function(){function b(c){this.prefix=["__",c,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+q.escapeRegExChars(this.prefix))
}function w(){return(new Date).getTime()
}function v(c){return JSON.stringify(q.isUndefined(c)?null:c)
}function u(c){return JSON.parse(c)
}var t,s;
try{t=window.localStorage,t.setItem("~~~","!"),t.removeItem("~~~")
}catch(i){t=null
}return s=t&&window.JSON?{_prefix:function(c){return this.prefix+c
},_ttlKey:function(c){return this._prefix(c)+this.ttlKey
},get:function(c){return this.isExpired(c)&&this.remove(c),u(t.getItem(this._prefix(c)))
},set:function(c,f,d){return q.isNumber(d)?t.setItem(this._ttlKey(c),v(w()+d)):t.removeItem(this._ttlKey(c)),t.setItem(this._prefix(c),v(f))
},remove:function(c){return t.removeItem(this._ttlKey(c)),t.removeItem(this._prefix(c)),this
},clear:function(){var f,e,h=[],g=t.length;
for(f=0;
g>f;
f++){(e=t.key(f)).match(this.keyMatcher)&&h.push(e.replace(this.keyMatcher,""))
}for(f=h.length;
f--;
){this.remove(h[f])
}return this
},isExpired:function(c){var e=u(t.getItem(this._ttlKey(c)));
return q.isNumber(e)&&w()>e?!0:!1
}}:{get:q.noop,set:q.noop,remove:q.noop,clear:q.noop,isExpired:q.noop},q.mixin(b.prototype,s),b
}(),l=function(){function u(c){c=c||{},this.cancelled=!1,this.lastUrl=null,this._send=c.transport?t(c.transport):r.ajax,this._get=c.rateLimiter?c.rateLimiter(this._get):this._get,this._cache=c.cache===!1?new n(0):a
}function t(d){return function(x,w){function v(f){q.defer(function(){c.resolve(f)
})
}function i(f){q.defer(function(){c.reject(f)
})
}var c=r.Deferred();
return d(x,w,v,i),c
}
}var s=0,e={},b=6,a=new n(10);
return u.setMaxPendingRequests=function(c){b=c
},u.resetCache=function(){a.reset()
},q.mixin(u.prototype,{_get:function(g,f,z){function y(c){z&&z(null,c),h._cache.set(g,c)
}function x(){z&&z(!0)
}function w(){s--,delete e[g],h.onDeckRequestArgs&&(h._get.apply(h,h.onDeckRequestArgs),h.onDeckRequestArgs=null)
}var v,h=this;
this.cancelled||g!==this.lastUrl||((v=e[g])?v.done(y).fail(x):b>s?(s++,e[g]=this._send(g,f).done(y).fail(x).always(w)):this.onDeckRequestArgs=[].slice.call(arguments,0))
},get:function(f,i,h){var g;
return q.isFunction(i)&&(h=i,i={}),this.cancelled=!1,this.lastUrl=f,(g=this._cache.get(f))?q.defer(function(){h&&h(null,g)
}):this._get(f,i,h),!!g
},cancel:function(){this.cancelled=!0
}}),u
}(),k=function(){function s(c){c=c||{},c.datumTokenizer&&c.queryTokenizer||r.error("datumTokenizer and queryTokenizer are both required"),this.datumTokenizer=c.datumTokenizer,this.queryTokenizer=c.queryTokenizer,this.reset()
}function i(c){return c=q.filter(c,function(d){return !!d
}),c=q.map(c,function(d){return d.toLowerCase()
})
}function h(){return{ids:[],children:{}}
}function b(g){for(var f={},v=[],u=0,t=g.length;
t>u;
u++){f[g[u]]||(f[g[u]]=!0,v.push(g[u]))
}return v
}function a(u,t){function A(d,c){return d-c
}var z=0,y=0,x=[];
u=u.sort(A),t=t.sort(A);
for(var w=u.length,v=t.length;
w>z&&v>y;
){u[z]<t[y]?z++:u[z]>t[y]?y++:(x.push(u[z]),z++,y++)
}return x
}return q.mixin(s.prototype,{bootstrap:function(c){this.datums=c.datums,this.trie=c.trie
},add:function(d){var e=this;
d=q.isArray(d)?d:[d],q.each(d,function(c){var u,t;
u=e.datums.push(c)-1,t=i(e.datumTokenizer(c)),q.each(t,function(v){var f,x,w;
for(f=e.trie,x=v.split("");
w=x.shift();
){f=f.children[w]||(f.children[w]=h()),f.ids.push(u)
}})
})
},get:function(d){var t,g,f=this;
return t=i(this.queryTokenizer(d)),q.each(t,function(u){var e,x,w,v;
if(g&&0===g.length){return !1
}for(e=f.trie,x=u.split("");
e&&(w=x.shift());
){e=e.children[w]
}return e&&0===x.length?(v=e.ids.slice(0),void (g=g?a(g,v):v)):(g=[],!1)
}),g?q.map(b(g),function(c){return f.datums[c]
}):[]
},reset:function(){this.datums=[],this.trie=h()
},serialize:function(){return{datums:this.datums,trie:this.trie}
}}),s
}(),j=function(){function c(d){return d.local||null
}function b(i){var h,g;
return g={url:null,thumbprint:"",ttl:86400000,filter:null,ajax:{}},(h=i.prefetch||null)&&(h=q.isString(h)?{url:h}:h,h=q.mixin(g,h),h.thumbprint=p+h.thumbprint,h.ajax.type=h.ajax.type||"GET",h.ajax.dataType=h.ajax.dataType||"json",!h.url&&r.error("prefetch requires url to be set")),h
}function a(u){function t(d){return function(e){return q.debounce(e,d)
}
}function s(d){return function(e){return q.throttle(e,d)
}
}var i,h;
return h={url:null,cache:!0,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}},(i=u.remote||null)&&(i=q.isString(i)?{url:i}:i,i=q.mixin(h,i),i.rateLimiter=/^throttle$/i.test(i.rateLimitBy)?s(i.rateLimitWait):t(i.rateLimitWait),i.ajax.type=i.ajax.type||"GET",i.ajax.dataType=i.ajax.dataType||"json",delete i.rateLimitBy,delete i.rateLimitWait,!i.url&&r.error("remote requires url to be set")),i
}return{local:c,prefetch:b,remote:a}
}();
!function(h){function g(c){c&&(c.local||c.prefetch||c.remote)||r.error("one of local, prefetch, or remote is required"),this.limit=c.limit||5,this.sorter=f(c.sorter),this.dupDetector=c.dupDetector||d,this.local=j.local(c),this.prefetch=j.prefetch(c),this.remote=j.remote(c),this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null,this.index=new k({datumTokenizer:c.datumTokenizer,queryTokenizer:c.queryTokenizer}),this.storage=this.cacheKey?new m(this.cacheKey):null
}function f(e){function s(c){return c.sort(e)
}function i(c){return c
}return q.isFunction(e)?s:i
}function d(){return !1
}var b,a;
return b=h.Bloodhound,a={data:"data",protocol:"protocol",thumbprint:"thumbprint"},h.Bloodhound=g,g.noConflict=function(){return h.Bloodhound=b,g
},g.tokenizers=o,q.mixin(g.prototype,{_loadPrefetch:function(i){function v(c){s.clear(),s.add(i.filter?i.filter(c):c),s._saveToStorage(s.index.serialize(),i.thumbprint,i.ttl)
}var u,t,s=this;
return(u=this._readFromStorage(i.thumbprint))?(this.index.bootstrap(u),t=r.Deferred().resolve()):t=r.ajax(i.url,i.ajax).done(v),t
},_getFromRemote:function(s,i){function w(e,x){i(e?[]:t.remote.filter?t.remote.filter(x):x)
}var v,u,t=this;
if(this.transport){return s=s||"",u=encodeURIComponent(s),v=this.remote.replace?this.remote.replace(this.remote.url,s):this.remote.url.replace(this.remote.wildcard,u),this.transport.get(v,this.remote.ajax,w)
}},_cancelLastRemoteRequest:function(){this.transport&&this.transport.cancel()
},_saveToStorage:function(i,e,s){this.storage&&(this.storage.set(a.data,i,s),this.storage.set(a.protocol,location.protocol,s),this.storage.set(a.thumbprint,e,s))
},_readFromStorage:function(i){var e,s={};
return this.storage&&(s.data=this.storage.get(a.data),s.protocol=this.storage.get(a.protocol),s.thumbprint=this.storage.get(a.thumbprint)),e=s.thumbprint!==i||s.protocol!==location.protocol,s.data&&!e?s.data:null
},_initialize:function(){function u(){s.add(q.isFunction(i)?i():i)
}var t,s=this,i=this.local;
return t=this.prefetch?this._loadPrefetch(this.prefetch):r.Deferred().resolve(),i&&t.done(u),this.transport=this.remote?new l(this.remote):null,this.initPromise=t.promise()
},initialize:function(c){return !this.initPromise||c?this._initialize():this.initPromise
},add:function(c){this.index.add(c)
},get:function(i,w){function v(c){var e=t.slice(0);
q.each(c,function(x){var y;
return y=q.some(e,function(z){return u.dupDetector(x,z)
}),!y&&e.push(x),e.length<u.limit
}),w&&w(u.sorter(e))
}var u=this,t=[],s=!1;
t=this.index.get(i),t=this.sorter(t).slice(0,this.limit),t.length<this.limit?s=this._getFromRemote(i,v):this._cancelLastRemoteRequest(),s||(t.length>0||!this.transport)&&w&&w(t)
},clear:function(){this.index.reset()
},clearPrefetchCache:function(){this.storage&&this.storage.clear()
},clearRemoteCache:function(){this.transport&&l.resetCache()
},ttAdapter:function(){return q.bind(this.get,this)
}}),g
}(this)
}(window.jQuery);