const { sequelize } = require(".");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });

    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.Search, { through: 'PostSearch' });
    }

    return Post;
}