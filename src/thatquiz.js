hackclass = class {
	init() {
		this.version = "2.65"
		// this.extensionlist = //InjectJSON//
		//TODO: fix python
		this.islocal = (!this.extensionlist)

		var path
		if (this.islocal) {
			this.log("Running in LOCAL mode!")
			path = "http://localhost:5500/src/"
		} else {
			path = "https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/src/"
		}

		this.log("Loading extensions")
		var extensionlist
		if (this.islocal) {
			extensionlist = JSON.parse(this.request(path + "extensions.json"))
		} else {
			extensionlist = this.extensionlist
		}

		// TODO: maybe make each extension a string and eval() ?
		for (i = 0; i < extensionlist.list.length; i++) {
			let name = extensionlist.list[i]
			if (this.islocal) {
				let extension = document.createElement("script")
				extension.innerHTML = this.request(path + "extensions/" + name + ".js")
				document.body.append(extension)
			}

			let hex = "hex_" + name
			if (this.callextension(hex, true).output) {
				this.log("Test is: " + name)
				this.test = hex
				break
			}
		}

		if (!this.test) {
			this.log("Could not find a extension for current test.")
			return
		}

		var html = this.request(path + "html.html")
		var css = this.request(path + "css.css")

		var style = document.createElement("style")
		style.innerHTML = css
		style.id = "hackstyle"

		var html = document.createRange().createContextualFragment(html)
		document.body.appendChild(html)
		document.head.append(style)

		var form = document.forms["hackform"]
		if (this.islocal) {
			this.license(true)
			form["delay"].value = 0
			form["misschance"].value = 0
		}


		// ? Update their status bcs im lazy to hardcode it
		form.querySelectorAll("input").forEach(element => {
			element.dispatchEvent(new Event("input"))
		})
		this.hackinjectmenu = document.getElementById("hackinjectmenu")
	}

	log(text, ...args) {
		if (!this.islocal) return
		args = (args.length > 0 ? args : 0)
		console.log("%c[Hack]", 'background: #222; color: #ff7c55', text, args)
	}
	random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }
	randomarray(array) { return array[Math.floor(Math.random() * array.length)]; }
	gettable() { return document.querySelector("#cnvbb") || document.querySelector("#centertext") }
	// TODO: check if work
	isHidden(el) { return (el.style.display === "none")}
	randomobject(obj) { var keys = Object.keys(obj); return obj[keys[Math.floor(Math.random() * keys.length)]] }
	stripHtml(html) { let tmp = document.createElement("DIV"); tmp.innerHTML = html; return tmp.textContent || tmp.innerText || ""; }
	// getPrimeNumbers(num) {
	// 	var half = Math.floor(num / 2)
	// 	var array = [1]
	// 	var i, j
	// 	num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);
	// 	for (i; i <= half; i += j) { num % i === 0 ? array.push(i) : false }
	// 	array.push(num)
	// 	return array
	// }
	// h_tomath(text) {
	// 	var text = text.replaceAll("×", "*") //Multiply
	// 	var text = text.replaceAll("÷", "/") //Divison
	// 	var text = text.replaceAll("–", "-") //Substraction
	// 	var text = text.replaceAll(",", ".") //Substraction
	// 	var text = text.replaceAll("|", "")
	// 	return text
	// }
	clean() {
		this.running = false
		document.getElementById("hackinjectmenu")

		let menu = document.getElementById("hackinjectmenu")
		let hmenu = document.getElementById("hackmenu")
		let hstyle = document.getElementById("hackstyle")

		if (menu) menu.remove()
		if (hmenu) hmenu.remove()
		if (hstyle) hstyle.remove()
	}

	stop() {
		this.log("Stopping")
		this.clean()
	}

	request(url, nocache) {
		var xhr = new XMLHttpRequest()
		url += (nocache) ? "?nocache=" + new Date().getTime() : "?v=" + this.version * 100
		xhr.open("GET", url, false)
		xhr.send()
		// this.log("Response", [url, xhr.responseText])
		return xhr.responseText
	}

	updateprogress() {
		if (!this.running) return
		var value = Date.now() - this.progresstart
		this.hackinjectmenu.querySelector("[name=progress]").style.width = value / this.waittime * 100 + "%"
		if (!(value >= this.waittime)) {
			// TODO: it works?
			setTimeout(this.updateprogress.bind(this), 50)
		}
	}

	stopbtn() {
		if (this.running) {
			this.wasrunning = true
			this.running = false
		} else if (this.wasrunning) {
			this.running = true
			this.wasrunning = false
			this.next()
		}

		this.innerHTML = this.running ? "Stop" : "Resume"
	}

	inputboxie(e, postifx, divide) {
		var value = (divide) ? e.value / 1000 : e.value
		e.parentElement.querySelector(".value").innerHTML = value + postifx
	}

	inputboxietime(e) {
		var total = e.parentElement.querySelectorAll(".value")[1]
		var each = e.parentElement.querySelectorAll(".value")[0]
		var testlength = document.getElementById("TESTLENGTH").value

		if (testlength != 101) {
			var value = e.value * testlength
			var minutes = Math.floor(value / 60)
			var seconds = value % 60
			total.innerHTML = "~" + minutes + "m " + seconds + "s"
			total.removeAttribute("hide")
		} else {
			total.innerHTML = ""
			total.setAttribute("hide", "true")
		}
		each.innerHTML = e.value + "s"
	}

	license(bypass) {
		let licenseform = document.forms["hacklicense"]
		if (!bypass && !licenseform["license"].checked) return
		licenseform.remove()
		document.forms["hackform"].style.display = ""
	}

	callextension(name, istest) {
		var data = {}
		if (!istest) {
			data.table = this.gettable()
			data.iswrong = (this.miss !== 0) ? (Math.random() * 100 < this.miss) : false
		}
		return { output: window[name](data, istest), iswrong: data.iswrong }
	}

	getwrong() {
		return document.getElementById("q91a").value
	}

	next() {
		if (!this.running) return
		var oldwrong = this.getwrong()
		var output = this.callextension(this.test)

		// We are done
		if (output.output === "done") return this.stop()

		// We did somethig wrong
		if (!output.iswrong && this.getwrong() > oldwrong) {
			this.waswrong = false
			this.log("I did it wrong!!")
			return this.stop()
		}


		if (!this.istest) {
			var sleep = (this.isbrute) ? 0 : this.random(+this.delay - +this.variation, +this.delay + +this.variation)
			if (sleep !== 0) {
				this.waittime = sleep
				this.progresstart = new Date()
				this.hackinjectmenu.querySelector("[name=progress]").style.width = 0
				setTimeout(this.updateprogress.bind(this), 0)
			}

			setTimeout(this.next.bind(this), sleep)
		}
	}

	nexttest(event) {
		this.log(event)

		if (event.code === "Space") {
			this.log("call")
			this.next()
		}
	}

	apply() {
		if (!this.gettable()) return this.log("No test found!")

		this.running = true
		var form = document.forms["hackform"]
		this.delay = form["delay"].value * 1000
		this.variation = form["variation"].value
		this.miss = form["misschance"].value

		this.isbrute = (this.delay == 0)
		this.istest = form["istest"].checked

		document.getElementById("hackmenu").remove()
		var injectmenu = document.getElementById("hackinjectmenu")
		document.getElementById("bz1x").after(injectmenu)
		if (this.istest) {
			document.addEventListener("keydown", this.nexttest.bind(this), false);
		} else {
			injectmenu.hidden = false
			this.next()
		}
	}
}
if (typeof hack == "object") hack.stop()
var hack = new hackclass()
hack.init()