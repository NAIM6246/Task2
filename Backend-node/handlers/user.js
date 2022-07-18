const bcrypt = require('bcrypt');
const db = require('../conn/connection');
const user = require('../models/domains/user');


//scaffolding
const userHandler = {};

const Users = db.users



userHandler.createUser = async (req,res) =>{
    var userToCreate = req.body;
    userToCreate.Password = await bcrypt.hash(userToCreate.Password,10);
    console.log(userToCreate);
    let user = await Users.create(userToCreate);
    res.status(200).send(user);
}

userHandler.getUsers = async (req,res)=> {
    var users = await Users.findAll()
    if(users){
        res.status(200).send(users);
    } else {
        res.status(400).send('no user found')
    }
}

userHandler.getUserByID = async (req,res) => {
    let userID = req.params.userID
    let user = await Users.findOne({ where : {id:userID}})
    if (user){
        res.status(200).send(user)
    } else {
        res.status(400).send('user not found')
    }
}

userHandler.updateUser = async (req,res) => {
    let userID = req.params.userID
    let updateData = req.body
    await Users.update(
        updateData,{ where :{id: userID}}
        )
    console.log(updatedUser);
    if(updatedUser) {
        res.status(200).send('user updated successfully');
    } else {
        res.status(400).send('failed to update user');
    }
}


module.exports = userHandler;