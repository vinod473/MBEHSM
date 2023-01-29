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
app.use(bodyParser.urlencoded({ extended: false }));

const StudentController = require('./controllers/Student');
const AuthController = require('./controllers/Auth');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'user, token, Expires, Cache-control, Pragma, Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Expose-Headers',
        'Content-Type, Content-Disposition, Content-Length'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json());
app.use(cors());
app.use(upload.single('file')); 
app.use(express.static('public'));

const initRoutes = (app) => {
    app.use('/sanity', (req, res) => {
        logger.info('Sanity check');
        return res.status(200).send({ status: 'UP' });
    });
    app.use('/health', (req, res) => {
        logger.info('Health check');
        return res.status(200).send({ status: 'UP' });
    });
};

const startServer = () => {
    server.listen(PORT, () => {
        console.log(`Server Started on PORT: ${PORT}`);
    });
};

app.use('/api/student', StudentController);
app.use('/api/auth', AuthController);
app.get('/download', function(req, res){
    const file = '../public/studentRecord.pdf';
    res.download(file); // Set disposition and send it.
});
initRoutes(app);
startServer();