//Database connection to mongoDB Cloud server
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.FLIPCART_DB_USERNAME}:${process.env.FLIPCART_DB_PASSWORD}@filpkartclone.w30p9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
