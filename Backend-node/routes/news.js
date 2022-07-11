const express = require('express');

const news = {};

news.NewsRoutes = (app) => {
    const router = express.Router();
    app.use('/news',router);
    router.get('/',(req,res)=>{
        res.send('This is news!!');
    })
    router.post('/',(req,res) => {
        console.log(req.body);
        res.send('news created');
    })
    app.get('/',(req,res)=>{
        res.send('default page');
    })
};

module.exports = news;