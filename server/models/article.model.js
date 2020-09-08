module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {

        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        publication_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        topic: {
            type: Sequelize.STRING,
            allowNull: true
        },
        image: {
            type: Sequelize.BLOB
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Article;
};