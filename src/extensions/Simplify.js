function Simplify(data, istest) {
	if (istest) {
		return (typeof reducef === 'object' && reducef !== null)
	}

	var topinput = data.table.querySelector("input#C")
	var bottominput = data.table.querySelector("input#D")
	var extrainput = data.table.querySelector("input#WH")

	// var decimaldata = data.table.querySelector("tbody tr.qq td.gX")
	// var topdata = data.table.querySelector("tr.qq:nth-child(1) > td:nth-child(2)")
	// var bottomdata = data.table.querySelector("tr.qq:nth-child(3) > td:nth-child(1)")

	if (!topinput && !bottominput) return "done"

	var topvalue
	var bottomvalue
	var extravalue
	// ? legit way
	// if (decimaldata) {
	// 	let simplify = math.simplify(decimaldata.textContent.replace(",", "."))
	// 	topvalue = simplify.args[0]
	// 	bottomvalue = simplify.args[1]
	// } else if (isHidden(bottominput)) {
	// 	var topvalue = eval(topdata.textContent + "/" + bottomdata.textContent)
	// } else {
	// 	let simplify = math.simplify(topdata.textContent + "/" + bottomdata.textContent)
	// 	topvalue = simplify.args[0]
	// 	bottomvalue = simplify.args[1]
	// }

	// ? variable way
	if (bottominput && !bottominput.classList.contains("hidden")) {
		bottomvalue = reducef.fz
		topvalue = reducef.dY
	} else topvalue = reducef.ca
	if (extrainput) extravalue = reducef.aZX

	// * Miss chance
	if (data.iswrong) {
		topvalue = hack.random(0, 40)
		bottomvalue = hack.random(0, 40)
	}

	topinput.value = topvalue
	if (bottominput) bottominput.value = bottomvalue
	if (extrainput) extrainput.value = extravalue
	reducef.v86()
	return
}