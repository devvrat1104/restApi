import express from "express"
import { getAllAuths, getAuthById, createAuth, postByAuth } from '../Controllers/author.js'
// Read the content of posts.json
const router = express.Router();

router.get('/', getAllAuths)
router.get('/:id', getAuthById)
router.post('/', createAuth)
    // router.patch('/:id', updateAuthor)
    // router.delete('/:id', deleteAuth);
router.post('/:id/post', postByAuth);

export default router;