const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { connectToDatabase } = require('./dbConnection');
const router = require('./router');
app.use(express.json());
connectToDatabase()
  .then(() => {
    console.log('Mongodb connected');
  })
  .catch((err) => {
    console.log('Mongodb connection failed', err);
  });
app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.use('/api/', router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
