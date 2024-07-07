// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://daniellfernandxz:<password>@cluster0.q6m0vuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
