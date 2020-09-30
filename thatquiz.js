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

	var html = '<div id="h_menu"><!-- <style>#h_menu{position:fixed;width:500px;height:300px;top:50%;left:50%;margin-top:-150px;margin-left:-250px;background-color:#404040;padding:30px;z-index:1000}#h_menu container{display:flex;max-width:600px;margin:auto}#h_menu .container label{display:block;margin-top:15px;margin-bottom:3px}#h_menu .container input{flex:1}#h_menu .container button{display:block;margin-top:10px}</style> --><link rel="stylesheet" href="https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/css.css"><div class="container"><form name="h_form"><label for="h_value_min">Min Delay:</label><input type="text" id="h_value_min" name="h_value_min" value="3000">ms<label for="h_value_max">Max Delay:</label><input type="text" id="h_value_max" name="h_value_max" value="10000">ms<button type="button" onclick="h_apply()">OK</button><p class="int">Set values to 0 for instant or leave them like its for realistic inputs</p><p class="who">Made by TheGamerX38<br><a href="https://github.com/thegamerx1/thatquizhack" target="_blank">github</a><a href="https://t.me/TheGamerX38" target="_blank">telegram</a></p></form></div></div>'
	html = document.createRange().createContextualFragment(html)
	document.body.appendChild(html)
}
h_init()