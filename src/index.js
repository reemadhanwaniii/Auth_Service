const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');

const { PORT } = require('./config/serverConfig.js');

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,() => {
        console.log(`Server Started on Port : ${PORT}`);
    });
}

prepareAndStartServer();
