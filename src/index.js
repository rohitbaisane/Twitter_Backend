const express = require("express");
const app = express();
require("./db");

const { PORT } = require("./config/serverconfig");

const apiRoutes = require("./routes/index");
const prepareAndStartServer = async () => {

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/', apiRoutes);
  app.listen(PORT, () => { console.log("Server is listening") });

}

prepareAndStartServer();
