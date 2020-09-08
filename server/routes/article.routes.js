module.exports = app => {
    const articles = require("../controllers/article.controller.js");
    var router = require("express").Router();
    const upload = require("../middleware/upload");
    // Create a new article
    router.post("/", upload.single("image"), articles.create);

    // Retrieve all articles
    router.get("/", articles.findAll);

    // Retrieve a single article with id
    router.get("/:id", articles.findOne);

    // Retrieve all articles with publication type
    router.get("/:publication_type", articles.findAllByPublished);

    // Retrieve all articles by author
    router.get("/:author", articles.findAllByAuhtor);

    // Retrieve all articles by topic
    router.get("/:topic", articles.findAllByTopic);

    // Update a article with id
    router.put("/:id", articles.update);

    // Delete a article with id
    router.delete("/:id", articles.delete);

    // Create a new article
    router.delete("/", articles.deleteAll);

    app.use('/api/articles', router);
};