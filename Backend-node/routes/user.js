const express = require('express');

const user = {};

user.UserRoutes = (app) => {
    const router = express.Router();
    app.use('/users',router);
    router.get('/',(req,res)=>{
        res.send('This is user!!');
    })
    router.post('/',(req,res) =>{
        console.log(req.body);
        res.send('user created');
    })
};

module.exports = user;