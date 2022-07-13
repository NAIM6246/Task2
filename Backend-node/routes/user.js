const express = require('express');
const userHandler = require('../handlers/user')

const router = express.Router();

router.get('/',userHandler.getUsers);
router.post('/',userHandler.createUser);
router.put('/',userHandler.updateUser);

module.exports = router;