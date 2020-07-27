const mongoose = require("mongoose");

const DB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`DB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = DB;
