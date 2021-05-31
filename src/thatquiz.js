hackclass = class {
	init() {
		this.version = "2.9"
		this.extension = {}
		//InjectJSON//
		this.extension.func = {}
		//InjectExtensions//
		this.islocal = typeof h_isrelease == "undefined"

		if (this.islocal) {
			this.log("Running in LOCAL mode!")
			this.path = "http://localhost:5500/"
		} else {
			this.path = "https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/"
		}

		if (typeof cp == "object") {
			cp.test = function (a, d) {
				var c = cp.g641(a)
				var h = window.location.search.substr(1)
				var b = parseInt(q9("fZk").value).toString(16)
				var f = parseInt(a).toString(16),
					c = (cp.fZ = "student?s=" + b + "&e=" + f + "&w=" + c + "&r=" + h),
					c = jqh("/eu/" + c, null, cp.jqg)
				return c
			}
		} else {
			this.log("Loading extensions")
			if (this.islocal)
				this.extension.list = JSON.parse(this.request(this.path + "src/extensions.json"))
			for (i = 0; i < this.extension.list.list.length; i++) {
				let name = this.extension.list.list[i]
				if (this.islocal) {
					this.extension.func[name] = eval(
						this.request(this.path + "src/extensions/" + name + ".js") + name
					)
				}

				if (this.callextension(name, true).output) {
					this.log("Test is: " + name)
					this.test = name
					break
				}
			}

			if (!this.test) return this.log("Could not find a extension for current test.")
		}

		var html = this.islocal ? this.request(this.path + "src/html.html") : this.extension.html
		var css = this.islocal ? this.request(this.path + "src/minify/css.css") : this.extension.css

		var style = document.createElement("style")
		style.innerHTML = css
		style.id = "hackstyle"

		var html = document.createRange().createContextualFragment(html)
		document.body.appendChild(html)
		document.head.append(style)

		var form = document.forms["hackform"]
		if (this.islocal) this.license(true)

		// ? Update their status bcs im lazy to hardcode it
		if (typeof cp == "object") {
			let delay = form.querySelector("input[name=delay]")
			delay.max = 15 * 60
			delay.value = 60 * 7
		}
		form.querySelectorAll("input").forEach(element => {
			element.dispatchEvent(new Event("input"))
		})
		this.hackinjectmenu = document.getElementById("hackinjectmenu")
	}

	log(...text) {
		console.log("%c[Hack]", "background: #222; color: #ff7c55", ...text)
	}
	random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	randomarray(array) {
		return array[Math.floor(Math.random() * array.length)]
	}
	gettable() {
		return document.querySelector("#cnvbb") || document.querySelector("#centertext")
	}
	isHidden(el) {
		return el.style.display === "none"
	}
	randomobject(obj) {
		var keys = Object.keys(obj)
		return obj[keys[Math.floor(Math.random() * keys.length)]]
	}
	stripHtml(html) {
		let tmp = document.createElement("DIV")
		tmp.innerHTML = html
		return tmp.textContent || tmp.innerText || ""
	}

	clean() {
		this.running = false
		document.getElementById("hackinjectmenu")

		let menu = document.getElementById("hackinjectmenu")
		let hmenu = document.getElementById("hackmenu")
		let hstyle = document.getElementById("hackstyle")

		if (menu) menu.remove()
		if (hmenu) hmenu.remove()
		if (hstyle) hstyle.remove()
		if (this.frame) this.frame.remove()
		let doneorDoing = document.querySelectorAll(".doing, .done")
		doneorDoing.forEach(e => {
			e.classList.remove("done", "doing")
		})
	}

	stop() {
		this.log("Stopping")
		this.clean()
		window.dispatchEvent(new Event("hacked"))
	}

	request(url, nocache) {
		var xhr = new XMLHttpRequest()
		url += nocache ? "?nocache=" + new Date().getTime() : "?v=" + this.version * 100
		xhr.open("GET", url, false)
		xhr.send()
		return xhr.responseText
	}

	updateprogress() {
		if (!this.running) return
		var value = Date.now() - this.progresstart
		this.hackinjectmenu.querySelector("[name=progress]").style.width =
			(value / this.waittime) * 100 + "%"
		if (!(value >= this.waittime)) {
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
		var value = divide ? e.value / 1000 : e.value
		e.parentElement.querySelector(".value").innerHTML = value + postifx
	}

	inputboxietime(e) {
		var total = e.parentElement.querySelectorAll(".value")[1]
		var each = e.parentElement.querySelectorAll(".value")[0]
		var testlength
		if (typeof cp == "object") {
			testlength = document.getElementById("etb").children.length
		} else {
			testlength = document.getElementById("TESTLENGTH").value
		}

		if (testlength != 101) {
			var value = e.value * testlength
			let date = new Date(value * 1000).toISOString().substr(11, 5)
			total.innerHTML = `~${date.substr(0, 2)}h ${date.substr(3)}m`
			new Date(10 * 1000).toISOString()
			total.removeAttribute("hide")
		} else {
			total.innerHTML = ""
			total.setAttribute("hide", "true")
		}
		let date = new Date(e.value * 1000).toISOString().substr(14, 5)
		each.innerHTML = `${date.substr(0, 2)}m ${date.substr(3)}s`
	}

	license(bypass) {
		let licenseform = document.forms["hacklicense"]
		if (!licenseform) return
		if (!bypass && !licenseform["license"].checked) return
		licenseform.remove()
		document.forms["hackform"].style.display = ""
	}

	callextension(name, istest) {
		var data = {}
		if (!istest) {
			data.table = this.gettable()
			data.iswrong = this.miss !== 0 ? Math.random() * 100 < this.miss : false
		}
		return { output: this.extension.func[name](data, istest), iswrong: data.iswrong }
	}

	getwrong() {
		return document.getElementById("q91a").value
	}

	next() {
		if (!this.running) return
		var oldwrong = this.getwrong()
		var output = this.callextension(this.test)

		if (document.getElementById("g902")) document.getElementById("g902").click()
		// We are done
		if (output.output === "done") return this.stop()

		// We did somethig wrong
		if (!output.iswrong && this.getwrong() > oldwrong) {
			this.waswrong = false
			this.log("I did it wrong!!")
			return this.stop()
		}

		if (!this.istest) {
			var sleep = this.isbrute
				? 0
				: this.random(+this.delay - +this.variation, +this.delay + +this.variation)
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
			this.next()
		}
	}

	hackyNext(done) {
		if (done) {
			let temprow = document.getElementById("etb").querySelector(".doing")
			temprow.classList.add("done")
			temprow.classList.remove("doing")
		}
		let rows = document.getElementById("etb").querySelectorAll("tr:not(.done)")
		if (rows.length == 0) return this.stop()
		let row = rows[rows.length - 1]
		row.classList.add("doing")
		let url = eval(row.querySelector(".g63x").href.replace("javascript:", ""))
		let window = this.frame.contentWindow
		window.top.frames.length = 0 // spoofy
		this.frame.src = url
	}

	hackyInject() {
		this.frame.contentWindow.addEventListener("hacked", this.hackyNext.bind(this, true))
		let window = this.frame.contentWindow
		let xmlHttp = new XMLHttpRequest()
		xmlHttp.open(
			"GET",
			this.path +
				(this.islocal ? "src/thatquiz.js" : "dist/thatquiz.js?_=" + new Date().getTime()),
			false
		)
		xmlHttp.send()
		if (typeof h_isrelease != "undefined") window.h_isrelease = true
		window.eval(xmlHttp.responseText)
		let form = window.document.forms["hackform"]
		form["delay"].value =
			this.delay / 1000 / document.querySelector(".doing td.numeric.w8o").innerHTML
		form["variation"].value = this.variation
		form["misschance"].value = this.miss
		window.hack.license(true)
		window.hack.apply()
	}

	apply() {
		if (typeof cp !== "object" && !this.gettable()) return this.log("No test found!")

		this.running = true
		const form = document.forms["hackform"]
		this.delay = form["delay"].value * 1000
		this.variation = form["variation"].value
		this.miss = form["misschance"].value

		this.isbrute = this.delay == 0
		this.istest = form["istest"].checked

		document.getElementById("hackmenu").remove()
		if (typeof cp == "object") {
			this.frame = document.createElement("iframe")
			this.frame.id = "hackyFrame"
			this.frame.parent = null
			document.querySelector("table#a3v.bZL tbody tr td.w8q.i9b").append(this.frame)
			this.frame.addEventListener("load", this.hackyInject.bind(this))
			this.hackyNext()
			return
		}

		var injectmenu = document.getElementById("hackinjectmenu")
		document.getElementById("bz1x").after(injectmenu)
		if (this.istest) {
			this.miss = 0
			document.addEventListener("keydown", this.nexttest.bind(this), false)
		} else {
			injectmenu.hidden = false
			this.next()
		}
	}
}

if (typeof hack == "object") hack.stop()
var hack = new hackclass()
hack.init()
