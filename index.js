const http = require('http');
const servidor = http.createServer (function (req, res){
    console.log (req);
    const url = req.url;

    switch (url){
        case '/':
        res.writeHead (200, {'content-type':'text'} ) ;
        res.end('hola mundo');
        break;
        case '/productos':
        res.writeHead (200, {'content-type':'text/html'} );
        res.end ("<h1>productos en venta</h1>");
        break;
        
        
     }
});
const PORT = 3050;
servidor.listen (PORT, function(){ 
    console.log('servidor escuchando en el puerto '+ PORT)  ; 
});


