module.exports = (sequelize, Sequelize) => {
    const Topic = sequelize.define("topic", {
        selectorName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        displayName: {
            type: Sequelize.STRING
        },
        colour: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Topic;
};