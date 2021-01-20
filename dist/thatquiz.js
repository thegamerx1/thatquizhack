hackclass=class{init(){if(this.version="2.65",this.extension={},this.extension.list=JSON.parse('{"list": ["Identify", "Exponents", "Averages", "Factor", "Equality", "Simplify", "Fractions", "Arithmetic"]}'),this.extension.func={},this.extension.func.Identify=function(e,t){if(t)return"object"==typeof idfraction;var n,i,a=e.table.querySelector("input#C"),o=e.table.querySelector("input#D"),r=document.getElementById("BOX0");if(!a&&!o&&!r)return"done";if(a&&o)n=idfraction.dY,i=idfraction.fz;else if(r)for(let e=0;e<idfraction.dY;e++)r.parentElement.childNodes[e].click();e.iswrong&&(a&&o?(n=hack.random(0,40),i=hack.random(0,40)):r&&hack.randomarray(r.parentElement.childNodes).click()),a&&o&&(a.value=n,o.value=i),idfraction.v86()},this.extension.func.Exponents=function(e,t){if(t)return"object"==typeof exponent;var n=e.table.querySelector("input#C"),i=e.table.querySelector("input#D"),a=hack.stripHtml(exponent.ca);if(i){let e=a.match(/(.*)\/(.*)/);var o=e[1],r=e[2]}else o=a;e.iswrong&&(o=hack.random(0,40),r=hack.random(0,40)),n.value=o,i&&(i.value=r),exponent.v86()},this.extension.func.Averages=function(e,t){if(t)return"object"==typeof sets;var n,i,a=e.table.querySelector("input#C"),o=e.table.querySelector("input#D");if(!a)return"done";if(o){let e=[0,0,0];sets.ca.length>2&&(e=sets.ca.match(/(.*)\/(.*)/)),n=e[1],i=e[2]}else n=sets.ca;e.iswrong&&(n=hack.random(0,40),o&&(i=hack.random(0,40))),a.value=n,o&&(o.value=i),sets.v86()},this.extension.func.Factor=function(e,t){if(t)return"object"==typeof factors;var n=e.table.querySelector("table thead tr td.qq"),i=e.table.querySelector("tbody tr td input#C.Mh"),a={prime:e.table.querySelector("input#prmN"),no:e.table.querySelector("input#cmpN")},o=e.table.querySelector("div#bo.bo div.jX7");if(!o&&!a.prime&&!i)return"done";if(a.prime)var r=factors.a6h.hasOwnProperty(n.innerHTML)?a.prime:a.no;if(o){var s=o.childNodes,c=factors.aWT.prans.match(/(\d+)(<sup>(\d+))?/g);s.forEach(e=>{c.forEach(t=>{let n=t.match(/(\d+)<sup>(\d+)/),i=t,a=1;if(n&&(i=n[1],a=n[2]),i===e.innerHTML)for(let t=0;t<a;t++)e.click()})})}if(i)var l=factors.aWT.prans;e.iswrong&&(a.prime&&(r=hack.randomobject(a)),o&&hack.randomarray(s).click(),i&&(l=hack.random(0,40))),a.prime&&r.click(),o&&factors.aWc(),i&&(i.value=l,factors.v86())},this.extension.func.Equality=function(e,t){if(t)return"object"==typeof inequality;var n={">":e.table.querySelector("tbody tr th#GTA.vam button"),"=":e.table.querySelector("tbody tr th#EQA.vam button"),"<":e.table.querySelector("tbody tr th#LTA.vam button")},i=n[inequality.ca];e.iswrong&&(i=hack.randomobject(n)),i.click()},this.extension.func.Simplify=function(e,t){if(t)return"object"==typeof reducef;var n,i,a,o=e.table.querySelector("input#C"),r=e.table.querySelector("input#D"),s=e.table.querySelector("input#WH");if(!o&&!r)return"done";r&&!r.classList.contains("hidden")?(i=reducef.fz,n=reducef.dY):n=reducef.ca,s&&(a=reducef.aZX),e.iswrong&&(n=hack.random(0,40),i=hack.random(0,40)),o.value=n,r&&(r.value=i),s&&(s.value=a),reducef.v86()},this.extension.func.Fractions=function(e,t){if(t)return"object"==typeof fraction;var n,i,a,o,r=e.table.querySelector("input#E"),s=e.table.querySelector("input#F"),c=e.table.querySelector("input#W"),l=e.table.querySelector("input#C");if(!(l||r||s||c))return"done";l?o=arithmetic.ca:(n=fraction.dY,i=fraction.fz,c&&(a=fraction.aZX)),e.iswrong&&(o=hack.random(0,40),n=hack.random(0,40),i=hack.random(0,40),a=hack.random(0,40)),l?(l.value=o,arithmetic.v86()):(r&&(r.value=n),s&&(s.value=i),c&&(c.value=a),fraction.v86())},this.extension.func.Arithmetic=function(e,t){if(t)return"object"==typeof arithmetic;var n=e.table.querySelector("input#C");if(!n)return"done";var i=arithmetic.ca;e.iswrong&&(i=hack.random(0,40)),n.value=i,arithmetic.v86()},this.extension.html='<div id="hackmenu">\n\t<div class="container">\n\t\t<form name="hacklicense" class="license">\n\t\t\t<input type="checkbox" name="license" value="0"><label>I take all responsibility for anything done with this script.</label>\n\t\t\t<button type="button" onclick="hack.license()">Continue</button>\n\t\t</form>\n\n\t\t<form name="hackform" style="display: none">\n\t\t\t<div class="input-container">\n\t\t\t\t<label>Time for each:</label><span class="value"></span><span class="value total"></span>\n\t\t\t\t<input type="range" name="delay" min="0" max="60" value="30" oninput="hack.inputboxietime(this, \'s\')">\n\t\t\t</div>\n\t\t\t<div class="input-container">\n\t\t\t\t<label>Variation:</label><span class="value"></span>\n\t\t\t\t<input type="range" name="variation" value="10" min="0" max="60" oninput="hack.inputboxie(this, \'s\')">\n\t\t\t</div>\n\n\t\t\t<div class="input-container">\n\t\t\t\t<label>Miss chance:</label><span class="value"></span>\n\t\t\t\t<input type="range" name="misschance" value="5" min="0" max="25" oninput="hack.inputboxie(this, \'%\')">\n\t\t\t</div>\n\n\t\t\t<div class="input-container">\n\t\t\t\t<label>Test Mode:\n\t\t\t\t\t<input type="checkbox" name="istest">\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<button type="button" onclick="hack.apply()">START</button>\n\t\t</form>\n\n\t\t<div class="spacey"></div>\n\n\t\t<div class="footer">\n\t\t\t<p class="who">\n\t\t\t\tMade by NDR\n\t\t\t\t<br>\n\t\t\t\t<a href="https://t.me/TheGamerX38" target="_blank">Telegram</a>\n\t\t\t\t<a href="https://github.com/thegamerx1/thatquizhack" target="_blank">Github</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n\n<div id="hackinjectmenu" hidden>\n\t<div class="progress-wrap">\n\t\t<div class="progress" name="progress"></div>\n\t</div>\n\t<button type="button" onclick="hack.stopbtn()">Stop</button>\n</div>',this.extension.css='#hackinjectmenu{text-align:center}#hackinjectmenu .progress-wrap{margin:5px 10px;background-color:#f5f7f7;height:8px;padding:1px}#hackinjectmenu .progress-wrap .progress{background-color:#94a9a5;height:8px;width:1%}#hackinjectmenu button{display:block;margin:2px auto 10px;padding:4px 1ex}iframe#hackyFrame{width:100%;height:500px}#hackmenu{color:#b8b8b8;position:fixed;width:260px;height:340px;top:50%;left:50%;margin-left:-130px;margin-top:-170px;background-color:#4e4e4e;padding:0 30px;z-index:1000;-webkit-box-shadow:5px 5px 3px 3px rgba(0,0,0,0.35);box-shadow:5px 5px 3px 3px rgba(0,0,0,0.35);display:-webkit-box;display:-ms-flexbox;display:flex}#hackmenu .container{padding-top:2%;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#hackmenu .container a{color:#faf}#hackmenu .container form[name=hackform]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;padding:20px 0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}#hackmenu .container form[name=hackform] .input-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-bottom:10px}#hackmenu .container form[name=hackform] input[type="range"]{-webkit-column-break-after:always;break-after:always;-webkit-column-break-before:always;break-before:always;width:80%;margin:0 auto}#hackmenu .container form[name=hackform] label{margin-left:10%;-webkit-column-break-after:avoid;break-after:avoid;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#hackmenu .container form[name=hackform] button{margin:0 auto;display:block}#hackmenu .container form[name=hackform] span{padding-left:5px;font-size:105%}#hackmenu .container form[name=hackform] span:last-of-type{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#c4ac84;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}#hackmenu .container form[name=hackform] span:not(:last-of-type){font-size:95%}#hackmenu .container form[name=hackform] span.total{font-size:90%}#hackmenu .container .license{margin-top:10px}#hackmenu .container .license label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#ff5050}#hackmenu .container .license button{margin-top:10px}#hackmenu .container .spacey{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}#hackmenu .container .footer{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}#hackmenu .container .footer .who{-webkit-box-flex:1;-ms-flex:1 1 40vw;flex:1 1 40vw;text-align:center}.done{background:#6cff73 !important}.doing{background:#fff782 !important}\n',this.islocal=!this.extension.list,this.islocal?(this.log("Running in LOCAL mode!"),this.path="http://localhost:5500/"):this.path="https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/","object"==typeof cp)cp.test=function(e,t){var n=cp.g641(e),i=window.location.search.substr(1),a=parseInt(q9("fZk").value).toString(16),o=parseInt(e).toString(16);n=cp.fZ="student?s="+a+"&e="+o+"&w="+n+"&r="+i;return n=jqh("/eu/"+n,null,cp.jqg)};else{for(this.log("Loading extensions"),this.extension.list=this.islocal?JSON.parse(this.request(this.path+"src/extensions.json")):this.extension.list,i=0;i<this.extension.list.list.length;i++){let name=this.extension.list.list[i];if(this.islocal&&(this.extension.func[name]=eval(this.request(this.path+"src/extensions/"+name+".js")+name)),this.callextension(name,!0).output){this.log("Test is: "+name),this.test=name;break}}if(!this.test)return this.log("Could not find a extension for current test.")}var html=this.islocal?this.request(this.path+"src/html.html"):this.extension.html,css=this.islocal?this.request(this.path+"src/minify/css.css"):this.extension.css,style=document.createElement("style");style.innerHTML=css,style.id="hackstyle";var html=document.createRange().createContextualFragment(html);document.body.appendChild(html),document.head.append(style);var form=document.forms.hackform;if(this.islocal&&this.license(!0),"object"==typeof cp){let e=form.querySelector("input[name=delay]");e.max=900,e.value=420}form.querySelectorAll("input").forEach(e=>{e.dispatchEvent(new Event("input"))}),this.hackinjectmenu=document.getElementById("hackinjectmenu")}log(...e){console.log("%c[Hack]","background: #222; color: #ff7c55",...e)}random(e,t){return Math.floor(Math.random()*(t-e+1))+e}randomarray(e){return e[Math.floor(Math.random()*e.length)]}gettable(){return document.querySelector("#cnvbb")||document.querySelector("#centertext")}isHidden(e){return"none"===e.style.display}randomobject(e){var t=Object.keys(e);return e[t[Math.floor(Math.random()*t.length)]]}stripHtml(e){let t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}clean(){this.running=!1,document.getElementById("hackinjectmenu");let e=document.getElementById("hackinjectmenu"),t=document.getElementById("hackmenu"),n=document.getElementById("hackstyle");e&&e.remove(),t&&t.remove(),n&&n.remove(),this.frame&&this.frame.remove(),document.querySelectorAll(".doing, .done").forEach(e=>{e.classList.remove("done","doing")})}stop(){this.log("Stopping"),this.clean(),window.dispatchEvent(new Event("hacked"))}request(e,t){var n=new XMLHttpRequest;return e+=t?"?nocache="+(new Date).getTime():"?v="+100*this.version,n.open("GET",e,!1),n.send(),n.responseText}updateprogress(){if(this.running){var e=Date.now()-this.progresstart;this.hackinjectmenu.querySelector("[name=progress]").style.width=e/this.waittime*100+"%",e>=this.waittime||setTimeout(this.updateprogress.bind(this),50)}}stopbtn(){this.running?(this.wasrunning=!0,this.running=!1):this.wasrunning&&(this.running=!0,this.wasrunning=!1,this.next()),this.innerHTML=this.running?"Stop":"Resume"}inputboxie(e,t,n){var i=n?e.value/1e3:e.value;e.parentElement.querySelector(".value").innerHTML=i+t}inputboxietime(e){var t,n=e.parentElement.querySelectorAll(".value")[1],i=e.parentElement.querySelectorAll(".value")[0];if(101!=(t="object"==typeof cp?document.getElementById("etb").children.length:document.getElementById("TESTLENGTH").value)){var a=e.value*t;let i=new Date(1e3*a).toISOString().substr(11,5);n.innerHTML=`~${i.substr(0,2)}h ${i.substr(3)}m`,new Date(1e4).toISOString(),n.removeAttribute("hide")}else n.innerHTML="",n.setAttribute("hide","true");let o=new Date(1e3*e.value).toISOString().substr(14,5);i.innerHTML=`${o.substr(0,2)}m ${o.substr(3)}s`}license(e){let t=document.forms.hacklicense;t&&(e||t.license.checked)&&(t.remove(),document.forms.hackform.style.display="")}callextension(e,t){var n={};return t||(n.table=this.gettable(),n.iswrong=0!==this.miss&&100*Math.random()<this.miss),{output:this.extension.func[e](n,t),iswrong:n.iswrong}}getwrong(){return document.getElementById("q91a").value}next(){if(this.running){var e=this.getwrong(),t=this.callextension(this.test);if(document.getElementById("g902")&&document.getElementById("g902").click(),"done"===t.output)return this.stop();if(!t.iswrong&&this.getwrong()>e)return this.waswrong=!1,this.log("I did it wrong!!"),this.stop();if(!this.istest){var n=this.isbrute?0:this.random(+this.delay-+this.variation,+this.delay+ +this.variation);0!==n&&(this.waittime=n,this.progresstart=new Date,this.hackinjectmenu.querySelector("[name=progress]").style.width=0,setTimeout(this.updateprogress.bind(this),0)),setTimeout(this.next.bind(this),n)}}}nexttest(e){this.log(e),"Space"===e.code&&this.next()}hackyNext(done){if(done){let e=document.getElementById("etb").querySelector(".doing");e.classList.add("done"),e.classList.remove("doing")}let rows=document.getElementById("etb").querySelectorAll("tr:not(.done)");if(0==rows.length)return this.stop();let row=rows[rows.length-1];row.classList.add("doing");let url=eval(row.querySelector(".g63x").href.replace("javascript:","")),window=this.frame.contentWindow;window.top.frames.length=0,this.frame.src=url}hackyInject(){let e=this.frame.contentWindow,t=document.createElement("script");t.src=this.islocal?this.path+"src/thatquiz.js":this.path+"dist/thatquiz.js",e.document.body.append(t),t.onload=(()=>{let t=e.document.forms.hackform;t.delay.value=this.delay/1e3/document.querySelector(".doing td.numeric.w8o").innerHTML,t.variation.value=this.variation,t.misschance.value=this.miss,e.hack.license(!0),e.hack.apply()}),this.frame.contentWindow.addEventListener("hacked",this.hackyNext.bind(this,!0))}apply(){if("object"!=typeof cp&&!this.gettable())return this.log("No test found!");this.running=!0;const e=document.forms.hackform;if(this.delay=1e3*e.delay.value,this.variation=e.variation.value,this.miss=e.misschance.value,this.isbrute=0==this.delay,this.istest=e.istest.checked,document.getElementById("hackmenu").remove(),"object"==typeof cp)return this.frame=document.createElement("iframe"),this.frame.id="hackyFrame",this.frame.parent=null,document.querySelector("table#a3v.bZL tbody tr td.w8q.i9b").append(this.frame),this.frame.addEventListener("load",this.hackyInject.bind(this)),void this.hackyNext();var t=document.getElementById("hackinjectmenu");document.getElementById("bz1x").after(t),this.istest?(this.miss=0,document.addEventListener("keydown",this.nexttest.bind(this),!1)):(t.hidden=!1,this.next())}},"object"==typeof hack&&hack.stop();var hack=new hackclass;hack.init();