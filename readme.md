# Quick Run
```javascript
function h_inject(){var e=new XMLHttpRequest;e.open("GET","https://raw.githubusercontent.com/thegamerx1/thatquizhack/master/dist/thatquiz.js?_="+(new Date).getTime(),!1),e.send();var t=document.createElement("script");t.innerHTML=e.responseText,document.head.append(t)}
h_inject()
```

# Known issues
* Fraction math with negative numbers returns numbers with not negative