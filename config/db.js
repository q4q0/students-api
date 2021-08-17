const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/products-api-v1', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connection has established successfully`.bgCyan.black);
  } catch (err) {
    console.log('MongoDB connection has failed'.bgRed.black);
    throw new Error(error);
  }
};

module.exports = dbConnection;
