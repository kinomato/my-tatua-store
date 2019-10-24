require('dotenv').config();
const config = require('config')
const express = require('express');
const app = express();
const PORT = 8000;

// middleware
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');

// model
const auth = require('./modules/auth');
// const order = require('./modules/order-module');
// const promo = require('./modules/promo-module');
const user = require('./modules/user-module');
// const driver = require('./modules/driver-module');
// const paytype = require('./modules/paytype-module');

// const mongoClient = require('mongodb').MongoClient;
const dbdat = config.get('mongoUrlDat');
const dbky = config.get('mongoUrlKy');

// connect DB
mongoose.connect(dbdat,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
)
  .then(() => console.log('connected'))
  .catch(err => console.log(err));
// const Client = new mongoClient(url, { useNewUrlParser: true })
// Client.connect((err,res) => {

// })

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/api/move/order', order); // ('api/order') => sai
// app.use('/api/move/promo', promo);
app.use('/api/move/user', user);
app.use('/api/move/auth', auth);
// app.use('/api/move/driver', driver);
// app.use('/api/move/paytype', paytype);

app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});