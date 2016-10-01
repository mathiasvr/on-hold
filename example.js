var onHold = require('.')

var i = 0
var div = document.createElement('div')
var btn = document.createElement('button')

btn.textContent = 'Press and Hold'

document.body.appendChild(btn)
document.body.appendChild(div)

onHold(btn, function () {
  div.textContent = i++
})
