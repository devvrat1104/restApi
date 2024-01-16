const express = require('express');
const router = express.Router();

// creating the routes

// get all the courses
router.get("/", (req, res) => {
    res.send("Hello, your courses are here");
})

// get single course

// create course

// update course

// delete course
module.exports = router;