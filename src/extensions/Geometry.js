function Geometry(data, istest) {
	if (istest) {
		return (typeof geometry == "object" || typeof shapes == "object")
	}

	var shape = data.table.querySelector("[id^='SH_A']")
	var geom = data.table.querySelector("[id^='geom_']")
	var cinput = data.table.querySelector("#C")
	var finput = data.table.querySelector("#E")
	var einput = data.table.querySelector("#F")
	var gta = data.table.querySelector("#GTA")

	if (!shape && !cinput && !finput && !einput && !geom && !gta) return "done"

	if (shape) {
		shapes.v86(shapes.ca,1)
		return
	}

	if (gta) {
		var gtavalue = geometry.ca
	}

	if (finput && einput) {
		var fvalue = geometry.dY
		var evalue = geometry.fz
	}

	if (geom) {
		var temp = document.createElement("label")
		temp.innerHTML = geometry.ca

		var labels = document.querySelectorAll("label")
		for (var i=0;i<labels.length;i++) {
			if (labels[i].innerHTML == temp.innerHTML) {
				labels[i].click()
			}
		}
	}

	if (cinput) {
		var cvalue = geometry.ca
	}

	// * Miss chance
	if (data.iswrong) {
		if (cinput)
			cvalue = hack.random(0, 40)

		if (finput && einput) {
			evalue = hack.random(0, 40)
			fvalue = hack.random(0, 40)
		}
		if (gta) {
			gtavalue = hack.randomobject([">", "<", "="])
		}
	}

	if (gtavalue) {
		geometry.o91(gtavalue)
		return
	}
	if (cvalue) cinput.value = cvalue
	if (evalue) einput.value = evalue
	if (fvalue) finput.value = fvalue
	geometry.v86()
}