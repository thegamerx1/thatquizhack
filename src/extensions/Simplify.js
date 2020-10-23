function hex_Simplify(data, istest) {
	if (istest) {
		return (typeof reducef === 'object' && reducef !== null)
	}

	var topinput = data.table.querySelector("input#C")
	var bottominput = data.table.querySelector("input#D")

	var decimaldata = data.table.querySelector("tbody tr.qq td.gX")
	var topdata = data.table.querySelector("tr.qq:nth-child(1) > td:nth-child(2)")
	var bottomdata = data.table.querySelector("tr.qq:nth-child(3) > td:nth-child(1)")

	if (!decimaldata && !topinput && !bottominput) return "done"

	if (decimaldata) {
		var simplify = math.simplify(decimaldata.textContent.replace(",", "."))
		var topvalue = simplify.args[0]
		var bottomvalue = simplify.args[1]
	} else if (isHidden(bottominput)) {
		var topvalue = eval(topdata.textContent + "/" + bottomdata.textContent)
	} else {
		var simplify = math.simplify(topdata.textContent + "/" + bottomdata.textContent)
		var topvalue = simplify.args[0]
		var bottomvalue = simplify.args[1]
	}

	// Miss chance
	if (data.iswrong) {
		if (random(0,1)) { // Choose bot or top to do wrong
			var topvalue = topvalue - random(-20, 20)
		} else {
			var bottomvalue = bottomvalue - random(-20, 20)
		}
	}

	topinput.value = topvalue
	bottominput.value = bottomvalue
	reducef.v86()
	return
}