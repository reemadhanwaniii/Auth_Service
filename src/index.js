const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const db = require('./models/index');
const { PORT } = require('./config/serverConfig.js');

const { User,Role } = require('./models/index');

const prepareAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,async () => {
        console.log(`Server Started on Port : ${PORT}`);
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter : true});
        }

        //  const u1 = await User.findByPk(1);
        //  const r1 = await Role.findByPk(2);
     
        //  u1.addRole(r1);

        // const response =  await u1.getRoles();
        // const response1 =  await r1.getUsers();
        // const response2 =  await u1.hasRoles();
        // console.log(response);
        
    });
}

prepareAndStartServer();
