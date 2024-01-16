import express from "express"
import { getAllPosts, createPost, getPostById, deletePost, updatePost } from '../Controllers/posts.js'
// Read the content of posts.json
const router = express.Router();

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost);

export default router;


























// import express from "express"
// import { getAllPosts, createPost, getPostById, deletePost, updatePost } from '../Controllers/posts.js'
// // Read the content of posts.json
// const router = express.Router();

// // const updatePost = (req, res) => {
// //     const { id } = req.params;
// //     const postToBeUpdated = allPosts.find((post) => post.id === id)
// //     console.log(postToBeUpdated)
// //     if (!postToBeUpdated) return res.status(404).json({ error: 'Post not found.' });
// //     const { title, author, content } = req.body
// //     if (title) postToBeUpdated.title = title
// //     if (author) postToBeUpdated.author = author
// //     if (content) postToBeUpdated.content = content
// //     res.send(`Post with id : ${id} has been updated successfully`);
// // }
// router.patch('/:id', updatePost)

// // const deletePost = (req, res) => {
// //     const { id } = req.params;

// //     const index = allPosts.findIndex(post => post.id === id);
// //     console.log(index)
// //     if (index === -1) {
// //         return res.status(404).json({ error: 'Post not found.' });
// //     }

// //     const deletedPost = allPosts.splice(index, 1);
// //     console.log(deletedPost)

// //     res.json({ message: 'Post deleted successfully', deletedPost });
// // }
// router.delete('/:id', deletePost);

// // const getAllPosts = (req, res) => {
// //     res.send(allPosts);
// // }
// router.get('/', getAllPosts)

// // const createPost = (req, res) => {
// //     console.log(req.body)
// //     const newPost = req.body
// //     const postId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// //     const timestamp = formatISO(new Date())
// //     console.log(timestamp);
// //     const postWithId = {...newPost, id: postId, timestamp: timestamp }
// //         // const rawData = fs.readFileSync('posts.json');
// //         // const allPosts = JSON.parse(rawData);
// //     allPosts.push(postWithId)
// //     res.send(`Post with the post title : ${newPost.title} has been added to the json file`)
// //         // posts.push
// // }
// router.post('/', createPost)

// // const getPostById = (req, res) => {
// //     const { id } = req.params
// //         // console.log(id)
// //     const foundPost = allPosts.find((post) => post.id === id)
// //         // console.log(foundPost);
// //     res.send(foundPost)
// // }
// router.get('/:id', getPostById)
// export default router;


// // json data
// // const allPosts = [
// //     // {
// //     //     "title": "Introduction to Dummy Data",
// //     //     "author": "John Doe",
// //     //     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ac nulla vel odio tristique accumsan. Vestibulum sit amet facilisis massa.",
// //     //     "timestamp": "2023-01-15T08:30:00Z"
// //     // },
// //     // {
// //     //     "title": "Getting Started with JSON",
// //     //     "author": "Jane Smith",
// //     //     "content": "JSON, which stands for JavaScript Object Notation, is a lightweight data interchange format. It is easy for humans to read and write.",
// //     //     "timestamp": "2023-02-20T14:45:00Z"
// //     // },
// //     // {
// //     //     "title": "Web Development Trends in 2023",
// //     //     "author": "Chris Johnson",
// //     //     "content": "As we enter a new year, let's explore some of the emerging trends in web development. From progressive web apps to serverless architecture, there's a lot to look forward to.",
// //     //     "timestamp": "2023-03-10T18:20:00Z"
// //     // },
// //     // {
// //     //     "title": "Python Tips and Tricks",
// //     //     "author": "Emily Brown",
// //     //     "content": "Python is a versatile programming language. In this post, we'll share some useful tips and tricks to make your Python coding more efficient and enjoyable.",
// //     //     "timestamp": "2023-04-05T11:10:00Z"
// //     // },
// //     // {
// //     //     "title": "Exploring Data Science with Pandas",
// //     //     "author": "Alex Rodriguez",
// //     //     "content": "Pandas is a powerful data manipulation library in Python. In this tutorial, we'll dive into the basics of Pandas and explore its capabilities for data analysis.",
// //     //     "timestamp": "2023-05-22T09:55:00Z"
// //     // }
// // ]