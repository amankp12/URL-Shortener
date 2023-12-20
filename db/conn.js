const mongoose = require("mongoose");
const db = "mongodb+srv://<username>:<password>@url-shortener.hh3amzr.mongodb.net";
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>
    console.log("Connection successful"))
    .catch((err) => console.log(err, "No connection"));