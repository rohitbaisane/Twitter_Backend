const express = require("express");
const app = express();
require("./db");

const { PORT } = require("./config/serverconfig");

const prepareAndStartServer = () => {

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(PORT, () => { console.log("Server is listening") });

}

prepareAndStartServer();
