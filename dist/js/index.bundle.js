!function(t){function e(e){for(var r,o,s=e[0],l=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(c&&c(e);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={5:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([346,0]),n()}({346:function(t,e,n){"use strict";var r=o(n(139)),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(43)),i=o(n(347));function o(t){return t&&t.__esModule?t:{default:t}}n(99),n(69),a.nav(".nav","./reusable/nav.html"),a.head(".head","./reusable/head.html"),a.footer(".footer","./reusable/footer.html");var s,l,u=document.querySelector(".latest-podcasts"),c={};(s=regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c.seneste=new i.default,t.prev=1,t.next=4,c.seneste.getResults();case 4:console.log(c.seneste.results),(e=c.seneste.results.articles[0]).title.length>65&&(e.title=e.title.substring(0,65)+" ..."),(n=c.seneste.results.articles[1]).title.length>30&&$(window).width()>600&&(n.title=n.title.substring(0,30)+" ..."),n.title.length>40&&$(window).width()<600&&(n.title=n.title.substring(0,40)+" ..."),(a=c.seneste.results.articles[2]).title.length>30&&$(window).width()>600&&(a.title=a.title.substring(0,30)+" ..."),a.title.length>50&&$(window).width()<600&&(a.title=a.title.substring(0,50)+" ..."),$(".article-content").attr("data-id",e.id),$(".article-content h1").html(e.title),$(".article-content .visual").attr("style",'background-image: url("'+e.picture+'");'),$(".article-content .info h2").html(e.author+'<span class="date"> | '+e.date+"</span>"),$(".article-content .info p").html(e.subtitle),$(".article-top").attr("data-id",n.id),$(".article-top h1").html(n.title),$(".article-top .visual").attr("style",'background-image: url("'+n.picture+'"); background-repeat: no-repeat; background-size: cover;'),$(".article-top .info h2").html(n.author),$(".article-top .info p").html(n.subtitle),$(".article-bottom").attr("data-id",a.id),$(".article-bottom h1").html(a.title),$(".article-bottom .visual").attr("style",'background-image: url("'+a.picture+'"); background-repeat: no-repeat; background-size: cover;'),$(".article-bottom .info h2").html(a.author),$(".article-bottom .info p").html(a.subtitle),$(".artikel").click(function(t){var e=t.currentTarget.dataset.id;console.log(t.currentTarget.dataset),window.location.href="artikel.html#"+e}),d(),r.default.setup(".player"),t.next=36;break;case 33:t.prev=33,t.t0=t.catch(1),console.log("Something went wrong with loading the latest news, try again later\n"+t.t0);case 36:case"end":return t.stop()}},t,void 0,[[1,33]])}),l=function(){var t=s.apply(this,arguments);return new Promise(function(e,n){return function r(a,i){try{var o=t[a](i),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});e(s)}("next")})},function(){return l.apply(this,arguments)})();var d=function(){var t=!0,e=!1,n=void 0;try{for(var r,a=c.seneste.results.podcasts[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var i=r.value;i.hostname.length>20&&(i.hostname=i.hostname.substring(0,30)+" ..."),i.guestname.length>70&&(console.log(i.guestname),i.guestname=i.guestname.substring(0,20)+" ...");var o='\n        <div class="podcast-episode animated fadeInLeft">\n            <div class="top-part">\n                <h1>'+i.title+'</h1>\n            </div>\n            <div class="bottom-part">\n                <button class="play-button hvr-radial-out"><i class="fas fa-headphones"></i></button>\n                <div class="podcast-text">\n                    <h3 class="player-text">Vært: '+i.hostname+'</h3>\n                    <h3 class="player-text">Gæst: '+i.guestname+'</h3>\n                </div>\n                <div class="player-placeholder">\n                    <audio class="player" controls>\n                        <source src="'+i.audioPath+'" type="audio/mpeg" />\n                    </audio>\n                </div>\n            </div>\n        </div>\n        ';u.insertAdjacentHTML("beforeEnd",o),$(".play-button").on("click",function(t){t.stopPropagation(),t.stopImmediatePropagation();var e=t.target.closest("button"),n=e.querySelector(".fas"),r=e.nextElementSibling,a=r.nextElementSibling;a.classList.contains("active")?(a.classList.remove("active"),n.classList.add("fa-headphones"),n.classList.remove("fa-times"),r.classList.remove("hide")):(a.classList.add("active"),n.classList.add("fa-times"),n.classList.remove("fa-headphones"),r.classList.add("hide"))})}}catch(t){e=!0,n=t}finally{try{!t&&a.return&&a.return()}finally{if(e)throw n}}}},347:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(49),o=(r=i)&&r.__esModule?r:{default:r};var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return a(t,[{key:"getResults",value:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,n,r,a,i,s,l,u,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.default)("http://waih.dk/WaihAPI/index/get/");case 3:for(e=t.sent,this.results=e.data,n=["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],r=!0,a=!1,i=void 0,t.prev=9,s=this.results.articles[Symbol.iterator]();!(r=(l=s.next()).done);r=!0)u=l.value,c=new Date(u.date.replace(" ","T")),u.date=(c.getDate()>9?c.getDate():"0"+c.getDate())+". "+n[c.getMonth()]+" "+c.getFullYear()+" "+c.getHours()+":"+(0===c.getMinutes()?"0"+c.getMinutes():c.getMinutes());t.next=17;break;case 13:t.prev=13,t.t0=t.catch(9),a=!0,i=t.t0;case 17:t.prev=17,t.prev=18,!r&&s.return&&s.return();case 20:if(t.prev=20,!a){t.next=23;break}throw i;case 23:return t.finish(20);case 24:return t.finish(17);case 25:t.next=30;break;case 27:t.prev=27,t.t1=t.catch(0),alert(t.t1);case 30:case"end":return t.stop()}},t,this,[[0,27],[9,13,17,25],[18,,20,24]])}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(a,i){try{var o=e[a](i),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}()}]),t}();e.default=s}});