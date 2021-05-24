const mongoose = require('mongoose');

const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI
const bodyParser = require('body-parser');
const router = express.Router();
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/tweets", tweets);

router.get("/test", (req, res) => res.json({ msg: "This is the tweets route" }));

module.exports = router;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


app.get("/", (req, res) => res.send("Hello Southaven"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));