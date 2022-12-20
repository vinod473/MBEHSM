const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);
const PORT = '8080';

const StudentController = require('./controllers/Student');

const startServer = () => {
    server.listen(PORT, () => {
        console.log(`Server Started on PORT: ${PORT}`);
    });
};

app.use('/api/student', StudentController);
app.get('/download', function(req, res){
    const file = '../public/studentRecord.pdf';
    res.download(file); // Set disposition and send it.
});

startServer();