const express = require('express');
const newsRoutes = require('./routes/news');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());

newsRoutes.NewsRoutes(app);
userRoutes.UserRoutes(app);

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})