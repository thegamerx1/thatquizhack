function hex_Arithmetic(data, istest) {
	if (istest) {
		return (typeof arithmetic === 'object' && arithmetic !== null)
	}

	var input = data.table.querySelector("input#C")
	if (!input) return "done"
	// Convert symbols to math
	var out = eval(h_tomath(data.table.querySelector("tbody tr td.qq.nw").innerHTML))

	// Miss chance
	if (data.iswrong) {
		out -= random(-20, 20)
	}

	input.value = out
	arithmetic.v86()
	return
}