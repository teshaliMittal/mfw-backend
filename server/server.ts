const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const db = require("./models");
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

var corsOptions = {
  origin: "http://localhost:5200",
  optionsSuccessStatus: 200
};


app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req: any, res: any) => {
//   res.send('hello');
// });

require("./routes/article.routes.js")(app);
require("./routes/topics.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});