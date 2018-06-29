module.exports = function(callback) {
  return function() {
    return callback
      .apply(callback, arguments)
      .then(function(result) {
        return { success: true, result: result }
      })
      .catch(function(result) {
        return { success: false, result: result }
      })
  }
}
