module.exports = (message) ->
  return {
    type: 'UPDATE_SAY'
    message: message
  }
