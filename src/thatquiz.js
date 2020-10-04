var h_data = {}
h_data.running = false
h_data.version = "1.8"

function random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min}
function h_stop() {
	console.info("Done")
	h_clean()
}

function h_clean() {
	h_data.running = false

	menu = document.getElementById("h_injectmenu")
	if (menu) {
		menu.remove()
	}
}

function h_random() {
	return random(+h_data.min, +h_data.max)
}

function h_toggle(e) {
	if (h_data.running) {
		h_data.wasrunning = true
		h_data.running = false
	} else if (h_data.wasrunning) {
		h_data.running = true
		h_data.wasrunning = false
		h_next()
	}

	e.innerHTML = h_data.running ? "Stop" : "Resume"
}

function h_request(url, nocache) {
	var xmlHttp = new XMLHttpRequest()
	if (nocache) {
		url = url + "?_=" + new Date().getTime()
	} else {
		url = url + "?v=" + Math.floor(h_data.version*100)
	}
	xmlHttp.open("GET", url, false)
	xmlHttp.send()
	return xmlHttp.responseText
}

function h_updateprogress() {
	if (!h_data.running) {
		return
	}
	value = Date.now() - h_data.progresstart
	document.getElementById("h_progress").style.width = Math.floor(value / h_data.waittime * 100) + "%"
	if (!(value >= h_data.waittime)) {
		setTimeout(h_updateprogress, 50)
	}
}

function h_next() {
	if (!h_data.running) {
		return
	}

	iswrong = false
	total = parseInt(h_data.right.value, 10) + parseInt(h_data.wrong.value, 10)
	wrong = h_data.wrong.value

	input = document.querySelector("input#C")
	if (input == null) {
		h_stop()
		return
	}

	hackit = document.getElementsByClassName("qq nw")[0].innerHTML;
	for (let step = 0; step < 3; step++) {
		hackit = hackit.replace(/\s/g, '') //Spaces
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
		h_stop()
	}

	if (!h_data.isbrute) {
		randoms = h_random()
		if (randoms !== 0) {
			h_data.waittime = randoms
			h_data.progresstart = new Date()
			document.getElementById("h_progress").style.width = 0
			setTimeout(h_updateprogress, 0)
		}
	} else {
		randoms = 0
	}

	setTimeout(h_next,randoms)
}

function h_apply() {
	console.info("Starting")
	form = document.forms["h_form"]
	h_data.running = true

	h_data.min = form["h_value_min"].value
	h_data.max = form["h_value_max"].value
	h_data.miss = form["h_misschance"].value

	h_data.lenght = document.getElementById("TESTLENGTH").value
	h_data.right = document.getElementById("q917")
	h_data.wrong = document.getElementById("q91a")
	h_data.isbrute = (h_data.max === 0)


	if (h_data.lenght == 101) {
		h_data.isinfinite = true
	}

	document.getElementById("h_menu").remove()

	injectmenu = document.getElementById("h_injectmenu")
	document.getElementById("bz1x").after(injectmenu)
	injectmenu.hidden = false
	h_next()
}

function h_init() {
	h_clean()
	console.info("Creating menu")
	islocal = (typeof h_islocal == "undefined")

	if (islocal) {
		console.info("Local")
		html = h_request("http://127.0.0.1:5500/src/html.html")
		css = h_request("http://127.0.0.1:5500/src/css.css")
	} else {
		html = h_request("https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/src/html.html")
		css = h_request("https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/src/css.css")
	}

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