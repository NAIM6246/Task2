

//scaffolding
const newsHandler = {};

let newses = [];
let newsID = 1;

newsHandler.getNewses = (req,res) =>{
    res.send(newses);
}

newsHandler.createNews = (req,res)=> {
    const newsToCreate = req.body;
    console.log(newsToCreate);
    res.send(`news created ${newsToCreate.news}`);
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