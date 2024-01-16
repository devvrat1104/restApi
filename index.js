// Import statements
const express = require('express');
const { connect } = require('mongoose');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./setup/dbConnection.js')
    // Middlewares
connectDB();
app.use(express.json());
app.use('/user', require('./Routes/users.js'))

// Listening to routes
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});