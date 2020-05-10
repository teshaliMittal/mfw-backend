module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        publication_type: {
            type: Sequelize.STRING
        },
        image_url: {
            type: Sequelize.STRING
        },
        topic: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        }


    });

    return Article;
};