# on-hold [![npm][npm-img]][npm-url] [![dependencies][dep-img]][dep-url] [![license][lic-img]][lic-url]

[npm-img]: https://img.shields.io/npm/v/on-hold.svg
[npm-url]: https://www.npmjs.com/package/on-hold
[dep-img]: https://david-dm.org/mathiasvr/on-hold.svg
[dep-url]: https://david-dm.org/mathiasvr/on-hold
[lic-img]: https://img.shields.io/:license-MIT-blue.svg
[lic-url]: https://mvr.mit-license.org

Repeated events for pressing and holding down DOM elements.

[View example on RequireBin](http://requirebin.com/?gist=2f7235f67e494f743ab722cc93a46fda)

## install
```
$ npm install on-hold
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

## api

### `onHold(element [, { wait: 500, interval: 200 }], action)`

#### element
DOM element to attach events to.

#### options
- `wait`: initial time in ms to hold down before repeating action.
- `interval`: interval in ms between repeated actions after inital hold down.

#### action
Event handler function.

## license

MIT
