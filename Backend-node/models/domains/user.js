
// user.User = {
//     ID,
//     Name,
//     Email,
//     Phone,
//     Password,
//     CreatedAt,
//     LastUpdatedAt
// }


module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize.define("user", {
        ID :{
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
    })
    return Users;
}