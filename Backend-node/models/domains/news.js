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
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        description : {
            type : DataTypes.STRING,
            allowNull : false
        },
        authorID : {
            type : DataTypes.INTEGER,
            // allowNull : false
        },
        isDeleted : {
            type : DataTypes.BOOLEAN
        },
    })
    return News
}