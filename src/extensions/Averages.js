function Averages(data, istest) {
	if (istest) {
		return (typeof sets == "object")
	}

	// TODO: Fractions dont work

	var cinput = data.table.querySelector("input#C")
	var dinput = data.table.querySelector("input#D")
	var rfraction = /(.*)\/(.*)/

	if (!cinput) return "done"

	var cvalue
	var dvalue
	if (dinput) {
		let match = [0, 0, 0] // ? Fallback if sets.ca is 0
		if (sets.ca.length > 2) match = sets.ca.match(rfraction)
		cvalue = match[1]
		dvalue = match[2]
	} else {
		cvalue = sets.ca
	}

	// * Miss chancece
	if (data.iswrong) {
		cvalue = hack.random(0, 40)
		if (dinput) dvalue = hack.random(0, 40)
	}

	cinput.value = cvalue
	if (dinput) dinput.value = dvalue
	sets.v86()
	return
}