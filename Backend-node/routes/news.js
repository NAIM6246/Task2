const express = require('express');
const newsHandler = require('../handlers/news');
const auth = require('../auth/authentication');

router = express.Router();

router.route('/')
    .get(newsHandler.getAllNews)
    .post(newsHandler.createNews);

router.route('/:newsID')
    .get(newsHandler.getNewsByID)
    .put(newsHandler.updateNews)
    .delete(newsHandler.deleteNews);

module.exports = router;