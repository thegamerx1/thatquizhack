![GitHub file size in bytes](https://img.shields.io/github/size/thegamerx1/thatquizhack/dist/thatquiz.js?label=Release%20Size&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/thegamerx1/thatquizhack?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/thegamerx1/thatquizhack?style=for-the-badge)

# Quick Run
```javascript
function h_inject(){var e=new XMLHttpRequest;e.open("GET","https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/dist/thatquiz.js?_="+(new Date).getTime(),!1),e.send();var t=document.createElement("script");t.innerHTML=e.responseText,document.head.append(t)}
h_inject()
```

# To do
* Stop btn starts from 0