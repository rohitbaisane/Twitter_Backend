const mongoose = require("mongoose");
connect = async () => {
  await mongoose.connect("mongodb://localhost:27018/Twiiter_Dev");
  console.log("Database is connected");
};

connect();



