var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.SymbolClass=function(a,b){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:b})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};$jscomp.Symbol=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(c||"")+"_"+b++,c)}var b=0;return a}();$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6","es3");$jscomp.polyfill("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}},"es6","es3");$jscomp.polyfill("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));var e=b.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=b[c];if(f===a||Object.is(f,a))return!0}return!1}},"es7","es3");$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,c||0)}},"es6","es3");var h_data={};h_data.extensionlist=JSON.parse('{"list": ["Factor", "Equality", "Simplify", "Fractions", "Arithmetic"]}');h_data.running=!1;h_data.version="2.2";function random(a,b){return Math.floor(Math.random()*(b-a+1))+a}function randomarray(a){return a[Math.floor(Math.random()*a.length)]}function h_gettable(){return document.querySelector("#cnvbb")||document.querySelector("#centertext")}function isHidden(a){return"none"===window.getComputedStyle(a).display}function randomobject(a){var b=Object.keys(a);return a[b[Math.floor(Math.random()*b.length)]]}function getPrimeNumbers(a){var b=Math.floor(a/2),c=[1],d,e;0===a%2?(d=2,e=1):(d=3,e=2);for(d;d<=b;d+=e)0===a%d?c.push(d):!1;c.push(a);return c}function h_tomath(a){a=a.replaceAll("×","*");a=a.replaceAll("÷","/");a=a.replaceAll("–","-");return a=a.replaceAll(",",".")}function h_clean(){h_data.running=!1;var a=document.getElementById("h_injectmenu");a&&a.remove()}function h_stop(){console.info("Stopping");h_clean()}function h_request(a,b){var c=new XMLHttpRequest;a+=b?"?_="+(new Date).getTime():"?v="+Math.floor(100*h_data.version);c.open("GET",a,!1);c.send();return c.responseText}function h_updateprogress(){if(h_data.running){var a=Date.now()-h_data.progresstart;document.getElementById("h_progress").style.width=Math.floor(a/h_data.waittime*100)+"%";a>=h_data.waittime||setTimeout(h_updateprogress,50)}}function h_stopbtn(){h_data.running?(h_data.wasrunning=!0,h_data.running=!1):h_data.wasrunning&&(h_data.running=!0,h_data.wasrunning=!1,h_next());this.innerHTML=h_data.running?"Stop":"Resume"}function h_inputboxie(a,b){b=b?a.value/1E3:a.value;document.getElementById(a.id+"_num").value=b}function h_license(a){if(a||document.querySelector("#h_menu .container .license input").checked)document.querySelector("#h_menu .container .license").style.display="none",document.querySelector("#h_menu .container form").style.display="block"}function h_callextension(a,b){var c={};b||(c.table=h_gettable(),c.iswrong=!1);return{output:window[a](c,b),iswrong:c.iswrong}}function h_getwrong(){return document.getElementById("q91a").value}function h_next(){if(h_data.running){var a=h_getwrong(),b=h_callextension(h_data.test);"done"===b.output?h_stop():!b.iswrong&&h_getwrong()>a?(h_data.waswrong=!1,console.warn("I did it wrong!!"),h_stop()):(a=h_data.isbrute?0:random(+h_data.delay-+h_data.variation,+h_data.delay+ +h_data.variation),0!==a&&(h_data.waittime=a,h_data.progresstart=new Date,document.getElementById("h_progress").style.width=0,setTimeout(h_updateprogress,0)),setTimeout(h_next,a))}}function h_apply(){if(h_gettable()){h_data.running=!0;var a=document.forms.h_form;h_data.delay=a.h_delay.value;h_data.variation=a.h_variation.value;h_data.miss=a.h_misschance.value;h_data.isbrute=0==h_data.delay?!0:!1;document.getElementById("h_menu").remove();a=document.getElementById("h_injectmenu");document.getElementById("bz1x").after(a);a.hidden=!1;document.getElementById("h_stopbtn").addEventListener("click",h_stopbtn);h_next()}else console.error("are you in a test?")}function h_init(){h_clean();var a=!h_data.extensionlist;if(a){console.info("Running in local mode. if you dont know what this is you did something wrong!");var b="http://localhost:5500/src/"}else b="https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/src/";console.info("Loading extensions");var c=a?JSON.parse(h_request(b+"extensions.json")):h_data.extensionlist;for(i=0;i<c.list.length;i++){var d=c.list[i];if(a){var e=document.createElement("script");e.innerHTML=h_request(b+"extensions/"+d+".js");document.body.append(e)}e="hex_"+d;if(h_callextension(e,!0).output){console.info("Test is: "+d);h_data.test=e;break}}h_data.test?(c=document.createElement("script"),c.src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/7.5.1/math.min.js",document.body.append(c),c=h_request(b+"html.html"),b=h_request(b+"css.css"),d=document.createElement("style"),d.innerHTML=b,c=document.createRange().createContextualFragment(c),document.body.appendChild(c),document.head.append(d),a||h_data.version===h_request("https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/version",!0)||(document.querySelector("#h_menu .container .version").style.display="block"),a&&(h_license(!0),document.querySelector("#h_delay").value=0,document.querySelector("#h_misschance").value=0)):console.error("Could not find a extension for current test.")}h_init();function hex_Factor(a,b){if(b)return"object"===typeof factors&&null!==factors;var c=a.table.querySelector("table thead tr td.qq");b=a.table.querySelector("tbody tr td input#C.Mh");var d={prime:a.table.querySelector("input#prmN"),no:a.table.querySelector("input#cmpN")},e=a.table.querySelector("div#bo.bo div.jX7"),f=a.table.querySelector("div#bo.bo table.bZM tbody tr th div.qq"),g=a.table.querySelector("div#bo.bo table.bZM tbody tr td button#OK.u82"),h=a.table.querySelector("tbody tr td.bZK.q8s button#OK.u82"),p=a.table.querySelector("div#bo.bo div.qq");if(!e&&!d.prime&&!h)return"done";if(d.prime)var n=math.isPrime(c.innerHTML)?d.prime:d.no;if(e){c=getPrimeNumbers(f.innerHTML);f=e.childNodes;for(var k=[],l=0;l<f.length;l++)c.includes(+f[l].innerHTML)&&f[l].click(),k.push(f[l])}if(h){var m=p.innerHTML.match(/(\d+)[A-Za-z ]+(\d+)/);m=math.gcd(m[1],m[2])}a.iswrong&&(d.prime&&(n=randomobject(d)),e&&randomarray(k).click,h&&(m=random(-20,20)));d.prime&&n.click();e&&g.click();h&&(b.value=m,h.click())}function hex_Equality(a,b){if(b)return"object"===typeof inequality&&null!==inequality;b={">":a.table.querySelector("tbody tr th#GTA.vam button.qq"),"=":a.table.querySelector("tbody tr th#EQA.vam button.qq"),"<":a.table.querySelector("tbody tr th#LTA.vam button.qq")};if(!b["="])return"done";var c=eval(h_tomath(a.table.querySelector("tbody tr td#A.qq div.nw").innerHTML)),d=eval(h_tomath(a.table.querySelector("tbody tr td#B.qq div.nw").innerHTML));c=c===d?b["="]:c>d?b[">"]:b["<"];a.iswrong&&(c=randomarray(b));c.click()}function hex_Simplify(a,b){if(b)return"object"===typeof reducef&&null!==reducef;b=a.table.querySelector("input#C");var c=a.table.querySelector("input#D"),d=a.table.querySelector("tbody tr.qq td.gX"),e=a.table.querySelector("tr.qq:nth-child(1) > td:nth-child(2)"),f=a.table.querySelector("tr.qq:nth-child(3) > td:nth-child(1)");if(!d&&!b&&!c)return"done";if(d){var g=math.simplify(d.textContent.replace(",","."));d=g.args[0];g=g.args[1]}else isHidden(c)?d=eval(e.textContent+"/"+f.textContent):(g=math.simplify(e.textContent+"/"+f.textContent),d=g.args[0],g=g.args[1]);a.iswrong&&(random(0,1)?d-=random(-20,20):g-=random(-20,20));b.value=d;c.value=g;reducef.v86()}function hex_Fractions(a,b){if(b)return"object"===typeof fraction&&null!==fraction;b=a.table.querySelector("input#E");var c=a.table.querySelector("input#F"),d=a.table.querySelector("input#C"),e=a.table.querySelector("tbody tr td.qq.nw"),f=a.table.querySelectorAll("tbody tr.qq td.vam"),g=f[0],h=f[1],p=f[3];f=f[2];if(!d&&!b&&!b)return"done";if(e)var n=eval(h_tomath(e.textContent));else{var k=h_tomath(a.table.querySelector("tbody tr.qq td.qq").innerHTML);g=math.fraction(g.innerHTML,f.innerHTML);h=math.fraction(h.innerHTML,p.innerHTML);"*"===k?out=math.multiply(g,h):"+"===k?out=math.add(g,h):"/"===k?out=math.divide(g,h):"-"===k&&(out=math.subtract(g,h));k=out.n;var l=out.d}a.iswrong&&(random(0,1)?k-=random(-20,20):l-=random(-20,20));e?(d.value=n,arithmetic.v86()):(fraction.v86(),b.value=k,c.value=l)}function hex_Arithmetic(a,b){if(b)return"object"===typeof arithmetic&&null!==arithmetic;b=a.table.querySelector("input#C");if(!b)return"done";var c=eval(h_tomath(a.table.querySelector("tbody tr td.qq.nw").innerHTML));a=a.iswrong?eval(c)-random(-20,20):eval(c);b.value=a;arithmetic.v86()};