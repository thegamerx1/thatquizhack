function random(min, max) {return parseInt(Math.random() * (max - min) + min)}

var h_data = {}
h_data.running = false

function h_stop() {
	console.info("Done")
	h_data.running = false
}

function h_random() {
	return random(h_data.min, h_data.max)
}

function h_request(url) {
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.open("GET", url, false)
	xmlHttp.send(null)
	return xmlHttp.responseText
}

function h_next() {
	if (!h_data.running) {
		return
	}
	right = $("#q917").value
	wrong = $("#q91a").value
	total = parseInt(right, 10)+parseInt(wrong, 10)

	input = $("input#C")
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

	out = eval(hackit)
	input.value = out
	arithmetic.v86()
	console.info(out)

	// wrong + right = lenght
	if (+total+1 >= +h_data.lenght && !h_data.isinfinite) {
		h_stop()
		return
	}

	randoms = h_random()
	if (randoms !== 0) {
		console.info("Waiting "+randoms+"ms..")
	}

	setTimeout(h_next,randoms)
}

function h_apply() {
	form = document.forms["h_form"]
	h_data.running = true
	h_data.min = form["h_value_min"].value
	h_data.max = form["h_value_max"].value

	h_data.button = $("#OK")
	h_data.lenght = $("#TESTLENGTH").value
	if (h_data.lenght == 101) {
		h_data.isinfinite = true
	}
	$("#h_menu").remove()
	console.info("Starting")
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
	document.getElementById("h_menu").prepend(style)
}
h_init()