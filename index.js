const { createServer } = require('http');
const fs = require('fs')
const PORT = process.env.PORT || 3000;

const server = createServer();
server.on('request', (req, res) => { 

    var url = req.url;
    console.log(url);
    if(url === "/"){
        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8'});
        fs.readFile('assets/html/links.html', function(err, data) {
            return res.end(data);
        });
    }
    else if(url === "/funkcionalnosti-streznika"){
        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8'});
        fs.readFile('assets/html/index.html', function(err, data) {

            return res.end(data);
        });
    }
    else if(url === "/posebnosti"){
        res.writeHead(200, { 'Content-type': 'text/plain; charset=utf-8'});
        var data = "Posebnosti strežnika"
            +"\nStrežnik bo moral dostopati do podatkovne baze, ki je lahko oddaljena ali pa lokalna."
            +"\nStrežnik bo moral tudi implementirati funkcionalnosti prijave, kar bo izvedeno z uporabo tretjega ponudnika kot sta OAuth, Firebase,..."
            +"\nStrežnik bo moral znati generirati .xslx poročila, za kar bo potreboval ustrezno knjižnico."
        return res.end(data);
    }
    else if(url === "/style.css"){
        res.writeHead(200, { 'Content-type': 'text/css; charset=utf-8'});
        fs.readFile('assets/css/style.css', function(err, data) {
            return res.end(data);
        });
    }
    else if(url === "/use-case-diagram"){
        res.writeHead(200, { 'Content-type': 'image/gif'});
        fs.readFile('assets/img/use_case.jpg', function(err, data) {
            return res.end(data);
        });
    }
    else if(url.match('\/img\/')){
        var filename = url.substr(5);
        res.writeHead(200, { 'Content-type': 'image/gif'});
        fs.readFile('assets/img/'+filename, function(err, data) {
            return res.end(data);
        });
    }
}); 

server.listen(PORT, () => console.log("Server listening on port " + PORT));
