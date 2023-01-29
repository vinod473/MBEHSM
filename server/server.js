const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const StudentController = require('./controllers/Student');
const AuthController = require('./controllers/Auth');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const server = http.createServer(app);
const PORT = '8080';

app.use(bodyParser.json());
app.use(cors());
app.use(upload.single('file')); 
app.use(express.static('public'));

const startServer = () => {
    server.listen(PORT, () => {
        console.log(`Server Started on PORT: ${PORT}`);
    });
};

app.use('/api/student', StudentController);
app.use('/api/auth', AuthController);

startServer();