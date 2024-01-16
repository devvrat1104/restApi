import { v4 as uuidv4 } from 'uuid';
import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { formatISO } from 'date-fns';


const filePathAuthor = new URL('../data/author.json',
    import.meta.url);
const filePathPosts = new URL('../data/posts.json',
    import.meta.url);



async function getAllAuthorsFromDB() {
    try {
        return JSON.parse(await readFileSync(filePathAuthor, 'utf-8') || '[]');
    } catch (error) {
        console.error('Error handling POST request:', error);
        res.status(500).json({ error: 'Internal Server Error :(' });
    }
}
async function getAllPostsFromDB() {
    try {
        return JSON.parse(await readFileSync(filePathPosts, 'utf-8') || '[]');
    } catch (error) {
        console.error('Error handling POST request:', error);
        res.status(500).json({ error: 'Internal Server Error :(' });
    }
}


export const getAllAuths = async(req, res) => {
    const allAuthors = await getAllAuthorsFromDB();
    // console.log(allAuthors)
    res.status(201).send(allAuthors)

}

export const getAuthById = async(req, res) => {
    const { id } = req.params
    let authorId = id
    let allAuthors = await getAllAuthorsFromDB();
    const author = allAuthors.find((author) => {
        if (author.id === authorId) {
            console.log("Matched");
            return author
        }
    })
    if (author) res.send(author)
    else return res.status(404).json({ error: 'Author not found :(' });

}


export const createAuth = async(req, res) => {
    const author = req.body;
    const authorId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const newAuthor = {...author, id: authorId }
    let allAuthors = await getAllAuthorsFromDB();
    allAuthors.push(newAuthor);
    await writeFile(filePathAuthor, JSON.stringify(allAuthors, null, 2));
    res.status(201).json("Author added successfully :)");
}

export const postByAuth = async(req, res) => {
    const newPost = req.body
    const postId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const timestamp = formatISO(new Date())
    const { id } = req.params;

    let allAuthors = await getAllAuthorsFromDB();
    const author = allAuthors.find((author) => {
        if (author.id === id) {
            console.log("Matched");
            return author
        }
    })
    if (author === undefined) return res.status(401).send("Author doesn't exists")
        // console.log(id)
        // console.log(author)
    const postWithId = {...newPost, id: postId, author: author.authorName, authorId: id, timestamp: timestamp }
        // console.log(postWithId);
    let allPosts = await getAllPostsFromDB();
    allPosts.push(postWithId);

    await writeFile(filePathPosts, JSON.stringify(allPosts, null, 2));

    res.status(201).json("Post added successfully :)");
}

// export const deleteAuth = async(req, res) => {
//     const { authorId } = req.params;
//     let allAuthors;
//     // console.log(id)
//     try {
//         allAuthors = JSON.parse(await readFileSync(filePathAuthor, 'utf-8') || '[]');
//         allAuthors = allAuthors.filter(author => author.authorId !== authorId);
//         await writeFile(filePathAuthor, JSON.stringify(allAuthors, null, 2));
//         res.json({ message: 'Author deleted successfully :)' });

//     } catch (error) {
//         console.error('Error handling POST request:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }

// }