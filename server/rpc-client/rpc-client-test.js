var client = require('./rpc-client.js')

client.add(1, 2, function(response) {
    console.assert(response == 3);
});
