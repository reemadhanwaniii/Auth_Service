const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const db = require('./models/index');
const { PORT } = require('./config/serverConfig.js');


const prepareAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,async () => {
        console.log(`Server Started on Port : ${PORT}`);
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter : true});
        }

        
        
    });
}

prepareAndStartServer();
