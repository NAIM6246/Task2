const express = require('express');
const newsHandlers = require('../handlers/news');

router = express.Router();

router.get('/',newsHandlers.getNewses);
router.post('/',newsHandlers.createNews);

module.exports = router;