const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors=require('cors');
const authjwt= require('./helpers/auth')
const errorHandler=require('./helpers/error-handler')

app.use(cors());
app.options('*',cors());
app.use(bodyParser.json());


require("dotenv/config");

const userRoute=require("./routes/Users");
//middleware
// app.use(authjwt());
// app.use(errorHandler);
const api = process.env.API_URL;
app.use(`${api}/users`,userRoute);

mongoose
  .connect(process.env.DATABASE_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(4000, () => {
  console.log(api);
  console.log("app is running on localhost 3000");
});
