!function(e){function t(t){for(var n,i,s=t[0],u=t[1],c=t[2],p=0,d=[];p<s.length;p++)i=s[p],o[i]&&d.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(t);d.length;)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={7:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;a.push([368,0]),r()}({368:function(e,t,r){"use strict";var n=s(r(139)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(43)),a=s(r(100)),i=s(r(101));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,a){try{var i=t[o](a),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}("next")})}}r(369),o.nav(".nav","./reusable/nav.html"),o.head(".head","./reusable/head.html"),o.footer(".footer","./reusable/footer.html");var c,l={},p=document.querySelector(".programs-container");(c=u(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.program=new a.default,t=window.location.hash.replace(/\D/g,""),e.prev=2,e.next=5,l.program.getResults(t);case 5:if(console.log(l.program.results),window.location.hash)f(),g();else for(r=0;r<l.program.results.length;r++)h(r);e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),$(".title").html("Siden du leder efter findes ikke"),$(".img-wrapper").css("background-image"," url(../img/404.png)"),console.log("Something went wrong with the search, try again later");case 14:case"end":return e.stop()}},e,void 0,[[2,9]])})),function(){return c.apply(this,arguments)})();var d,f=function(){$(".title").html(l.program.results[0].title),$(".img-wrapper").css("background-image"," url('"+l.program.results[0].picture+"')")},g=(d=u(regeneratorRuntime.mark(function e(){var t,r,o,a,s,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.podcast=new i.default,e.prev=1,e.next=4,l.podcast.get(l.program.results[0].id);case 4:for(console.log(l.podcast.results),t=0,r=!0,o=!1,a=void 0,e.prev=9,s=l.podcast.results[Symbol.iterator]();!(r=(u=s.next()).done);r=!0)c=u.value,$(".podcasts").append('\n            <h1 class="podcast-title" data-id="'+t+++'">'+c.title+'\n                <audio class="player" controls="">\n                    <source src="'+c.audioPath+'" type="audio/mpeg">\n                </audio>\n            </h1>\n            ');e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),o=!0,a=e.t0;case 17:e.prev=17,e.prev=18,!r&&s.return&&s.return();case 20:if(e.prev=20,!o){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:$(".podcast-title").on("click",function(e){var t=e.target.closest("h1").dataset.id;e.stopPropagation(),e.stopImmediatePropagation(),$(".description h3").html(l.podcast.results[t].guestname),$(".description h4").html(l.podcast.results[t].title),$(".description p").html(l.podcast.results[t].description)}),n.default.setup(".player"),e.next=32;break;case 29:e.prev=29,e.t1=e.catch(1),console.log("Something went wrong with the search, try again later1");case 32:case"end":return e.stop()}},e,void 0,[[1,29],[9,13,17,25],[18,,20,24]])})),function(){return d.apply(this,arguments)}),h=function(e){var t='\n    <div class="program animated fadeIn" data-id="'+l.program.results[e].id+'">\n        <div class="img-wrapper" style="background-image: url(\''+l.program.results[e].picture+'\');"></div>\n        <div class="programs-title-container">\n          <h3>'+l.program.results[e].title+"</h3>\n        </div>\n    </div>\n    ";p.insertAdjacentHTML("beforeEnd",t),$(".program").click(function(e){var t=e.target.closest(".program").dataset.id;document.location.href="program.html#"+t})}},369:function(e,t,r){}});