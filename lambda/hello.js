exports.handler = function(event, context, callback) {
  const eventString = JSON.stringify(event)
  callback(null, {
    statusCode: 200,
    // body: 'Hello!!!!!'
    body: eventString
  })
}
