const jwt = require('jsonwebtoken');


//scaffolding
const auth = {};

auth.GenrateToken = (user) =>{
    const token = jwt.sign({
        ID : user.ID,
        name: user.name,
        email: user.email
    }, process.env.SECRET, {
        expiresIn: '3 days'
    });
    return token
}

auth.Autheticate = (req,res,next) =>{
    const bearerToken = req.headers.authorization
    try {
        const token = bearerToken.split(' ')[1];
        const user = jwt.decode(token,process.env.SECRET);
        req.user = user;
        next();
    } catch {
        next({"message":'Access denied'});
    }
}

module.exports = auth;