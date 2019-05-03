module.handler = function(event, context, testConsole) {
  return {
    testMessage: "this is test."
  };
}

function testConsole() {
  return "test message.";
}
