process.title = 'webserver';
    var args = process.argv,
    port = args[2] || 7070,
    webServer = require('./server');

webServer.listen(port, function(){
    console.log('Servidor iniciou na porta: '  + port);
})