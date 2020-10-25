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

	var topvalue
	var bottomvalue
	if (decimaldata) {
		let simplify = math.simplify(decimaldata.textContent.replace(",", "."))
		topvalue = simplify.args[0]
		bottomvalue = simplify.args[1]
	} else if (isHidden(bottominput)) {
		var topvalue = eval(topdata.textContent + "/" + bottomdata.textContent)
	} else {
		let simplify = math.simplify(topdata.textContent + "/" + bottomdata.textContent)
		topvalue = simplify.args[0]
		bottomvalue = simplify.args[1]
	}

	// Miss chance
	if (data.iswrong) {
		topvalue -= random(-20, 20)
		bottomvalue -= random(-20, 20)
	}

	topinput.value = topvalue
	bottominput.value = bottomvalue
	reducef.v86()
	return
}