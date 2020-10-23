function hex_Arithmetic(data, istest) {
	if (istest) {
		return (typeof arithmetic === 'object' && arithmetic !== null)
	}

	var input = data.table.querySelector("input#C")
	if (!input) return "done"
	// Convert symbols to math
	var calculation = eval(h_tomath(data.table.querySelector("tbody tr td.qq.nw").innerHTML))

	// Miss chance
	if (data.iswrong) {
		var out = eval(calculation) - random(-20, 20)
	} else {
		var out = eval(calculation)
	}

	input.value = out
	arithmetic.v86()
	return
}