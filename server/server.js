const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const { Schema } = mongoose;

const solutionsShema = new Schema({
  image: String,
  icon: String,
  name: String,
  title: String,
  price: Number,
});

const Solutions = mongoose.model("solutions", solutionsShema);

app.get("/solutions", (req, res) => {
  Solutions.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/solutions/:id", (req, res) => {
  const { id } = req.params;
  Solutions.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      } else {
        res.status(404).json({ message: "undefined" });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.delete("/solutions/:id", (req, res) => {
  const { id } = req.params;
  Solutions.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).json({ message: "deleted" });
    } else {
      res.status(404).json({ message: err });
    }
  });
});

app.post("/solutions", (req, res) => {
  const solution = new Solutions({
    image: req.body.image,
    icon: req.body.icon,
    name: req.body.name,
    title: req.body.title,
    price: req.body.price,
  });
  solution.save();
  res.status(201).json({ message: "added" });
});

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(DB, (err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/solutions`);
    });
  }
});
