import json
import requests
import time

def readfile(file):
	with open(file, "r") as f:
		return f.read()
#
def setstage(name):
	try:
		setstage.oldtime
	except AttributeError:
		setstage.oldtime = ""

	if (setstage.oldtime):
		elapsed = str(round(time.perf_counter() - setstage.oldtime, 2))
		print(" (" + elapsed + "s)")

	print(name, end="", flush=True)
	setstage.oldtime = time.perf_counter()


setstage("Appending extensions..")
javascript = readfile("src/thatquiz.js")
extensions = json.loads(readfile("src/extensions.json"))
javascript = javascript.replace("//InjectJSON//", "this.extension.list = JSON.parse('" + json.dumps(extensions) + "')")
adddata = ""
for i in extensions["list"]:
	adddata += f"this.extension.func.{i} = {readfile(f'src/extensions/{i}.js')}\n"
javascript = javascript.replace("//InjectExtensions//", adddata)
setstage("Compressing..")
response = requests.post("https://javascript-minifier.com/raw", data={"input": javascript})
javascript = response.text

setstage("Done")
with open("dist/thatquiz.js", "w") as f:
	f.write(javascript)
	f.close()
