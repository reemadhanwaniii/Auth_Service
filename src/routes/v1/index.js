const express = require('express');
const { AuthRequestValidator } = require('../../middlewares/index');
const router = express.Router();

const UserController = require('../../controllers/user-controller');

router.post(
    '/signUp',
    AuthRequestValidator.validateUserAuth,
    UserController.create
    );
router.delete('/user/:id',UserController.destroy);

router.post(
    '/signin',
    AuthRequestValidator.validateUserAuth,
    UserController.signIn
    );

module.exports = router;