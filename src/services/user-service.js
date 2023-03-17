const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');
const UserRepository = require('../repository/user-repository');


class UserService {
    constructor()
    {
        this.userRepository = new UserRepository();
    }
    async create(data)
    {
        try{
            const user = await this.userRepository.create(data);
            return user;
        } catch(error) {
            console.log("Something went wrong at the service layer");
            throw error;
        }
    }
    async delete(userId)
    {
        try {
            const response = await this.userRepository.destroy(userId);
            return response;
        } catch(error) {
            console.log("Something went wrong at the service layer");
            throw error;
        }
    }
    createToken(user) {
        try {
            const result = jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return result;
        } catch(error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }
    verifyToken(token) {
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch(error) {
            console.log("Something went wrong in token validation",error);
            throw error;
        }
    }
}

module.exports = UserService;