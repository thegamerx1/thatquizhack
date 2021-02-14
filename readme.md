![GitHub file size in bytes](https://img.shields.io/github/size/thegamerx1/thatquizhack/dist/thatquiz.js?label=Release%20Size&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/thegamerx1/thatquizhack?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/thegamerx1/thatquizhack?style=for-the-badge)

# Quick Run
```javascript
function h_run(){var a=new XMLHttpRequest();a.open("GET","https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/dist/thatquiz.js?_="+new Date().getTime(),false);a.send();h_isrelease=true;script=document.createElement("script");script.innerHTML=a.responseText;document.body.append(script);}h_run()
```

# To do
* Stop btn starts from 0