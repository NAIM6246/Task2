

//scaffolding
const user = {};

let users = [];
let userId=1;

user.getUsers = (req,res)=> {
    res.send(users);
}

user.createUser = (req,res) =>{
    users.push({...req.body,id : userId++ });
    console.log(req.body);
    res.send('user created');
}

module.exports = user;