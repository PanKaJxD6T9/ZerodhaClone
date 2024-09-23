require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const mongoose = require('mongoose');

app.get('/', (  req, res) => {
  res.send("Haha NOOOOB");
})

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
  mongoose
    .connect(uri)
    .then(() => {
      console.log('CONNECTED')
    })
    .catch((err) => {
      console.log(err)
    })
});