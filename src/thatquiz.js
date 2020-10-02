var h_data = {}
h_data.running = false
h_data.version = "1.5"

function random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min}
function h_stop() {
	console.info("Done")
	h_data.running = false

	if ($("#h_stopbtn")) {
		$("#h_stopbtn").remove()
	}
}

function h_random() {
	return random(+h_data.min, +h_data.max)
}

function h_request(url, nocache) {
	var xmlHttp = new XMLHttpRequest()
	if (nocache) {
		url = url + "?rand=" + random(-9999, 9999)
	} else {
		url = url + "?v=" + Math.floor(h_data.version*100)
	}
	xmlHttp.open("GET", url, false)
	xmlHttp.send()
	return xmlHttp.responseText
}

function h_misschange(e) {
	$("#h_misschancenum").innerHTML = e.value
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

	// Miss chance
	if (h_data.miss !== 0 && Math.random()*100 < h_data.miss) {
		out = eval(hackit) - random(-20, 20)
		iswrong = true
	} else {
		out = eval(hackit)
	}

	input.value = out
	arithmetic.v86()

	// We did something wrong
	if (h_data.wrong.value > wrong && !iswrong) {
		console.info("I did ", hackit, " wrong!!")
		h_stop()
	}

	// wrong + right = lenght
	if (!h_data.isinfinite && +total+1 >= +h_data.lenght) {
		h_stop()
		return
	}

	if (!h_data.isbrute) {
		randoms = h_random()
		if (randoms !== 0) {
			console.info("Waiting " + randoms + "ms")
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

	h_data.lenght = $("#TESTLENGTH").value
	h_data.right = $("#q917")
	h_data.wrong = $("#q91a")
	h_data.isbrute = (h_data.max === 0)


	if (h_data.lenght == 101) {
		h_data.isinfinite = true
	}

	$("#h_menu").remove()

	button = document.createElement("button")
	button.type = "button"
	button.onclick = function () {
		$("#h_stopbtn").remove()
		h_stop()
	};
	button.innerHTML = "Stop"
	button.id = "h_stopbtn"
	$("#bz1x").append(button)
	setTimeout(h_next, 300)
}

function h_init() {
	islocal = false
	console.info("Creating menu")

	if (islocal) {
		html = h_request("http://127.0.0.1:5500/src/html.html")
		css = h_request("http://127.0.0.1:5500/src/css.css")
	} else {
		html = h_request("https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/src/html.html")
		css = h_request("https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/src/css.css")
	}

	html = document.createRange().createContextualFragment(html)
	document.body.appendChild(html)

	style = document.createElement("style")
	style.innerHTML = css
	$("#h_menu").prepend(style)
	if (!islocal && h_data.version !== h_request("https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/version", true)) {
		console.info("New version available")
		$("#h_menu .container .version").style.display = "block"
		$("#h_menu .container form").style.display = "none"
	}
	$("#h_value_max").focus()
}
h_init()