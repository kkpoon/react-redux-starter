module.exports = (state='', action) ->
  switch action.type
    when "UPDATE_SAY"  then return action.message
    when "CLEAR_SAY"   then return ''
    else return state;
