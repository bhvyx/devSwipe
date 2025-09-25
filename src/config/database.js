const mongoose = require('mongoose');

const connectDB= async () => {
    await mongoose.connect("mongodb+srv://bhavyagupta:EOMna0r4YUcd2O2j@cluster-bhavya.lp6b6jy.mongodb.net/devSwipe"
    );
}

module.exports = connectDB;
