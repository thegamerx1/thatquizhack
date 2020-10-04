# Quick Run

```javascript
xmlHttp = new XMLHttpRequest()
xmlHttp.open("GET", "https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/dist/thatquiz.js?_=" + new Date().getTime(), false)
xmlHttp.send()
script = document.createElement("script")
script.innerHTML = xmlHttp.responseText
h_islocal = false
document.head.append(script)
```

# Note

Running the script without the quick run will make it run in local mode

# Instructions

1. Open debug console (`CTRL + SHIFT + K`)
2. Paste thatquiz.js contents
3. Press (`ENTER`)
4. Modify the configuration to ur liking
5. Press `OK` button
