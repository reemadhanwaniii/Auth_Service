const UserService = require('../services/user-service');
const userService = new UserService();

const create = async (req,res) => {
    try {
        const response = await userService.create({
            email : req.body.email,
            password : req.body.password
        });
        return res.status(201).json({
            success : true,
            message: 'Successfully created a new user',
            data : response,
            err : {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create a new user',
            data : {},
            err : error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const response = await userService.delete(req.params.id);
        return res.status(201).json({
            success : true,
            message: 'Successfully delete user',
            data : response,
            err : {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to delete user',
            data : {},
            err : error
        });
    }
}


module.exports = {
    create,
    destroy
}