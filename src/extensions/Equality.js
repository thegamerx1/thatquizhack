function hex_Equality(data, istest) {
	if (istest) {
		return (typeof inequality === 'object' && inequality !== null)
	}

	var buttons = { ">": data.table.querySelector("tbody tr th#GTA.vam button"), "=": data.table.querySelector("tbody tr th#EQA.vam button"), "<": data.table.querySelector("tbody tr th#LTA.vam button")}


	// ? Getting html
	// var leftnum = eval(h_tomath(data.table.querySelector("tbody tr td#A.qq div.nw").innerHTML))
	// var rightnum = eval(h_tomath(data.table.querySelector("tbody tr td#B.qq div.nw").innerHTML))

	// var is
	// if (leftnum === rightnum) {
	// 	is = buttons["="]
	// } else if (leftnum > rightnum) {
	// 	is = buttons[">"]
	// } else {
	// 	is = buttons["<"]
	// }

	// ? Getting from variable
	var is = buttons[inequality.ca]

	// * Miss chance
	if (data.iswrong) {
		is = randomobject(buttons)
	}

	is.click()
	return
}