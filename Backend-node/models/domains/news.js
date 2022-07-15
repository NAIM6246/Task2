// news.News = {
//     ID,
//     Title,
//     Description,
//     AuthorID,
//     CreatedAt,
//     LastUpdatedAt,
//     IsDeleted
// }

module.exports = (sequelize, DataTypes)=>{
    const News = sequelize.define("news", {
        ID :{
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull : false
        },
        Title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Description : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        AuthorID : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        IsDeleted : {
            type : DataTypes.BOOLEAN
        },
    })
    return News
}