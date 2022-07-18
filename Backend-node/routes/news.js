const express = require('express');
const newsHandler = require('../handlers/news');

router = express.Router();

router.get('/',newsHandler.getAllNews);
router.post('/',newsHandler.createNews);
router.get('/:newsID',newsHandler.getNewsByID);
router.put('/:newsID',newsHandler.updateNews);
router.delete('/:newsID',newsHandler.deleteNews);

module.exports = router;