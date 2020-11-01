let http = require('http');//módulos js
http.createServer(function(req, res){//criar servidor
    res.end('DevPleno.com');//função anonima e assicrona
}).listen(3000);// ouvir porta