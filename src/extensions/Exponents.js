function Exponents(data, istest) {
	if (istest) {
		return (typeof exponent == "object")
	}

	var cinput = data.table.querySelector("input#C")
	var dinput = data.table.querySelector("input#D")

	var stripped = hack.stripHtml(exponent.ca)
	if (dinput) {
		let match = stripped.match(/(.*)\/(.*)/)
		var cvalue = match[1]
		var dvalue = match[2]
	} else {
		var cvalue = stripped
	}

	// * Miss chance
	if (data.iswrong) {
		cvalue = hack.random(0, 40)
		dvalue = hack.random(0, 40)
	}

	cinput.value = cvalue
	if (dinput) dinput.value = dvalue
	exponent.v86()
	return
}