const express = require('express');
const userHandler = require('../handlers/user')

const router = express.Router();

router.get('/',userHandler.getUsers);
router.get('/:userID',userHandler.getUserByID);
router.post('/',userHandler.createUser);
router.put('/:userID',userHandler.updateUser);

module.exports = router;