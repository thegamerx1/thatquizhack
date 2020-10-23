var h_data = {}
//InjectJSON//
h_data.running = false
h_data.version = "2.0"

function random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min}
function randomarray(array) {return array[Math.floor(Math.random() * array.length)];}
function h_gettable() {return document.querySelector("#cnvbb") || document.querySelector("#centertext")}
function isHidden(el) {var style = window.getComputedStyle(el);return (style.display === 'none')}
function randomobject(obj) {var keys = Object.keys(obj);return obj[keys[Math.floor(Math.random() * keys.length)]]}
function getPrimeNumbers(num) {
	var half = Math.floor(num / 2)
	var array = [1]
	var i, j
	num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);
	for (i; i <= half; i += j) {num % i === 0 ? array.push(i) : false}
	array.push(num)
	return array
}
function h_tomath(text) {
	var text = text.replaceAll('×', "*") //Multiply
	var text = text.replaceAll('÷', "/") //Divison
	var text = text.replaceAll('–', "-") //Substraction
	var text = text.replaceAll(',', ".") //Substraction
	return text
}
function h_clean() {
	h_data.running = false
	var menu = document.getElementById("h_injectmenu")
	if (menu) menu.remove()
}

function h_stop() {
	console.info("Stopping")
	h_clean()
}

function h_request(url, nocache) {
	var xmlHttp = new XMLHttpRequest()
	url += (nocache) ? "?_=" + new Date().getTime() : "?v=" + Math.floor(h_data.version * 100)
	xmlHttp.open("GET", url, false)
	xmlHttp.send()
	return xmlHttp.responseText
}

function h_updateprogress() {
	if (!h_data.running) return
	var value = Date.now() - h_data.progresstart
	document.getElementById("h_progress").style.width = Math.floor(value / h_data.waittime * 100) + "%"
	if (!(value >= h_data.waittime)) {
		setTimeout(h_updateprogress, 50)
	}
}

function h_stopbtn() {
	if (h_data.running) {
		h_data.wasrunning = true
		h_data.running = false
	} else if (h_data.wasrunning) {
		h_data.running = true
		h_data.wasrunning = false
		h_next()
	}

	this.innerHTML = h_data.running ? "Stop" : "Resume"
}

function h_inputboxie(e, divide) {
	var value = (divide) ? e.value / 1000 : e.value
	document.getElementById(e.id + "_num").value = value
}

function h_license(bypass) {
	if (!bypass && !document.querySelector("#h_menu .container .license input").checked) return
	document.querySelector("#h_menu .container .license").style.display = "none"
	document.querySelector("#h_menu .container form").style.display = "block"
}

function h_callextension(name, istest) {
	var data = {}
	if (!istest) {
		data.table = h_gettable()
		data.iswrong = (!h_data.miss === 0) ? (Math.random() * 100 < h_data.miss) : false
	}
	return { output: window[name](data, istest), iswrong: data.iswrong}
}

function h_getwrong() {
	return document.getElementById("q91a").value
}

function h_next() {
	if (!h_data.running) return

	var oldwrong = h_getwrong()
	var output = h_callextension(h_data.test)


	// We are done
	if (output.output === "done") {
		h_stop()
		return
	}

	// We did somethig wrong
	if (!output.iswrong && h_getwrong() > oldwrong) {
		h_data.waswrong = false
		console.warn("I did it wrong!!")
		h_stop()
		return
	}

	var sleep = (h_data.isbrute) ? 0 : random(+h_data.delay - +h_data.variation, +h_data.delay + +h_data.variation)
	if (sleep !== 0) {
		h_data.waittime = sleep
		h_data.progresstart = new Date()
		document.getElementById("h_progress").style.width = 0
		setTimeout(h_updateprogress, 0)
	}

	setTimeout(h_next, sleep)
}

function h_apply() {
	if (!h_gettable()) {
		console.error("are you in a test?")
		return
	}
	h_data.running = true
	var form = document.forms["h_form"]

	h_data.delay = form["h_delay"].value
	h_data.variation = form["h_variation"].value
	h_data.miss = form["h_misschance"].value

	h_data.isbrute = (h_data.delay == 0) ? true : false

	document.getElementById("h_menu").remove()
	var injectmenu = document.getElementById("h_injectmenu")
	document.getElementById("bz1x").after(injectmenu)
	injectmenu.hidden = false
	document.getElementById("h_stopbtn").addEventListener("click", h_stopbtn)
	h_next()
}

function h_init() {
	h_clean()
	var islocal = (!h_data.extensionlist)
	var path

	if (islocal) {
		console.info("Running in local mode. if you dont know what this is you did something wrong!")
		path = "http://localhost:5500/src/"
	} else {
		path = "https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/src/"
	}
	console.info("Loading extensions")

	if (islocal) {
		var extensionlist = JSON.parse(h_request(path + "extensions.json"))
	} else {
		var extensionlist = h_data.extensionlist
	}

	for (i = 0; i < extensionlist.list.length; i++) {
		var name = extensionlist.list[i]
		if (islocal) {
			var extension = document.createElement("script")
			extension.innerHTML = h_request(path + "extensions/" + name + ".js")
			document.body.append(extension)
		}
		var hex = "hex_" + name
		if (h_callextension(hex, true).output) {
			console.info("Test is: " + name)
			h_data.test = hex
			break
		}
	}

	if (!h_data.test) {
		console.error("Could not find a extension for current test.")
		return
	}


	var mathjs = document.createElement("script")
	mathjs.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjs/7.5.1/math.min.js"
	document.body.append(mathjs)

	var html = h_request(path + "html.html")
	var css = h_request(path + "css.css")

	var style = document.createElement("style")
	style.innerHTML = css

	var html = document.createRange().createContextualFragment(html)

	document.body.appendChild(html)
	document.head.append(style)

	if (!islocal && h_data.version !== h_request("https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/version", true)) {
		document.querySelector("#h_menu .container .version").style.display = "block"
	}
	if (islocal) {
		h_license(true)
		document.querySelector("#h_delay").value = 0
		document.querySelector("#h_misschance").value = 0
	}
}
h_init()