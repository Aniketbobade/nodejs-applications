const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const morgan = require("morgan");

module.exports = (app) => {
  app.use(cors());
  app.use(helmet());
  app.disable("x-powered-by");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(hpp());
  app.use(morgan("dev"));
};