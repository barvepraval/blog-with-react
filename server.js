const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require("mongoose");

const { mongoAddress } = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(mongoAddress, {useNewUrlParser: true, useUnifiedTopology: true});

const postSchema = new mongoose.Schema({
    title: String,
    content: String
  });
  
const Post = mongoose.model("Post", postSchema);

app.get('/express_backend', (req, res) => {
  res.send({ express: 'BACKEND CONNECTED TO REACT FETCH YOUR REQUESTS' });
});

app.get('/posts', (req,res) => {
    Post.find({}, (err, result) => {
        if (err) res.send("error");
        res.send(result);
      })
})

app.post('/compose', (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({
    title: title,
    content: content
  });
  newPost.save((error) => {
    if (error) res.send("error");
    else res.send("success");
  });
})

app.listen(process.env.PORT || 8080, () => console.log("Server started"));
