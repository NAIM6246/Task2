const newsService = require('../services/news');

const db = require('../conn/connection');

//scaffolding
const newsHandler = {};

const News = db.news


newsHandler.createNews = async (req,res)=> {
    var newsToCreate = {
        Title : req.body.title,
        Description : req.body.description,
        AuthorID : req.body.authorID,
        IsDeleted : req.body.isDeleted ?  req.body.isDeleted : false
    };
    // console.log(newsToCreate);
    let news = await News.create(newsToCreate);
    res.status(201).send(news);
}

newsHandler.getAllNews = async (req,res) => {
    let newses = await News.findAll();
    if(newses) {
        res.status(200).send(newses);
    } else {
        res.status(400).send('no news found');
    }
}

newsHandler.getNewsByID = async (req,res) => {
    let newsID = req.params.newsID
    console.log(newsID);
    let news = await News.findOne({where :{id : newsID}});
    if(news) {
        res.status(200).send(news);
    } else {
        res.status(400).send('news not found');
    }
}

newsHandler.updateNews = async (req,res) => {
    let newsID = req.param.newsID
    
    let flag = await News.update(
        req.body, {where:{id : newsID}}
    )
    if(flag){
    res.status(200).send('news updated');
    } else {
        res.status(400).send('failed to update news');
    }
}

newsHandler.getNewsByAuthorID = async (req,res) => {
    let authorID  = req.params.userID
    let newses = await News.findAll({
        where: {
          authorID: authorID
        }
      });
    if(newses) {
        res.status(200).send(newses);
    } else {
        res.status(400).send('this author published no news!');
    }
}

newsHandler.deleteNews = async (req,res) => {
    let newsID = req.params.newsID
    await News.destroy({ where : {id: newsID } })
    res.status(200).send('news deleted');
}

module.exports = newsHandler;