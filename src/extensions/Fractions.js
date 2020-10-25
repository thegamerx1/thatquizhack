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

	var topvalue
	var bottomvalue
	var cvalue
	if (decimaldata) {
		cvalue = eval(h_tomath(decimaldata.textContent))
	} else {
		let mathtype = h_tomath(data.table.querySelector("tbody tr.qq td.qq").innerHTML)
		let fractionleft = math.fraction(topleftdata.innerHTML, bottomleftdata.innerHTML)
		let fractionright = math.fraction(toprightdata.innerHTML, bottomrightdata.innerHTML)
		let out
		if (mathtype === "*") {
			out = math.multiply(fractionleft, fractionright)
		} else if (mathtype === "+") {
			out = math.add(fractionleft, fractionright)
		} else if (mathtype === "/") {
			out = math.divide(fractionleft, fractionright)
		} else if (mathtype === "-") {
			out = math.subtract(fractionleft, fractionright)
		}
		topvalue = out.n
		bottomvalue = out.d
	}

	// Miss chance
	if (data.iswrong) {
		if (decimaldata) {
			cvalue -= random(-20, 20)
		} else {
			topvalue -= random(-20, 20)
			bottomvalue -= random(-20, 20)
		}
	}

	if (decimaldata) {
		cinput.value = cvalue
		arithmetic.v86()
	} else {
		topinput.value = topvalue
		bottominput.value = bottomvalue
		fraction.v86()
	}
	return
}