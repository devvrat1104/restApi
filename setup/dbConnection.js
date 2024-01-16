const mongoose = require('mongoose');

// Replace the placeholders with your actual values
const username = 'devvrat1104';
const password = 'Mongodb%401'; // use %40 instead of @ as it is a special symbol
const clusterName = 'cluster0.jmjrrcw';
const databaseName = 'shop';

const databaseUrl = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${databaseName}`;

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(
            // "mongodb+srv://devvrat1104:Mongodb@1@cluster0.jmjrrcw.mongodb.net/shop"
            databaseUrl
        );
        console.log("Db connected...")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB