const express = require("express");
const Cors = require("cors");
const mongoose = require("mongoose");
const ArchiesSchema = require("./dbModule.js");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(Cors());
app.use((req, res, next) => {
  res.setHeader("Acess-control-allow-origin", "*"),
    res.setHeader("Acess-control-allow-Header", "*");
  next();
});

const databaseConnection =
  "mongodb+srv://archies:yashyash@cluster0.duz4g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(databaseConnection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.get("/", async (req, res) => {
  const result = await ArchiesSchema.find();
  res.status(200).send(result);
});

app.get("/snacks", async (req, res) => {
  const result = await ArchiesSchema.find({ category: "snacks" });
  res.status(200).send(result);
});
app.get("/clothes", async (req, res) => {
  const result = await ArchiesSchema.find({ category: "clothes" });
  res.status(200).send(result);
});
app.get("/puja", async (req, res) => {
  const result = await ArchiesSchema.find({ category: "puja" });
  res.status(200).send(result);
});
app.get("/vastra", async (req, res) => {
  const result = await ArchiesSchema.find({ category: "vastra" });
  res.status(200).send(result);
});

app.get("/detail/:id", async (req, res) => {
  const _id = req.params.id;
  const result = await ArchiesSchema.find({ _id });
  res.send(result);
});
app.post("/post", (req, res) => {
  const dbPost = req.body;

  ArchiesSchema.create(dbPost, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    await ArchiesSchema.deleteOne({ _id });
    res.send("deleted succesfully");
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`listening at localhost ${port}`);
});
