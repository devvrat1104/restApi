import express from 'express'
import bodyParser from 'body-parser'
import postsRoutes from './routes/posts.js'
import authorRoutes from './routes/author.js'
const app = express();
const PORT = 3000;

app.use(bodyParser.json()) // json - javascript object notation, we are going to use json data in our application

// creating end points
app.get('/', (req, res) => {
    res.send("Hello, Home page")
})

app.use('/posts', postsRoutes);
app.use('/authors', authorRoutes)

// connecting to server
app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))