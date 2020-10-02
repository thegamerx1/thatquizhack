var h_data = {}
h_data.running = false
h_data.version = 1

function random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min}
function h_stop() {
	console.info("Done")
	h_data.running = false
}

function h_random() {
	return random(+h_data.min, +h_data.max)
}

function h_request(url) {
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.open("GET", url + "?v=" + h_data.version, false)
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

	total = parseInt(h_data.right.value, 10) + parseInt(h_data.wrong.value, 10)
	wrong = h_data.wrong.value
	if (h_data.input == null) {
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

	h_data.input.value = out
	arithmetic.v86()

	// We did something wrong
	if (h_data.wrong.value > wrong && !iswrong) {
		console.info("I did ", hackit, " wrong!!")
		h_stop()
	}

	// wrong + right = lenght
	if (+total+1 >= +h_data.lenght && !h_data.isinfinite) {
		h_stop()
		return
	}

	randoms = h_random()
	if (randoms !== 0) {
		console.info("Waiting " + randoms + "ms")
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
	h_data.input = $("input#C")


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
	islocal = true
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
	if (!islocal) {
		if (h_data.version !== h_request("https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/version")) {
			$("#h_menu .container .version").style.display = "none"
			$("#h_menu .container form").style.display = "block"
		}
	}
}
h_init()