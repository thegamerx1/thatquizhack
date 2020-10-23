# Quick Run

```javascript
function h_inject() {
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.open("GET", "https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/dist/thatquiz.js?_=" + new Date().getTime(), false)
	xmlHttp.send()
	script = document.createElement("script")
	script.innerHTML = xmlHttp.responseText
	document.head.append(script)
}
h_inject()
```

# Note

Running the script without the quick run will make it run in local mode

# Instructions

1. Open debug console
2. Paste quickrun.js contents
3. Press `ENTER`
4. Modify the configuration to ur liking
5. Press `OK` button
