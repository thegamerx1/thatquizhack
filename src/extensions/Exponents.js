function hex_Exponents(data, istest) {
	if (istest) {
		return (typeof exponent === 'object' && exponent !== null)
	}

	// TODO: Fractions dont work

	var cinput = data.table.querySelector("input#C")
	cvalue = exponent.ca

	// * Miss chance
	if (data.iswrong) {
		cvalue -= random(-20, 20)
	}

	cinput.value = cvalue
	exponent.v86()
	return
}