import json
import requests
import os
import time

def readfile(file):
	with open(file, "r") as f:
		return f.read()

class stage:
	def __init__(self, name):
		print(name, end="")
		self.start = time.perf_counter()

	def done(self):
		elapsed = str(round(time.perf_counter() - self.start, 2))
		print(" (" + elapsed + "ms)")

stage0 = stage("Appending extensions..")
javascript = readfile("src/thatquiz.js")
extensions = json.loads(readfile("src/extensions.json"))
javascript = javascript.replace("//InjectJSON//", "h_data.extensionlist = JSON.parse('" + json.dumps(extensions) + "')")
for i in extensions["list"]:
	javascript += "\n" + readfile("src/extensions/" + i + ".js")
stage0.done()


stage0 = stage("Compressing..")
response = requests.post("https://htmlcompressor.com/compress", data={"code": javascript, "code_type": "js", "output_format": "text", "js_engine": "closure", "js_closure_single_line": 1})
javascript = response.text
stage0.done()

stage0 = stage("Writting to file..")
with open("dist/thatquiz.js", "w") as f:
	f.write(javascript)
	f.close()
stage0.done()

os._exit(1)