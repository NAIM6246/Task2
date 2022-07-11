const express = require('express');
const userHandler = require('../handlers/user')

const router = express.Router();

router.get('/',userHandler.getUsers);
router.post('/',userHandler.createUser);

module.exports = router;