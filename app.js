const http = require ('http');
const fs = require ('fs');
const filecontent= fs.readFileSync('index.html');

const server = http.createServer((req,res)=> {
    res.writeHead(200,{'content-type' : 'css/html'});
    res.end(filecontent);


})

server.listen(81, '127.0.0.2',()=>{
    console.log("listening on port 81");
})
