const db = require("../models");
const Topics = db.topics;
const Op = db.Sequelize.Op;

// create request
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Topic
    const topic = {
        selectorName: req.body.selectorName,
        displayName: req.body.displayName,
        color: req.body.color
    };

    // Save topic in the database
    Topics.create(topic)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Topic."
            });
        });
};

// find all request
exports.findAll = (req, res) => {

    var condition = null;

    Topics.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving topics."
            });
        });
};