const newsModels = require('../models/domains/news');
const validator = require('../models/validator/news');

//scaffolding
const news = {};

news.createNews = (data) => {
    let err = validator.ValidateNewsCreateDto(data);
    if(err) {
        throw new Error(message=err,title=400);
    }
    
    let createdNews = 'created';
    return createdNews;
}

module.exports = news;