function Fractions(data, istest) {
	if (istest) {
		return (typeof fraction == "object")
	}

	var topinput = data.table.querySelector("input#E")
	var bottominput = data.table.querySelector("input#F")
	var extrainput = data.table.querySelector("input#W")
	var cinput = data.table.querySelector("input#C")

	if (!cinput && !topinput && !bottominput && !extrainput) return "done"

	var topvalue
	var bottomvalue
	var extravalue
	var cvalue

	if (cinput) {
		cvalue = arithmetic.ca
	} else {
		topvalue = fraction.dY
		bottomvalue = fraction.fz
		if (extrainput) extravalue = fraction.aZX
	}

	// * Miss chance
	if (data.iswrong) {
		cvalue = hack.random(0, 40)
		topvalue = hack.random(0, 40)
		bottomvalue = hack.random(0, 40)
		extravalue = hack.random(0, 40)
	}

	if (cinput) {
		cinput.value = cvalue
		arithmetic.v86()
	} else {
		if (topinput) topinput.value = topvalue
		if (bottominput) bottominput.value = bottomvalue
		if (extrainput) extrainput.value = extravalue
		fraction.v86()
	}
	return
}