const http = require ('http');
const host = '127.0.0.1'
const port = 3002

//  request adalah = data masuk dari luar
// response adalah = data keluar dari sistem
const server = http.createServer(function (request, response){
    const nama = "Gilang";
    const uang = 50000;
    const jajan = 15000;
    const sisa = uang - jajan;
    const hasil =  `<p>halo saya ${nama}, saya jajan sebanyak ${jajan}, uang saya tadi ${uang}, setelah jajan uang saya menjadi ${sisa}.</p>`
    
    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, '', function(){
    console.log(`server started... at ${host}:${port}`);
});
