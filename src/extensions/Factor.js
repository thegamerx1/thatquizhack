function hex_Factor(data, istest) {
	if (istest) {
		return (typeof factors === 'object' && factors !== null)
	}

	var number = data.table.querySelector("table thead tr td.qq")
	var buttons = { "prime": data.table.querySelector("input#prmN"), "no": data.table.querySelector("input#cmpN")}
	var factorsbox = data.table.querySelector("div#bo.bo div.jX7")
	var factorsnum = data.table.querySelector("div#bo.bo table.bZM tbody tr th div.qq")
	var factorsbutton = data.table.querySelector("div#bo.bo table.bZM tbody tr td button#OK.u82")

	if (buttons["prime"]) {
		var isprime = math.isPrime(number.innerHTML)
		if (isprime) {
			var button = buttons["prime"]
		} else {
			var button = buttons["no"]
		}
	}

	if (factorsbox) {
		var primes = getPrimeNumbers(factorsnum.innerHTML)
		var childs = factorsbox.childNodes
		var choosables = []
		for (var i = 0; i < childs.length; i++) {
			if (primes.includes(+childs[i].innerHTML)) {
				childs[i].click()
			}
			choosables.push(childs[i])
		}
	}

	// Miss chance
	if (data.iswrong) {
		if (buttons["prime"]) button = randomobject(buttons)
		if (factorsbox) {
			randomarray(choosables).click
		}
	}

	if (buttons["prime"]) button.click()
	if (factorsbox) factorsbutton.click()
	return
}