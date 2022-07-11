

//scaffolding
const news = {};

let newses = [];
let newsID = 1;

news.getNewses = (req,res) =>{
    res.send(newses);
}

news.createNews = (req,res)=> {
    newses.push({...req.body, id: newsID++});
    res.send('news created');
}

module.exports = news;