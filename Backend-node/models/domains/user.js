
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
        Name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Phone : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Password : {
            type : DataTypes.STRING,
            allowNull : false
        },
    })
    return Users;
}