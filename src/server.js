'use strict';var path = require('path');var express = require('express');var app = express();app.use('*', function (req, res) {    return res.sendFile(path.join(__dirname, 'src/index.html'));
});
//if (module === require.main) { 
// Start the server 
var server = app.listen(process.env.port || 8080, function () {     
   var port = server.address().port;     
   console.log('App listening on port %s', port);     
   console.log('Press Ctrl+C to quit.'); 
});
//}

