const bcrypt = require('bcrypt');
const db = require('../conn/connection');
const user = require('../models/domains/user');
const auth = require('../auth/authentication');


//scaffolding
const userHandler = {};

const Users = db.users



userHandler.createUser = async (req,res) =>{
    try {
        var userToCreate = req.body;
        userToCreate.password = await bcrypt.hash(userToCreate.password,10);
        console.log(userToCreate);
        let user = await Users.create(userToCreate);
        res.status(201).send(user);
    } catch (err) {
        throw new Error(err);
    }
}

userHandler.getUsers = async (req,res)=> {
    try {
        var users = await Users.findAll()
        if(users){
            res.status(200).send(users);
        } else {
            res.status(400).send('no user found')
        }
    } catch (err) {
        throw new Error(err);
    }
}

userHandler.getUserByID = async (req,res) => {
    try {
        let userID = req.params.userID
        let user = await Users.findOne({ where : {id:userID}})
        if (user){
            res.status(200).send(user)
        } else {
            res.status(400).send('user not found')
        }
    } catch (err) {
        throw new Error(err);
    }
}

userHandler.updateUser = async (req,res) => {
    try {
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
    } catch (err) {
        throw new Error(err);
    }
}

userHandler.login = async (req,res) => {
    try {
        let userData = req.body;
        console.log(userData);
        const user = await Users.findOne({where:{email:userData.email}});
        if (user){
            let isValidPassword = await bcrypt.compare(userData.password,user.password);
            if (isValidPassword){
                const token = auth.GenrateToken(user);
                console.log(token);
                res.status(200).send(token);
            } else{
                res.status(400).send('invalid email or password');
            }
        } else {
            res.status(400).send('invalid email or password');
        }
    } catch (err) {
        throw new Error(err);
    }
}


module.exports = userHandler;