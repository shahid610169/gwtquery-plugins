function GWTIntegrationSample(){var M='',nb='" for "gwt:onLoadErrorFn"',lb='" for "gwt:onPropertyErrorFn"',Y='"><\/script>',$='#',Vb='.cache.html',ab='/',Jb='02D767F0A26A07D653B4E4508298EA54',Kb='06F40903F6289485BB277B2E6E0CBB12',Lb='0C51F2D0A47BA3ADBF301F4C5F40543A',Mb='1E6DA82E44BEE7F7459FB46B594BA0FA',Nb='2480A8AFF16E388E9D89699A9B708D49',Ob='612CC670FE4219FEE11B2DEA7F822306',Pb='68226AE2157BB499706FFB5C685B708D',Qb='8305B26BBB83F14F7846FD2BE2B35779',Rb='99F748005FF898E3E3A3C2BD398CF302',Sb='9CE3E8CA68E58D038B0711B772A7C673',bc='<script defer="defer">GWTIntegrationSample.onInjectionDone(\'GWTIntegrationSample\')<\/script>',X='<script id="',ib='=',_='?',Tb='AB176F951139801C178377A0A3562D2F',Ub='B84CFE875C24E3DC40C991D8863234F8',kb='Bad handler "',ac='DOMContentLoaded',N='GWTIntegrationSample',Z='SCRIPT',W='__gwt_marker_GWTIntegrationSample',tb='_selector_force_js',bb='base',Q='begin',P='bootstrap',db='clear.cache.gif',hb='content',V='end',Db='gecko',Eb='gecko1_8',R='gwt.codesvr=',S='gwt.hosted=',T='gwt.hybrid',Wb='gwt/chrome/chrome.css',mb='gwt:onLoadErrorFn',jb='gwt:onPropertyErrorFn',gb='gwt:property',_b='head',Hb='hosted.html?GWTIntegrationSample',$b='href',Cb='ie6',Bb='ie8',ob='iframe',cb='img',pb="javascript:''",ub='js',Xb='link',Gb='loadExternalRefs',eb='meta',rb='moduleRequested',U='moduleStartup',Ab='msie',fb='name',vb='native',xb='opera',qb='position:absolute;width:0;height:0;border:none',Yb='rel',zb='safari',Ib='selectingPermutation',sb='selectorCapability',O='startup',Zb='stylesheet',Fb='unknown',wb='user.agent',yb='webkit';var k=window,l=document,m=k.__gwtStatsEvent?function(a){return k.__gwtStatsEvent(a)}:null,n=k.__gwtStatsSessionId?k.__gwtStatsSessionId:null,o,p,q,r=M,s={},t=[],u=[],v=[],w,x;m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:P,millis:(new Date).getTime(),type:Q});if(!k.__gwt_stylesLoaded){k.__gwt_stylesLoaded={}}if(!k.__gwt_scriptsLoaded){k.__gwt_scriptsLoaded={}}function y(){var b=false;try{var c=k.location.search;return (c.indexOf(R)!=-1||(c.indexOf(S)!=-1||k.external&&k.external.gwtOnLoad))&&c.indexOf(T)==-1}catch(a){}y=function(){return b};return b}
function z(){if(o&&p){var b=l.getElementById(N);var c=b.contentWindow;if(y()){c.__gwt_getProperty=function(a){return F(a)}}GWTIntegrationSample=null;c.gwtOnLoad(w,N,r);m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:U,millis:(new Date).getTime(),type:V})}}
function A(){var e,f=W,g;l.write(X+f+Y);g=l.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=Z){e=e.previousSibling}function h(a){var b=a.lastIndexOf($);if(b==-1){b=a.length}var c=a.indexOf(_);if(c==-1){c=a.length}var d=a.lastIndexOf(ab,Math.min(c,b));return d>=0?a.substring(0,d+1):M}
;if(e&&e.src){r=h(e.src)}if(r==M){var i=l.getElementsByTagName(bb);if(i.length>0){r=i[i.length-1].href}else{r=h(l.location.href)}}else if(r.match(/^\w+:\/\//)){}else{var j=l.createElement(cb);j.src=r+db;r=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function B(){var b=document.getElementsByTagName(eb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(fb),g;if(f){if(f==gb){g=e.getAttribute(hb);if(g){var h,i=g.indexOf(ib);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=M}s[f]=h}}else if(f==jb){g=e.getAttribute(hb);if(g){try{x=eval(g)}catch(a){alert(kb+g+lb)}}}else if(f==mb){g=e.getAttribute(hb);if(g){try{w=eval(g)}catch(a){alert(kb+g+nb)}}}}}}
function E(a,b){var c=v;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function F(a){var b=u[a](),c=t[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(x){x(a,d,b)}throw null}
var G;function H(){if(!G){G=true;var a=l.createElement(ob);a.src=pb;a.id=N;a.style.cssText=qb;a.tabIndex=-1;l.body.appendChild(a);m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:U,millis:(new Date).getTime(),type:rb});a.contentWindow.location.replace(r+J)}}
u[sb]=function(){if(l.location.href.indexOf(tb)!=-1)return ub;if(l.querySelectorAll&&/native/.test(String(l.querySelectorAll)))return vb;return ub};t[sb]={js:0,'native':1};u[wb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(b.indexOf(xb)!=-1){return xb}else if(b.indexOf(yb)!=-1){return zb}else if(b.indexOf(Ab)!=-1){if(document.documentMode>=8){return Bb}else{var d=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(d&&d.length==3){var e=c(d);if(e>=6000){return Cb}}}}else if(b.indexOf(Db)!=-1){var d=/rv:([0-9]+)\.([0-9]+)/.exec(b);if(d&&d.length==3){if(c(d)>=1008)return Eb}return Db}return Fb};t[wb]={gecko:0,gecko1_8:1,ie6:2,ie8:3,opera:4,safari:5};GWTIntegrationSample.onScriptLoad=function(){if(G){p=true;z()}};GWTIntegrationSample.onInjectionDone=function(){o=true;m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:Gb,millis:(new Date).getTime(),type:V});z()};A();var I;var J;if(y()){if(k.external&&(k.external.initModule&&k.external.initModule(N))){k.location.reload();return}J=Hb;I=M}B();m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:P,millis:(new Date).getTime(),type:Ib});if(!y()){try{E([vb,xb],Jb);E([vb,Bb],Kb);E([vb,Db],Lb);E([ub,zb],Mb);E([vb,Cb],Nb);E([ub,Db],Ob);E([ub,Bb],Pb);E([ub,xb],Qb);E([ub,Cb],Rb);E([vb,zb],Sb);E([ub,Eb],Tb);E([vb,Eb],Ub);I=v[F(sb)][F(wb)];J=I+Vb}catch(a){return}}var K;function L(){if(!q){q=true;if(!__gwt_stylesLoaded[Wb]){var a=l.createElement(Xb);__gwt_stylesLoaded[Wb]=a;a.setAttribute(Yb,Zb);a.setAttribute($b,r+Wb);l.getElementsByTagName(_b)[0].appendChild(a)}z();if(l.removeEventListener){l.removeEventListener(ac,L,false)}if(K){clearInterval(K)}}}
if(l.addEventListener){l.addEventListener(ac,function(){H();L()},false)}var K=setInterval(function(){if(/loaded|complete/.test(l.readyState)){H();L()}},50);m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:P,millis:(new Date).getTime(),type:V});m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:Gb,millis:(new Date).getTime(),type:Q});l.write(bc)}
GWTIntegrationSample();