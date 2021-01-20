function Arithmetic(data, istest) {
	if (istest) {
		return (typeof arithmetic == "object")
	}

	var input = data.table.querySelector("input#C")
	if (!input) return "done"

	// ? Getting data from html
	// var out = eval(h_tomath(data.table.querySelector("tbody tr td.qq.nw").innerHTML))

	// ? Getting data from variables
	var out = arithmetic.ca

	// * Miss chance
	if (data.iswrong) {
		out = hack.random(0, 40)
	}

	input.value = out
	arithmetic.v86()
	return
}