// This file will contain the required code for connecting to the MongoDB database

const mongoose = require("mongoose");

const db = process.env.MONGO_URI;

// Define the connectDB methof for connecting to the database
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

// Export the connectDB method to be called in server.js
module.exports = connectDB;