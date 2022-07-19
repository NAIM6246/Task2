const express = require('express');
const userHandler = require('../handlers/user');
const newsHandler = require('../handlers/news');
const auth = require('../auth/authentication');

const router = express.Router();

router.route('/')
    .get(auth.Autheticate,userHandler.getUsers)
    .post(userHandler.createUser);

router.post('/login',userHandler.login);

router.route('/:userID')
    .get(auth.Autheticate,userHandler.getUserByID)
    .put(auth.Autheticate,userHandler.updateUser);

router.get('/:userID/newses',auth.Autheticate,newsHandler.getNewsByAuthorID)

module.exports = router;