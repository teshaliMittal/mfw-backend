const db = require("../models");
const Article = db.articles;
const Op = db.Sequelize.Op;
const multer = require('multer');
const fs = require('fs');

const upload = multer({ dest: '/tmp/' });
// Create and Save a new Article
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Article
    const article = {
        title: req.body.title,
        content: req.body.content,
        publication_type: req.body.publication_type,
        topic: req.body.topic,
        author: req.body.author,
        image: fs.readFileSync(
            __dirname + "/../../uploads/" + req.file.filename
        )
    };

    // Save Article in the database
    Article.create(article)
        .then(data => {
            res.send(`Article has been uploaded.`);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while uploading the Article."
            });
        });
};

// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            [Op.iLike]: `%${title}%`
        }
    } : null;

    Article.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving articles."
            });
        });
};

// Find a single Article with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Article.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Article with id=" + id
            });
        });
};

// Update a Article by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Article.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Article was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Article with id=${id}. Maybe Article was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Article with id=" + id
            });
        });
};

// Delete a Article with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Article.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Article was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Article with id=${id}. Maybe Article was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Article with id=" + id
            });
        });
};

// Delete all Articles from the database.
exports.deleteAll = (req, res) => {
    Article.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Articles were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all articles."
            });
        });
};

// Find all Articles by publication type
exports.findAllByPublished = (req, res) => {
    Article.findAll({ where: { publication_type: req.params.publication_type } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving articles."
            });
        });
};
// Find all articles by author
exports.findAllByAuhtor = (req, res) => {
    Article.findAll({ where: { author: req.params.author } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving articles."
            });
        });
};

// Find all articles by topic
exports.findAllByTopic = (req, res) => {
    Article.findAll({ where: { topic: req.params.topic } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving articles."
            });
        });
};