const express = require('express');
const cors = require('cors');

const newsRoutes = require('./routes/news');
const userRoutes = require('./routes/user');

const app = express();

var corsOption = {
    origin: 'https://localhost:8081'
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded( {extended: true}));

app.use('/news',newsRoutes);
app.use('/users',userRoutes);


app.use((err,req,res,next) => {
    console.log(err);
    if(err.message){
        res.status(500).send(err.message);
    } else {
        res.status(500).send('there was an error occured');
    }
} )
app.listen(3000, ()=>{
    console.log('listening on port 3000');
})