function Identify(data, istest) {
	if (istest) {
		return (typeof idfraction === 'object' && idfraction !== null)
	}

	var cinput = data.table.querySelector("input#C")
	var dinput = data.table.querySelector("input#D")
	var box = document.getElementById("BOX0")

	if (!cinput && !dinput && !box) return "done"

	var cvalue
	var dvalue
	if (cinput && dinput) {
		cvalue = idfraction.dY
		dvalue = idfraction.fz
	} else if (box) {
		for (let i = 0; i < idfraction.dY; i++) {
			box.parentElement.childNodes[i].click()
		}
	}

	// * Miss chance
	if (data.iswrong) {
		if (cinput && dinput) {
			cvalue -= hack.random(-20, 20)
			dvalue -= hack.random(-20, 20)
		} else if (box) {
			hack.randomarray(box.parentElement.childNodes).click()
		}
	}

	if (cinput && dinput) {
		cinput.value = cvalue
		dinput.value = dvalue
	}
	idfraction.v86()
	return
}