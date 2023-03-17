const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');

const { PORT } = require('./config/serverConfig.js');
//const  UserService  = require('./services/user-service');

const prepareAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,async () => {
        console.log(`Server Started on Port : ${PORT}`);
        const service =  new UserService();
        // const token = service.createToken({email:'reema@admin.com',id:1});
        // console.log(token);
        // const tok = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZW1hQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE2NzkwNTk5MTIsImV4cCI6MTY3OTA2MzUxMn0.BlRr8AxrZ_8NNzKokbKa-BJBXfEOrV4OL5u9ZH6hdto';
        // const response = service.verifyToken(tok);
        // console.log(response);
    });
}

prepareAndStartServer();
