module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        publication_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image_url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        topic: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Article;
};