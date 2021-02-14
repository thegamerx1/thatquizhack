hackclass=class{init(){if(this.version="2.81",this.extension={},this.extension.list=JSON.parse('{"list":["Identify","Exponents","Averages","Factor","Equality","Simplify","Fractions","Arithmetic","Geometry"]}'),this.extension.func={},this.extension.func.Identify=function(e,t){if(t)return"object"==typeof idfraction;var n,a,i=e.table.querySelector("input#C"),r=e.table.querySelector("input#D"),o=document.getElementById("BOX0");if(!i&&!r&&!o)return"done";if(i&&r)n=idfraction.dY,a=idfraction.fz;else if(o)for(let e=0;e<idfraction.dY;e++)o.parentElement.childNodes[e].click();e.iswrong&&(i&&r?(n=hack.random(0,40),a=hack.random(0,40)):o&&hack.randomarray(o.parentElement.childNodes).click()),i&&r&&(i.value=n,r.value=a),idfraction.v86()},this.extension.func.Exponents=function(e,t){if(t)return"object"==typeof exponent;var n=e.table.querySelector("input#C"),a=e.table.querySelector("input#D");if(!n&&!a)return"done";var i=hack.stripHtml(exponent.ca);if(a){let e=i.match(/(.*)\/(.*)/);var r=e[1],o=e[2]}else r=i;e.iswrong&&(r=hack.random(0,40),o=hack.random(0,40)),n.value=r,a&&(a.value=o),exponent.v86()},this.extension.func.Averages=function(e,t){if(t)return"object"==typeof sets;var n,a,i=e.table.querySelector("input#C"),r=e.table.querySelector("input#D");if(!i)return"done";if(r){let e=[0,0,0];sets.ca.length>2&&(e=sets.ca.match(/(.*)\/(.*)/)),n=e[1],a=e[2]}else n=sets.ca;e.iswrong&&(n=hack.random(0,40),r&&(a=hack.random(0,40))),i.value=n,r&&(r.value=a),sets.v86()},this.extension.func.Factor=function(e,t){if(t)return"object"==typeof factors;var n=e.table.querySelector("table thead tr td.qq"),a=e.table.querySelector("tbody tr td input#C.Mh"),i={prime:e.table.querySelector("input#prmN"),no:e.table.querySelector("input#cmpN")},r=e.table.querySelector("div#bo.bo div.jX7");if(!r&&!i.prime&&!a)return"done";if(i.prime)var o=factors.a6h.hasOwnProperty(n.innerHTML)?i.prime:i.no;if(r){var s=r.childNodes,c=factors.aWT.prans.match(/(\d+)(<sup>(\d+))?/g);s.forEach(e=>{c.forEach(t=>{let n=t.match(/(\d+)<sup>(\d+)/),a=t,i=1;if(n&&(a=n[1],i=n[2]),a===e.innerHTML)for(let t=0;t<i;t++)e.click()})})}if(a)var l=factors.aWT.prans;e.iswrong&&(i.prime&&(o=hack.randomobject(i)),r&&hack.randomarray(s).click(),a&&(l=hack.random(0,40))),i.prime&&o.click(),r&&factors.aWc(),a&&(a.value=l,factors.v86())},this.extension.func.Equality=function(e,t){if(t)return"object"==typeof inequality;var n={">":e.table.querySelector("tbody tr th#GTA.vam button"),"=":e.table.querySelector("tbody tr th#EQA.vam button"),"<":e.table.querySelector("tbody tr th#LTA.vam button")};if(!n[">"])return"done";var a=n[inequality.ca];e.iswrong&&(a=hack.randomobject(n)),a.click()},this.extension.func.Simplify=function(e,t){if(t)return"object"==typeof reducef;var n,a,i,r=e.table.querySelector("input#C"),o=e.table.querySelector("input#D"),s=e.table.querySelector("input#WH");if(!r&&!o)return"done";o&&!o.classList.contains("hidden")?(a=reducef.fz,n=reducef.dY):n=reducef.ca,s&&(i=reducef.aZX),e.iswrong&&(n=hack.random(0,40),a=hack.random(0,40)),r.value=n,o&&(o.value=a),s&&(s.value=i),reducef.v86()},this.extension.func.Fractions=function(e,t){if(t)return"object"==typeof fraction;var n,a,i,r,o=e.table.querySelector("input#E"),s=e.table.querySelector("input#F"),c=e.table.querySelector("input#W"),l=e.table.querySelector("input#C");if(!(l||o||s||c))return"done";l?r=arithmetic.ca:(n=fraction.dY,a=fraction.fz,c&&(i=fraction.aZX)),e.iswrong&&(r=hack.random(0,40),n=hack.random(0,40),a=hack.random(0,40),i=hack.random(0,40)),l?(l.value=r,arithmetic.v86()):(o&&(o.value=n),s&&(s.value=a),c&&(c.value=i),fraction.v86())},this.extension.func.Arithmetic=function(e,t){if(t)return"object"==typeof arithmetic;var n=e.table.querySelector("input#C");if(!n)return"done";var a=arithmetic.ca;e.iswrong&&(a=hack.random(0,40)),n.value=a,arithmetic.v86()},this.extension.func.Geometry=function(e,t){if(t)return"object"==typeof geometry||"object"==typeof shapes;var n=e.table.querySelector("[id^='SH_A']"),a=e.table.querySelector("[id^='geom_']"),i=e.table.querySelector("#C"),r=e.table.querySelector("#E"),o=e.table.querySelector("#F"),s=e.table.querySelector("#GTA");if(!(n||i||r||o||a||s))return"done";if(n)shapes.v86(shapes.ca,1);else{if(s)var c=geometry.ca;if(r&&o)var l=geometry.dY,u=geometry.fz;if(a){var h=document.createElement("label");h.innerHTML=geometry.ca;for(var m=document.querySelectorAll("label"),d=0;d<m.length;d++)m[d].innerHTML==h.innerHTML&&m[d].click()}if(i)var p=geometry.ca;e.iswrong&&(i&&(p=hack.random(0,40)),r&&o&&(u=hack.random(0,40),l=hack.random(0,40)),s&&(c=hack.randomobject([">","<","="]))),c?geometry.o91(c):(p&&(i.value=p),u&&(o.value=u),l&&(r.value=l),geometry.v86())}},this.extension.html='<div id="hackmenu">\t<div class="container">\t\t<form name="hacklicense" class="license">\t\t\t<input type="checkbox" name="license" value="0"><label>I take all responsibility for anything done with this script.</label>\t\t\t<button type="button" onclick="hack.license()">Continue</button>\t\t</form>\t\t<form name="hackform" style="display: none">\t\t\t<div class="input-container">\t\t\t\t<label>Time for each:</label><span class="value"></span><span class="value total"></span>\t\t\t\t<input type="range" name="delay" min="0" max="60" value="30" oninput="hack.inputboxietime(this, \'s\')">\t\t\t</div>\t\t\t<div class="input-container">\t\t\t\t<label>Variation:</label><span class="value"></span>\t\t\t\t<input type="range" name="variation" value="10" min="0" max="60" oninput="hack.inputboxie(this, \'s\')">\t\t\t</div>\t\t\t<div class="input-container">\t\t\t\t<label>Miss chance:</label><span class="value"></span>\t\t\t\t<input type="range" name="misschance" value="5" min="0" max="25" oninput="hack.inputboxie(this, \'%\')">\t\t\t</div>\t\t\t<div class="input-container">\t\t\t\t<label>Test Mode:\t\t\t\t\t<input type="checkbox" name="istest">\t\t\t\t</label>\t\t\t</div>\t\t\t<button type="button" onclick="hack.apply()">START</button>\t\t</form>\t\t<div class="spacey"></div>\t\t<div class="footer">\t\t\t<p class="who">\t\t\t\tMade by NDR\t\t\t\t<br>\t\t\t\t<a href="https://t.me/TheGamerX38" target="_blank">Telegram</a>\t\t\t\t<a href="https://github.com/thegamerx1/thatquizhack" target="_blank">Github</a>\t\t\t</p>\t\t</div>\t</div></div><div id="hackinjectmenu" hidden>\t<div class="progress-wrap">\t\t<div class="progress" name="progress"></div>\t</div>\t<button type="button" onclick="hack.stopbtn()">Stop</button></div>',this.extension.css="#hackinjectmenu{text-align:center}#hackinjectmenu .progress-wrap{margin:5px 10px;background-color:#f5f7f7;height:8px;padding:1px}#hackinjectmenu .progress-wrap .progress{background-color:#94a9a5;height:8px;width:1%}#hackinjectmenu button{display:block;margin:2px auto 10px;padding:4px 1ex}iframe#hackyFrame{width:100%;height:500px}#hackmenu{-ms-user-select:none !important;user-select:none !important;color:#b8b8b8;position:fixed;width:260px;height:340px;top:50%;left:50%;margin-left:-130px;margin-top:-170px;background-color:#4e4e4e;padding:0 30px;z-index:1000;box-shadow:5px 5px 3px 3px rgba(0,0,0,.35);display:flex}#hackmenu .container{padding-top:2%;flex:1;display:flex;flex-direction:column;align-items:center}#hackmenu .container a{color:#faf}#hackmenu .container form[name=hackform]{flex:1;display:flex;padding:20px 0;justify-content:center;flex-direction:column}#hackmenu .container form[name=hackform] .input-container{display:flex;flex-flow:row wrap;margin-bottom:10px}#hackmenu .container form[name=hackform] input[type=range]{break-after:always;break-before:always;width:80%;margin:0 auto}#hackmenu .container form[name=hackform] label{margin-left:10%;break-after:avoid;-ms-user-select:none;user-select:none}#hackmenu .container form[name=hackform] button{margin:0 auto;display:block}#hackmenu .container form[name=hackform] span{padding-left:5px;font-size:105%}#hackmenu .container form[name=hackform] span:last-of-type{flex:1;color:#c4ac84;justify-content:flex-end}#hackmenu .container form[name=hackform] span:not(:last-of-type){font-size:95%}#hackmenu .container form[name=hackform] span.total{font-size:90%}#hackmenu .container .license{margin-top:10px}#hackmenu .container .license label{-ms-user-select:none;user-select:none;color:#ff5050}#hackmenu .container .license button{margin-top:10px}#hackmenu .container .spacey{flex-grow:1}#hackmenu .container .footer{flex:1;display:flex;flex-direction:row}#hackmenu .container .footer .who{flex:1 1 40vw;text-align:center}.done{background:#6cff73 !important}.doing{background:#fff782 !important}",this.islocal="undefined"==typeof h_isrelease,this.islocal?(this.log("Running in LOCAL mode!"),this.path="http://localhost:5500/"):this.path="https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/","object"==typeof cp)cp.test=function(e,t){var n=cp.g641(e),a=window.location.search.substr(1),i=parseInt(q9("fZk").value).toString(16),r=parseInt(e).toString(16);n=cp.fZ="student?s="+i+"&e="+r+"&w="+n+"&r="+a;return n=jqh("/eu/"+n,null,cp.jqg)};else{for(this.log("Loading extensions"),this.islocal&&(this.extension.list=JSON.parse(this.request(this.path+"src/extensions.json"))),i=0;i<this.extension.list.list.length;i++){let name=this.extension.list.list[i];if(this.islocal&&(this.extension.func[name]=eval(this.request(this.path+"src/extensions/"+name+".js")+name)),this.callextension(name,!0).output){this.log("Test is: "+name),this.test=name;break}}if(!this.test)return this.log("Could not find a extension for current test.")}var html=this.islocal?this.request(this.path+"src/html.html"):this.extension.html,css=this.islocal?this.request(this.path+"src/minify/css.css"):this.extension.css,style=document.createElement("style");style.innerHTML=css,style.id="hackstyle";var html=document.createRange().createContextualFragment(html);document.body.appendChild(html),document.head.append(style);var form=document.forms.hackform;if(this.islocal&&this.license(!0),"object"==typeof cp){let e=form.querySelector("input[name=delay]");e.max=900,e.value=420}form.querySelectorAll("input").forEach(e=>{e.dispatchEvent(new Event("input"))}),this.hackinjectmenu=document.getElementById("hackinjectmenu")}log(...e){console.log("%c[Hack]","background: #222; color: #ff7c55",...e)}random(e,t){return Math.floor(Math.random()*(t-e+1))+e}randomarray(e){return e[Math.floor(Math.random()*e.length)]}gettable(){return document.querySelector("#cnvbb")||document.querySelector("#centertext")}isHidden(e){return"none"===e.style.display}randomobject(e){var t=Object.keys(e);return e[t[Math.floor(Math.random()*t.length)]]}stripHtml(e){let t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}clean(){this.running=!1,document.getElementById("hackinjectmenu");let e=document.getElementById("hackinjectmenu"),t=document.getElementById("hackmenu"),n=document.getElementById("hackstyle");e&&e.remove(),t&&t.remove(),n&&n.remove(),this.frame&&this.frame.remove(),document.querySelectorAll(".doing, .done").forEach(e=>{e.classList.remove("done","doing")})}stop(){this.log("Stopping"),this.clean(),window.dispatchEvent(new Event("hacked"))}request(e,t){var n=new XMLHttpRequest;return e+=t?"?nocache="+(new Date).getTime():"?v="+100*this.version,n.open("GET",e,!1),n.send(),n.responseText}updateprogress(){if(this.running){var e=Date.now()-this.progresstart;this.hackinjectmenu.querySelector("[name=progress]").style.width=e/this.waittime*100+"%",e>=this.waittime||setTimeout(this.updateprogress.bind(this),50)}}stopbtn(){this.running?(this.wasrunning=!0,this.running=!1):this.wasrunning&&(this.running=!0,this.wasrunning=!1,this.next()),this.innerHTML=this.running?"Stop":"Resume"}inputboxie(e,t,n){var a=n?e.value/1e3:e.value;e.parentElement.querySelector(".value").innerHTML=a+t}inputboxietime(e){var t,n=e.parentElement.querySelectorAll(".value")[1],a=e.parentElement.querySelectorAll(".value")[0];if(101!=(t="object"==typeof cp?document.getElementById("etb").children.length:document.getElementById("TESTLENGTH").value)){var i=e.value*t;let a=new Date(1e3*i).toISOString().substr(11,5);n.innerHTML=`~${a.substr(0,2)}h ${a.substr(3)}m`,new Date(1e4).toISOString(),n.removeAttribute("hide")}else n.innerHTML="",n.setAttribute("hide","true");let r=new Date(1e3*e.value).toISOString().substr(14,5);a.innerHTML=`${r.substr(0,2)}m ${r.substr(3)}s`}license(e){let t=document.forms.hacklicense;t&&(e||t.license.checked)&&(t.remove(),document.forms.hackform.style.display="")}callextension(e,t){var n={};return t||(n.table=this.gettable(),n.iswrong=0!==this.miss&&100*Math.random()<this.miss),{output:this.extension.func[e](n,t),iswrong:n.iswrong}}getwrong(){return document.getElementById("q91a").value}next(){if(this.running){var e=this.getwrong(),t=this.callextension(this.test);if(document.getElementById("g902")&&document.getElementById("g902").click(),"done"===t.output)return this.stop();if(!t.iswrong&&this.getwrong()>e)return this.waswrong=!1,this.log("I did it wrong!!"),this.stop();if(!this.istest){var n=this.isbrute?0:this.random(+this.delay-+this.variation,+this.delay+ +this.variation);0!==n&&(this.waittime=n,this.progresstart=new Date,this.hackinjectmenu.querySelector("[name=progress]").style.width=0,setTimeout(this.updateprogress.bind(this),0)),setTimeout(this.next.bind(this),n)}}}nexttest(e){this.log(e),"Space"===e.code&&this.next()}hackyNext(done){if(done){let e=document.getElementById("etb").querySelector(".doing");e.classList.add("done"),e.classList.remove("doing")}let rows=document.getElementById("etb").querySelectorAll("tr:not(.done)");if(0==rows.length)return this.stop();let row=rows[rows.length-1];row.classList.add("doing");let url=eval(row.querySelector(".g63x").href.replace("javascript:","")),window=this.frame.contentWindow;window.top.frames.length=0,this.frame.src=url}hackyInject(){this.frame.contentWindow.addEventListener("hacked",this.hackyNext.bind(this,!0));let e=this.frame.contentWindow,t=new XMLHttpRequest;t.open("GET",this.path+(this.islocal?"src/thatquiz.js":"dist/thatquiz.js?_="+(new Date).getTime()),!1),t.send(),"undefined"!=typeof h_isrelease&&(e.h_isrelease=!0),e.eval(t.responseText);let n=e.document.forms.hackform;n.delay.value=this.delay/1e3/document.querySelector(".doing td.numeric.w8o").innerHTML,n.variation.value=this.variation,n.misschance.value=this.miss,e.hack.license(!0),e.hack.apply()}apply(){if("object"!=typeof cp&&!this.gettable())return this.log("No test found!");this.running=!0;const e=document.forms.hackform;if(this.delay=1e3*e.delay.value,this.variation=e.variation.value,this.miss=e.misschance.value,this.isbrute=0==this.delay,this.istest=e.istest.checked,document.getElementById("hackmenu").remove(),"object"==typeof cp)return this.frame=document.createElement("iframe"),this.frame.id="hackyFrame",this.frame.parent=null,document.querySelector("table#a3v.bZL tbody tr td.w8q.i9b").append(this.frame),this.frame.addEventListener("load",this.hackyInject.bind(this)),void this.hackyNext();var t=document.getElementById("hackinjectmenu");document.getElementById("bz1x").after(t),this.istest?(this.miss=0,document.addEventListener("keydown",this.nexttest.bind(this),!1)):(t.hidden=!1,this.next())}},"object"==typeof hack&&hack.stop();var hack=new hackclass;hack.init();