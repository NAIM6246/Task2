const express = require('express');
const newsRoutes = require('./routes/news');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());

app.use('/news',newsRoutes);
app.use('/users/',userRoutes);

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})