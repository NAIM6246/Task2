const express = require('express');
const newsHandler = require('../handlers/news');

router = express.Router();

router.get('/',newsHandler.getNewses);
router.post('/',newsHandler.createNews);
router.put('/',newsHandler.updateNews);
router.delete('/',newsHandler.deleteNews);

module.exports = router;