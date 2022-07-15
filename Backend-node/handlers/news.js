const newsService = require('../services/news');

const db = require('../conn/connection');

//scaffolding
const newsHandler = {};

const News = db.news


newsHandler.getNewses = (req,res) =>{
    // res.send(newses);
}

newsHandler.createNews = (req,res)=> {
    var newsToCreate = {
        Title : req.body.Title,
        Description : req.body.Description,
        AuthorID : req.body.AuthorID,
        IsDeleted : req.body.IsDeleted ?  req.body.IsDeleted : false
    };
    console.log(newsToCreate);
 let  news = News.create(newsToCreate);
    res.status(200).send(news);
}

newsHandler.updateNews = (req,res) => {
    //to do
    res.send('news updated');
}

newsHandler.deleteNews = (req,res) => {
    //to do
    res.send('news deleted');
}

module.exports = newsHandler;