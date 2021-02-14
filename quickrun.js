function h_run() {
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.open("GET", "https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/dist/thatquiz.js?_=" + new Date().getTime(), false)
	xmlHttp.send()
	h_isrelease = true
	eval(xmlHttp.responseText)
}
h_run()