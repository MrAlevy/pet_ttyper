const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// db config
const uri = config.get('mongoURI');

// connect to mongo
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
})

// use routes
app.use('/api/texts', require('./routes/texts'));

// starting server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});