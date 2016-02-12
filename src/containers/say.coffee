# this container conform the suggested pattern described in
# https://rackt.org/redux/docs/basics/UsageWithReact.html

{ connect }   = require 'react-redux'

sayUpdate     = require '../actions/say/update'
sayClear      = require '../actions/say/clear'

GreetingCard  = require('../components/greeting-card').default

mapStateToProps = (state) ->
  props =
    greetingMessage: state.say
  return props

mapDispatchToProps = (dispatch) ->
  props =
    onGreetingMessageChange: (msg) -> dispatch(sayUpdate(msg))
    onClearButtonClick: -> dispatch(sayClear())
  return props

module.exports = connect(mapStateToProps, mapDispatchToProps)(GreetingCard)
