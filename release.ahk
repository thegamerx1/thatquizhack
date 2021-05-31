#include <mustExec>
debug.init()

debug.print("Appending extensions..")
FileRead script, src/thatquiz.js
extensions := JSON.load(FileOpen("src/extensions.json", "r").read())
script := StrReplace(script, "//InjectJSON//", "this.extension.list = JSON.parse('" json.dump(extensions) "')")

adddata := ""
for _, value in extensions.list {
	debug.print(value " ", {end: ""})
	adddata .= addFile("func." value, "src/extensions/" value ".js", false, false)
}
debug.print()

adddata .= addFile("html", "src/html.html", true)
adddata .= addFile("css", "src/minify/css.css")
script := StrReplace(script, "//InjectExtensions//", adddata)

debug.print("Compressing..")
http := new requests("POST", "https://javascript-minifier.com/raw")
http.headers["content-type"] := "application/x-www-form-urlencoded"
httpout := http.send(urlCode.encodeParams({input: script}, true))
if httpout.status != 200
	throw Exception(httpout.status)
file := FileOpen("dist/thatquiz.js", "w")
file.write(httpout.text)
file.close()
clipboard := httpout.text
debug.print("Done")
ExitApp

addFile(name, file, replace := false, wrap := true) {
	FileRead out, %file%
	if replace
		out := StrReplace(out, "`r`n", "")
	wrap := wrap ? "``" : ""
	return "this.extension." name " = " wrap out wrap "`n"
}
#include <JSON>
#include <debug>
#Include <requests>
#Include <urlCode>