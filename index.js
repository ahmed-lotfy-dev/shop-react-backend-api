// require('dotenv').config;
const { response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRoute = require('./routes/user');
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DBConnection Sucessfull'))
  .catch((err) => {
    console.log(err);
  });

app.use('/api/user',userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('server is listening on port 5000 !');
});
