

//scaffolding
const userHandler = {};

let users = [];
let userId=1;

userHandler.getUsers = (req,res)=> {
    res.send(users);
}

userHandler.createUser = (req,res) =>{
    const userToCreate = req.body;
    console.log(userToCreate);
    res.send('user created');
}

userHandler.updateUser = (req,res) => {
    //to do
    res.send('user updated')
}

module.exports = userHandler;