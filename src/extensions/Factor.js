function Factor(data, istest) {
	if (istest) {
		return (typeof factors === "object")
	}

	var number = data.table.querySelector("table thead tr td.qq")
	var inputc = data.table.querySelector("tbody tr td input#C.Mh")
	var buttons = { "prime": data.table.querySelector("input#prmN"), "no": data.table.querySelector("input#cmpN")}
	var factorsbox = data.table.querySelector("div#bo.bo div.jX7")

	if (!factorsbox && !buttons.prime && !inputc) return "done"

	if (buttons["prime"]) {
		var button = (factors.a6h.hasOwnProperty(number.innerHTML)) ? buttons.prime : buttons.no
	}

	if (factorsbox) {
		var childs = factorsbox.childNodes
		var primes = factors.aWT.prans.match(/(\d+)(<sup>(\d+))?/g)

		childs.forEach(button => {
			primes.forEach(prime => {
				let match = prime.match(/(\d+)<sup>(\d+)/)
				let number = prime
				let timestoloop = 1
				if (match) {
					number = match[1]
					timestoloop = match[2]
				}
				if (number === button.innerHTML) {
					for (let index = 0; index < timestoloop; index++) {
						button.click()
					}
				}
			})
		})
	}

	if (inputc) var out = factors.aWT.prans

	// * Miss chance
	if (data.iswrong) {
		if (buttons["prime"]) button = hack.randomobject(buttons)
		if (factorsbox) hack.randomarray(childs).click()
		if (inputc) out = hack.random(0, 40)
	}

	if (buttons["prime"]) button.click()
	if (factorsbox) factors.aWc()
	if (inputc) {
		inputc.value = out
		factors.v86()
	}
	return
}