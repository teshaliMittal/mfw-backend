module.exports = app => {
    const topics = require("../controllers/topics.controller.js");

    var router = require("express").Router();

    // Create a new article
    router.post("/", topics.create);

    // Retrieve all articles
    router.get("/", articles.findAll);

    app.use('/api/articles', router);
};