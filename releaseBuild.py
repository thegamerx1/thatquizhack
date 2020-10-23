import json
import requests
import os

def readfile(file):
	with open(file, "r") as f:
		return f.read()

print("Adding extensions..")
javascript = readfile("src/thatquiz.js")
extensions = json.loads(readfile("src/extensions.json"))
javascript = javascript.replace("//InjectJSON//", "h_data.extensionlist = JSON.parse('" + json.dumps(extensions) + "')")


for i in extensions["list"]:
	javascript += "\n" + readfile("src/extensions/" + i + ".js")


print("Compressing..")
response = requests.post("https://htmlcompressor.com/compress",
                         data={"code": javascript, "code_type": "js", "output_format": "text", "js_engine": "closure", "js_closure_single_line": 1})

javascript = response.text


with open("dist/thatquiz.js", "w") as f:
	f.write(javascript)
	f.close()

print("Done")
os._exit(1)
