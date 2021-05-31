function Algebra(data, istest) {
	if (istest) {
		return typeof algebra == "object"
	}

	var input = data.table.querySelector("input#C")
	var inputd = data.table.querySelector("input#D")
	var choices = data.table.querySelectorAll(".q99c tbody tr")
	var choicesbtn = data.table.querySelector("#aet")
	var factor1 = data.table.querySelector("#g9l0")
	var factor2 = data.table.querySelector("#g9l1")
	if (!input && choices.length === 0 && !factor1) return "done"

	var out
	if (choicesbtn) {
		choices.forEach(choice => {
			let btn = choice.querySelector("td:nth-child(1) input")
			let solve = choice.querySelector("td:nth-child(2) label")
			if (data.iswrong) {
				btn.click()
			} else {
				if (solve.innerHTML === multiplechoice.o9m[0]) {
					btn.click()
				}
			}
		})
		choicesbtn.click()
	} else if (input) {
		out = algebra.ca.split("_")
		if (data.iswrong) {
			out = hack.random(0, 40)
		}
		input.value = out[0]
		if (inputd) inputd.value = out[1]
		algebra.v86()
	} else if (factor1) {
		out = []
		algebra.ca.match(/\((.+?)\)/g).forEach((val, i) => {
			out[i] = val.match(/\((.+?)\)/)[1]
		})
		if (data.iswrong) {
			out[0] = hack.random(0, 40)
		}
		if (out[0]) factor1.value = out[0]
		if (out[1]) factor2.value = out[1]
		algebra.g9n()
	}
	return
}
