xmlHttp = new XMLHttpRequest()
xmlHttp.open("GET", "https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/dist/thatquiz.js?_=" + new Date().getTime(), false)
xmlHttp.send()
script = document.createElement("script")
script.innerHTML = xmlHttp.responseText
document.head.append(script)