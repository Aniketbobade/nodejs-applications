const express = require('express');
const app = express();
const config= require('./src/config/development');
require('./src/dbConnection/mongoDbConnect');
require('./src/routers/app')(app);
require('./src/routers/routes')(app);


app.listen(config.PORT, () => console.log('Example app listening on port ' + config.PORT));