const express = require('express');
const cors = require('cors');
const env = require('dotenv');

const blogsRoutes = require('./routes/blogs');
const userRoutes = require('./routes/user');

const app = express();
env.config();
var corsOption = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded( {extended: true}));

app.use('/blogs',blogsRoutes);
app.use('/users',userRoutes);


app.use((err,req,res,next) => {
    console.log(err);
    if(err.message){
        res.status(500).send(err.message);
    } else {
        res.status(500).send('an internal error occured');
    }
})
app.listen(5000, ()=>{
    console.log('listening on port 5000');
})