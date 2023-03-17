const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');

const { PORT } = require('./config/serverConfig.js');

//const Repo = require('./repository/user-repository');

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,async () => {
        console.log(`Server Started on Port : ${PORT}`);
        // const repo = new Repo();
        // const response =await  repo.getById(1);
        // console.log(response);
    });
}

prepareAndStartServer();
