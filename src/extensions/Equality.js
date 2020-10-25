function hex_Equality(data, istest) {
	if (istest) {
		return (typeof inequality === 'object' && inequality !== null)
	}

	var buttons = { ">": data.table.querySelector("tbody tr th#GTA.vam button.qq"), "=": data.table.querySelector("tbody tr th#EQA.vam button.qq"), "<": data.table.querySelector("tbody tr th#LTA.vam button.qq")}

	if (!buttons["="]) return "done"

	var leftnum = eval(h_tomath(data.table.querySelector("tbody tr td#A.qq div.nw").innerHTML))
	var rightnum = eval(h_tomath(data.table.querySelector("tbody tr td#B.qq div.nw").innerHTML))

	var is
	if (leftnum === rightnum) {
		is = buttons["="]
	} else if (leftnum > rightnum) {
		is = buttons[">"]
	} else {
		is = buttons["<"]
	}

	// Miss chance
	if (data.iswrong) {
		is = randomobject(buttons)
	}

	is.click()
	return
}