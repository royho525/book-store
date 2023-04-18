const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");
const app = express();
dotenv.config();

//connect db
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
   // useFindAndModify: false, 
    useUnifiedTopology: true,
    //useCreateIndex: true,
}).then(console.log("connected to db")).catch((err)=>console.log(err));

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(8000,()=>{
    console.log("Server is running!");
})