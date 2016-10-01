# on-hold [![npm][npm-img]][npm-url] [![dependencies][dep-img]][dep-url] [![license][lic-img]][lic-url]

[npm-img]: https://img.shields.io/npm/v/on-hold.svg
[npm-url]: https://www.npmjs.com/package/on-hold
[dep-img]: https://david-dm.org/mathiasvr/on-hold.svg
[dep-url]: https://david-dm.org/mathiasvr/on-hold
[lic-img]: http://img.shields.io/:license-MIT-blue.svg
[lic-url]: http://mvr.mit-license.org

Repeated events for pressing and holding down DOM elements.

## install
```bash
npm install on-hold
```

## example
Holding down the button will call the function repeatedly:

```javascript
var onHold = require('on-hold')

var btn = document.createElement('button')
btn.textContent = 'Press and Hold'

onHold(btn, function () {
  console.log('action fired')
})

document.body.appendChild(btn)
```

## usage

### `onHold(domElement, [{ wait: 500, interval: 200 }], action)`
`domElement`: element to attach events to.
`opts.wait`: initial time in ms to hold down before repeating action.
`opts.interval`: interval in ms between repeated actions after inital hold down.
`action`: event handler function.

## license

MIT