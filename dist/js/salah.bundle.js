!function(e){function t(t){for(var n,s,o=t[0],i=t[1],l=t[2],h=0,f=[];h<o.length;h++)s=o[h],a[s]&&f.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(c&&c(t);f.length;)f.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={8:0},u=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=i;u.push([379,0]),r()}({379:function(e,t,r){"use strict";var n,a=r(380),u=(n=a)&&n.__esModule?n:{default:n};var s,o,i={};(s=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i.salah=new u.default,e.prev=1,e.next=4,i.salah.getResults();case 4:$(".fajr").text(i.salah.results[0].fajr),$(".shuruq").text(i.salah.results[0].shuruq),$(".dhuhur").text(i.salah.results[0].dhuhr),$(".asr").text(i.salah.results[0].asr),$(".maghreb").text(i.salah.results[0].maghrib),$(".isha").text(i.salah.results[0].isha),$(".fajr-mobil").text(i.salah.results[0].fajr),$(".shuruq-mobil").text(i.salah.results[0].shuruq),$(".dhuhur-mobil").text(i.salah.results[0].dhuhr),$(".asr-mobil").text(i.salah.results[0].asr),$(".maghreb-mobil").text(i.salah.results[0].maghrib),$(".isha-mobil").text(i.salah.results[0].isha),c(".salah-times","salah-time"),c(".salah-times-desktop","salah-time-desktop"),l(),e.next=23;break;case 21:e.prev=21,e.t0=e.catch(1);case 23:case"end":return e.stop()}},e,void 0,[[1,21]])}),o=function(){var e=s.apply(this,arguments);return new Promise(function(t,r){return function n(a,u){try{var s=e[a](u),o=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});t(o)}("next")})},function(){return o.apply(this,arguments)})();var l=function(){var e=document.querySelector("#salah-button"),t=document.querySelector(".salah-times");e.addEventListener("click",function(){t.classList.contains("salah-active")?t.classList.remove("salah-active"):t.classList.add("salah-active")})};function c(e,t){var r,n=new Date,a=n.getHours(),u=n.getMinutes();a<10&&(a="0"+n.getHours()),u<10&&(u="0"+n.getMinutes()),r=a+":"+u;var s=document.querySelectorAll(e+" p"),o=document.getElementById(t),i=[];(s.forEach(function(e){e.innerHTML<=r&&i.push(e)}),o.id="",0===i.length)?document.querySelectorAll(".last")[0].id=t:i.pop().parentNode.id=t}},380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(49),s=(n=u)&&n.__esModule?n:{default:n};var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"getResults",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=((t=new Date).getDate()<10?"0"+t.getDate():t.getDate())+"/"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"/"+t.getFullYear(),e.prev=2,e.next=5,(0,s.default)("http://waih.dk/WaihAPI/salah/?dato="+t);case 5:r=e.sent,this.results=r.data.salah,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}},e,this,[[2,9]])}),function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(a,u){try{var s=t[a](u),o=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}("next")})});return function(){return t.apply(this,arguments)}}()}]),e}();t.default=o}});