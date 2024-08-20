const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const todo = require("./routes/routes");

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.use("/api", todo);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });