const express = require('express');
const newsHandler = require('../handlers/news');
const auth = require('../auth/authentication');

router = express.Router();

router.route('/')
    .get(auth.Autheticate,newsHandler.getAllNews)
    .post(auth.Autheticate,newsHandler.createNews);

router.route('/:newsID')
    .get(auth.Autheticate,newsHandler.getNewsByID)
    .put(auth.Autheticate,newsHandler.updateNews)
    .delete(auth.Autheticate,newsHandler.deleteNews);

module.exports = router;