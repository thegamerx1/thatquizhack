function random(min, max) { return parseInt(Math.random() * (max - min) + min)}

var h_data = {}
h_data.started = false

function h_stop() {
	console.info("Done")
	h_data.running = false
}

function h_next() {
	right = $("#q917").value
	wrong = $("#q91a").value
	total = parseInt(right, 10)+parseInt(wrong, 10)

	inputtohack = $("input#C")
	if (inputtohack == null) {
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

	hackit = eval(hackit)
	inputtohack.value = hackit
	arithmetic.v86()

	// wrong + right = lenght
	if (+total+1 >= +h_data.lenght && !h_data.isinfinite) {
		h_stop()
		return
	}

	randoms = h_random()
	console.info("Waiting "+randoms+" ms..")
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
	console.info("starting")
	setTimeout(h_next, 100)
}

function h_random() {
	return random(h_data.min, h_data.max)
}

function h_init() {
	console.info("Creating menu")

	var html = '<div id="h_menu"><link rel="stylesheet" href="http://127.0.0.1:5500/css.css"><div class="container"><form name="h_form"><label for="h_value_min">Min Delay:</label><input type="text" id="h_value_min" name="h_value_min" value="3000">ms<label for="h_value_max">Max Delay:</label><input type="text" id="h_value_max" name="h_value_max" value="10000">ms<button type="button" onclick="h_apply()">OK</button></form></button></div>'
	html = document.createRange().createContextualFragment(html)
	document.body.appendChild(html)
}
h_init()