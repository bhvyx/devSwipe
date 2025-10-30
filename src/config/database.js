const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://bhavyagupta:Ty14LhmP3girtUi6@cluster-bhavya.lp6b6jy.mongodb.net/devSwipe"
  );
};

module.exports = connectDB;
