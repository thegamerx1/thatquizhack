function random(min, max) {return Math.random() * (max - min) + min}
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms))}
function h_debug(arg) {if(debug){console.debug(arg)}}
function h_stop() {finished = true}

async function h_next() {
	right = document.getElementById("q917").value
	wrong = document.getElementById("q91a").value
	total = parseInt(right, 10)+parseInt(wrong, 10)

	inputtohack = document.querySelector("input#C")
	if (inputtohack == null) {
		console.info("Done")
		return
	}

	hackit = document.getElementsByClassName("qq nw")[0].innerHTML;
	for (let step = 0; step < 3; step++) {
		hackit = hackit.replace(/\s/g, '') //Spaces
		hackit = hackit.replace('×', "*") //Multiply
		hackit = hackit.replace('÷', "/") //Divison
		hackit = hackit.replace('–', "-") //Substraction
	}

	hackit = math.evaluate(hackit)
	inputtohack.value = hackit
	arithmetic.v86()

	if (+total+1 >= +lenght && !isinfinite) {
		h_debug("Done")
		finished = true
		return
	}

	if (maxdelay != 0 && !finished) {
		randoms = parseInt(random(mindelay,maxdelay))
		h_debug("Waiting "+randoms+" ms..")
		setTimeout(h_next,randoms)
		return
	}

	if ((isinfinite && !finished) || (maxdelay == 0 && !finished)) {
		setTimeout(h_next,0)
		return
	}
}

function h_start() {
	console.info("Starting hack..")
	button = document.getElementById("OK")
	lenght = document.getElementById("TESTLENGTH").value
	if (lenght == 101) {
		isinfinite = true
		lenght = "Open"
	}
	h_debug("Lenght: "+lenght)

	h_next()
}

function h_init() {
	debug = true // Displays messages in console
	mindelay = 250 // Minimum delay between inputs
	maxdelay = 0 // Maximum delay between inputs, Set to 0 to disable delays

	// Do Not Change
	finished = false
	randoms = 0
	isinfinite = false

	console.clear()
	console.info("Initiating..")
	if (typeof interval !== 'undefined') {h_debug("Stopping interval");h_stop()}

	html = `
<div id="h_menu">
	<link rel="stylesheet" href="https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/css.css">
	<div class="container">
		<input id="value_max">
		<input id="value_min">
		<button id="btn_apply">
		<button id="btn_reset">
	</button>
</div>
	`
	$("body").append(html)
}
h_init()