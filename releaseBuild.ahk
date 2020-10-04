#include <mustExec>
#include <debug>
#include <requests>
#NoTrayIcon
debug.init(0)
OnError("SomethingWentWrong")

if !InStr((FileExist("dist")), "D")
	FileCreateDir, dist

debug.send("Compiling JS..")
compileJS("src/thatquiz.js", "dist/thatquiz.js")
debug.send("Done")
ExitApp

compileJS(file, to) {
	jscode := FileOpen(file, "r").Read()
	request := new requests("https://closure-compiler.appspot.com/compile", "POST")
	request.header("Content-Type", "application/x-www-form-urlencoded")
	request.data(["js_code=" jscode, "output_info=compiled_code", "output_format=text", "compilation_level=SIMPLE_OPTIMIZATIONS"])
	file := FileOpen(to, "w")
	file.Write(request.send().ResponseText)
	file.Close()
}

SomethingWentWrong(exception) {
    debug.send("Error on line " exception.Line ": " exception.Message)
    ExitApp
}