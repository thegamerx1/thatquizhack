function hex_Fractions(data, istest) {
	if (istest) {
		return (typeof fraction === 'object' && fraction !== null)
	}

	var topinput = data.table.querySelector("input#E")
	var bottominput = data.table.querySelector("input#F")
	var cinput = data.table.querySelector("input#C")

	var decimaldata = data.table.querySelector("tbody tr td.qq.nw")
	var inputs = data.table.querySelectorAll("tbody tr.qq td.vam")

	var topleftdata = inputs[0]
	var toprightdata = inputs[1]
	var bottomrightdata = inputs[3]
	var bottomleftdata = inputs[2]

	if (!cinput && !topinput && !topinput) return "done"

	if (decimaldata) {
		var cvalue = eval(h_tomath(decimaldata.textContent))
	} else {
		var mathtype = h_tomath(data.table.querySelector("tbody tr.qq td.qq").innerHTML)
		var fractionleft = math.fraction(topleftdata.innerHTML, bottomleftdata.innerHTML)
		var fractionright = math.fraction(toprightdata.innerHTML, bottomrightdata.innerHTML)
		if (mathtype === "*") {
			out = math.multiply(fractionleft, fractionright)
		} else if (mathtype === "+") {
			out = math.add(fractionleft, fractionright)
		} else if (mathtype === "/") {
			out = math.divide(fractionleft, fractionright)
		} else if (mathtype === "-") {
			out = math.subtract(fractionleft, fractionright)
		}
		var topvalue = out.n
		var bottomvalue = out.d
	}

	// Miss chance
	if (data.iswrong) {
		if (random(0, 1)) { // Choose bot or top to do wrong
			var topvalue = topvalue - random(-20, 20)
		} else {
			var bottomvalue = bottomvalue - random(-20, 20)
		}
	}

	if (decimaldata) {
		cinput.value = cvalue
		arithmetic.v86()
	} else {
		fraction.v86()
		topinput.value = topvalue
		bottominput.value = bottomvalue
	}
	return
}