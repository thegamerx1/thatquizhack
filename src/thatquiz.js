var h_data = {}
h_data.running = false
h_data.version = "1.8"

function random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min}
function h_clean() {
	h_data.running = false
	menu = document.getElementById("h_injectmenu")
	if (menu) menu.remove()
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
	value = Date.now() - h_data.progresstart
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
	value = (divide) ? e.value / 1000 : e.value
	document.getElementById(e.id + "_num").value = value
}

function h_next() {
	if (!h_data.running) return
	iswrong = false
	wrong = h_data.wrong.value

	input = document.querySelector("input#C")
	if (!input) {
		h_clean()
		return
	}

	// Convert symbols to math
	hackit = document.querySelector("table.g6cd tbody tr td.qq.nw").innerHTML;
	for (let step = 0; step < 3; step++) {
		hackit = hackit.replace('×', "*") //Multiply
		hackit = hackit.replace('÷', "/") //Divison
		hackit = hackit.replace('–', "-") //Substraction
	}

	// hackit = arithmetic.ca

	// Miss chance
	if (h_data.miss !== 0 && Math.random()*100 < h_data.miss) {
		out = eval(hackit) - random(-20, 20)
		iswrong = true
	} else {
		out = eval(hackit)
		// out = hackit
	}

	input.value = out
	arithmetic.v86()

	// We did something wrong
	if (h_data.wrong.value > wrong && !iswrong) {
		console.info("I did ", hackit, " wrong!!")
		h_clean()
		return
	}

	if (h_data.isbrute) {
		randoms = 0
	} else {
		randoms = random(+h_data.delay - +h_data.variation, +h_data.delay + +h_data.variation)
		if (randoms !== 0) {
			h_data.waittime = randoms
			h_data.progresstart = new Date()
			document.getElementById("h_progress").style.width = 0
			setTimeout(h_updateprogress, 0)
		}
	}

	setTimeout(h_next,randoms)
}

function h_apply() {
	h_data.running = true
	form = document.forms["h_form"]

	h_data.delay = form["h_delay"].value
	h_data.variation = form["h_variation"].value
	h_data.miss = form["h_misschance"].value

	h_data.lenght = document.getElementById("TESTLENGTH").value
	h_data.right = document.getElementById("q917")
	h_data.wrong = document.getElementById("q91a")
	h_data.isbrute = (h_data.delay == 0) ? true : false

	document.getElementById("h_menu").remove()
	injectmenu = document.getElementById("h_injectmenu")
	document.getElementById("bz1x").after(injectmenu)
	injectmenu.hidden = false
	document.getElementById("h_stopbtn").addEventListener("click", h_stopbtn)
	h_next()
}

function h_init() {
	h_clean()
	console.info("Creating menu")
	islocal = (typeof h_islocal == "undefined")

	if (islocal) {
		console.info("Running in local mode. if you dont know what this is you did something wrong!")
		path = "http://127.0.0.1:5500/src/"
	} else {
		path = "https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/src/"
	}
	html = h_request(path + "html.html")
	css = h_request(path + "css.css")

	style = document.createElement("style")
	style.innerHTML = css

	html = document.createRange().createContextualFragment(html)

	document.body.appendChild(html)
	document.head.append(style)
	if (!islocal && h_data.version !== h_request("https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/version", true)) {
		document.querySelector("#h_menu .container .version").style.display = "block"
	}
}
h_init()