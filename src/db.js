const mongoose = require("mongoose");
connect = async () => {
  await mongoose.connect("mongodb://host.internal.docker:27018/Twiiter_Dev")
};

connect();



