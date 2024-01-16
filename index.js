console.log("Project started...")

const express = require('express');
const coursesRouter = require('./routes/courses')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();

app.get("/", (req, res) => {
    // this function is called
    res.send("Hello, URL is working fine")
})

// Middleware is used to use all the routers created in routes
// app.use("/c", coursesRouter)
app.use("/api/v1/courses", coursesRouter)

const dbUrl = process.env.DB_CONNECTION_URL;


// Replace 'your_database_name' with your actual database name
// const databaseUrl = 'mongodb://localhost:27017/your_database_name';

// Use the new Promise-based approach
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB successfully');

        // Your database operations go here

        // Close the connection when done
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Error occurred while connecting to MongoDB:', error);
    });

app.listen(process.env.PORT, () => {
    console.log("server is running...")
    console.log(dbUrl)
})