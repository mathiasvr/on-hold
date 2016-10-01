module.exports = function (element, opts, action) {
  if (typeof opts === 'function') action = opts

  var wait = opts && opts.wait || 500
  var interval = opts && opts.interval || 200
  var tid = null

  element.addEventListener('mousedown', hold)
  element.addEventListener('mouseup', release)
  element.addEventListener('mouseout', release)

  function hold () {
    action()
    tid = setTimeout(hold, tid ? interval : wait)
  }

  function release () {
    clearTimeout(tid)
    tid = null
  }
}
