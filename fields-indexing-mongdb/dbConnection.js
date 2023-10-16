const mongoose = require('mongoose');

const connectToDatabase = () => {
  return mongoose.connect('mongodb://127.0.0.1:27017/testing', {
    useNewUrlParser: true,
  });
};

module.exports = { connectToDatabase, mongoose };
