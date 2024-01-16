import { v4 as uuidv4 } from 'uuid';
import { formatISO } from 'date-fns';
import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
// import { dirname } from 'path';
import { readFileSync } from 'fs';

// const __filename = fileURLToPath(
//     import.meta.url);
// const __dirname = dirname(__filename);

// Read the content of posts.json using readFileSync
const filePath = new URL('../data/posts.json',
    import.meta.url);


export const getAllPosts = async(req, res) => {
    try {
        const allPosts = JSON.parse(await readFileSync(filePath, 'utf-8') || '[]');
        res.send(allPosts)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error :(' });
    }
}

export const getPostById = async(req, res) => {
    const { id } = req.params
    let allPosts;
    try {
        allPosts = JSON.parse(await readFileSync(filePath, 'utf-8') || '[]');
    } catch (error) {
        console.error('Error handling POST request:', error);
        res.status(500).json({ error: 'Internal Server Error :(' });
    }

    const foundPost = allPosts.find((post) => {
        if (post.id === id) return post
            // post.id === id
    })
    console.log(foundPost)
    if (foundPost) res.send(foundPost)
    else return res.status(404).json({ error: 'Post not found :(' });

}


export const createPost = async(req, res) => {
    const newPost = req.body
    const postId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const timestamp = formatISO(new Date())
    const postWithId = {...newPost, id: postId, timestamp: timestamp }
    let allPosts

    try {
        const fileContent = await readFileSync(filePath, 'utf-8');
        allPosts = JSON.parse(fileContent);
        if (!Array.isArray(allPosts)) {
            throw new Error('Existing data is not an array');
        }
    } catch (error) {
        console.error('Error reading or parsing posts.json:', error);
        allPosts = [];
    }

    // const newPost = postWithId;
    allPosts.push(postWithId);

    await writeFile(filePath, JSON.stringify(allPosts, null, 2));

    res.status(201).json("Post added successfully :)");
}



export const deletePost = async(req, res) => {
    const { id } = req.params;
    let allPosts;
    // console.log(id)
    try {
        allPosts = JSON.parse(await readFileSync(filePath, 'utf-8') || '[]');
        allPosts = allPosts.filter(post => post.id !== id);
        await writeFile(filePath, JSON.stringify(allPosts, null, 2));
        res.json({ message: 'Post deleted successfully :)' });

    } catch (error) {
        console.error('Error handling POST request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

export const updatePost = async(req, res) => {
    const { id } = req.params;
    let allPosts;
    try {
        allPosts = JSON.parse(await readFileSync(filePath, 'utf-8') || '[]');
    } catch (error) {
        console.error('Error handling POST request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

    const postToBeUpdated = allPosts.find((post) => post.id === id)
    if (!postToBeUpdated) return res.status(404).json({ error: 'Post not found :(' });
    const { title, author, content } = req.body
    if (title) postToBeUpdated.title = title
    if (author) postToBeUpdated.author = author
    if (content) postToBeUpdated.content = content
    await writeFile(filePath, JSON.stringify(allPosts, null, 2));
    res.send(`Post with id : ${id} has been updated successfully`);
}