const http = require('http');
http.createServer(function (req, res) {
    res.write(`Hi process =>>> ${process.pid}`);
    res.end();
}).listen(3000, () => console.log(`Server is running ${process.pid}`));
